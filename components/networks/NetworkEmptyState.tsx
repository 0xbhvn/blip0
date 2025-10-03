"use client";

import { Button } from "@/components/ui/button";
import { GlobeNetwork } from "@/lib/icons";
import { useRouter } from "next/navigation";

interface NetworkEmptyStateProps {
  isAdmin: boolean;
}

export function NetworkEmptyState({ isAdmin }: NetworkEmptyStateProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <GlobeNetwork className="mb-4 h-12 w-12 text-muted-foreground" />
      <h3 className="mb-2 text-lg font-semibold">No Network Configurations</h3>
      <p className="mb-6 max-w-sm text-sm text-muted-foreground">
        {isAdmin
          ? "Get started by creating your first network configuration."
          : "No network configurations have been set up yet."}
      </p>
      {isAdmin && (
        <Button onClick={() => router.push("/product/networks/create")}>
          Create Network
        </Button>
      )}
    </div>
  );
}
