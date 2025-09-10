"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { TransactionConditionNodeData } from "@/lib/types/nodeEditor";
import { ArrowRightLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function TransactionConditionNode(props: NodeProps) {
  const data = props.data as unknown as TransactionConditionNodeData;

  return (
    <BaseNode {...props} icon={<ArrowRightLeft className="h-4 w-4" />}>
      <div className="space-y-1">
        {data.status && (
          <Badge
            variant={data.status === "Success" ? "default" : "destructive"}
          >
            {data.status}
          </Badge>
        )}
        {data.expression ? (
          <p className="text-xs text-muted-foreground truncate">
            Filter: {data.expression}
          </p>
        ) : (
          <p className="text-muted-foreground italic text-sm">
            Click to configure
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(TransactionConditionNode);
