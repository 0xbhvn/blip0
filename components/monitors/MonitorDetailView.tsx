"use client";

import { useMemo } from "react";
import { MonitorResponse } from "@/lib/types";
import { Id } from "@/convex/_generated/dataModel";
import { MonitorFlowEditor } from "./flow/MonitorFlowEditor";
import { monitorToFlow, hasFlowData } from "@/lib/helpers/flowConverter";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface MonitorDetailViewProps {
  monitor: MonitorResponse;
  monitorId: Id<"monitors">;
}

export function MonitorDetailView({
  monitor,
  monitorId,
}: MonitorDetailViewProps) {
  const router = useRouter();
  const updateMonitor = useMutation(api.monitors.update);

  // Convert monitor data to flow format for the editor
  const flowData = useMemo(() => {
    if (!hasFlowData(monitor)) {
      return { nodes: [], edges: [] };
    }
    try {
      return monitorToFlow(monitor);
    } catch (error) {
      console.error("Failed to convert monitor to flow:", error);
      return { nodes: [], edges: [] };
    }
  }, [monitor]);

  const handleSave = async (config: MonitorCreateInput) => {
    try {
      await updateMonitor({
        id: monitorId,
        ...config,
      });
      toast.success("Monitor updated successfully");
      router.refresh();
    } catch (error) {
      console.error("Failed to update monitor:", error);
      toast.error("Failed to update monitor");
    }
  };

  return (
    <div className="h-full">
      <MonitorFlowEditor
        mode="edit"
        monitorId={monitorId}
        initialData={flowData}
        initialMonitorName={monitor.name}
        initialMonitorActive={!monitor.paused}
        onSave={handleSave}
      />
    </div>
  );
}
