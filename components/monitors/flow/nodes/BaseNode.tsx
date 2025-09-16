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
          className="!bg-transparent !border-0 hover:scale-110 transition-all"
          style={{
            width: 10,
            height: 10,
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
          className="!bg-transparent !border-0 hover:scale-110 transition-all"
          style={{
            width: 10,
            height: 10,
          }}
        />
      )}
    </>
  );
}
