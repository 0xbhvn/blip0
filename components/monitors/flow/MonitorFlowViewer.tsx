"use client";

import React, { useMemo, useCallback, useState } from "react";
import { ReactFlowProvider, Panel } from "@xyflow/react";
import { MonitorFlowCanvas } from "./MonitorFlowCanvas";
import { monitorToFlow, hasFlowData } from "@/lib/helpers/flowConverter";
import type { Doc } from "@/convex/_generated/dataModel";
import { Node } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Monitor = Doc<"monitors">;

export interface MonitorFlowViewerProps {
  monitor: Monitor;
  className?: string;
  showControls?: boolean;
  showMinimap?: boolean;
  interactive?: boolean;
  onNodeClick?: (node: Node) => void;
  fullscreen?: boolean;
}

/**
 * Read-only viewer component for displaying monitor flows
 * Optimized for visualization with optional interaction
 */
export function MonitorFlowViewer({
  monitor,
  className = "",
  showControls = false,
  showMinimap = false,
  interactive = false,
  onNodeClick,
  fullscreen = false,
}: MonitorFlowViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(fullscreen);

  // Generate flow data from monitor
  const flowData = useMemo(() => {
    if (!hasFlowData(monitor)) {
      return { nodes: [], edges: [] };
    }
    return monitorToFlow(monitor);
  }, [monitor]);

  // Handle node click if interaction is allowed
  const handleNodeClick = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (interactive && onNodeClick) {
        event.stopPropagation();
        onNodeClick(node);
      }
    },
    [interactive, onNodeClick],
  );

  // Check if there's any flow data to display
  if (!hasFlowData(monitor)) {
    return (
      <div
        className={cn(
          "flex items-center justify-center h-full bg-muted/10 rounded-lg",
          className,
        )}
      >
        <p className="text-muted-foreground">No flow visualization available</p>
      </div>
    );
  }

  const viewerContent = (
    <MonitorFlowCanvas
      nodes={flowData.nodes}
      edges={flowData.edges}
      onNodeClick={interactive ? handleNodeClick : undefined}
      isInteractive={false}
      fitView={true}
      showControls={showControls}
      showMiniMap={showMinimap}
      showBackground={true}
      className={className}
    >
      {/* Custom controls for viewer */}
      {showControls && (
        <Panel
          position="top-right"
          className="bg-background/95 backdrop-blur-sm rounded-lg shadow-lg p-2"
        >
          <div className="flex gap-1">
            {/* Zoom controls removed - handled by ReactFlow internally */}
            {fullscreen !== undefined && (
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
        </Panel>
      )}
    </MonitorFlowCanvas>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        <ReactFlowProvider>{viewerContent}</ReactFlowProvider>
      </div>
    );
  }

  return <ReactFlowProvider>{viewerContent}</ReactFlowProvider>;
}

/**
 * Lightweight preview component for monitor flows
 * Used in cards and lists for quick visualization
 */
export function MonitorFlowPreview({
  monitor,
  className = "",
}: {
  monitor: Monitor;
  className?: string;
}) {
  const flowData = useMemo(() => {
    if (!hasFlowData(monitor)) {
      return { nodes: [], edges: [] };
    }
    return monitorToFlow(monitor);
  }, [monitor]);

  if (!hasFlowData(monitor)) {
    return null;
  }

  return (
    <ReactFlowProvider>
      <div className={cn("h-48 w-full", className)}>
        <MonitorFlowCanvas
          nodes={flowData.nodes}
          edges={flowData.edges}
          isInteractive={false}
          fitView={true}
          showControls={false}
          showMiniMap={false}
          showBackground={false}
          className="rounded-lg border bg-muted/5"
        />
      </div>
    </ReactFlowProvider>
  );
}
