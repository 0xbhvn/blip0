"use client";

import { MonitorCard } from "./MonitorCard";
import { MonitorEmptyState } from "./MonitorEmptyState";
import { cn } from "@/lib/utils";
import { useMonitors, useMonitorMutations } from "@/hooks/useMonitors";

interface MonitorListProps {
  className?: string;
}

export function MonitorList({ className }: MonitorListProps) {
  const { monitors, isLoading } = useMonitors();
  const { deleteMonitor } = useMonitorMutations();

  const handleDelete = async (id: string, name: string) => {
    await deleteMonitor(id, name);
  };

  const emptyMessage =
    "No monitors yet. Create your first monitor to start tracking smart contract activity.";

  if (isLoading) {
    return (
      <div className={cn("space-y-6", className)}>
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
      {monitors.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {monitors.map((monitor) => (
            <MonitorCard
              key={monitor._id}
              monitor={monitor}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <MonitorEmptyState message={emptyMessage} />
      )}
    </div>
  );
}
