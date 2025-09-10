"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { FunctionConditionNodeData } from "@/lib/types/nodeEditor";
import { Code } from "lucide-react";

function FunctionConditionNode(props: NodeProps) {
  const data = props.data as unknown as FunctionConditionNodeData;

  return (
    <BaseNode {...props} icon={<Code className="h-4 w-4" />}>
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
            Click to add function
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(FunctionConditionNode);
