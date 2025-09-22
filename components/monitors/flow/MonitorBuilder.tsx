"use client";

import React from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
  EdgeTypes,
  useReactFlow,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Button } from "@/components/ui/button";
import {
  NetworkSourceNode,
  AddressNode,
  EventConditionNode,
  FunctionConditionNode,
  TransactionConditionNode,
  NotificationNode,
  WebhookNode,
} from "./nodes";
import { MonitorEdge } from "./edges/MonitorEdge";
import { cn } from "@/lib/utils";
import { PlusDefault, FloppyDefault, LabFlaskConical, LayersTo } from "@/lib/icons";

/* eslint-disable @typescript-eslint/no-explicit-any */
const nodeTypes = {
  networkSource: NetworkSourceNode as any,
  address: AddressNode as any,
  eventCondition: EventConditionNode as any,
  functionCondition: FunctionConditionNode as any,
  transactionCondition: TransactionConditionNode as any,
  notification: NotificationNode as any,
  webhook: WebhookNode as any,
} satisfies NodeTypes;
/* eslint-enable @typescript-eslint/no-explicit-any */

const edgeTypes: EdgeTypes = {
  monitor: MonitorEdge,
};

interface MonitorBuilderProps {
  onNodeSelect?: (node: Node | null) => void;
  selectedNodeId?: string;
}

