"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { NodeType } from "@/lib/types/nodeEditor";
import { NotificationNodeData } from "@/lib/types/nodeEditor";
import {
  GlobeNetwork,
  FileCode,
  LightningThunderElectricOn,
  CodeAI,
  Exchange01,
  ClockDefault,
  NotificationBellOn,
  EnvelopeAI,
  Globe,
  ChatDefault,
} from "@/lib/icons/solid";

function UnifiedNode(props: NodeProps) {
  const getIcon = () => {
    const nodeType = props.type as NodeType;

    switch (nodeType) {
      case NodeType.NETWORK:
        return <GlobeNetwork size={10} />;

      case NodeType.ADDRESS:
        return <FileCode size={10} />;

      case NodeType.EVENT_CONDITION:
        return <LightningThunderElectricOn size={10} />;

      case NodeType.FUNCTION_CONDITION:
        return <CodeAI size={10} />;

      case NodeType.TRANSACTION_CONDITION:
        return <Exchange01 size={10} />;

      case NodeType.TRIGGER:
        return <ClockDefault size={10} />;

      case NodeType.NOTIFICATION:
        // Special case: notification icon changes based on type
        const notificationData = props.data as unknown as NotificationNodeData;
        switch (notificationData.type) {
          case "email":
            return <EnvelopeAI size={10} />;
          case "webhook":
            return <Globe size={10} />;
          case "slack":
            return <ChatDefault size={10} />;
          default:
            return <NotificationBellOn size={10} />;
        }

      default:
        return null;
    }
  };

  return <BaseNode {...props} icon={getIcon()} />;
}

export default memo(UnifiedNode);
