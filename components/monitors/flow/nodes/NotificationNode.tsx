"use client";

import React from "react";
import { NodeProps } from "@xyflow/react";
import { BaseMonitorNode, BaseNodeData } from "./BaseMonitorNode";
import { NotificationBellOn } from "@/lib/icons";

export interface NotificationNodeData extends BaseNodeData {
  channel?: "email" | "slack" | "discord" | "telegram" | "webhook";
  recipients?: string[];
  messageTemplate?: string;
  priority?: "low" | "medium" | "high";
}

export function NotificationNode(props: NodeProps) {
  const data = props.data as unknown as NotificationNodeData;

  const channelIcon = React.useMemo(() => {
    const icons: Record<string, string> = {
      email: "✉️",
      slack: "💬",
      discord: "🎮",
      telegram: "✈️",
      webhook: "🌐",
    };
    return icons[data.channel || ""] || "🔔";
  }, [data.channel]);

  return (
    <BaseMonitorNode
      data={{
        ...data,
        ...data,
        icon: <NotificationBellOn className="h-4 w-4" />,
        label: data.label || "Send Notification",
        description: data.channel
          ? `Alert via ${data.channel}`
          : "Choose notification channel",
      }}
      selected={props.selected}
      gradient={{ from: "#10b981", to: "#059669" }}
      inputs={true}
      outputs={false}
    >
      {data.channel && (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">{channelIcon}</span>
            <span className="text-xs capitalize">{data.channel}</span>
            {data.priority === "high" && (
              <span className="text-xs px-1 bg-red-500/20 text-red-500 rounded">
                High Priority
              </span>
            )}
          </div>
          {data.recipients && data.recipients.length > 0 && (
            <div className="text-xs text-muted-foreground">
              {data.recipients.length} recipient{data.recipients.length > 1 ? "s" : ""}
            </div>
          )}
        </div>
      )}
    </BaseMonitorNode>
  );
}