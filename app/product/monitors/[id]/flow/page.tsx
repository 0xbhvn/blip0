"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { PageHeader } from "@/components/PageHeader";
import { InteractiveMonitorFlow } from "@/components/monitors/nodeEditor";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MonitorFlowPage() {
  const params = useParams();
  const monitorId = params.id as Id<"monitors">;

  const monitor = useQuery(api.monitors.get, { id: monitorId });

  if (!monitor) {
    return (
      <div className="flex h-screen flex-1 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen flex-1">
      <div className="px-6 pt-6">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/product/monitors/my">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to My Monitors
            </Button>
          </Link>
        </div>
        <PageHeader
          title={`Edit: ${monitor.name}`}
          description={`Visual editor - ${monitor.paused ? "Paused" : "Active"}`}
        />
      </div>
      <div className="flex-1">
        <InteractiveMonitorFlow monitorId={monitorId} mode="edit" />
      </div>
    </div>
  );
}
