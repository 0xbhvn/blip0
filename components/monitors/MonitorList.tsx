"use client";

import { useState } from "react";
import { MonitorEmptyState } from "./MonitorEmptyState";
import { cn } from "@/lib/utils";
import { useMonitors, useMonitorMutations } from "@/hooks/useMonitors";
import { getNetworksDisplay, formatMonitorDate } from "@/lib/helpers";
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
import Link from "next/link";

interface MonitorListProps {
  className?: string;
}

export function MonitorList({ className }: MonitorListProps) {
  const { monitors, isLoading } = useMonitors();
  const { togglePaused } = useMonitorMutations();
  const [selectedMonitors, setSelectedMonitors] = useState<Set<string>>(
    new Set(),
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedMonitors(new Set(monitors.map((m) => m._id)));
    } else {
      setSelectedMonitors(new Set());
    }
  };

  const handleSelectMonitor = (monitorId: string, checked: boolean) => {
    const newSelected = new Set(selectedMonitors);
    if (checked) {
      newSelected.add(monitorId);
    } else {
      newSelected.delete(monitorId);
    }
    setSelectedMonitors(newSelected);
  };

  const handleTogglePaused = async (monitorId: string) => {
    await togglePaused(monitorId);
  };

  const emptyMessage =
    "No monitors yet. Create your first monitor to start tracking smart contract activity.";

  if (isLoading) {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox disabled />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Networks</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-[80px]">Enabled</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-4" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
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
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      {monitors.length > 0 ? (
        <>
          {selectedMonitors.size > 0 && (
            <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
              <span className="text-sm">{selectedMonitors.size} selected</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedMonitors(new Set())}
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
                        selectedMonitors.size === monitors.length &&
                        monitors.length > 0
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Networks</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="w-[80px]">Enabled</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monitors.map((monitor) => (
                  <TableRow key={monitor._id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedMonitors.has(monitor._id)}
                        onCheckedChange={(checked) =>
                          handleSelectMonitor(monitor._id, checked as boolean)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/product/monitors/${monitor._id}`}
                        className="font-medium hover:underline"
                      >
                        {monitor.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">
                        {getNetworksDisplay(monitor.networks)}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatMonitorDate(monitor._creationTime)}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={!monitor.paused}
                        onCheckedChange={() => handleTogglePaused(monitor._id)}
                        aria-label={`Toggle ${monitor.name} ${monitor.paused ? "on" : "off"}`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      ) : (
        <MonitorEmptyState message={emptyMessage} />
      )}
    </div>
  );
}
