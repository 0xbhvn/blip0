"use client";

import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { NetworkData, getNetworkIcon, getNetworkColor } from "@/lib/helpers";
import { Globe, Link, User } from "lucide-react";

function NetworkNode({ data, selected }: NodeProps) {
  const { network } = data as { network: NetworkData };
  const color = getNetworkColor(network.type);
  const icon = getNetworkIcon(network.chainId);

  return (
    <>
      <Card
        className={cn(
          "w-[280px] transition-all duration-200",
          selected && "ring-2 ring-primary",
          network.active !== false && "border-l-4",
          network.active !== false && color === "blue" && "border-l-blue-500",
          network.active !== false &&
            color === "purple" &&
            "border-l-purple-500",
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-semibold text-sm">{network.name}</h3>
                <p className="text-xs text-muted-foreground">
                  Chain ID: {network.chainId}
                </p>
              </div>
            </div>
            <Badge
              variant={network.type === "mainnet" ? "default" : "secondary"}
              className="text-xs"
            >
              {network.type}
            </Badge>
          </div>

          <div className="space-y-1 mt-3">
            {network.rpcUrl && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Link className="h-3 w-3" />
                <span className="truncate">
                  {new URL(network.rpcUrl).hostname}
                </span>
              </div>
            )}

            {network.blockExplorerUrl && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span className="truncate">
                  {new URL(network.blockExplorerUrl).hostname}
                </span>
              </div>
            )}

            {network.createdByName && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" />
                <span>{network.createdByName}</span>
              </div>
            )}
          </div>

          {network.active === false && (
            <Badge variant="outline" className="mt-2 text-xs">
              Inactive
            </Badge>
          )}

          {network.active !== false && (
            <div className="mt-2 flex justify-center">
              <div className="relative">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full animate-pulse",
                    color === "blue" ? "bg-blue-500" : "bg-purple-500",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 h-2 w-2 rounded-full animate-ping",
                    color === "blue" ? "bg-blue-400" : "bg-purple-400",
                    "opacity-75",
                  )}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <Handle
        type="source"
        position={Position.Right}
        className="!bg-primary"
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}

export default memo(NetworkNode);
