"use client";

import React, { useCallback } from "react";
import { MonitorFlowEditor } from "../flow";
import { useRouter } from "next/navigation";
import { useMonitorMutations } from "@/hooks";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { monitorToFlow } from "@/lib/helpers/flowConverter";

interface InteractiveMonitorFlowProps {
  monitorId?: Id<"monitors">;
  mode?: "create" | "edit";
}

/**
 * Wrapper component for MonitorFlowEditor that handles data loading and persistence
 * This maintains backward compatibility with existing usage
 */
export function InteractiveMonitorFlow({
  monitorId,
  mode = "create",
}: InteractiveMonitorFlowProps) {
  const router = useRouter();
  const { createMonitor, updateMonitor } = useMonitorMutations();

  // Load existing monitor data if in edit mode
  const monitor = useQuery(
    api.monitors.get,
    mode === "edit" && monitorId ? { id: monitorId } : "skip",
  );

  const handleSave = useCallback(
    async (config: MonitorCreateInput) => {
      try {
        if (mode === "edit" && monitorId) {
          const result = await updateMonitor(monitorId, config);
          if (result.success) {
            toast.success("Monitor updated successfully");
            router.push("/product/monitors/my");
          } else {
            toast.error(result.error || "Failed to update monitor");
          }
        } else {
          const result = await createMonitor(config);
          if (result.success) {
            toast.success("Monitor created successfully");
            router.push("/product/monitors/my");
          } else {
            toast.error(result.error || "Failed to create monitor");
          }
        }
      } catch (error) {
        console.error("Error saving monitor:", error);
        toast.error("An error occurred while saving the monitor");
      }
    },
    [mode, monitorId, createMonitor, updateMonitor, router],
  );

  // Generate initial flow data from monitor if in edit mode
  const initialFlowData = React.useMemo(() => {
    if (mode === "edit" && monitor) {
      return monitorToFlow(monitor);
    }
    return undefined;
  }, [mode, monitor]);

  return (
    <div className="h-full w-full">
      <MonitorFlowEditor
        initialData={initialFlowData}
        initialMonitorName={monitor?.name}
        initialMonitorActive={!monitor?.paused}
        onSave={handleSave}
        mode={mode}
      />
    </div>
  );
}
