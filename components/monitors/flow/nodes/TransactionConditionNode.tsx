"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { SwapArrowHorizontal } from "@/lib/icons";

export interface TransactionConditionNodeData extends BaseNodeData {
  txStatus?: "Success" | "Failed" | "Any";
  valueThreshold?: string;
  gasThreshold?: string;
  fromAddress?: string;
  toAddress?: string;
}

export function TransactionConditionNode(props: NodeProps) {
  const data = props.data as unknown as TransactionConditionNodeData;

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <SwapArrowHorizontal className="h-4 w-4" />,
        label: data.label || "Transaction Monitor",
        description: "Monitor transaction patterns",
      }}
      selected={props.selected}
      gradient={{ from: "#f59e0b", to: "#d97706" }}
      inputs={true}
      outputs={true}
    >
      {(data.txStatus || data.valueThreshold) && (
        <div className="space-y-1">
          {data.txStatus && data.txStatus !== "Any" && (
            <div className="text-xs bg-amber-500/10 rounded px-2 py-1">
              Status: {data.txStatus}
            </div>
          )}
          {data.valueThreshold && (
            <div className="text-xs bg-amber-500/10 rounded px-2 py-1">
              Value {">"} {data.valueThreshold} ETH
            </div>
          )}
        </div>
      )}
    </BaseMonitorNode>
  );
}