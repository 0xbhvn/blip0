"use client";

import React, { useCallback } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NodeEditorCanvas } from "./NodeEditorCanvas";
import { useRouter } from "next/navigation";
import { useMonitorMutations } from "@/hooks/useMonitorMutations";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";

interface InteractiveMonitorFlowProps {
  monitorId?: Id<"monitors">;
  mode?: "create" | "edit";
}

export function InteractiveMonitorFlow({
  monitorId,
  mode = "create",
}: InteractiveMonitorFlowProps) {
  const router = useRouter();
  const { createMonitor, updateMonitor } = useMonitorMutations();

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

  return (
    <ReactFlowProvider>
      <div className="h-full w-full">
        <NodeEditorCanvas onSave={handleSave} />
      </div>
    </ReactFlowProvider>
  );
}
