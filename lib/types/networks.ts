import { Id } from "@/convex/_generated/dataModel";

export interface RpcUrl {
  type_: string;
  url: {
    type: "plain" | "encrypted";
    value: string;
  };
  weight: number;
}

export interface Network {
  _id: Id<"networks">;
  _creationTime: number;
  createdBy: Id<"users">;
  updatedBy?: Id<"users">;
  createdByName?: string;
  updatedByName?: string | null;

  // Core fields
  network_type: "EVM" | "Stellar";
  slug: string;
  name: string;
  active?: boolean; // Whether the network is active

  // RPC configuration
  rpc_urls: RpcUrl[];

  // Network-specific fields
  chain_id?: number; // EVM only
  network_passphrase?: string; // Stellar only

  // Operational parameters
  block_time_ms: number;
  confirmation_blocks: number;
  cron_schedule: string;
  max_past_blocks: number;
  store_blocks: boolean;
}

// Partial types for creation and updates
export type NetworkCreateInput = Omit<
  Network,
  | "_id"
  | "_creationTime"
  | "createdBy"
  | "updatedBy"
  | "createdByName"
  | "updatedByName"
>;

export type NetworkUpdateInput = NetworkCreateInput;

// Type for API responses
export type NetworkResponse = Network;

// Default values for network creation
export const DEFAULT_NETWORK: NetworkCreateInput = {
  network_type: "EVM",
  slug: "",
  name: "",
  active: false, // New networks are inactive by default
  rpc_urls: [],
  chain_id: undefined,
  network_passphrase: undefined,
  block_time_ms: 12000, // Default 12 seconds for Ethereum
  confirmation_blocks: 12,
  cron_schedule: "0 */1 * * * *", // Every minute
  max_past_blocks: 100,
  store_blocks: false,
} as const;

// Type guard functions
export function isValidNetworkId(id: unknown): id is Id<"networks"> {
  return typeof id === "string" && id.length > 0;
}

// Helper to ensure network has all required fields
export function normalizeNetwork(network: NetworkResponse): Network {
  return network;
}
