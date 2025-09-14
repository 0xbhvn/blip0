"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import {
  MonitorDetailView,
  MonitorToggle,
  MonitorTitleDropdown,
} from "@/components/monitors";
import { Loader2, Play, Rocket } from "lucide-react";
import { useHeader } from "@/contexts/HeaderContext";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function MonitorDetailsPage() {
  const params = useParams();
  const monitorId = params.id as Id<"monitors">;
  const { setHeaderData, clearHeaderData } = useHeader();

  const monitor = useQuery(api.monitors.get, { id: monitorId });

  useEffect(() => {
    if (monitor) {
      setHeaderData({
        title: " ", // Use a space to prevent fallback to "Monitors"
        actions: (
          <div className="flex items-center gap-4">
            <MonitorTitleDropdown
              monitorId={monitorId}
              monitorName={monitor.name}
            />
            <MonitorToggle
              monitorId={monitorId}
              initialPaused={monitor.paused || false}
            />
          </div>
        ),
        rightActions: (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 py-1.5 text-sm font-medium bg-white hover:bg-blue-50 active:bg-blue-100 border-blue-500 text-blue-600 dark:bg-slate-900 dark:hover:bg-blue-950 dark:border-blue-400 dark:text-blue-400"
              onClick={() => {
                // Test functionality will be implemented later
              }}
            >
              <Play className="h-4 w-4 mr-2" />
              Test
            </Button>
            <Button
              size="sm"
              className="h-8 px-3 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 border-transparent text-white"
              onClick={() => {
                // Deploy functionality will be implemented later
              }}
            >
              <Rocket className="h-4 w-4 mr-2" />
              Deploy
            </Button>
          </div>
        ),
      });
    }

    return () => {
      clearHeaderData();
    };
  }, [monitor, monitorId, setHeaderData, clearHeaderData]);

  if (!monitor) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <MonitorDetailView monitor={monitor} monitorId={monitorId} />;
}
