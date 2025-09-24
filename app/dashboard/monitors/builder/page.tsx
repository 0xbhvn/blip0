"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { FlowCanvas } from "@/components/layout/flow-canvas";
import { MonitorConfigSidebar } from "@/components/monitors/flow/MonitorConfigSidebar";
import { useHeader } from "@/contexts/HeaderContext";
import { useSidebar } from "@/components/ui/sidebar";
import { useNodesState, useEdgesState, Node, Edge, NodeTypes } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Save, Plus } from "lucide-react";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import { toast } from "sonner";
import UnifiedNode from "@/components/monitors/flow/nodes/UnifiedNode";
// import { CONNECTION_RULES } from "@/lib/types/nodeEditor"; // Will be used when connections are implemented

// Use the existing UnifiedNode for all node types
const nodeTypes: NodeTypes = {
  [NodeType.NETWORK]: UnifiedNode,
  [NodeType.ADDRESS]: UnifiedNode,
  [NodeType.EVENT_CONDITION]: UnifiedNode,
  [NodeType.FUNCTION_CONDITION]: UnifiedNode,
  [NodeType.TRANSACTION_CONDITION]: UnifiedNode,
  [NodeType.TRIGGER]: UnifiedNode,
  [NodeType.NOTIFICATION]: UnifiedNode,
};

export default function MonitorBuilderPage() {
  const router = useRouter();
  const { setHeaderData } = useHeader();
  const { open: leftSidebarOpen } = useSidebar();

  // Flow state
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  // UI state
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(false);
  const [selectedNode, setSelectedNode] = React.useState<EditorNode | null>(null);
  const [autoFitTrigger, setAutoFitTrigger] = React.useState(0);
  const [monitorName, setMonitorName] = React.useState("");
  const [isActive, setIsActive] = React.useState(true);

  // Trigger auto-fit when either sidebar state changes
  React.useEffect(() => {
    setAutoFitTrigger((prev) => prev + 1);
  }, [leftSidebarOpen, rightSidebarOpen]);

  // Initialize with a welcome node
  React.useEffect(() => {
    if (nodes.length === 0) {
      const welcomeNode: Node = {
        id: "welcome",
        type: NodeType.NETWORK,
        position: { x: 400, y: 300 },
        data: {
          id: "welcome",
          type: NodeType.NETWORK,
          label: "Start by selecting a network",
          config: {},
          isValid: false,
          isPlaceholder: true,
        },
      };
      setNodes([welcomeNode]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Set header data
  React.useEffect(() => {
    setHeaderData({
      title: "Monitor Builder",
      actions: (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddNode}
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Node
          </Button>
        </div>
      ),
      rightActions: (
        <Button
          size="sm"
          onClick={handleSave}
          disabled={!monitorName || nodes.length === 0}
        >
          <Save className="h-4 w-4 mr-1" />
          Save Monitor
        </Button>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitorName, nodes.length]); // Only re-render when these change

  // Handle node click
  const handleNodeClick = React.useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    setSelectedNode(node as EditorNode);
    setRightSidebarOpen(true);
  }, []);

  // Handle canvas click
  const handleCanvasClick = React.useCallback(() => {
    if (rightSidebarOpen) {
      setRightSidebarOpen(false);
      setSelectedNode(null);
    }
  }, [rightSidebarOpen]);

  // Handle connections - TODO: Extend FlowCanvas to support connections
  // const onConnect = React.useCallback((params: Connection) => {
  //   const sourceNode = nodes.find(n => n.id === params.source);
  //   const targetNode = nodes.find(n => n.id === params.target);

  //   if (!sourceNode || !targetNode) return;

  //   // Validate connection using existing rules
  //   const allowedTargets = CONNECTION_RULES[sourceNode.type as NodeType];
  //   if (!allowedTargets || !Array.isArray(allowedTargets)) {
  //     toast.error("Invalid source node type");
  //     return;
  //   }
  //   if (!allowedTargets.includes(targetNode.type as NodeType)) {
  //     toast.error("Invalid connection");
  //     return;
  //   }

  //   setEdges((eds) => addEdge({
  //     ...params,
  //     type: "smoothstep",
  //     animated: true,
  //   }, eds));
  // }, [nodes, setEdges]);

  // Add new node
  const handleAddNode = React.useCallback(() => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: NodeType.ADDRESS,
      position: {
        x: 300 + Math.random() * 200,
        y: 200 + Math.random() * 200
      },
      data: {
        id: `node-${Date.now()}`,
        type: NodeType.ADDRESS,
        label: "New Address",
        config: {},
        isValid: false,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    toast.success("Node added");
  }, [setNodes]);

  // Handle save
  const handleSave = React.useCallback(() => {
    // Here we would normally integrate with the actual save logic
    // from MonitorFlowEditor's buildMonitorConfig
    toast.success("Monitor saved");
    router.push("/dashboard/monitors");
  }, [router]);

  // Handle node update from sidebar
  const handleNodeUpdate = React.useCallback((nodeId: string, updates: Partial<EditorNode["data"]>) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...updates } }
          : node
      )
    );
  }, [setNodes]);

  // Handle node delete
  const handleNodeDelete = React.useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    setRightSidebarOpen(false);
    setSelectedNode(null);
    toast.success("Node deleted");
  }, [setNodes, setEdges]);

  return (
    <>
      <DashboardHeader />
      <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
        {/* Main canvas area - matching dashboard structure */}
        <div className="flex-1 relative bg-muted">
          <FlowCanvas
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={handleNodeClick}
            onPaneClick={handleCanvasClick}
            autoFitTrigger={autoFitTrigger}
          />
        </div>

        {/* Right sidebar for configuration - matching dashboard animation */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            rightSidebarOpen ? "w-96" : "w-0"
          }`}
        >
          <MonitorConfigSidebar
            node={selectedNode}
            monitorName={monitorName}
            isActive={isActive}
            onMonitorNameChange={setMonitorName}
            onActiveChange={setIsActive}
            onNodeUpdate={handleNodeUpdate}
            onNodeDelete={handleNodeDelete}
            onClose={() => {
              setRightSidebarOpen(false);
              setSelectedNode(null);
            }}
          />
        </div>
      </div>
    </>
  );
}