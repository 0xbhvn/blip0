"use client";

import { useParams, useRouter } from "next/navigation";
import { useNetwork, useNetworks } from "@/hooks";
import { NetworkForm } from "@/components/networks";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function EditNetworkPage() {
  const params = useParams();
  const router = useRouter();
  const { isAdmin } = useNetworks();
  const { network, isLoading, notFound } = useNetwork(params.id as string);

  useEffect(() => {
    if (isAdmin === false) {
      router.push("/product/networks");
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null;
  }

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

  // Convert network response to form data
  const formData = {
    _id: network._id,
    network_type: network.network_type,
    slug: network.slug,
    name: network.name,
    rpc_urls: network.rpc_urls,
    chain_id: network.chain_id,
    network_passphrase: network.network_passphrase,
    block_time_ms: network.block_time_ms,
    confirmation_blocks: network.confirmation_blocks,
    cron_schedule: network.cron_schedule,
    max_past_blocks: network.max_past_blocks,
    store_blocks: network.store_blocks,
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Network Configuration</h1>
        <p className="text-muted-foreground">
          Update the configuration for {network.name}
        </p>
      </div>

      <NetworkForm mode="edit" initialData={formData} />
    </>
  );
}
