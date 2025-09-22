"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { Globe } from "@/lib/icons";

export interface NetworkSourceNodeData extends BaseNodeData {
  network?: string;
  chainId?: number;
  status?: "idle" | "valid" | "warning" | "error";
}

export function NetworkSourceNode(props: NodeProps) {
  const data = props.data as unknown as NetworkSourceNodeData;

  // Network display mapping
  const networkDisplay = React.useMemo(() => {
    const networks: Record<string, { name: string; chainId: number; color: string }> = {
      ethereum: { name: "Ethereum", chainId: 1, color: "#627EEA" },
      polygon: { name: "Polygon", chainId: 137, color: "#8247E5" },
      arbitrum: { name: "Arbitrum", chainId: 42161, color: "#28A0F0" },
      optimism: { name: "Optimism", chainId: 10, color: "#FF0420" },
      base: { name: "Base", chainId: 8453, color: "#0052FF" },
    };
    return networks[data.network || ""] || null;
  }, [data.network]);

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <Globe className="h-4 w-4" />,
        label: data.label || "Select Network",
        description: networkDisplay
          ? `Chain ID: ${networkDisplay.chainId}`
          : "Choose a blockchain to monitor",
      }}
      selected={props.selected}
      gradient={{ from: "#3b82f6", to: "#2563eb" }}
      inputs={false}
      outputs={true}
    >
      {networkDisplay && (
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: networkDisplay.color }}
          />
          <span className="text-xs font-medium">{networkDisplay.name}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            Active
          </span>
        </div>
      )}
    </BaseMonitorNode>
  );
}