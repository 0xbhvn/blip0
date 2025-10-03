"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PencilEdit, DeleteDustbin01, Globe, Server, EyeOn } from "@/lib/icons";
import { NetworkResponse } from "@/lib/types";
import { useNetworkMutations } from "@/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NetworkCardProps {
  network: NetworkResponse;
  isAdmin: boolean;
}

export function NetworkCard({ network, isAdmin }: NetworkCardProps) {
  const router = useRouter();
  const { deleteNetwork } = useNetworkMutations();

  const handleEdit = () => {
    router.push(`/product/networks/${network._id}/edit`);
  };

  const handleDelete = async () => {
    await deleteNetwork(network._id, network.name);
  };

  const Icon = network.network_type === "EVM" ? Server : Globe;

  return (
    <Card className="relative hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <Link
            href={`/product/networks/${network._id}`}
            className="flex items-center gap-2 flex-1 hover:opacity-80 transition-opacity"
          >
            <Icon className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">{network.name}</CardTitle>
          </Link>
          <div className="flex gap-1">
            <Link href={`/product/networks/${network._id}`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <EyeOn className="h-4 w-4" />
              </Button>
            </Link>
            {isAdmin && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleEdit}
                  className="h-8 w-8"
                >
                  <PencilEdit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDelete}
                  className="h-8 w-8 text-destructive hover:text-destructive"
                >
                  <DeleteDustbin01 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{network.network_type}</Badge>
            <Badge variant="secondary">{network.slug}</Badge>
            {network.active === false ? (
              <Badge variant="destructive" className="text-xs">
                Inactive
              </Badge>
            ) : (
              <Badge variant="default" className="text-xs">
                Active
              </Badge>
            )}
            {network.store_blocks && (
              <Badge variant="default" className="text-xs">
                Storing Blocks
              </Badge>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Block Time:</div>
            <div>{network.block_time_ms}ms</div>

            <div className="text-muted-foreground">Confirmations:</div>
            <div>{network.confirmation_blocks} blocks</div>

            {network.chain_id && (
              <>
                <div className="text-muted-foreground">Chain ID:</div>
                <div>{network.chain_id}</div>
              </>
            )}

            <div className="text-muted-foreground">RPC URLs:</div>
            <div>{network.rpc_urls.length} configured</div>
          </div>

          <div className="pt-2 text-xs text-muted-foreground">
            Created by {network.createdByName}
            {network.updatedByName && (
              <span> • Updated by {network.updatedByName}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
