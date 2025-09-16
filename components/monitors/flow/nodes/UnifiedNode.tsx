"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { NodeType } from "@/lib/types/nodeEditor";
import { NotificationNodeData } from "@/lib/types/nodeEditor";
import {
  Network,
  FileCode,
  Zap,
  Code,
  ArrowRightLeft,
  Bell,
  Mail,
  Globe,
  MessageSquare,
} from "lucide-react";

function UnifiedNode(props: NodeProps) {
  const getIcon = () => {
    const nodeType = props.type as NodeType;

    switch (nodeType) {
      case NodeType.NETWORK:
        return <Network className="h-4 w-4" />;

      case NodeType.ADDRESS:
        return <FileCode className="h-4 w-4" />;

      case NodeType.EVENT_CONDITION:
        return <Zap className="h-4 w-4" />;

      case NodeType.FUNCTION_CONDITION:
        return <Code className="h-4 w-4" />;

      case NodeType.TRANSACTION_CONDITION:
        return <ArrowRightLeft className="h-4 w-4" />;

      case NodeType.TRIGGER:
        return <Bell className="h-4 w-4" />;

      case NodeType.NOTIFICATION:
        // Special case: notification icon changes based on type
        const notificationData = props.data as unknown as NotificationNodeData;
        switch (notificationData.type) {
          case "email":
            return <Mail className="h-4 w-4" />;
          case "webhook":
            return <Globe className="h-4 w-4" />;
          case "slack":
            return <MessageSquare className="h-4 w-4" />;
          default:
            return <Mail className="h-4 w-4" />;
        }

      default:
        return null;
    }
  };

  return <BaseNode {...props} icon={getIcon()} />;
}

export default memo(UnifiedNode);
