"use client";

import React from "react";
import {
  BaseEdge,
  EdgeProps,
  getSmoothStepPath,
  EdgeLabelRenderer,
} from "@xyflow/react";
import { cn } from "@/lib/utils";

export function MonitorEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  selected,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 8,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          stroke: selected ? "#3b82f6" : "#94a3b8",
          strokeWidth: selected ? 2 : 1.5,
          strokeDasharray: selected ? "0" : "5 5",
          animation: selected ? "dash 0.5s linear infinite" : undefined,
        }}
        className={cn(
          "transition-all duration-200",
          "hover:!stroke-primary"
        )}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className={cn(
            "px-2 py-0.5 bg-background border rounded-md shadow-sm",
            "text-xs text-muted-foreground",
            "opacity-0 hover:opacity-100 transition-opacity duration-200",
            selected && "opacity-100"
          )}
        >
          Connect
        </div>
      </EdgeLabelRenderer>
    </>
  );
}