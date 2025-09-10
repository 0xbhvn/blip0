"use client";

import React from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { BaseNodeData } from "@/lib/types/nodeEditor";

interface BaseNodeProps extends NodeProps {
  children: React.ReactNode;
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
  children,
  icon,
  showTargetHandle = true,
  showSourceHandle = true,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
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
          "min-w-[200px] transition-all duration-200",
          selected && "ring-2 ring-primary",
          hasErrors && "border-destructive",
          nodeData.isEditing && "ring-2 ring-blue-500",
          className,
        )}
      >
        <CardContent className="p-3">
          <div className="flex items-center gap-2 mb-2">
            {icon && <span className="text-lg">{icon}</span>}
            <span className="font-medium text-sm">{nodeData.label}</span>
            {!nodeData.isValid && (
              <AlertCircle className="h-3 w-3 text-destructive ml-auto" />
            )}
          </div>

          {children}

          {hasErrors && (
            <div className="mt-2 space-y-1">
              {nodeData.validationErrors?.map((error, index) => (
                <p key={index} className="text-xs text-destructive">
                  {error}
                </p>
              ))}
            </div>
          )}
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
