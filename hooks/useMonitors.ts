"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery, useMutation } from "convex/react";
import { toast } from "sonner";
import {
  MonitorResponse,
  MonitorCreateInput,
  isValidMonitorId,
} from "@/lib/types";
import { useCallback } from "react";

/**
 * Hook for fetching monitors
 */
export function useMonitors(variant: "public" | "owned" = "public") {
  const monitors = useQuery(
    variant === "owned" ? api.monitors.listMy : api.monitors.list,
  ) as MonitorResponse[] | undefined;

  const isLoading = monitors === undefined;

  return {
    monitors: monitors ?? [],
    isLoading,
  };
}

/**
 * Hook for fetching a single monitor
 */
export function useMonitor(id: string | Id<"monitors">) {
  const monitor = useQuery(
    api.monitors.get,
    isValidMonitorId(id) ? { id: id as Id<"monitors"> } : "skip",
  ) as MonitorResponse | undefined | null;

  const isLoading = monitor === undefined;
  const notFound = monitor === null;

  return {
    monitor,
    isLoading,
    notFound,
  };
}

/**
 * Hook for monitor mutations
 */
export function useMonitorMutations() {
  const createMutation = useMutation(api.monitors.create);
  const updateMutation = useMutation(api.monitors.update);
  const removeMutation = useMutation(api.monitors.remove);

  const createMonitor = useCallback(
    async (config: MonitorCreateInput) => {
      try {
        const id = await createMutation(config);
        toast.success("Monitor created successfully");
        return { success: true, id };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to create monitor";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [createMutation],
  );

  const updateMonitor = useCallback(
    async (id: string | Id<"monitors">, config: MonitorCreateInput) => {
      if (!isValidMonitorId(id)) {
        toast.error("Invalid monitor ID");
        return { success: false, error: "Invalid monitor ID" };
      }

      try {
        await updateMutation({
          id: id as Id<"monitors">,
          name: config.name,
          paused: config.paused,
          networks: config.networks,
          addresses: config.addresses,
          match_conditions: config.match_conditions,
          trigger_conditions: config.trigger_conditions,
          triggers: config.triggers,
        });
        toast.success("Monitor updated successfully");
        return { success: true };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to update monitor";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [updateMutation],
  );

  const deleteMonitor = useCallback(
    async (id: string | Id<"monitors">, name?: string) => {
      if (!isValidMonitorId(id)) {
        toast.error("Invalid monitor ID");
        return { success: false, error: "Invalid monitor ID" };
      }

      const confirmMessage = name
        ? `Are you sure you want to delete monitor "${name}"?`
        : "Are you sure you want to delete this monitor?";

      if (!confirm(confirmMessage)) {
        return { success: false, error: "Cancelled" };
      }

      try {
        await removeMutation({ id: id as Id<"monitors"> });
        toast.success("Monitor deleted successfully");
        return { success: true };
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Failed to delete monitor";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [removeMutation],
  );

  return {
    createMonitor,
    updateMonitor,
    deleteMonitor,
  };
}
