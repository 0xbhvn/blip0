"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { LightningThunderElectricOn } from "@/lib/icons";

export interface EventConditionNodeData extends BaseNodeData {
  eventName?: string;
  eventSignature?: string;
  filters?: Array<{ field: string; operator: string; value: string }>;
}

export function EventConditionNode(props: NodeProps) {
  const data = props.data as unknown as EventConditionNodeData;

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <LightningThunderElectricOn className="h-4 w-4" />,
        label: data.eventName || "Event Listener",
        description: data.eventSignature
          ? "When this event fires..."
          : "Select an event to monitor",
      }}
      selected={props.selected}
      gradient={{ from: "#f59e0b", to: "#d97706" }}
      inputs={true}
      outputs={true}
    >
      {data.filters && data.filters.length > 0 && (
        <div className="space-y-1">
          <div className="text-xs text-muted-foreground">Filters:</div>
          {data.filters.slice(0, 2).map((filter, index) => (
            <div key={index} className="text-xs bg-amber-500/10 rounded px-2 py-1">
              {filter.field} {filter.operator} {filter.value}
            </div>
          ))}
          {data.filters.length > 2 && (
            <div className="text-xs text-muted-foreground">
              +{data.filters.length - 2} more
            </div>
          )}
        </div>
      )}
    </BaseMonitorNode>
  );
}