"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { AddressNodeData } from "@/lib/types/nodeEditor";
import { FileCode } from "lucide-react";

function AddressNode(props: NodeProps) {
  const data = props.data as unknown as AddressNodeData;

  return (
    <BaseNode {...props} icon={<FileCode className="h-4 w-4" />}>
      <div className="space-y-1">
        {data.address ? (
          <>
            <p className="font-mono text-xs truncate">{data.address}</p>
            {data.contractSpec && (
              <p className="text-xs text-muted-foreground">
                {data.contractSpec.length} ABI entries
              </p>
            )}
          </>
        ) : (
          <p className="text-muted-foreground italic text-sm">
            Click to add address
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(AddressNode);
