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
} from "@xyflow/react";
import { Button } from "@/components/ui/button";
import {
  FloppyDefault,
  PlusDefault,
  SparkleAI01,
  ArrowRight,
} from "@/lib/icons";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

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
          label: "Network",
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
          {/* Auto-layout button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleAutoLayout}
            disabled={nodes.length <= 1}
          >
            <SparkleAI01 className="h-4 w-4 mr-1" />
            Auto-layout
          </Button>

          {/* Smart Add Node button with dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="relative">
                <PlusDefault className="h-4 w-4 mr-1" />
                Add Node
                {nodeSuggestions.length > 0 &&
                  nodeSuggestions[0].isRequired && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center"
                    >
                      !
                    </Badge>
                  )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Suggested Next Steps</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {nodeSuggestions.length > 0 ? (
                (() => {
                  // Group suggestions by category
                  const conditionSuggestions = nodeSuggestions.filter(
                    (s) =>
                      s.type === NodeType.EVENT_CONDITION ||
                      s.type === NodeType.FUNCTION_CONDITION ||
                      s.type === NodeType.TRANSACTION_CONDITION,
                  );
                  const actionSuggestions = nodeSuggestions.filter(
                    (s) =>
                      s.type === NodeType.TRIGGER ||
                      s.type === NodeType.NOTIFICATION,
                  );
                  const otherSuggestions = nodeSuggestions.filter(
                    (s) =>
                      s.type !== NodeType.EVENT_CONDITION &&
                      s.type !== NodeType.FUNCTION_CONDITION &&
                      s.type !== NodeType.TRANSACTION_CONDITION &&
                      s.type !== NodeType.TRIGGER &&
                      s.type !== NodeType.NOTIFICATION,
                  );

                  // Count existing conditions for display
                  const existingConditionCount = nodes.filter(
                    (n) =>
                      n.type === NodeType.EVENT_CONDITION ||
                      n.type === NodeType.FUNCTION_CONDITION ||
                      n.type === NodeType.TRANSACTION_CONDITION,
                  ).length;

                  return (
                    <>
                      {/* Other suggestions (Network, Contract) */}
                      {otherSuggestions.map((suggestion) => (
                        <DropdownMenuItem
                          key={suggestion.type}
                          onClick={() => handleAddNode(suggestion.type)}
                          className="flex flex-col items-start py-3"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <span className="font-medium">
                              <ArrowRight className="h-3 w-3 inline mr-1" />
                              {suggestion.label}
                            </span>
                            {suggestion.isRequired && (
                              <Badge
                                variant="destructive"
                                className="ml-auto text-xs"
                              >
                                Required
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground mt-1">
                            {suggestion.description}
                          </span>
                        </DropdownMenuItem>
                      ))}

                      {/* Conditions section */}
                      {conditionSuggestions.length > 0 && (
                        <>
                          {(otherSuggestions.length > 0 ||
                            existingConditionCount > 0) && (
                            <DropdownMenuSeparator />
                          )}
                          <div className="px-2 py-1">
                            <p className="text-xs font-medium text-muted-foreground">
                              Monitor Conditions{" "}
                              {existingConditionCount > 0 &&
                                `(${existingConditionCount} active)`}
                            </p>
                          </div>
                          {conditionSuggestions.map((suggestion) => (
                            <DropdownMenuItem
                              key={suggestion.type}
                              onClick={() => handleAddNode(suggestion.type)}
                              className="flex flex-col items-start py-2 ml-2"
                            >
                              <div className="flex items-center gap-2 w-full">
                                <PlusDefault className="h-3 w-3" />
                                <span className="font-medium">
                                  {suggestion.label}
                                </span>
                                {existingConditionCount === 0 &&
                                  conditionSuggestions.indexOf(suggestion) ===
                                    0 && (
                                    <Badge
                                      variant="secondary"
                                      className="ml-auto text-xs"
                                    >
                                      Recommended
                                    </Badge>
                                  )}
                              </div>
                              <span className="text-xs text-muted-foreground mt-1 ml-5">
                                {suggestion.description}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </>
                      )}

                      {/* Actions section */}
                      {actionSuggestions.length > 0 && (
                        <>
                          <DropdownMenuSeparator />
                          <div className="px-2 py-1">
                            <p className="text-xs font-medium text-muted-foreground">
                              Monitor Actions
                            </p>
                          </div>
                          {actionSuggestions.map((suggestion) => (
                            <DropdownMenuItem
                              key={suggestion.type}
                              onClick={() => handleAddNode(suggestion.type)}
                              className="flex flex-col items-start py-2 ml-2"
                            >
                              <div className="flex items-center gap-2 w-full">
                                <ArrowRight className="h-3 w-3" />
                                <span className="font-medium">
                                  {suggestion.label}
                                </span>
                                {suggestion.isRequired && (
                                  <Badge
                                    variant="destructive"
                                    className="ml-auto text-xs"
                                  >
                                    Required
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground mt-1 ml-5">
                                {suggestion.description}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </>
                      )}
                    </>
                  );
                })()
              ) : (
                <DropdownMenuItem disabled>
                  <span className="text-muted-foreground">
                    Configuration complete! Ready to save.
                  </span>
                </DropdownMenuItem>
              )}

              {/* Show what's missing if configuration is incomplete */}
              {!configStatus.isComplete &&
                configStatus.missingRequired.length > 0 && (
                  <>
                    <DropdownMenuSeparator />
                    <div className="px-2 py-2">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Still needed:
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {configStatus.missingRequired.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
  }, [monitorName, nodes, nodeSuggestions, configStatus]); // Re-render when these change

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

      // Check for duplicate connections
      const isDuplicate = edges.some(
        (e) => e.source === params.source && e.target === params.target,
      );
      if (isDuplicate) {
        toast.warning("This connection already exists");
        return;
      }

      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "smoothstep",
            animated: true,
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
            },
          },
          eds,
        ),
      );

      toast.success("Nodes connected");
    },
    [nodes, edges, setEdges],
  );

  // Auto-layout function
  const handleAutoLayout = React.useCallback(() => {
    const layouted = getHierarchicalLayout(nodes, edges);
    setNodes(layouted.nodes);
    setEdges(layouted.edges);
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

      // Remove placeholder if adding the first real node
      let currentNodes = nodes;
      if (
        nodes.length === 1 &&
        nodes[0].data &&
        (nodes[0].data as { isPlaceholder?: boolean }).isPlaceholder
      ) {
        currentNodes = [];
        setNodes([]);
      }

      // Get smart position for the new node
      const position = getSmartNodePosition(typeToAdd, currentNodes);

      // Create the new node (ensure isPlaceholder is false/undefined for real nodes)
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
          isPlaceholder: false, // Explicitly set to false for real nodes
        },
      };

      // Find best source node to connect to
      const sourceNode = findBestSourceNode(typeToAdd, currentNodes, edges);

      setNodes((nds) => [
        ...(currentNodes === nds ? nds : currentNodes),
        newNode,
      ]);

      // Auto-connect if we found a suitable source
      if (sourceNode) {
        const newEdge: Edge = {
          id: `edge-${sourceNode.id}-${newNodeId}`,
          source: sourceNode.id,
          target: newNodeId,
          type: "smoothstep",
          animated: true,
          style: {
            stroke: "#6b7280",
            strokeWidth: 2,
          },
        };
        setEdges((eds) => [...eds, newEdge]);
        toast.success(`Added ${getNodeLabel(typeToAdd)} and connected it`);
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
      case NodeType.NOTIFICATION:
        return "Notification";
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
    },
    [setNodes],
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
          />

          {/* Configuration status overlay */}
          {nodes.length === 1 &&
            nodes[0].data &&
            (nodes[0].data as { isPlaceholder?: boolean }).isPlaceholder && (
              <div className="absolute top-4 left-4 right-4 max-w-md mx-auto">
                <div className="bg-background/95 backdrop-blur border rounded-lg p-4 shadow-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <SparkleAI01 className="h-4 w-4" />
                    Welcome to Monitor Builder
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Let me guide you through creating your monitor. The typical
                    flow is:
                  </p>
                  <ol className="text-sm space-y-1 mb-3">
                    <li>
                      1. Select a <strong>Network</strong> (Ethereum, Polygon,
                      etc.)
                    </li>
                    <li>
                      2. Add a <strong>Contract</strong> address to monitor
                    </li>
                    <li>
                      3. Define <strong>Conditions</strong> (events, functions,
                      or transactions)
                    </li>
                    <li>
                      4. Set up <strong>Actions</strong> (triggers or
                      notifications)
                    </li>
                  </ol>
                  <Button
                    size="sm"
                    onClick={() => handleAddNode(NodeType.NETWORK)}
                    className="w-full"
                  >
                    <PlusDefault className="h-4 w-4 mr-1" />
                    Start with Network Selection
                  </Button>
                </div>
              </div>
            )}
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
