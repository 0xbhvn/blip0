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
import { Trash2, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatMonitorDate } from "@/lib/helpers";

interface MonitorCardProps {
  monitor: MonitorResponse;
  onDelete?: (id: string, name: string) => void;
  className?: string;
}

export function MonitorCard({
  monitor,
  onDelete,
  className,
}: MonitorCardProps) {
  return (
    <Card className={cn("hover:shadow-lg transition-shadow", className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate">{monitor.name}</span>
          <MonitorPausedBadge paused={monitor.paused} />
        </CardTitle>
        <CardDescription>
          Created {formatMonitorDate(monitor._creationTime)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <MonitorStats monitor={monitor} />
        <div className="mt-4 flex gap-2">
          <Link href={`/product/monitors/${monitor._id}`} className="flex-1">
            <Button variant="default" size="sm" className="w-full">
              <Eye className="mr-2 h-4 w-4" /> Configure
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
        </div>
      </CardContent>
    </Card>
  );
}
