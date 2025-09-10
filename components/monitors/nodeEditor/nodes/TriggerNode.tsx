"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { TriggerNodeData } from "@/lib/types/nodeEditor";
import { Bell } from "lucide-react";

function TriggerNode(props: NodeProps) {
  const data = props.data as unknown as TriggerNodeData;

  return (
    <BaseNode {...props} icon={<Bell className="h-4 w-4" />}>
      <div className="space-y-1">
        {data.triggerId ? (
          <p className="text-sm">{data.triggerName || data.triggerId}</p>
        ) : (
          <p className="text-muted-foreground italic text-sm">
            Click to select trigger
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(TriggerNode);
