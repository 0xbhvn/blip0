"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { BaseNodeData } from "@/lib/types/nodeEditor";
import { NodeType } from "@/lib/types/nodeEditor";
import { NODE_SIZE_CLASSES, NodeSizeVariant } from "@/lib/design-system/tokens";

interface BaseNodeProps extends NodeProps {
  icon?: React.ReactNode;
  showTargetHandle?: boolean;
  showSourceHandle?: boolean;
  targetPosition?: Position;
  sourcePosition?: Position;
  className?: string;
  nodeType?: NodeType;
  statusBadge?: number;
  showTriggerIndicator?: boolean;
  size?: NodeSizeVariant;
}

export function BaseNode({
  data,
  selected,
  icon,
  showTargetHandle = true,
  showSourceHandle = true,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
  className,
  type,
  statusBadge,
  showTriggerIndicator = false,
  size = "compact", // Changed from "standard" to "compact" to match dashboard (40px height)
}: BaseNodeProps) {
  const nodeData = data as unknown as BaseNodeData;
  const hasErrors =
    nodeData.validationErrors && nodeData.validationErrors.length > 0;

  // Determine node style based on type
  const getNodeStyle = () => {
    const nodeType = type as NodeType;

    switch (nodeType) {
      case NodeType.EVENT_CONDITION:
      case NodeType.FUNCTION_CONDITION:
      case NodeType.TRANSACTION_CONDITION:
        return "bg-amber-50 border-amber-400 dark:bg-amber-950/20 dark:border-amber-700";

      case NodeType.TRIGGER:
      case NodeType.NOTIFICATION:
        return "bg-white border-slate-200 dark:bg-zinc-900 dark:border-zinc-800";

      default:
        return "bg-white border-slate-200 dark:bg-zinc-900 dark:border-zinc-800";
    }
  };

  return (
    <div className="relative">
      {showTargetHandle && (
        <>
          <Handle
            type="target"
            position={targetPosition}
            className="!bg-transparent !border-0 hover:scale-110 transition-all"
            style={{
              width: 10,
              height: 10,
            }}
          />
        </>
      )}

      <div
        className={cn(
          "flow-node-card",
          NODE_SIZE_CLASSES[size].container,
          "rounded-md border", // Changed from rounded-xl/rounded-lg to rounded-md to match Button
          "shadow-xs", // Changed to match Button's shadow-xs
          "transition-all duration-75",
          "cursor-pointer",
          "hover:border-blue-500",
          "hover:bg-accent hover:text-accent-foreground", // Match Button hover behavior
          "active:bg-slate-50 dark:active:bg-zinc-800",
          getNodeStyle(),
          selected && "!ring-2 !ring-blue-500",
          hasErrors && "!border-orange-500",
          nodeData.isEditing && "!ring-2 !ring-blue-600",
          className,
        )}
      >
        <div className="h-full flex items-center overflow-hidden">
          <div className="flex flex-row items-center justify-between w-full gap-0">
            <div className="min-w-0 flex-1 flex items-center overflow-hidden">
              <div className={cn("relative w-full overflow-hidden", NODE_SIZE_CLASSES[size].padding)}>
                <div className="flex flex-row gap-2 w-full items-center justify-start">
                  {/* Icon */}
                  {icon && (
                    <div className="relative flex-shrink-0">
                      <div className="node-icon-container border-slate-200 dark:border-zinc-700">
                        {React.isValidElement(icon)
                          ? React.cloneElement(
                              icon as React.ReactElement<{
                                className?: string;
                              }>,
                              {
                                className: "h-4 w-4",
                              },
                            )
                          : icon}
                      </div>

                      {/* Trigger indicator overlay */}
                      {showTriggerIndicator && (
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          className="trigger-indicator absolute"
                        >
                          <g>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M 2.5 7.5 L 5 7.5 L 5 10.5 L 8.5 5.5 L 6 5.5 L 6 2.5 Z"
                              className="trigger-indicator-bg fill-white dark:fill-zinc-900"
                              strokeWidth="5"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M 2.5 7.5 L 5 7.5 L 5 10.5 L 8.5 5.5 L 6 5.5 L 6 2.5 Z"
                              className="trigger-indicator-bolt"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      )}
                    </div>
                  )}

                  {/* Label */}
                  <div className="flex min-w-0 grow flex-row items-center justify-start gap-2 overflow-hidden">
                    <p className="text-sm font-medium text-slate-900 dark:text-zinc-100 truncate">
                      {nodeData.label}
                    </p>
                  </div>

                  {/* Status badge */}
                  {statusBadge !== undefined && (
                    <div className="node-status-badge flex-shrink-0">{statusBadge}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Right side actions */}
            {hasErrors && (
              <div className="shrink-0 pr-3">
                <button
                  type="button"
                  className="focus:outline-none rounded-md border-0 transition-colors flex h-5 w-5 items-center justify-center p-0.5 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  <AlertCircle className="node-warning-icon h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSourceHandle && (
        <>
          <Handle
            type="source"
            position={sourcePosition}
            className="!bg-transparent !border-0 hover:scale-110 transition-all"
            style={{
              width: 10,
              height: 10,
            }}
          />
        </>
      )}
    </div>
  );
}