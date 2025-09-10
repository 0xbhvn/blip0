"use client";

import { NetworkForm } from "@/components/networks";
import { useNetworks } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateNetworkPage() {
  const { isAdmin } = useNetworks();
  const router = useRouter();

  useEffect(() => {
    if (isAdmin === false) {
      router.push("/product/networks");
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create Network Configuration</h1>
        <p className="text-muted-foreground">
          Set up a new blockchain network configuration
        </p>
      </div>

      <NetworkForm mode="create" />
    </>
  );
}
