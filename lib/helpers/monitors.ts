import { DATE_FORMAT_OPTIONS } from "@/lib/constants/monitors";
import { NetworkResponse } from "@/lib/types/networks";

export function formatMonitorDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString("en-US", DATE_FORMAT_OPTIONS);
}

export function getNetworksDisplay(networks?: string[]): string {
  if (!networks || networks.length === 0) {
    return "None";
  }
  return networks.join(", ");
}

export function getContractsCount(
  addresses?: Array<{ address: string; contract_spec?: object[] }>,
): number {
  return addresses?.length ?? 0;
}

export function getTriggersCount(triggers?: unknown[]): number {
  return triggers?.length ?? 0;
}

/**
 * Utility to detect network types from selected networks
 * Used in monitor forms to show appropriate expression fields
 */
export function getSelectedNetworkTypes(
  selectedSlugs: string[],
  networks: NetworkResponse[],
) {
  const selectedNetworks = networks.filter((n) =>
    selectedSlugs.includes(n.slug),
  );
  const types = new Set(selectedNetworks.map((n) => n.network_type));

  return {
    hasEVM: types.has("EVM"),
    hasStellar: types.has("Stellar"),
    isMultiType: types.size > 1,
    networkTypes: Array.from(types),
  };
}
