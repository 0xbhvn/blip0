"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { ReactFlowProvider, Panel } from "@xyflow/react";
import { MonitorFlowCanvas } from "./MonitorFlowCanvas";
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
  onSave?: (config: MonitorCreateInput) => void | Promise<void>;
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
  const [isHistoryAction, setIsHistoryAction] = React.useState(false);
  const [hasChanges, setHasChanges] = React.useState(false);

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

  // Auto-save functionality (only for edit mode)
  const { saveStatus, lastSaved, triggerSave, hasUnsavedChanges } = useAutoSave(
    {
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
    },
  );

  // Initialize with provided data if available
  useEffect(() => {
    if (initialData) {
      initializeFromFlow(
        initialData.nodes,
        initialData.edges,
        initialMonitorName,
        initialMonitorActive,
      );
      // In edit mode, we start with no changes since we're loading existing data
      if (mode === "edit") {
        setHasChanges(false);
      }
    }
  }, [
    initialData,
    initialMonitorName,
    initialMonitorActive,
    initializeFromFlow,
    mode,
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

      // Auto-save if the actual monitor configuration changed
      if (dataChanged) {
        // Only trigger auto-save for edit mode
        // Create mode uses manual save button
        if (mode === "edit" && isValid) {
          const config = buildMonitorConfig();
          if (config) {
            triggerSave(config);
          }
        } else if (mode === "create") {
          // Track that we have unsaved changes in create mode
          setHasChanges(true);
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

  // Handle adding node from control panel
  const handleAddNodeFromPanel = useCallback(
    (type: NodeType) => {
      // Add node at center of viewport
      const centerPosition = {
        x: window.innerWidth / 2 - 100,
        y: window.innerHeight / 2 - 50,
      };
      addNode(type, centerPosition);
      toast.success(`${type} node added`);
    },
    [addNode],
  );

  // Handle layout change from auto-layout
  const handleLayoutChange = useCallback(
    (layoutedNodes: Node[]) => {
      // Update the nodes with new positions from auto-layout
      onNodesChange(
        layoutedNodes.map((node) => ({
          id: node.id,
          type: "position",
          position: node.position,
        })),
      );
      toast.success("Layout applied", { duration: 1500 });
    },
    [onNodesChange],
  );

  // Handle auto-connect - connects nodes based on their types
  const handleAutoConnect = useCallback(() => {
    const networkNodes = nodes.filter((n) => n.type === NodeType.NETWORK);
    const addressNodes = nodes.filter((n) => n.type === NodeType.ADDRESS);
    const conditionNodes = nodes.filter(
      (n) =>
        n.type === NodeType.EVENT_CONDITION ||
        n.type === NodeType.FUNCTION_CONDITION ||
        n.type === NodeType.TRANSACTION_CONDITION,
    );
    const actionNodes = nodes.filter(
      (n) => n.type === NodeType.TRIGGER || n.type === NodeType.NOTIFICATION,
    );

    let connectionsCreated = 0;

    // Connect networks to addresses and conditions
    networkNodes.forEach((network) => {
      [...addressNodes, ...conditionNodes].forEach((target) => {
        if (validateConnection(network.id, target.id)) {
          onConnect({
            source: network.id,
            target: target.id,
            sourceHandle: null,
            targetHandle: null,
          });
          connectionsCreated++;
        }
      });
    });

    // Connect addresses to conditions
    addressNodes.forEach((address) => {
      conditionNodes.forEach((condition) => {
        if (validateConnection(address.id, condition.id)) {
          onConnect({
            source: address.id,
            target: condition.id,
            sourceHandle: null,
            targetHandle: null,
          });
          connectionsCreated++;
        }
      });
    });

    // Connect conditions to actions
    conditionNodes.forEach((condition) => {
      actionNodes.forEach((action) => {
        if (validateConnection(condition.id, action.id)) {
          onConnect({
            source: condition.id,
            target: action.id,
            sourceHandle: null,
            targetHandle: null,
          });
          connectionsCreated++;
        }
      });
    });

    if (connectionsCreated > 0) {
      toast.success(`Created ${connectionsCreated} connections`);
    } else {
      toast.info("No valid connections could be created");
    }
  }, [nodes, validateConnection, onConnect]);

  // Handle canvas click for adding nodes
  const handlePaneClick = useCallback(() => {
    // Canvas clicks are now just for general interaction
    // Node adding is handled through the FlowControlPanel
    // Could be used for deselecting nodes or other interactions
  }, []);

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

  // Warn about unsaved changes before leaving
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Check for unsaved changes in both modes
      const hasUnsaved =
        (mode === "create" && hasChanges && nodes.length > 0) ||
        (mode === "edit" && hasUnsavedChanges);

      if (hasUnsaved) {
        const message =
          "You have unsaved changes. Are you sure you want to leave?";
        e.preventDefault();
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [mode, hasChanges, hasUnsavedChanges, nodes.length]);

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

  // Manual save for create mode
  const handleManualSave = useCallback(async () => {
    const currentlyValid = validateNow();

    if (!currentlyValid) {
      // Check specific validation errors to give better feedback
      if (!monitorName || monitorName.trim().length === 0) {
        toast.error("Please enter a monitor name");
      } else {
        toast.error("Please fix validation errors before saving");
      }
      return;
    }

    const config = buildMonitorConfig();

    if (config && onSave && mode === "create") {
      // Clear the flag BEFORE calling onSave to prevent warning during navigation
      setHasChanges(false);
      try {
        await onSave(config);
        // Success toast will be shown by parent component
      } catch (error) {
        // If save fails, restore the hasChanges flag
        setHasChanges(true);
        console.error("Failed to save:", error);
        toast.error("Failed to create monitor");
      }
    }
  }, [validateNow, buildMonitorConfig, onSave, mode, monitorName]);

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
        <div className="flex-1 relative">
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
            onAddNode={handleAddNodeFromPanel}
            onLayoutChange={handleLayoutChange}
            onAutoConnect={handleAutoConnect}
            onUndo={handleUndo}
            onRedo={handleRedo}
            canUndo={canUndo}
            canRedo={canRedo}
            isValidConnection={isValidConnection}
            isInteractive={true}
            showControls={false}
            showMiniMap={false}
            showBackground={true}
            showFlowControls={true}
          >
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

            {/* Manual Save Button - only for create mode */}
            {mode === "create" && (
              <Panel position="bottom-left" className="m-2">
                <Button
                  variant={hasChanges ? "default" : "outline"}
                  size="sm"
                  onClick={handleManualSave}
                  disabled={
                    !isValid ||
                    nodes.length === 0 ||
                    !monitorName ||
                    monitorName.trim().length === 0
                  }
                  className="shadow-lg"
                >
                  {!monitorName || monitorName.trim().length === 0
                    ? "Enter monitor name"
                    : nodes.length === 0
                      ? "Add nodes to continue"
                      : hasChanges
                        ? "Create Monitor"
                        : "Create Monitor"}
                </Button>
              </Panel>
            )}
          </MonitorFlowCanvas>

          {/* Floating Action Bar - only shows save status */}
          <FloatingActionBar
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
