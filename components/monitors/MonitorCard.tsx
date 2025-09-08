"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MonitorResponse } from "@/lib/types";
import { MonitorPausedBadge } from "./MonitorPausedBadge";
import { MonitorStats } from "./MonitorStats";
import Link from "next/link";
import { Edit, Trash2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatMonitorDate } from "@/lib/helpers";

interface MonitorCardProps {
  monitor: MonitorResponse;
  variant?: "public" | "owned";
  onDelete?: (id: string, name: string) => void;
  className?: string;
}

export function MonitorCard({
  monitor,
  variant = "public",
  onDelete,
  className,
}: MonitorCardProps) {
  const isOwned = variant === "owned";

  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate">{monitor.name}</span>
          <MonitorPausedBadge paused={monitor.paused} />
        </CardTitle>
        <CardDescription>
          {isOwned
            ? `Created ${formatMonitorDate(monitor._creationTime)}`
            : `by ${monitor.author ?? "Unknown"}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MonitorStats monitor={monitor} />
        <div className={cn("mt-4", isOwned ? "flex gap-2" : "")}>
          {isOwned ? (
            <>
              <Link
                href={`/product/monitors/${monitor._id}/edit`}
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
              </Link>
              {onDelete && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(monitor._id, monitor.name)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </>
          ) : (
            <Link href={`/product/monitors/${monitor._id}`}>
              <Button variant="outline" size="sm" className="w-full">
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
