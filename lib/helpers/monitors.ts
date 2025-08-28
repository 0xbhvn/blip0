import { DATE_FORMAT_OPTIONS } from "@/lib/constants/monitors";

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
