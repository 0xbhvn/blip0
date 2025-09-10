"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { MonitorCreateInput } from "@/lib/types/monitors";

export function useMonitorMutations() {
  const create = useMutation(api.monitors.create);
  const update = useMutation(api.monitors.update);

  const createMonitor = async (input: MonitorCreateInput) => {
    try {
      const result = await create(input);
      return { success: true, data: result };
    } catch (error) {
      console.error("Error creating monitor:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to create monitor",
      };
    }
  };

  const updateMonitor = async (
    id: Id<"monitors">,
    input: MonitorCreateInput,
  ) => {
    try {
      const result = await update({ id, ...input });
      return { success: true, data: result };
    } catch (error) {
      console.error("Error updating monitor:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to update monitor",
      };
    }
  };

  return {
    createMonitor,
    updateMonitor,
  };
}