function MonitorBuilderInner({ onNodeSelect }: MonitorBuilderProps) {
  const reactFlowInstance = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([] as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([] as Edge[]);
  const [showNodeMenu, setShowNodeMenu] = React.useState(false);
  const [menuPosition, setMenuPosition] = React.useState({ x: 0, y: 0 });

  // Initialize with a welcome message
  React.useEffect(() => {
    if (nodes.length === 0) {
      setNodes([
        {
          id: "welcome",
          type: "networkSource",
          position: { x: 400, y: 300 },
          data: {
            label: "Start Here",
            isPlaceholder: true,
            hint: "Select a blockchain network to monitor",
          },
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onConnect = React.useCallback(
    (params: Connection) => {
      // Add validation logic here
      const sourceNode = nodes.find((n) => n.id === params.source);
      const targetNode = nodes.find((n) => n.id === params.target);

      // Validate connection based on node types
      if (!canConnect(sourceNode, targetNode)) {
        // Show error toast
        return;
      }

      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "monitor",
            animated: true,
          },
          eds
        )
      );
    },
    [nodes, setEdges]
  );

  const canConnect = (source?: Node, target?: Node): boolean => {
    if (!source || !target) return false;

    // Define connection rules
    const connectionRules: Record<string, string[]> = {
      networkSource: ["address"],
      address: ["eventCondition", "functionCondition", "transactionCondition"],
      eventCondition: ["notification", "webhook"],
      functionCondition: ["notification", "webhook"],
      transactionCondition: ["notification", "webhook"],
      notification: [],
      webhook: [],
    };

    return connectionRules[source.type || ""]?.includes(target.type || "") || false;
  };

  const onNodeClick = React.useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.data.isPlaceholder) {
        // Show node creation menu
        setShowNodeMenu(true);
        setMenuPosition({ x: node.position.x, y: node.position.y });
        return;
      }
      onNodeSelect?.(node);
    },
    [onNodeSelect]
  );

  const onPaneClick = React.useCallback(
    (event: React.MouseEvent) => {
      // Get the position in the flow
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setMenuPosition(position);
      setShowNodeMenu(true);
      onNodeSelect?.(null);
    },
    [reactFlowInstance, onNodeSelect]
  );

  const addNode = React.useCallback(
    (type: string, label: string) => {
      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type,
        position: menuPosition,
        data: { label },
      };

      // Remove placeholder if exists
      setNodes((nds) =>
        nds
          .filter((n) => !n.data.isPlaceholder)
          .concat(newNode)
      );
      setShowNodeMenu(false);
    },
    [menuPosition, setNodes]
  );

  const nodeColorMap = (node: Node) => {
    const colorMap: Record<string, string> = {
      networkSource: "#3b82f6",
      address: "#8b5cf6",
      eventCondition: "#f59e0b",
      functionCondition: "#f59e0b",
      transactionCondition: "#f59e0b",
      notification: "#10b981",
      webhook: "#10b981",
    };
    return colorMap[node.type || ""] || "#6b7280";
  };

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        className="bg-gradient-to-br from-muted/40 to-muted"
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <Controls className="bg-background border-2" />
        <MiniMap
          nodeColor={nodeColorMap}
          className="bg-background border-2"
          maskColor="rgb(0, 0, 0, 0.1)"
        />

        {/* Top Panel with Actions */}
        <Panel position="top-left" className="flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setShowNodeMenu(true)}
            className="gap-2"
          >
            <PlusDefault className="h-4 w-4" />
            Add Node
          </Button>
          <Button size="sm" variant="outline" className="gap-2">
            <LayersTo className="h-4 w-4" />
            Templates
          </Button>
        </Panel>

        <Panel position="top-right" className="flex gap-2">
          <Button size="sm" variant="outline" className="gap-2">
            <LabFlaskConical className="h-4 w-4" />
            Test
          </Button>
          <Button size="sm" className="gap-2">
            <FloppyDefault className="h-4 w-4" />
            Save Monitor
          </Button>
        </Panel>
      </ReactFlow>

      {/* Node Creation Menu */}
      {showNodeMenu && (
        <div
          className="absolute z-50 bg-background border rounded-lg shadow-xl p-2 w-64"
          style={{
            left: `${menuPosition.x}px`,
            top: `${menuPosition.y}px`,
          }}
        >
          <div className="text-sm font-medium px-2 py-1 text-muted-foreground">
            Add a node
          </div>
          <div className="space-y-1">
            <NodeMenuItem
              icon="🌐"
              label="Network"
              description="Select blockchain network"
              color="bg-blue-500/10 hover:bg-blue-500/20"
              onClick={() => addNode("networkSource", "Select Network")}
            />
            <NodeMenuItem
              icon="📋"
              label="Contract Address"
              description="Monitor specific contracts"
              color="bg-purple-500/10 hover:bg-purple-500/20"
              onClick={() => addNode("address", "Contract Address")}
            />
            <div className="border-t my-1" />
            <NodeMenuItem
              icon="⚡"
              label="Event Listener"
              description="Listen for contract events"
              color="bg-amber-500/10 hover:bg-amber-500/20"
              onClick={() => addNode("eventCondition", "Event Condition")}
            />
            <NodeMenuItem
              icon="🔧"
              label="Function Call"
              description="Monitor function calls"
              color="bg-amber-500/10 hover:bg-amber-500/20"
              onClick={() => addNode("functionCondition", "Function Monitor")}
            />
            <NodeMenuItem
              icon="💰"
              label="Transaction"
              description="Track transactions"
              color="bg-amber-500/10 hover:bg-amber-500/20"
              onClick={() => addNode("transactionCondition", "Transaction Monitor")}
            />
            <div className="border-t my-1" />
            <NodeMenuItem
              icon="🔔"
              label="Notification"
              description="Send alerts"
              color="bg-green-500/10 hover:bg-green-500/20"
              onClick={() => addNode("notification", "Send Notification")}
            />
            <NodeMenuItem
              icon="🌐"
              label="Webhook"
              description="Call external API"
              color="bg-green-500/10 hover:bg-green-500/20"
              onClick={() => addNode("webhook", "Webhook Action")}
            />
          </div>
          <button
            className="absolute -top-2 -right-2 bg-background border rounded-full p-1"
            onClick={() => setShowNodeMenu(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

function NodeMenuItem({
  icon,
  label,
  description,
  color,
  onClick,
}: {
  icon: string;
  label: string;
  description: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      className={cn(
        "w-full text-left px-3 py-2 rounded-md transition-colors",
        color
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-2">
        <span className="text-lg">{icon}</span>
        <div className="flex-1">
          <div className="font-medium text-sm">{label}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </button>
  );
}

export function MonitorBuilder(props: MonitorBuilderProps) {
  return (
    <ReactFlowProvider>
      <MonitorBuilderInner {...props} />
    </ReactFlowProvider>
  );
}