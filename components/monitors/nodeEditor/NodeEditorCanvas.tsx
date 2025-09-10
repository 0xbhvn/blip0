"use client";

import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Panel,
  BackgroundVariant,
  Connection,
  Node,
  Edge,
} from "@xyflow/react";
import { useNodeEditor, useDebouncedValidation } from "@/hooks";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { NodeTypePalette } from "./NodeTypePalette";
import { NodeEditorDrawer } from "./NodeEditorDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Trash2, Save } from "lucide-react";
import { toast } from "sonner";

// Import custom node components
import NetworkNode from "./nodes/NetworkNode";
import AddressNode from "./nodes/AddressNode";
import EventConditionNode from "./nodes/EventConditionNode";
import FunctionConditionNode from "./nodes/FunctionConditionNode";
import TransactionConditionNode from "./nodes/TransactionConditionNode";
import TriggerNode from "./nodes/TriggerNode";
import NotificationNode from "./nodes/NotificationNode";

// Memoize node types to prevent recreation
const nodeTypes = {
  [NodeType.NETWORK]: NetworkNode,
  [NodeType.ADDRESS]: AddressNode,
  [NodeType.EVENT_CONDITION]: EventConditionNode,
  [NodeType.FUNCTION_CONDITION]: FunctionConditionNode,
  [NodeType.TRANSACTION_CONDITION]: TransactionConditionNode,
  [NodeType.TRIGGER]: TriggerNode,
  [NodeType.NOTIFICATION]: NotificationNode,
};

interface NodeEditorCanvasProps {
  onSave?: (config: MonitorCreateInput) => void;
  initialData?: {
    nodes: EditorNode[];
    edges: Edge[];
  };
  initialMonitorName?: string;
  initialMonitorActive?: boolean;
}

export function NodeEditorCanvas({
  initialData,
  initialMonitorName = "",
  initialMonitorActive = true,
  onSave,
}: NodeEditorCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [selectedNodeType, setSelectedNodeType] = useState<NodeType | null>(
    null,
  );

  // Validation with debounce to prevent performance issues
  const { isValid, validateNow } = useDebouncedValidation();

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
      // Get the position relative to the ReactFlow instance
      const bounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (bounds && selectedNodeType) {
        const position = {
          x: event.clientX - bounds.left - 100, // Center the node
          y: event.clientY - bounds.top - 50,
        };

        const nodeId = addNode(selectedNodeType, position);
        // Open editor immediately for the new node
        openNodeEditor(nodeId);
        setSelectedNodeType(null);
      }
      // Clear selection when clicking on canvas
      selectNode(null);
    },
    [selectedNodeType, addNode, selectNode, openNodeEditor],
  );

  // Handle node click
  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    // ReactFlow will handle visual selection, we just track the ID
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

  // Handle keyboard shortcuts (only for non-delete keys since ReactFlow handles Delete)
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // ReactFlow handles Delete key internally when deleteKeyCode is set
      // We only handle other shortcuts
      if (event.key === "Enter" && selectedNodeId) {
        openNodeEditor(selectedNodeId);
      }
      if (event.key === "Escape" && drawerOpen) {
        closeNodeEditor();
      }
    },
    [selectedNodeId, openNodeEditor, drawerOpen, closeNodeEditor],
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Custom connection validation - memoized to prevent recreation
  const isValidConnection = useCallback(
    (connection: Connection | Edge) => {
      if ("source" in connection && "target" in connection) {
        return validateConnection(connection.source, connection.target);
      }
      return false;
    },
    [validateConnection],
  );

  // Handle save
  const handleSave = useCallback(() => {
    // Force immediate validation before saving
    const currentlyValid = validateNow();

    if (!currentlyValid) {
      toast.error("Please fix validation errors before saving");
      return;
    }

    const config = buildMonitorConfig();
    if (config && onSave) {
      onSave(config);
      toast.success("Monitor configuration saved");
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

  // Memoize default edge options
  const defaultEdgeOptions = useMemo(
    () => ({
      type: "smoothstep",
      animated: true,
      style: {
        stroke: "#6366f1",
        strokeWidth: 2,
      },
    }),
    [],
  );

  // Memoize connection line style
  const connectionLineStyle = useMemo(
    () => ({
      stroke: "#6366f1",
      strokeWidth: 2,
      strokeDasharray: "5 5",
    }),
    [],
  );

  // Memoize MiniMap node color function
  const miniMapNodeColor = useCallback((node: Node) => {
    switch (node.type) {
      case NodeType.NETWORK:
        return "#3b82f6";
      case NodeType.ADDRESS:
        return "#8b5cf6";
      case NodeType.EVENT_CONDITION:
      case NodeType.FUNCTION_CONDITION:
      case NodeType.TRANSACTION_CONDITION:
        return "#f59e0b";
      case NodeType.TRIGGER:
      case NodeType.NOTIFICATION:
        return "#10b981";
      default:
        return "#6b7280";
    }
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      {/* Monitor Name and Status Header */}
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
              onChange={(e) => {
                setMonitorName(e.target.value);
              }}
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
                Save
              </Button>
              <Button onClick={handleClear} size="sm" variant="outline">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
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

      {/* ReactFlow Canvas */}
      <div ref={reactFlowWrapper} className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
          onNodeDoubleClick={handleNodeDoubleClick}
          onPaneClick={handlePaneClick}
          onSelectionChange={handleSelectionChange}
          nodeTypes={nodeTypes}
          isValidConnection={isValidConnection}
          fitView
          deleteKeyCode="Delete"
          multiSelectionKeyCode="Shift"
          panOnScroll
          selectionOnDrag
          snapToGrid={false}
          minZoom={0.5}
          maxZoom={2}
          attributionPosition="bottom-left"
          defaultEdgeOptions={defaultEdgeOptions}
          connectionLineStyle={connectionLineStyle}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          nodesConnectable={true}
          nodesDraggable={true}
          elementsSelectable={true}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
          <Controls />
          <MiniMap
            nodeColor={miniMapNodeColor}
            nodeStrokeWidth={3}
            pannable={false}
            zoomable={false}
          />

          {/* Left Panel - Node Palette */}
          <Panel position="top-left" className="m-0">
            <NodeTypePalette
              selectedType={selectedNodeType}
              onSelectType={setSelectedNodeType}
            />
          </Panel>
        </ReactFlow>
      </div>

      {/* Node Editor Drawer */}
      <NodeEditorDrawer
        nodeId={editingNodeId}
        open={drawerOpen}
        onClose={closeNodeEditor}
      />
    </div>
  );
}
