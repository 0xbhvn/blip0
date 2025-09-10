"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { NotificationNodeData } from "@/lib/types/nodeEditor";
import { Mail, Globe, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function NotificationNode(props: NodeProps) {
  const data = props.data as unknown as NotificationNodeData;

  const getIcon = () => {
    switch (data.type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "webhook":
        return <Globe className="h-4 w-4" />;
      case "slack":
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <BaseNode {...props} icon={getIcon()}>
      <div className="space-y-1">
        <Badge variant="outline" className="text-xs">
          {data.type}
        </Badge>
        {Boolean(data.configuration?.email) && (
          <p className="text-xs text-muted-foreground truncate">
            {String(data.configuration.email)}
          </p>
        )}
        {Boolean(data.configuration?.url) && (
          <p className="text-xs text-muted-foreground truncate">
            {String(data.configuration.url)}
          </p>
        )}
        {!data.configuration?.email && !data.configuration?.url && (
          <p className="text-muted-foreground italic text-sm">
            Click to configure
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(NotificationNode);
