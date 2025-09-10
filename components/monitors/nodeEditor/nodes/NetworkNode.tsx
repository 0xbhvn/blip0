"use client";

import React, { memo } from "react";
import { NodeProps } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { NetworkNodeData } from "@/lib/types/nodeEditor";
import { Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function NetworkNode(props: NodeProps) {
  const data = props.data as unknown as NetworkNodeData;

  return (
    <BaseNode {...props} icon={<Network className="h-4 w-4" />}>
      <div className="space-y-1">
        {data.networkSlug ? (
          <>
            <p className="font-medium text-sm">
              {data.networkName || data.networkSlug}
            </p>
            {data.chainId && data.chainId !== 0 && (
              <Badge variant="secondary" className="text-xs">
                Chain ID: {data.chainId}
              </Badge>
            )}
          </>
        ) : (
          <p className="text-muted-foreground italic text-sm">
            Click to select network
          </p>
        )}
      </div>
    </BaseNode>
  );
}

export default memo(NetworkNode);
