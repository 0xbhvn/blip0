"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery, useMutation } from "convex/react";
import { toast } from "sonner";
import {
  NetworkResponse,
  NetworkCreateInput,
  isValidNetworkId,
} from "@/lib/types";
import { useCallback } from "react";

/**
 * Hook for fetching networks
 */
export function useNetworks() {
  const isAdmin = useQuery(api.networks.isCurrentUserAdmin) ?? false;

  // Regular users see only active networks, admins see all
  const networks = useQuery(
    isAdmin ? api.networks.listAll : api.networks.list,
  ) as NetworkResponse[] | undefined;

  const isLoading = networks === undefined;

  return {
    networks: networks ?? [],
    isLoading,
    isAdmin,
  };
}

/**
 * Hook for fetching a single network
 */
export function useNetwork(id: string | Id<"networks">) {
  const network = useQuery(
    api.networks.get,
    isValidNetworkId(id) ? { id: id as Id<"networks"> } : "skip",
  ) as NetworkResponse | undefined | null;

  const isLoading = network === undefined;
  const notFound = network === null;

  return {
    network,
    isLoading,
    notFound,
  };
}

/**
 * Hook for fetching a network by slug
 */
export function useNetworkBySlug(slug: string | undefined) {
  const network = useQuery(api.networks.getBySlug, slug ? { slug } : "skip") as
    | NetworkResponse
    | undefined
    | null;

  const isLoading = network === undefined;
  const notFound = network === null;

  return {
    network,
    isLoading,
    notFound,
  };
}

/**
 * Hook for network mutations
 */
export function useNetworkMutations() {
  const createMutation = useMutation(api.networks.create);
  const updateMutation = useMutation(api.networks.update);
  const removeMutation = useMutation(api.networks.remove);
  const toggleActiveMutation = useMutation(api.networks.toggleActive);

  const createNetwork = useCallback(
    async (config: NetworkCreateInput) => {
      try {
        const id = await createMutation(config);
        toast.success("Network configuration created successfully");
        return { success: true, id };
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to create network configuration";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [createMutation],
  );

  const updateNetwork = useCallback(
    async (id: string | Id<"networks">, config: NetworkCreateInput) => {
      if (!isValidNetworkId(id)) {
        toast.error("Invalid network ID");
        return { success: false, error: "Invalid network ID" };
      }

      try {
        await updateMutation({
          id: id as Id<"networks">,
          ...config,
        });
        toast.success("Network configuration updated successfully");
        return { success: true };
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to update network configuration";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [updateMutation],
  );

  const deleteNetwork = useCallback(
    async (id: string | Id<"networks">, name?: string) => {
      if (!isValidNetworkId(id)) {
        toast.error("Invalid network ID");
        return { success: false, error: "Invalid network ID" };
      }

      const confirmMessage = name
        ? `Are you sure you want to delete network "${name}"?`
        : "Are you sure you want to delete this network configuration?";

      if (!confirm(confirmMessage)) {
        return { success: false, error: "Cancelled" };
      }

      try {
        await removeMutation({ id: id as Id<"networks"> });
        toast.success("Network configuration deleted successfully");
        return { success: true };
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to delete network configuration";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [removeMutation],
  );

  const toggleActive = useCallback(
    async (id: string | Id<"networks">) => {
      if (!isValidNetworkId(id)) {
        toast.error("Invalid network ID");
        return { success: false, error: "Invalid network ID" };
      }

      try {
        const newState = await toggleActiveMutation({
          id: id as Id<"networks">,
        });
        toast.success(
          `Network ${newState ? "activated" : "deactivated"} successfully`,
        );
        return { success: true, active: newState };
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to toggle network status";
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [toggleActiveMutation],
  );

  return {
    createNetwork,
    updateNetwork,
    deleteNetwork,
    toggleActive,
  };
}
