"use client";

import { NetworkCard } from "./NetworkCard";
import { NetworkEmptyState } from "./NetworkEmptyState";
import { useNetworks } from "@/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export function NetworkList() {
  const { networks, isLoading, isAdmin } = useNetworks();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[200px]" />
        ))}
      </div>
    );
  }

  if (networks.length === 0) {
    return <NetworkEmptyState isAdmin={isAdmin} />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {networks.map((network) => (
        <NetworkCard key={network._id} network={network} isAdmin={isAdmin} />
      ))}
    </div>
  );
}
