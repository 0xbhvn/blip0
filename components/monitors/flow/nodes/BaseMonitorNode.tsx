"use client";

import React from "react";
import { Handle, Position } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { MessageCheck, AlertCircle, InformationCircle } from "@/lib/icons";

export interface BaseNodeData {
  label: string;
  icon?: React.ReactNode | string;
  description?: string;
  status?: "idle" | "valid" | "warning" | "error";
  statusMessage?: string;
  isPlaceholder?: boolean;
  hint?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: Record<string, any>;
}

interface BaseMonitorNodeProps {
  data: BaseNodeData;
  selected?: boolean;
  color?: string;
  gradient?: { from: string; to: string };
  children?: React.ReactNode;
  inputs?: boolean;
  outputs?: boolean;
  maxInputs?: number;
  maxOutputs?: number;
}

export function BaseMonitorNode({
  data,
  selected,
  gradient,
  children,
  inputs = true,
  outputs = true,
}: BaseMonitorNodeProps) {
  const gradientStyle = gradient
    ? {
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      }
    : undefined;

  const statusIcon = React.useMemo(() => {
    switch (data.status) {
      case "valid":
        return <MessageCheck className="h-3 w-3 text-green-500" />;
      case "warning":
        return <AlertCircle className="h-3 w-3 text-amber-500" />;
      case "error":
        return <AlertCircle className="h-3 w-3 text-red-500" />;
      default:
        return null;
    }
  }, [data.status]);

  return (
    <div
      className={cn(
        "relative rounded-xl border-2 bg-background shadow-sm transition-all duration-200",
        "hover:shadow-lg hover:-translate-y-0.5",
        selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
        data.status === "error" && "border-red-500",
        data.status === "warning" && "border-amber-500",
        data.status === "valid" && "border-green-500",
        !data.status && "border-border",
        data.isPlaceholder && "border-dashed opacity-60"
      )}
      style={gradientStyle ? { borderColor: "transparent" } : undefined}
    >
      {/* Gradient Background Overlay */}
      {gradientStyle && (
        <div
          className="absolute inset-0 rounded-xl opacity-10"
          style={gradientStyle}
        />
      )}

      {/* Input Handles */}
      {inputs && (
        <Handle
          type="target"
          position={Position.Left}
          className={cn(
            "!w-3 !h-3 !border-2 !border-background",
            "!bg-primary hover:!bg-primary/80",
            "transition-all duration-200",
            data.isPlaceholder && "!opacity-0"
          )}
          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        />
      )}

      {/* Node Content */}
      <div className="relative px-4 py-3 min-w-[180px] max-w-[280px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          {/* Icon */}
          {data.icon && (
            <div className="text-lg flex-shrink-0">
              {typeof data.icon === "string" ? data.icon : data.icon}
            </div>
          )}

          {/* Label */}
          <div className="flex-1 font-medium text-sm truncate">
            {data.label}
          </div>

          {/* Status Icon */}
          {statusIcon && (
            <div className="flex-shrink-0">{statusIcon}</div>
          )}
        </div>

        {/* Description or Hint */}
        {(data.description || data.hint) && (
          <div className="text-xs text-muted-foreground mt-1">
            {data.hint ? (
              <div className="flex items-center gap-1">
                <InformationCircle className="h-3 w-3" />
                {data.hint}
              </div>
            ) : (
              data.description
            )}
          </div>
        )}

        {/* Custom Children Content */}
        {children && (
          <div className="mt-2 pt-2 border-t border-border/50">
            {children}
          </div>
        )}

        {/* Status Message */}
        {data.statusMessage && (
          <div
            className={cn(
              "text-xs mt-2 pt-2 border-t",
              data.status === "error" && "text-red-500 border-red-500/20",
              data.status === "warning" && "text-amber-500 border-amber-500/20",
              data.status === "valid" && "text-green-500 border-green-500/20"
            )}
          >
            {data.statusMessage}
          </div>
        )}

        {/* Connection Hint for Placeholder */}
        {data.isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm">
            <div className="text-center px-4">
              <div className="text-sm font-medium mb-1">Click to start</div>
              <div className="text-xs text-muted-foreground">
                {data.hint || "Add your first node"}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Output Handles */}
      {outputs && !data.isPlaceholder && (
        <Handle
          type="source"
          position={Position.Right}
          className={cn(
            "!w-3 !h-3 !border-2 !border-background",
            "!bg-primary hover:!bg-primary/80",
            "transition-all duration-200"
          )}
          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
        />
      )}

      {/* Connection Hints - Pulsing dots when hovering */}
      {!data.isPlaceholder && (
        <>
          {inputs && (
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          )}
          {outputs && (
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          )}
        </>
      )}
    </div>
  );
}