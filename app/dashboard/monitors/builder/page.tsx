"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { FlowCanvas } from "@/components/layout/flow-canvas";
import { MonitorConfigSidebar } from "@/components/monitors/flow/MonitorConfigSidebar";
import { useHeader } from "@/contexts/HeaderContext";
import { useSidebar } from "@/components/ui/sidebar";
import {
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  NodeTypes,
  Connection,
  addEdge,
  MarkerType,
} from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { FloppyDefault } from "@/lib/icons";
import { NodeType, EditorNode, CONNECTION_RULES } from "@/lib/types/nodeEditor";
import { toast } from "sonner";
import UnifiedNode from "@/components/monitors/flow/nodes/UnifiedNode";
import {
  getNextNodeSuggestion,
  findBestSourceNode,
  getConfigurationStatus,
} from "@/lib/utils/nodeSequence";
import {
  getSmartNodePosition,
  getHierarchicalLayout,
} from "@/lib/utils/autoLayout";
import { AddNodeDropdown } from "@/components/monitors/flow/AddNodeDropdown";

// Use the existing UnifiedNode for all node types
const nodeTypes: NodeTypes = {
  [NodeType.NETWORK]: UnifiedNode,
  [NodeType.ADDRESS]: UnifiedNode,
  [NodeType.EVENT_CONDITION]: UnifiedNode,
  [NodeType.FUNCTION_CONDITION]: UnifiedNode,
  [NodeType.TRANSACTION_CONDITION]: UnifiedNode,
  [NodeType.TRIGGER]: UnifiedNode,
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
  const [selectedNode, setSelectedNode] = React.useState<EditorNode | null>(
    null,
  );
  const [autoFitTrigger, setAutoFitTrigger] = React.useState(0);
  const [monitorName, setMonitorName] = React.useState("");
  const [isActive, setIsActive] = React.useState(true);

  // Trigger auto-fit when either sidebar state changes
  React.useEffect(() => {
    setAutoFitTrigger((prev) => prev + 1);
  }, [leftSidebarOpen, rightSidebarOpen]);

  // Get node suggestions
  const nodeSuggestions = React.useMemo(() => {
    return getNextNodeSuggestion(nodes);
  }, [nodes]);

  // Get configuration status
  const configStatus = React.useMemo(() => {
    return getConfigurationStatus(nodes);
  }, [nodes]);


  // Initialize with a Network node
  React.useEffect(() => {
    if (nodes.length === 0) {
      const initialNode: Node = {
        id: "network-initial",
        type: NodeType.NETWORK,
        position: { x: 400, y: 300 },
        data: {
          id: "network-initial",
          type: NodeType.NETWORK,
          label: "Network",
          config: {},
          isValid: false,
        },
      };
      setNodes([initialNode]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Set header data with editable monitor name and toggle
  React.useEffect(() => {
    setHeaderData({
      title: (
        <Input
          value={monitorName}
          onChange={(e) => setMonitorName(e.target.value)}
          placeholder="New Monitor"
          style={{ width: `${Math.max(11, Math.min((monitorName || 'New Monitor').length, 40))}ch` }}
          className="h-10 border-none shadow-none focus-visible:ring-0 px-0 text-lg font-bold"
        />
      ),
      actions: (
        <Switch
          checked={isActive}
          onCheckedChange={setIsActive}
        />
      ),
      rightActions: (
        <Button
          size="sm"
          onClick={handleSave}
          disabled={!monitorName || nodes.length === 0}
        >
          <FloppyDefault className="h-4 w-4 mr-1" />
          Save Monitor
        </Button>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitorName, isActive, nodes]); // Re-render when these change

  // Sync selectedNode with nodes array to prevent stale state
  React.useEffect(() => {
    if (selectedNode) {
      const updatedNode = nodes.find((n) => n.id === selectedNode.id);
      if (updatedNode && updatedNode !== selectedNode) {
        setSelectedNode(updatedNode as EditorNode);
      } else if (!updatedNode) {
        // Node was deleted
        setSelectedNode(null);
        setRightSidebarOpen(false);
      }
    }
  }, [nodes, selectedNode]);

  // Handle node click
  const handleNodeClick = React.useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.stopPropagation();
      setSelectedNode(node as EditorNode);
      setRightSidebarOpen(true);
    },
    [],
  );

  // Handle canvas click
  const handleCanvasClick = React.useCallback(() => {
    if (rightSidebarOpen) {
      setRightSidebarOpen(false);
      setSelectedNode(null);
    }
  }, [rightSidebarOpen]);

  // Handle connections with validation
  const onConnect = React.useCallback(
    (params: Connection) => {
      const sourceNode = nodes.find((n) => n.id === params.source);
      const targetNode = nodes.find((n) => n.id === params.target);

      if (!sourceNode || !targetNode) return;

      // Validate connection using existing rules
      const sourceRules = CONNECTION_RULES[sourceNode.type as NodeType];
      if (!sourceRules) {
        toast.error("Invalid source node type");
        return;
      }
      if (!sourceRules.targetTypes.includes(targetNode.type as NodeType)) {
        toast.error(
          `Cannot connect ${getNodeLabel(sourceNode.type as NodeType)} to ${getNodeLabel(targetNode.type as NodeType)}`,
        );
        return;
      }

      // Check for duplicate connections (at least one edge exists)
      const hasExistingConnection = edges.some(
        (e) => e.source === params.source && e.target === params.target,
      );
      if (hasExistingConnection) {
        toast.warning("This connection already exists");
        return;
      }

      // Check if source is a condition node
      const isConditionNode =
        sourceNode.type === NodeType.EVENT_CONDITION ||
        sourceNode.type === NodeType.FUNCTION_CONDITION ||
        sourceNode.type === NodeType.TRANSACTION_CONDITION;

      // If condition node, create N edges based on condition count
      if (isConditionNode && targetNode.type === NodeType.TRIGGER) {
        let conditionCount = 0;
        const nodeData = sourceNode.data as EditorNode["data"];
        if (sourceNode.type === NodeType.EVENT_CONDITION && "config" in nodeData) {
          conditionCount = (nodeData.config as { events?: unknown[] })?.events?.length || 0;
        } else if (sourceNode.type === NodeType.FUNCTION_CONDITION && "config" in nodeData) {
          conditionCount = (nodeData.config as { functions?: unknown[] })?.functions?.length || 0;
        } else if (sourceNode.type === NodeType.TRANSACTION_CONDITION && "config" in nodeData) {
          conditionCount = (nodeData.config as { transactions?: unknown[] })?.transactions?.length || 0;
        }

        if (conditionCount === 0) {
          toast.info("Add conditions first to create connections");
          return;
        }

        // Create N edges
        const newEdges: Edge[] = [];
        for (let i = 0; i < conditionCount; i++) {
          newEdges.push({
            id: `${params.source}-c${i}-${params.target}`,
            source: params.source!,
            target: params.target!,
            type: "smoothstep",
            animated: false,
            style: {
              stroke: "#D7DBDF",
              strokeWidth: 1,
            },
            markerEnd: {
              type: MarkerType.Arrow,
              color: "#D7DBDF",
              strokeWidth: 1,
              width: 20,
              height: 20,
            },
          });
        }

        setEdges((eds) => [...eds, ...newEdges]);
        toast.success(
          `Created ${conditionCount} connection${conditionCount > 1 ? "s" : ""}`
        );
      } else {
        // Regular single edge connection
        setEdges((eds) =>
          addEdge(
            {
              ...params,
              type: "smoothstep",
              animated: false,
              style: {
                stroke: "#D7DBDF",
                strokeWidth: 1,
              },
              markerEnd: {
                type: MarkerType.Arrow,
                color: "#D7DBDF",
                strokeWidth: 1,
                width: 20,
                height: 20,
              },
            },
            eds,
          ),
        );
        toast.success("Nodes connected");
      }
    },
    [nodes, edges, setEdges],
  );

  // Auto-layout function
  const handleAutoLayout = React.useCallback(() => {
    const layouted = getHierarchicalLayout(nodes, edges);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
    // Trigger fitView to center the newly laid out nodes
    setAutoFitTrigger((prev) => prev + 1);
    toast.success("Layout optimized");
  }, [nodes, edges, setNodes, setEdges]);

  // Add new node with intelligent positioning and auto-connection
  const handleAddNode = React.useCallback(
    (nodeType?: NodeType) => {
      // If no type specified, use the first suggestion
      const typeToAdd = nodeType || nodeSuggestions[0]?.type;

      if (!typeToAdd) {
        toast.info("Your monitor configuration is complete!");
        return;
      }

      // Validate single-instance node types (conditions and trigger)
      const conditionTypes = [
        NodeType.EVENT_CONDITION,
        NodeType.FUNCTION_CONDITION,
        NodeType.TRANSACTION_CONDITION,
      ];

      if (conditionTypes.includes(typeToAdd)) {
        // Check if this condition type already exists
        const existingCondition = nodes.find((n) => n.type === typeToAdd);
        if (existingCondition) {
          toast.error(
            `Only one ${getNodeLabel(typeToAdd)} node is allowed. You can configure multiple ${getNodeLabel(typeToAdd).toLowerCase()}s within the existing node.`
          );
          return;
        }
      }

      if (typeToAdd === NodeType.TRIGGER) {
        // Check if trigger already exists
        const existingTrigger = nodes.find((n) => n.type === NodeType.TRIGGER);
        if (existingTrigger) {
          toast.error("Only one Trigger node is allowed per monitor.");
          return;
        }
      }

      // Get smart position for the new node
      const position = getSmartNodePosition(typeToAdd, nodes);

      // Create the new node
      const newNodeId = `node-${Date.now()}`;
      const newNode: Node = {
        id: newNodeId,
        type: typeToAdd,
        position,
        data: {
          id: newNodeId,
          type: typeToAdd,
          label: getNodeLabel(typeToAdd),
          config: {},
          isValid: false,
        },
      };

      // Find source nodes to connect to
      // For condition nodes, connect ALL address nodes
      const isConditionNode = [
        NodeType.EVENT_CONDITION,
        NodeType.FUNCTION_CONDITION,
        NodeType.TRANSACTION_CONDITION,
      ].includes(typeToAdd);

      let sourceNodesToConnect: Node[] = [];
      let targetNodesToConnect: Node[] = [];

      if (isConditionNode) {
        // Get ALL address nodes for condition nodes
        sourceNodesToConnect = nodes.filter(
          (n) => n.type === NodeType.ADDRESS
        );
      } else if (typeToAdd === NodeType.ADDRESS) {
        // For contract nodes, connect to network as source
        const sourceNode = findBestSourceNode(typeToAdd, nodes, edges);
        if (sourceNode) {
          sourceNodesToConnect = [sourceNode];
        }

        // Also auto-connect to ALL existing condition nodes as targets
        targetNodesToConnect = nodes.filter((n) =>
          [
            NodeType.EVENT_CONDITION,
            NodeType.FUNCTION_CONDITION,
            NodeType.TRANSACTION_CONDITION,
          ].includes(n.type as NodeType)
        );
      } else {
        // For other nodes, use single best source
        const sourceNode = findBestSourceNode(typeToAdd, nodes, edges);
        if (sourceNode) {
          sourceNodesToConnect = [sourceNode];
        }
      }

      setNodes((nds) => [...nds, newNode]);

      // Auto-connect to all source nodes (incoming edges)
      const newEdges: Edge[] = [];

      if (sourceNodesToConnect.length > 0) {
        const sourceEdges = sourceNodesToConnect.map((sourceNode) => ({
          id: `edge-${sourceNode.id}-${newNodeId}`,
          source: sourceNode.id,
          target: newNodeId,
          type: "smoothstep",
          animated: false,
          style: {
            stroke: "#D7DBDF",
            strokeWidth: 1,
          },
          markerEnd: {
            type: MarkerType.Arrow,
            color: "#D7DBDF",
            strokeWidth: 1,
            width: 20,
            height: 20,
          },
        }));
        newEdges.push(...sourceEdges);
      }

      // Auto-connect to all target nodes (outgoing edges)
      if (targetNodesToConnect.length > 0) {
        const targetEdges = targetNodesToConnect.map((targetNode) => ({
          id: `edge-${newNodeId}-${targetNode.id}`,
          source: newNodeId,
          target: targetNode.id,
          type: "smoothstep",
          animated: false,
          style: {
            stroke: "#D7DBDF",
            strokeWidth: 1,
          },
          markerEnd: {
            type: MarkerType.Arrow,
            color: "#D7DBDF",
            strokeWidth: 1,
            width: 20,
            height: 20,
          },
        }));
        newEdges.push(...targetEdges);
      }

      if (newEdges.length > 0) {
        setEdges((eds) => [...eds, ...newEdges]);

        if (sourceNodesToConnect.length > 1) {
          toast.success(
            `Added ${getNodeLabel(typeToAdd)} and connected to ${sourceNodesToConnect.length} contracts`
          );
        } else if (targetNodesToConnect.length > 0) {
          toast.success(
            `Added ${getNodeLabel(typeToAdd)} and connected to ${targetNodesToConnect.length} condition${targetNodesToConnect.length > 1 ? 's' : ''}`
          );
        } else {
          toast.success(`Added ${getNodeLabel(typeToAdd)} and connected it`);
        }
      } else {
        toast.success(`Added ${getNodeLabel(typeToAdd)}`);
      }

      // Auto-select the new node for configuration
      setSelectedNode(newNode as EditorNode);
      setRightSidebarOpen(true);
    },
    [nodes, edges, setNodes, setEdges, nodeSuggestions],
  );

  // Helper function to get node labels
  const getNodeLabel = (type: NodeType): string => {
    switch (type) {
      case NodeType.NETWORK:
        return "Network";
      case NodeType.ADDRESS:
        return "Contract";
      case NodeType.EVENT_CONDITION:
        return "Event";
      case NodeType.FUNCTION_CONDITION:
        return "Function";
      case NodeType.TRANSACTION_CONDITION:
        return "Transaction";
      case NodeType.TRIGGER:
        return "Trigger";
      default:
        return "Node";
    }
  };

  // Handle save
  const handleSave = React.useCallback(() => {
    // Here we would normally integrate with the actual save logic
    // from MonitorFlowEditor's buildMonitorConfig
    toast.success("Monitor saved");
    router.push("/dashboard/monitors");
  }, [router]);

  // Sync edges for condition nodes to match their condition count
  const syncConditionEdges = React.useCallback(
    (conditionNodeId: string) => {
      const node = nodes.find((n) => n.id === conditionNodeId);
      if (!node) return;

      // Get condition count based on node type
      let conditionCount = 0;
      const nodeData = node.data as EditorNode["data"];
      if (node.type === NodeType.EVENT_CONDITION && "config" in nodeData) {
        conditionCount = (nodeData.config as { events?: unknown[] })?.events?.length || 0;
      } else if (node.type === NodeType.FUNCTION_CONDITION && "config" in nodeData) {
        conditionCount = (nodeData.config as { functions?: unknown[] })?.functions?.length || 0;
      } else if (node.type === NodeType.TRANSACTION_CONDITION && "config" in nodeData) {
        conditionCount = (nodeData.config as { transactions?: unknown[] })?.transactions?.length || 0;
      } else {
        return; // Not a condition node
      }

      // Find all trigger nodes this condition is connected to
      const connectedTriggers = Array.from(
        new Set(
          edges
            .filter(
              (e) =>
                e.source === conditionNodeId &&
                nodes.find((n) => n.id === e.target)?.type === NodeType.TRIGGER
            )
            .map((e) => e.target)
        )
      );

      if (connectedTriggers.length === 0 || conditionCount === 0) return;

      // Update edges
      setEdges((eds) => {
        // Remove old edges from this condition to triggers
        const filteredEdges = eds.filter(
          (e) => !(e.source === conditionNodeId && connectedTriggers.includes(e.target))
        );

        // Create N new edges (one per condition) for each connected trigger
        const newEdges: Edge[] = [];
        connectedTriggers.forEach((triggerId) => {
          for (let i = 0; i < conditionCount; i++) {
            newEdges.push({
              id: `${conditionNodeId}-c${i}-${triggerId}`,
              source: conditionNodeId,
              target: triggerId,
              type: "smoothstep",
              animated: false,
              style: {
                stroke: "#D7DBDF",
                strokeWidth: 1,
              },
              markerEnd: {
                type: MarkerType.Arrow,
                color: "#D7DBDF",
                strokeWidth: 1,
                width: 20,
                height: 20,
              },
            });
          }
        });

        return [...filteredEdges, ...newEdges];
      });
    },
    [nodes, edges, setEdges]
  );

  // Handle node update from sidebar
  const handleNodeUpdate = React.useCallback(
    (nodeId: string, updates: Partial<EditorNode["data"]>) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, ...updates } }
            : node,
        ),
      );

      // Sync edges if it's a condition node
      const node = nodes.find((n) => n.id === nodeId);
      if (
        node &&
        (node.type === NodeType.EVENT_CONDITION ||
          node.type === NodeType.FUNCTION_CONDITION ||
          node.type === NodeType.TRANSACTION_CONDITION)
      ) {
        // Defer sync to next tick to ensure state is updated
        setTimeout(() => syncConditionEdges(nodeId), 0);
      }
    },
    [setNodes, nodes, syncConditionEdges],
  );

  // Handle node delete
  const handleNodeDelete = React.useCallback(
    (nodeId: string) => {
      setNodes((nds) => nds.filter((node) => node.id !== nodeId));
      setEdges((eds) =>
        eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId),
      );
      setRightSidebarOpen(false);
      setSelectedNode(null);
      toast.success("Node deleted");
    },
    [setNodes, setEdges],
  );

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
            onConnect={onConnect}
            autoFitTrigger={autoFitTrigger}
            onAutoLayout={handleAutoLayout}
            disableAutoLayout={nodes.length <= 1}
            addNodeDropdown={
              <AddNodeDropdown
                nodeSuggestions={nodeSuggestions}
                nodes={nodes}
                configStatus={configStatus}
                onAddNode={handleAddNode}
              />
            }
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
            onNodeUpdate={handleNodeUpdate}
            onNodeDelete={handleNodeDelete}
          />
        </div>
      </div>
    </>
  );
}
