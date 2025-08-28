"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MonitorCreateInput, MonitorResponse } from "@/lib/types/monitors";
import { DEFAULT_MONITOR_CONFIG } from "@/lib/constants/monitors";
import { useMonitorMutations } from "@/hooks";

export function useMonitorForm(monitor?: MonitorResponse) {
  const router = useRouter();
  const { createMonitor, updateMonitor } = useMonitorMutations();

  // Convert monitor to config format for the form
  const initialConfig: MonitorCreateInput = monitor
    ? {
        name: monitor.name,
        paused: monitor.paused ?? false,
        networks: monitor.networks ?? [],
        addresses: monitor.addresses ?? [],
        match_conditions: monitor.match_conditions ?? {
          events: [],
          functions: [],
          transactions: [],
        },
        trigger_conditions: monitor.trigger_conditions ?? [],
        triggers: monitor.triggers ?? [],
      }
    : DEFAULT_MONITOR_CONFIG;

  const [configJson, setConfigJson] = useState(
    JSON.stringify(initialConfig, null, 2),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateConfig = useCallback(
    (config: unknown): config is MonitorCreateInput => {
      if (!config || typeof config !== "object") {
        throw new Error("Invalid configuration object");
      }

      const obj = config as Record<string, unknown>;

      if (!obj.name || typeof obj.name !== "string") {
        throw new Error("Monitor name is required and must be a string");
      }
      if (!Array.isArray(obj.networks) || obj.networks.length === 0) {
        throw new Error("At least one network is required");
      }
      // Additional validation can be added here
      return true;
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // Parse and validate JSON
      const config = JSON.parse(configJson);

      if (!validateConfig(config)) {
        return;
      }

      const result = monitor
        ? await updateMonitor(monitor._id, config)
        : await createMonitor(config);

      if (result.success) {
        router.push("/product/monitors/my");
      } else {
        setError(result.error || "Failed to save monitor");
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError("Invalid JSON format - please check your syntax");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    configJson,
    setConfigJson,
    isSubmitting,
    error,
    setError,
    handleSubmit,
    validateConfig,
    isEditMode: !!monitor,
  };
}
