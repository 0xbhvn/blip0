"use client";

import { Button } from "@/components/ui/button";
import { NetworkList } from "@/components/networks";
import { useNetworks } from "@/hooks";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NetworksPage() {
  const { isAdmin } = useNetworks();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Network Configurations</h1>
          <p className="text-muted-foreground">
            Manage blockchain network configurations and RPC endpoints
          </p>
        </div>
        {isAdmin && (
          <Button onClick={() => router.push("/product/networks/create")}>
            <Plus className="mr-2 h-4 w-4" />
            New Network
          </Button>
        )}
      </div>

      <NetworkList />
    </>
  );
}
