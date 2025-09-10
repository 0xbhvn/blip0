"use client";

import { useEffect, useState } from "react";
import { Check, Cloud, CloudOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type SaveStatus = "idle" | "saving" | "saved" | "error" | "offline";

interface AutoSaveIndicatorProps {
  status: SaveStatus;
  lastSaved?: Date;
  className?: string;
  compact?: boolean;
}

export function AutoSaveIndicator({
  status,
  lastSaved,
  className,
  compact = false,
}: AutoSaveIndicatorProps) {
  const [relativeTime, setRelativeTime] = useState<string>("");

  useEffect(() => {
    if (!lastSaved) return;

    const updateRelativeTime = () => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - lastSaved.getTime()) / 1000);

      if (diff < 5) {
        setRelativeTime("just now");
      } else if (diff < 60) {
        setRelativeTime(`${diff}s ago`);
      } else if (diff < 3600) {
        const mins = Math.floor(diff / 60);
        setRelativeTime(`${mins}m ago`);
      } else {
        const hours = Math.floor(diff / 3600);
        setRelativeTime(`${hours}h ago`);
      }
    };

    updateRelativeTime();
    const interval = setInterval(updateRelativeTime, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [lastSaved]);

  const statusConfig = {
    idle: {
      icon: Cloud,
      text: "Ready",
      color: "text-muted-foreground",
      animate: false,
    },
    saving: {
      icon: Loader2,
      text: "Saving...",
      color: "text-blue-500",
      animate: true,
    },
    saved: {
      icon: Check,
      text: lastSaved ? `Saved ${relativeTime}` : "Saved",
      color: "text-green-500",
      animate: false,
    },
    error: {
      icon: CloudOff,
      text: "Save failed",
      color: "text-destructive",
      animate: false,
    },
    offline: {
      icon: CloudOff,
      text: "Offline",
      color: "text-orange-500",
      animate: false,
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  if (compact) {
    return (
      <div
        className={cn(
          "flex items-center gap-1.5 text-xs font-medium transition-all duration-200",
          config.color,
          className,
        )}
      >
        <Icon className={cn("h-3.5 w-3.5", config.animate && "animate-spin")} />
        <span className="hidden sm:inline">{config.text}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 text-sm transition-all duration-200",
        config.color,
        className,
      )}
    >
      <Icon className={cn("h-4 w-4", config.animate && "animate-spin")} />
      <span className="font-medium">{config.text}</span>
    </div>
  );
}
