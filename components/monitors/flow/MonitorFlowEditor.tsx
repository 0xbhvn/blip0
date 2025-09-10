"use client";

import React, { useCallback, useState, useEffect } from "react";
import { ReactFlowProvider, Panel } from "@xyflow/react";
import { MonitorFlowCanvas } from "./MonitorFlowCanvas";
import { NodeTypePalette } from "../nodeEditor/NodeTypePalette";
import { NodeEditorDrawer } from "../nodeEditor/NodeEditorDrawer";
import { useNodeEditor, useDebouncedValidation } from "@/hooks";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Trash2, Save } from "lucide-react";
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
  onCancel?: () => void;
  mode?: "create" | "edit";
  monitorId?: string;
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
  onCancel,
  mode = "create",
}: MonitorFlowEditorProps) {
  const [selectedNodeType, setSelectedNodeType] = useState<NodeType | null>(
    null,
  );
  const [canvasRef, setCanvasRef] = useState<HTMLDivElement | null>(null);

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

  // Handle save
  const handleSave = useCallback(() => {
    const currentlyValid = validateNow();
    if (!currentlyValid) {
      toast.error("Please fix validation errors before saving");
      return;
    }

    const config = buildMonitorConfig();
    if (config && onSave) {
      onSave(config);
    }
  }, [validateNow, buildMonitorConfig, onSave]);

  // Handle clear
  const handleClear = useCallback(() => {
    if (
      confirm(
        "Are you sure you want to clear the canvas? This action cannot be undone.",
      )
    ) {
      clearCanvas();
      toast.success("Canvas cleared");
    }
  }, [clearCanvas]);

  return (
    <ReactFlowProvider>
      <div className="h-full w-full flex flex-col">
        {/* Header with monitor configuration */}
        <div className="border-b bg-background p-4">
          <div className="flex items-center justify-between max-w-4xl">
            <div className="flex-1 max-w-md">
              <Label
                htmlFor="monitor-name"
                className="text-sm font-medium mb-2 block"
              >
                Monitor Name
              </Label>
              <Input
                id="monitor-name"
                value={monitorName}
                onChange={(e) => setMonitorName(e.target.value)}
                placeholder="Enter monitor name..."
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-4 ml-8">
              <div className="flex items-center space-x-2">
                <Switch
                  id="monitor-active"
                  checked={monitorActive}
                  onCheckedChange={setMonitorActive}
                />
                <Label htmlFor="monitor-active" className="cursor-pointer">
                  {monitorActive ? "Active" : "Paused"}
                </Label>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} size="sm" disabled={!isValid}>
                  <Save className="h-4 w-4 mr-2" />
                  {mode === "edit" ? "Update" : "Save"}
                </Button>
                <Button onClick={handleClear} size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear
                </Button>
                {onCancel && (
                  <Button onClick={onCancel} size="sm" variant="ghost">
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </div>
          {validationErrors.global && (
            <div className="mt-2 text-sm text-destructive">
              {validationErrors.global.map((error: string, index: number) => (
                <p key={index}>{error}</p>
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
            isInteractive={true}
            fitView={true}
            showControls={true}
            showMiniMap={true}
            showBackground={true}
          >
            {/* Node Palette Panel */}
            <Panel position="top-left" className="m-0">
              <NodeTypePalette
                selectedType={selectedNodeType}
                onSelectType={setSelectedNodeType}
              />
            </Panel>
          </MonitorFlowCanvas>
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
