"use client";

import React, { useCallback, useState, useEffect } from "react";
import { ReactFlowProvider, Panel } from "@xyflow/react";
import { MonitorFlowCanvas } from "./MonitorFlowCanvas";
import { NodeTypePalette } from "../nodeEditor/NodeTypePalette";
import { NodeEditorDrawer } from "../nodeEditor/NodeEditorDrawer";
import { useNodeEditor, useDebouncedValidation } from "@/hooks";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useHistory } from "@/hooks/useHistory";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { FloatingActionBar } from "./FloatingActionBar";
import { EditModeIndicator } from "./EditModeIndicator";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Node, Edge, Connection } from "@xyflow/react";

export interface MonitorFlowEditorProps {
  initialData?: {
    nodes: EditorNode[];
    edges: Edge[];
  };
  initialMonitorName?: string;
  initialMonitorActive?: boolean;
  onSave?: (config: MonitorCreateInput) => void;
  mode?: "create" | "edit";
  monitorId?: string;
}

interface FlowHistoryState {
  nodes: EditorNode[];
  edges: Edge[];
  monitorName: string;
  monitorActive: boolean;
}

/**
 * Editor component for creating and editing monitor flows
 * Supports both create and edit modes with full interactivity
 */
export function MonitorFlowEditor({
  initialData,
  initialMonitorName,
  initialMonitorActive,
  onSave,
  mode = "create",
}: MonitorFlowEditorProps) {
  const [selectedNodeType, setSelectedNodeType] = useState<NodeType | null>(
    null,
  );
  const [canvasRef, setCanvasRef] = useState<HTMLDivElement | null>(null);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isHistoryAction, setIsHistoryAction] = useState(false);

  // Use debounced validation for performance
  const { isValid, validateNow } = useDebouncedValidation(1000);

  const {
    nodes,
    edges,
    monitorName,
    monitorActive,
    setMonitorName,
    setMonitorActive,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
    deleteNode,
    selectNode,
    openNodeEditor,
    selectedNodeId,
    drawerOpen,
    editingNodeId,
    closeNodeEditor,
    validateConnection,
    clearCanvas,
    buildMonitorConfig,
    validationErrors,
    initializeFromFlow,
  } = useNodeEditor();

  // History management for undo/redo
  const {
    setState: setHistoryState,
    undo,
    redo,
    canUndo,
    canRedo,
    clearHistory,
  } = useHistory<FlowHistoryState>(
    { nodes: [], edges: [], monitorName: "", monitorActive: true },
    {
      onStateChange: useCallback(
        (newState: FlowHistoryState) => {
          // Only apply state from history during actual undo/redo actions
          if (newState && isHistoryAction) {
            setTimeout(() => {
              initializeFromFlow(
                newState.nodes,
                newState.edges,
                newState.monitorName,
                newState.monitorActive,
              );
              setIsHistoryAction(false);
            }, 0);
          }
        },
        [initializeFromFlow, isHistoryAction],
      ),
    },
  );

  // Auto-save functionality
  const { saveStatus, lastSaved, triggerSave, forceSave, hasUnsavedChanges } =
    useAutoSave({
      onSave: async (data) => {
        if (onSave && mode === "edit") {
          onSave(data);
        }
      },
      enabled: mode === "edit" && !isReadOnly,
      debounceMs: 2000,
      onError: (error) => {
        console.error("Auto-save failed:", error);
        toast.error("Failed to auto-save changes");
      },
    });

  // Initialize with provided data if available
  useEffect(() => {
    if (initialData) {
      initializeFromFlow(
        initialData.nodes,
        initialData.edges,
        initialMonitorName,
        initialMonitorActive,
      );
    }
  }, [
    initialData,
    initialMonitorName,
    initialMonitorActive,
    initializeFromFlow,
  ]);

  // Track changes for history and auto-save
  useEffect(() => {
    if (!isReadOnly && !isHistoryAction) {
      // Update history state only if not from a history action
      setHistoryState({ nodes, edges, monitorName, monitorActive });

      // Trigger auto-save
      if (mode === "edit" && isValid) {
        const config = buildMonitorConfig();
        if (config) {
          triggerSave(config);
        }
      }
    }
  }, [
    nodes,
    edges,
    monitorName,
    monitorActive,
    isReadOnly,
    isHistoryAction,
    mode,
    isValid,
    setHistoryState,
    buildMonitorConfig,
    triggerSave,
  ]);

  // Handle canvas click for adding nodes
  const handlePaneClick = useCallback(
    (event: React.MouseEvent) => {
      if (selectedNodeType && canvasRef) {
        const bounds = canvasRef.getBoundingClientRect();
        const position = {
          x: event.clientX - bounds.left - 100,
          y: event.clientY - bounds.top - 50,
        };

        const nodeId = addNode(selectedNodeType, position);
        openNodeEditor(nodeId);
        setSelectedNodeType(null);
      }
      selectNode(null);
    },
    [selectedNodeType, canvasRef, addNode, selectNode, openNodeEditor],
  );

  // Handle node click
  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      selectNode(node.id);
    },
    [selectNode],
  );

  // Handle node double-click for editing
  const handleNodeDoubleClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      openNodeEditor(node.id);
    },
    [openNodeEditor],
  );

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Delete" && selectedNodeId) {
        deleteNode(selectedNodeId);
        toast.success("Node deleted");
      }
      if (event.key === "Enter" && selectedNodeId) {
        openNodeEditor(selectedNodeId);
      }
      if (event.key === "Escape" && drawerOpen) {
        closeNodeEditor();
      }
    },
    [selectedNodeId, deleteNode, openNodeEditor, drawerOpen, closeNodeEditor],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Custom connection validation
  const isValidConnection = useCallback(
    (connection: Edge | Connection) => {
      if ("source" in connection && "target" in connection) {
        return validateConnection(connection.source!, connection.target!);
      }
      return false;
    },
    [validateConnection],
  );

  // Handle save (manual save or force save)
  const handleSave = useCallback(async () => {
    const currentlyValid = validateNow();
    if (!currentlyValid) {
      toast.error("Please fix validation errors before saving");
      return;
    }

    const config = buildMonitorConfig();
    if (config) {
      if (mode === "edit") {
        forceSave(config);
        toast.success("Changes saved");
      } else if (onSave) {
        onSave(config);
      }
    }
  }, [validateNow, buildMonitorConfig, onSave, forceSave, mode]);

  // Handle clear with better UX
  const handleClear = useCallback(() => {
    // No modal - use toast with undo option
    const previousState = { nodes, edges, monitorName, monitorActive };
    clearCanvas();
    clearHistory();

    toast.success("Canvas cleared", {
      action: {
        label: "Undo",
        onClick: () => {
          initializeFromFlow(
            previousState.nodes,
            previousState.edges,
            previousState.monitorName,
            previousState.monitorActive,
          );
          toast.success("Canvas restored");
        },
      },
      duration: 5000,
    });
  }, [
    clearCanvas,
    clearHistory,
    nodes,
    edges,
    monitorName,
    monitorActive,
    initializeFromFlow,
  ]);

  // Handle undo/redo
  const handleUndo = useCallback(() => {
    if (canUndo) {
      setIsHistoryAction(true);
      undo();
      toast.success("Undone", { duration: 1000 });
    }
  }, [undo, canUndo]);

  const handleRedo = useCallback(() => {
    if (canRedo) {
      setIsHistoryAction(true);
      redo();
      toast.success("Redone", { duration: 1000 });
    }
  }, [redo, canRedo]);

  // Toggle read-only mode
  const toggleReadOnly = useCallback(() => {
    setIsReadOnly(!isReadOnly);
    toast.success(isReadOnly ? "Editing enabled" : "Read-only mode", {
      duration: 2000,
    });
  }, [isReadOnly]);

  return (
    <ReactFlowProvider>
      <div className="h-full w-full flex flex-col">
        {/* Simplified header - just the essentials */}
        <div className="border-b bg-background/95 backdrop-blur-sm p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input
                id="monitor-name"
                value={monitorName}
                onChange={(e) => setMonitorName(e.target.value)}
                placeholder="Monitor name..."
                className="w-64 h-9"
                disabled={isReadOnly}
              />
              <div className="flex items-center space-x-2">
                <Switch
                  id="monitor-active"
                  checked={monitorActive}
                  onCheckedChange={setMonitorActive}
                  disabled={isReadOnly}
                />
                <Label
                  htmlFor="monitor-active"
                  className="cursor-pointer text-sm"
                >
                  {monitorActive ? "Active" : "Paused"}
                </Label>
              </div>
            </div>
            <EditModeIndicator
              isEditable={!isReadOnly}
              isOwner={true}
              hasUnsavedChanges={hasUnsavedChanges}
              onToggleReadOnly={toggleReadOnly}
            />
          </div>
          {validationErrors.global && (
            <div className="mt-2 text-xs text-destructive">
              {validationErrors.global.map((error: string, index: number) => (
                <span key={index}>{error}</span>
              ))}
            </div>
          )}
        </div>

        {/* Flow Canvas */}
        <div className="flex-1 relative" ref={setCanvasRef}>
          <MonitorFlowCanvas
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            onNodeDoubleClick={handleNodeDoubleClick}
            onPaneClick={handlePaneClick}
            isValidConnection={isValidConnection}
            isInteractive={!isReadOnly}
            fitView={true}
            showControls={true}
            showMiniMap={true}
            showBackground={true}
          >
            {/* Node Palette Panel - only show when editable */}
            {!isReadOnly && (
              <Panel position="top-left" className="m-0">
                <NodeTypePalette
                  selectedType={selectedNodeType}
                  onSelectType={setSelectedNodeType}
                />
              </Panel>
            )}
          </MonitorFlowCanvas>

          {/* Floating Action Bar */}
          <FloatingActionBar
            onSave={handleSave}
            onClear={handleClear}
            onUndo={handleUndo}
            onRedo={handleRedo}
            canUndo={canUndo}
            canRedo={canRedo}
            isValid={isValid}
            saveStatus={saveStatus}
            lastSaved={lastSaved}
            position="bottom-right"
          />
        </div>

        {/* Node Editor Drawer */}
        <NodeEditorDrawer
          nodeId={editingNodeId}
          open={drawerOpen}
          onClose={closeNodeEditor}
        />
      </div>
    </ReactFlowProvider>
  );
}
