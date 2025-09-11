"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
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
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
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
  initialMonitorName = "",
  initialMonitorActive = true,
  onSave,
  mode = "create",
}: MonitorFlowEditorProps) {
  // Local UI state
  const [selectedNodeType, setSelectedNodeType] = useState<NodeType | null>(
    null,
  );
  const [canvasRef, setCanvasRef] = React.useState<HTMLDivElement | null>(null);
  const [isHistoryAction, setIsHistoryAction] = React.useState(false);

  // Validation with debounce
  const { isValid, validateNow } = useDebouncedValidation();

  const {
    nodes,
    edges,
    monitorName,
    monitorActive,
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
  const { saveStatus, lastSaved, triggerSave, forceSave } = useAutoSave({
    onSave: async (data) => {
      if (onSave && mode === "edit") {
        onSave(data);
      }
    },
    enabled: mode === "edit",
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
  // We use refs to track what actually matters for saving
  const previousDataRef = useRef<string>("");

  useEffect(() => {
    if (!isHistoryAction) {
      // Create a representation of what actually gets saved (not positions or selection)
      // We only care about node data and connections, not visual properties
      const currentDataString = JSON.stringify({
        nodeData: nodes
          .map((n) => ({ id: n.id, type: n.type, data: n.data }))
          .sort((a, b) => a.id.localeCompare(b.id)),
        edges: edges
          .map((e) => ({ source: e.source, target: e.target }))
          .sort((a, b) =>
            `${a.source}-${a.target}`.localeCompare(`${b.source}-${b.target}`),
          ),
        monitorName,
        monitorActive,
      });

      // Only trigger saves if the actual configuration data changed
      const dataChanged = currentDataString !== previousDataRef.current;

      // Always update history for undo/redo (includes positions)
      setHistoryState({ nodes, edges, monitorName, monitorActive });

      // But only auto-save if the actual monitor configuration changed
      if (dataChanged) {
        // Trigger auto-save only if data actually changed
        if (mode === "edit" && isValid) {
          const config = buildMonitorConfig();
          if (config) {
            triggerSave(config);
          }
        }

        // Update the ref for next comparison
        previousDataRef.current = currentDataString;
      }
    }
  }, [
    nodes,
    edges,
    monitorName,
    monitorActive,
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

        // Calculate raw position (centered on click point)
        // Subtract half of typical node dimensions for centering
        const rawX = event.clientX - bounds.left - 100;
        const rawY = event.clientY - bounds.top - 50;

        // Snap to 10px grid (half of the visual 20px grid)
        const gridSize = 10;
        const position = {
          x: Math.round(rawX / gridSize) * gridSize,
          y: Math.round(rawY / gridSize) * gridSize,
        };

        const nodeId = addNode(selectedNodeType, position);
        openNodeEditor(nodeId);
        setSelectedNodeType(null);
      }
    },
    [selectedNodeType, canvasRef, addNode, openNodeEditor],
  );

  // Handle node click - simplified since ReactFlow handles selection
  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    // ReactFlow will handle selection internally
    console.log("Node clicked:", node.id);
  }, []);

  // Handle node double-click for editing
  const handleNodeDoubleClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      openNodeEditor(node.id);
    },
    [openNodeEditor],
  );

  // Handle selection changes from ReactFlow
  const handleSelectionChange = useCallback(
    ({ nodes: selectedNodes }: { nodes: Node[]; edges: Edge[] }) => {
      // Update our custom selectedNodeId state based on ReactFlow's selection
      if (selectedNodes.length > 0) {
        selectNode(selectedNodes[0].id);
        console.log("Selection changed - node selected:", selectedNodes[0].id);
      } else {
        selectNode(null);
        console.log("Selection cleared");
      }
    },
    [selectNode],
  );

  // Handle node deletion
  const handleDeleteNode = useCallback(() => {
    if (selectedNodeId) {
      deleteNode(selectedNodeId);
      toast.success("Node deleted");
      selectNode(null);
    }
  }, [selectedNodeId, deleteNode, selectNode]);

  // Handle keyboard shortcuts for non-delete keys
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // ReactFlow handles Delete key now, we only handle other shortcuts
      if (event.key === "Enter" && selectedNodeId) {
        openNodeEditor(selectedNodeId);
      }
      if (event.key === "Escape" && drawerOpen) {
        closeNodeEditor();
      }
    },
    [selectedNodeId, openNodeEditor, drawerOpen, closeNodeEditor],
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

  return (
    <ReactFlowProvider>
      <div className="h-full w-full flex flex-col">
        {/* Simplified header - validation errors only if present */}
        {validationErrors.global && (
          <div className="border-b bg-background/95 backdrop-blur-sm p-3">
            <div className="text-xs text-destructive">
              {validationErrors.global.map((error: string, index: number) => (
                <span key={index}>{error}</span>
              ))}
            </div>
          </div>
        )}

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
            onSelectionChange={handleSelectionChange}
            isValidConnection={isValidConnection}
            isInteractive={true}
            fitView={true}
            showControls={true}
            showMiniMap={false}
            showBackground={true}
          >
            {/* Node Palette Panel */}
            <Panel position="top-left" className="m-0">
              <NodeTypePalette
                selectedType={selectedNodeType}
                onSelectType={setSelectedNodeType}
              />
            </Panel>

            {/* Delete Button - shows when a node is selected */}
            {selectedNodeId && (
              <Panel position="top-right" className="m-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDeleteNode}
                  className="shadow-lg"
                  title="Delete selected node (or press Delete key)"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete Node
                </Button>
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
