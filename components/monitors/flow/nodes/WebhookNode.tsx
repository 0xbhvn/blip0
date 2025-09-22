"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { Globe } from "@/lib/icons";

export interface WebhookNodeData extends BaseNodeData {
  url?: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  retryOnFail?: boolean;
  timeout?: number;
}

export function WebhookNode(props: NodeProps) {
  const data = props.data as unknown as WebhookNodeData;

  const formatUrl = (url?: string) => {
    if (!url) return "Not configured";
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return "Invalid URL";
    }
  };

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <Globe className="h-4 w-4" />,
        label: data.label || "Webhook Action",
        description: data.url
          ? `Call ${formatUrl(data.url)}`
          : "Configure webhook endpoint",
      }}
      selected={props.selected}
      gradient={{ from: "#10b981", to: "#059669" }}
      inputs={true}
      outputs={false}
    >
      {data.url && (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-green-500/10 px-1 rounded">
              {data.method || "POST"}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {formatUrl(data.url)}
            </span>
          </div>
          {data.retryOnFail && (
            <div className="text-xs text-green-600">
              ✓ Retry on failure
            </div>
          )}
        </div>
      )}
    </BaseMonitorNode>
  );
}