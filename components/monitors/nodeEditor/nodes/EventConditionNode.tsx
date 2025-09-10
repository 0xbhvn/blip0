"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { EventConditionNodeData } from "@/lib/types/nodeEditor";
import { Zap } from "lucide-react";

function EventConditionNode(props: NodeProps) {
  const data = props.data as unknown as EventConditionNodeData;

  return (
    <BaseNode {...props} icon={<Zap className="h-4 w-4" />}>
      <div className="space-y-1">
        {data.signature ? (
          <>
            <p className="font-mono text-xs truncate">{data.signature}</p>
            {data.expression && (
              <p className="text-xs text-muted-foreground truncate">
                Filter: {data.expression}
              </p>
            )}
          </>
        ) : (
          <p className="text-muted-foreground italic text-sm">
            Click to add event
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(EventConditionNode);
