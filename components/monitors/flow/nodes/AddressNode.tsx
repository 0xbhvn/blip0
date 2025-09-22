"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { FileText } from "@/lib/icons";

export interface AddressNodeData extends BaseNodeData {
  address?: string;
  contractType?: string;
  isVerified?: boolean;
}

export function AddressNode(props: NodeProps) {
  const data = props.data as unknown as AddressNodeData;

  const formatAddress = (addr?: string) => {
    if (!addr) return "Not set";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <FileText className="h-4 w-4" />,
        label: data.label || "Contract Address",
        description: data.address
          ? formatAddress(data.address)
          : "Add contract address",
      }}
      selected={props.selected}
      gradient={{ from: "#8b5cf6", to: "#7c3aed" }}
      inputs={true}
      outputs={true}
    >
      {data.address && (
        <div className="space-y-1">
          {data.contractType && (
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 bg-purple-500/10 rounded">
                {data.contractType}
              </span>
              {data.isVerified && (
                <span className="text-xs text-green-500">✓ Verified</span>
              )}
            </div>
          )}
        </div>
      )}
    </BaseMonitorNode>
  );
}