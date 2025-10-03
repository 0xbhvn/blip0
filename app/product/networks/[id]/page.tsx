"use client";

import { useParams, useRouter } from "next/navigation";
import { useNetwork, useNetworks } from "@/hooks";
import { useHeader } from "@/contexts/HeaderContext";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PencilEdit, Globe, Server } from "@/lib/icons";
import { Skeleton } from "@/components/ui/skeleton";

export default function NetworkDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin } = useNetworks();
  const { network, isLoading, notFound } = useNetwork(params.id as string);
  const { setHeaderData, clearHeaderData } = useHeader();

  useEffect(() => {
    if (network) {
      setHeaderData({
        title: network.name,
      });
    }

    return () => {
      clearHeaderData();
    };
  }, [network, setHeaderData, clearHeaderData]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-96" />
      </div>
    );
  }

  if (notFound || !network) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold">Network Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The network configuration you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button
          className="mt-4"
          onClick={() => router.push("/product/networks")}
        >
          Back to Networks
        </Button>
      </div>
    );
  }

  const Icon = network.network_type === "EVM" ? Server : Globe;

  return (
    <>
      <div className="mb-6 flex items-center justify-end">
        {isAdmin && (
          <Button
            onClick={() => router.push(`/product/networks/${network._id}/edit`)}
          >
            <PencilEdit className="mr-2 h-4 w-4" />
            Edit Network
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-2xl">{network.name}</CardTitle>
            </div>
            <Badge variant={network.store_blocks ? "default" : "secondary"}>
              {network.store_blocks ? "Storing Blocks" : "Not Storing"}
            </Badge>
          </div>
          <CardDescription>
            {network.network_type} Network • Created by {network.createdByName}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Core network configuration details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Slug</p>
                  <p className="font-medium">{network.slug}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Network Type</p>
                  <Badge variant="outline" className="mt-1">
                    {network.network_type}
                  </Badge>
                </div>
                {network.chain_id && (
                  <div>
                    <p className="text-sm text-muted-foreground">Chain ID</p>
                    <p className="font-medium">{network.chain_id}</p>
                  </div>
                )}
                {network.network_passphrase && (
                  <div className="col-span-2">
                    <p className="text-sm text-muted-foreground">
                      Network Passphrase
                    </p>
                    <p className="font-medium">{network.network_passphrase}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>RPC Configuration</CardTitle>
              <CardDescription>Remote Procedure Call endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              {network.rpc_urls.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No RPC URLs configured
                </p>
              ) : (
                <div className="space-y-2">
                  {network.rpc_urls.map((rpc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div className="flex-1">
                        <p className="font-mono text-sm">{rpc.url.value}</p>
                        <p className="text-xs text-muted-foreground">
                          Type: {rpc.url.type} • Weight: {rpc.weight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operational Parameters</CardTitle>
              <CardDescription>
                Network monitoring configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Block Time</p>
                  <p className="font-medium">{network.block_time_ms}ms</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Confirmation Blocks
                  </p>
                  <p className="font-medium">
                    {network.confirmation_blocks} blocks
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Max Past Blocks
                  </p>
                  <p className="font-medium">{network.max_past_blocks}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Store Blocks</p>
                  <Badge
                    variant={network.store_blocks ? "default" : "secondary"}
                  >
                    {network.store_blocks ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Cron Schedule</p>
                  <p className="font-mono font-medium">
                    {network.cron_schedule}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metadata</CardTitle>
              <CardDescription>
                Creation and modification details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created by</span>
                  <span>{network.createdByName}</span>
                </div>
                {network.updatedByName && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Last updated by
                    </span>
                    <span>{network.updatedByName}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created at</span>
                  <span>
                    {new Date(network._creationTime).toLocaleString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
}
