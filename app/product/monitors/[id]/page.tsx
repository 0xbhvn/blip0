"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { MonitorDetailView } from "@/components/monitors/MonitorDetailView";
import { Loader2 } from "lucide-react";

export default function MonitorDetailsPage() {
  const params = useParams();
  const monitorId = params.id as Id<"monitors">;

  const monitor = useQuery(api.monitors.get, { id: monitorId });

  if (!monitor) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return <MonitorDetailView monitor={monitor} monitorId={monitorId} />;
}
