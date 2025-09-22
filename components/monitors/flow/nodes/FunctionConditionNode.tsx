"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { Code } from "@/lib/icons";

export interface FunctionConditionNodeData extends BaseNodeData {
  functionName?: string;
  functionSignature?: string;
  parameters?: Array<{ name: string; type: string; value?: string }>;
}

export function FunctionConditionNode(props: NodeProps) {
  const data = props.data as unknown as FunctionConditionNodeData;

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <Code className="h-4 w-4" />,
        label: data.functionName || "Function Monitor",
        description: data.functionSignature
          ? "When this function is called..."
          : "Select a function to monitor",
      }}
      selected={props.selected}
      gradient={{ from: "#f59e0b", to: "#d97706" }}
      inputs={true}
      outputs={true}
    >
      {data.parameters && data.parameters.length > 0 && (
        <div className="space-y-1">
          <div className="text-xs text-muted-foreground">Parameters:</div>
          {data.parameters.slice(0, 2).map((param, index) => (
            <div key={index} className="text-xs bg-amber-500/10 rounded px-2 py-1">
              {param.name}: {param.type}
            </div>
          ))}
        </div>
      )}
    </BaseMonitorNode>
  );
}