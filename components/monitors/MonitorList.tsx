"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { MonitorCard } from "./MonitorCard";
import { MonitorEmptyState } from "./MonitorEmptyState";
import { cn } from "@/lib/utils";
import { useMonitors, useMonitorMutations } from "@/hooks/useMonitors";

interface MonitorListProps {
  variant?: "public" | "owned";
  className?: string;
}

export function MonitorList({
  variant = "public",
  className,
}: MonitorListProps) {
  const isOwned = variant === "owned";
  const { monitors, isLoading } = useMonitors(variant);
  const { deleteMonitor } = useMonitorMutations();

  const handleDelete = async (id: string, name: string) => {
    await deleteMonitor(id, name);
  };

  const title = isOwned ? "Your Monitors" : "All Monitors";
  const emptyMessage = isOwned
    ? "You haven't created any monitors yet"
    : "No monitors created yet";

  if (isLoading) {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Link href="/product/monitors/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Monitor
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Loading skeleton - can be improved with proper skeleton components */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {title} ({monitors.length})
        </h2>
        <Link href="/product/monitors/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Monitor
          </Button>
        </Link>
      </div>

      {monitors.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {monitors.map((monitor) => (
            <MonitorCard
              key={monitor._id}
              monitor={monitor}
              variant={variant}
              onDelete={isOwned ? handleDelete : undefined}
            />
          ))}
        </div>
      ) : (
        <MonitorEmptyState message={emptyMessage} />
      )}
    </div>
  );
}
