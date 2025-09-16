"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { BaseNodeData } from "@/lib/types/nodeEditor";

interface BaseNodeProps extends NodeProps {
  icon?: React.ReactNode;
  showTargetHandle?: boolean;
  showSourceHandle?: boolean;
  targetPosition?: Position;
  sourcePosition?: Position;
  className?: string;
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
}: BaseNodeProps) {
  const nodeData = data as unknown as BaseNodeData;
  const hasErrors =
    nodeData.validationErrors && nodeData.validationErrors.length > 0;

  return (
    <>
      {showTargetHandle && (
        <Handle
          type="target"
          position={targetPosition}
          className="!bg-green-500 !border-2 !border-green-600 hover:!bg-green-400 transition-all hover:scale-125"
          style={{
            width: 14,
            height: 14,
            boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.2)",
          }}
        />
      )}

      <Card
        className={cn(
          "w-[200px] h-[60px] transition-all duration-200 cursor-pointer",
          selected && "ring-2 ring-primary",
          hasErrors && "border-destructive",
          nodeData.isEditing && "ring-2 ring-blue-500",
          className,
        )}
      >
        <CardContent className="p-3 h-full flex items-center">
          <div className="flex items-center gap-2 w-full">
            {icon && <span className="text-lg shrink-0">{icon}</span>}
            <span className="font-medium text-sm truncate flex-1">
              {nodeData.label}
            </span>
            {!nodeData.isValid && (
              <AlertCircle className="h-3 w-3 text-destructive shrink-0" />
            )}
          </div>
        </CardContent>
      </Card>

      {showSourceHandle && (
        <Handle
          type="source"
          position={sourcePosition}
          className="!bg-blue-500 !border-2 !border-blue-600 hover:!bg-blue-400 transition-all hover:scale-125"
          style={{
            width: 14,
            height: 14,
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.2)",
          }}
        />
      )}
    </>
  );
}
