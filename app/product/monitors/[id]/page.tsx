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
import { Loader2 } from "lucide-react";
import { useHeader } from "@/contexts/HeaderContext";
import { useEffect } from "react";

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
