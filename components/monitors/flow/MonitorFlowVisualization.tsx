"use client";

import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Panel,
  ReactFlowProvider,
  useReactFlow,
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
import { Id } from "@/convex/_generated/dataModel";
import NetworkNode from "./NetworkNode";
import MonitorNode from "./MonitorNode";
import NetworkMonitorEdge from "./NetworkMonitorEdge";
import {
  Loader2,
  ArrowUpDown,
  ArrowLeftRight,
  Filter,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Home,
  Grid3x3,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const nodeTypes = {
  network: NetworkNode,
  monitor: MonitorNode,
};

const edgeTypes = {
  networkMonitor: NetworkMonitorEdge,
};

interface MonitorFlowContentProps {
  monitorId?: Id<"monitors">;
}

function MonitorFlowContent({ monitorId }: MonitorFlowContentProps) {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onNodeClick,
    onPaneClick,
    onConnect,
    onLayout,
    filterByNetworkType,
    filterByMonitorStatus,
    isLoading,
  } = useMonitorFlow(monitorId);

  const reactFlowInstance = useReactFlow();
  const [showGrid, setShowGrid] = useState(true);
  const [snapToGrid, setSnapToGrid] = useState(true);

  // Grid snapping configuration
  const snapGrid: [number, number] = snapToGrid ? [20, 20] : [1, 1];

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    reactFlowInstance.zoomIn({ duration: 200 });
  }, [reactFlowInstance]);

  const handleZoomOut = useCallback(() => {
    reactFlowInstance.zoomOut({ duration: 200 });
  }, [reactFlowInstance]);

  const handleFitView = useCallback(() => {
    reactFlowInstance.fitView({ padding: 0.2, duration: 200 });
  }, [reactFlowInstance]);

  const handleResetView = useCallback(() => {
    reactFlowInstance.setViewport({ x: 0, y: 0, zoom: 1 }, { duration: 200 });
  }, [reactFlowInstance]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Check if any input element is focused
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case "=":
        case "+":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleZoomIn();
          }
          break;
        case "-":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleZoomOut();
          }
          break;
        case "0":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleFitView();
          }
          break;
        case "h":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            handleResetView();
          }
          break;
        case "g":
          if (!e.ctrlKey && !e.metaKey) {
            setShowGrid((prev) => !prev);
          }
          break;
        case "s":
          if (!e.ctrlKey && !e.metaKey) {
            setSnapToGrid((prev) => !prev);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleZoomIn, handleZoomOut, handleFitView, handleResetView]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Top Controls Panel */}
      <Panel position="top-left" className="m-0 p-0">
        <Card className="p-3">
          <div className="flex flex-col gap-3">
            {/* Layout Controls */}
            <div className="flex gap-2">
              {!monitorId && (
                <>
                  <Button
                    onClick={() => onLayout("LR")}
                    variant="outline"
                    size="sm"
                    title="Horizontal Layout (Alt+H)"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => onLayout("TB")}
                    variant="outline"
                    size="sm"
                    title="Vertical Layout (Alt+V)"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                  <div className="h-6 w-px bg-border" />
                </>
              )}
              <Button
                onClick={() => setShowGrid(!showGrid)}
                variant={showGrid ? "default" : "outline"}
                size="sm"
                title="Toggle Grid (G)"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setSnapToGrid(!snapToGrid)}
                variant={snapToGrid ? "default" : "outline"}
                size="sm"
                title="Toggle Snap to Grid (S)"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="6" height="6" />
                  <rect x="15" y="3" width="6" height="6" />
                  <rect x="3" y="15" width="6" height="6" />
                  <rect x="15" y="15" width="6" height="6" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </Button>
            </div>

            {/* Filter Controls - only show when not viewing single monitor */}
            {!monitorId && (
              <>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select
                    onValueChange={(value) =>
                      filterByNetworkType(
                        value as "all" | "mainnet" | "testnet",
                      )
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
                      filterByMonitorStatus(
                        value as "all" | "active" | "paused",
                      )
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
              </>
            )}
          </div>
        </Card>
      </Panel>

      {/* Zoom Controls Panel */}
      <Panel position="top-right" className="m-0 p-0">
        <Card className="p-2">
          <div className="flex gap-1">
            <Button
              onClick={handleZoomIn}
              variant="ghost"
              size="sm"
              title="Zoom In (Ctrl/Cmd + Plus)"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleZoomOut}
              variant="ghost"
              size="sm"
              title="Zoom Out (Ctrl/Cmd + Minus)"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleFitView}
              variant="ghost"
              size="sm"
              title="Fit View (Ctrl/Cmd + 0)"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleResetView}
              variant="ghost"
              size="sm"
              title="Reset View (Ctrl/Cmd + H)"
            >
              <Home className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </Panel>

      {/* Main ReactFlow Canvas */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        snapToGrid={snapToGrid}
        snapGrid={snapGrid}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        defaultEdgeOptions={{
          type: "networkMonitor",
          animated: true,
        }}
        minZoom={0.1}
        maxZoom={4}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        proOptions={{ hideAttribution: true }}
        panOnScroll
        selectionOnDrag
        panOnDrag={[1, 2]}
        zoomOnDoubleClick={false}
        deleteKeyCode={"Delete"}
        multiSelectionKeyCode={"Shift"}
        connectionLineStyle={{ stroke: "hsl(var(--muted-foreground))" }}
        style={{
          background: "hsl(var(--background))",
        }}
      >
        <Controls
          showZoom={false}
          showFitView={false}
          showInteractive={false}
          position="bottom-right"
        />
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
          className="!bg-background/95 !border-border"
          maskColor="hsl(var(--background) / 0.8)"
        />
        {showGrid && (
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1.5}
            color="hsl(var(--muted-foreground) / 0.2)"
            style={{
              backgroundColor: "hsl(var(--background))",
            }}
          />
        )}
      </ReactFlow>

      {/* Keyboard Shortcuts Info */}
      <Panel position="bottom-left" className="m-0 p-0">
        <Card className="p-2 text-xs text-muted-foreground">
          <div className="flex flex-col gap-1">
            <div>Shortcuts:</div>
            <div className="flex gap-3">
              <span>G: Grid</span>
              <span>S: Snap</span>
              <span>Ctrl+0: Fit</span>
              <span>Ctrl+H: Home</span>
            </div>
          </div>
        </Card>
      </Panel>
    </div>
  );
}

interface MonitorFlowVisualizationProps {
  monitorId?: Id<"monitors">;
}

export function MonitorFlowVisualization({
  monitorId,
}: MonitorFlowVisualizationProps) {
  return (
    <ReactFlowProvider>
      <MonitorFlowContent monitorId={monitorId} />
    </ReactFlowProvider>
  );
}
