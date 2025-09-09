"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MonitorCreateInput, MonitorResponse } from "@/lib/types";
import { DEFAULT_MONITOR_CONFIG } from "@/lib/constants";
import { useMonitorMutations } from "@/hooks";
import { getAddressValidationError } from "@/lib/helpers";

// Helper function to determine network types from network slugs
// This is a simple heuristic based on naming conventions
// Can be improved by fetching actual network data
function getNetworkTypesFromSlugs(networkSlugs: string[]): ("EVM" | "Stellar")[] {
  const types = new Set<"EVM" | "Stellar">();
  
  for (const slug of networkSlugs) {
    const lowerSlug = slug.toLowerCase();
    if (lowerSlug.includes("stellar") || lowerSlug.includes("xlm")) {
      types.add("Stellar");
    } else {
      // Default to EVM for most networks (ethereum, polygon, etc.)
      types.add("EVM");
    }
  }
  
  return Array.from(types);
}

export function useMonitorForm(
  monitor?: MonitorResponse,
  onSaveSuccess?: () => void,
) {
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

  // Structured form state
  const [formData, setFormData] = useState<MonitorCreateInput>(initialConfig);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update form data
  const updateFormData = useCallback((updates: Partial<MonitorCreateInput>) => {
    setFormData((prev) => {
      const newData = { ...prev, ...updates };
      return newData;
    });
    setError(null);
  }, []);

  const validateConfig = useCallback((config: MonitorCreateInput): boolean => {
    if (
      !config.name ||
      typeof config.name !== "string" ||
      config.name.trim() === ""
    ) {
      throw new Error("Monitor name is required");
    }
    if (!Array.isArray(config.networks) || config.networks.length === 0) {
      throw new Error("At least one network is required");
    }

    // Validate addresses based on selected network types
    if (config.addresses && config.addresses.length > 0) {
      const networkTypes = getNetworkTypesFromSlugs(config.networks);
      
      for (const addr of config.addresses) {
        if (!addr.address) {
          throw new Error("Address is required");
        }
        
        const validationError = getAddressValidationError(addr.address, networkTypes);
        if (validationError) {
          throw new Error(validationError);
        }
      }
    }

    // Validate match conditions
    if (config.match_conditions) {
      // Validate event conditions
      if (config.match_conditions.events) {
        for (const event of config.match_conditions.events) {
          if (!event.signature) {
            throw new Error("Event signature is required");
          }
        }
      }
      // Validate function conditions
      if (config.match_conditions.functions) {
        for (const func of config.match_conditions.functions) {
          if (!func.signature) {
            throw new Error("Function signature is required");
          }
        }
      }
    }

    return true;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!validateConfig(formData)) {
        return;
      }

      const result = monitor
        ? await updateMonitor(monitor._id, formData)
        : await createMonitor(formData);

      if (result.success) {
        if (onSaveSuccess) {
          onSaveSuccess();
        } else {
          router.push("/product/monitors/my");
        }
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
    formData,
    updateFormData,
    isSubmitting,
    error,
    setError,
    handleSubmit,
    validateConfig,
    isEditMode: !!monitor,
  };
}
