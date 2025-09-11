"use client";

import { useState } from "react";
import { NetworkEmptyState } from "./NetworkEmptyState";
import { useNetworks, useNetworkMutations } from "@/hooks";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Cpu, Globe } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export function NetworkList() {
  const { networks, isLoading, isAdmin } = useNetworks();
  const { toggleActive } = useNetworkMutations();
  const [selectedNetworks, setSelectedNetworks] = useState<Set<string>>(
    new Set(),
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedNetworks(new Set(networks.map((n) => n._id)));
    } else {
      setSelectedNetworks(new Set());
    }
  };

  const handleSelectNetwork = (networkId: string, checked: boolean) => {
    const newSelected = new Set(selectedNetworks);
    if (checked) {
      newSelected.add(networkId);
    } else {
      newSelected.delete(networkId);
    }
    setSelectedNetworks(newSelected);
  };

  const handleToggleActive = async (networkId: string) => {
    await toggleActive(networkId);
  };

  if (isLoading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox disabled />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Chain ID</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[80px]">Enabled</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-12" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (networks.length === 0) {
    return <NetworkEmptyState isAdmin={isAdmin} />;
  }

  return (
    <div className="space-y-4">
      {selectedNetworks.size > 0 && (
        <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
          <span className="text-sm">{selectedNetworks.size} selected</span>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSelectedNetworks(new Set())}
          >
            Clear selection
          </Button>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    selectedNetworks.size === networks.length &&
                    networks.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Chain ID</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[80px]">Enabled</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {networks.map((network) => {
              const Icon = network.network_type === "EVM" ? Cpu : Globe;
              const lastUpdated = formatDistanceToNow(
                new Date(network._creationTime),
                { addSuffix: true },
              );

              return (
                <TableRow key={network._id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedNetworks.has(network._id)}
                      onCheckedChange={(checked) =>
                        handleSelectNetwork(network._id, checked as boolean)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/product/networks/${network._id}`}
                      className="flex items-center gap-2 hover:underline"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{network.name}</span>
                    </Link>
                  </TableCell>
                  <TableCell>{network.chain_id || "-"}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {lastUpdated}
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={network.active !== false}
                      onCheckedChange={() => handleToggleActive(network._id)}
                      aria-label={`Toggle ${network.name}`}
                      disabled={!isAdmin}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
