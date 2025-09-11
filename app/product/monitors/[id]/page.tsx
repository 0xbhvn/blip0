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
          <div className="flex items-center gap-3">
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
              className="flex items-center gap-2"
              onClick={() => {
                // Test functionality will be implemented later
              }}
            >
              <Play className="h-4 w-4" />
              Test
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => {
                // Deploy functionality will be implemented later
              }}
            >
              <Rocket className="h-4 w-4" />
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
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <MonitorDetailView monitor={monitor} monitorId={monitorId} />;
}
