"use client";

import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMonitorFlow } from "@/hooks/useMonitorFlow";
import NetworkNode from "./NetworkNode";
import MonitorNode from "./MonitorNode";
import NetworkMonitorEdge from "./NetworkMonitorEdge";
import { Loader2, ArrowUpDown, ArrowLeftRight, Filter } from "lucide-react";

const nodeTypes = {
  network: NetworkNode,
  monitor: MonitorNode,
};

const edgeTypes = {
  networkMonitor: NetworkMonitorEdge,
};

export function MonitorFlowVisualization() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onNodeClick,
    onPaneClick,
    onLayout,
    filterByNetworkType,
    filterByMonitorStatus,
    isLoading,
  } = useMonitorFlow();

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Card className="absolute left-4 top-4 z-10 p-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button
              onClick={() => onLayout("LR")}
              variant="outline"
              size="sm"
              title="Horizontal Layout"
            >
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => onLayout("TB")}
              variant="outline"
              size="sm"
              title="Vertical Layout"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select
              onValueChange={(value) =>
                filterByNetworkType(value as "all" | "mainnet" | "testnet")
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Network Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Networks</SelectItem>
                <SelectItem value="mainnet">Mainnet</SelectItem>
                <SelectItem value="testnet">Testnet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select
              onValueChange={(value) =>
                filterByMonitorStatus(value as "all" | "active" | "paused")
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Monitor Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Monitors</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        defaultEdgeOptions={{
          type: "networkMonitor",
          animated: true,
        }}
      >
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            if (node.type === "network") {
              const data = node.data as { network: { type: string } };
              return data.network.type === "mainnet" ? "#3b82f6" : "#a855f7";
            }
            return "#10b981";
          }}
          pannable
          zoomable
        />
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
