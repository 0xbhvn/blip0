import { Id } from "@/convex/_generated/dataModel";

export interface MonitorAddress {
  address: string;
  contract_spec?: object[];
}

export interface EventCondition {
  signature: string;
  expression?: string | null;
}

export interface FunctionCondition {
  signature: string;
  expression?: string | null;
}

export interface TransactionCondition {
  status?: "Success" | "Failed";
  expression?: string | null;
}

export interface MatchConditions {
  functions?: FunctionCondition[];
  events?: EventCondition[];
  transactions?: TransactionCondition[];
}

export interface TriggerCondition {
  script_path: string;
  language: string;
  arguments?: string | string[];
  timeout_ms?: number;
}

export type Trigger = string; // Trigger IDs referencing pre-configured triggers

export interface Monitor {
  _id: Id<"monitors">;
  _creationTime: number;
  userId: Id<"users">;
  author?: string;

  // Core fields
  name: string;
  paused: boolean;
  networks: string[];
  addresses: MonitorAddress[];

  // Monitoring configuration
  match_conditions: MatchConditions;
  trigger_conditions: TriggerCondition[];
  triggers: string[]; // Array of trigger IDs
}

// Partial types for creation and updates
export type MonitorCreateInput = Omit<
  Monitor,
  "_id" | "_creationTime" | "userId" | "author"
>;
export type MonitorUpdateInput = Partial<MonitorCreateInput>;

// Type for API responses (includes optional fields that might be undefined)
export interface MonitorResponse
  extends Omit<
    Monitor,
    | "paused"
    | "networks"
    | "addresses"
    | "match_conditions"
    | "trigger_conditions"
    | "triggers"
  > {
  paused?: boolean;
  networks?: string[];
  addresses?: MonitorAddress[];
  match_conditions?: MatchConditions;
  trigger_conditions?: TriggerCondition[];
  triggers?: string[];
}

// Default values for monitor creation
export const DEFAULT_MONITOR: MonitorCreateInput = {
  name: "",
  paused: false,
  networks: [],
  addresses: [],
  match_conditions: {
    events: [],
    functions: [],
    transactions: [],
  },
  trigger_conditions: [],
  triggers: [],
} as const;

// Type guard functions
export function isValidMonitorId(id: unknown): id is Id<"monitors"> {
  return typeof id === "string" && id.length > 0;
}

export function isValidUserId(id: unknown): id is Id<"users"> {
  return typeof id === "string" && id.length > 0;
}

// Helper to ensure monitor has all required fields
export function normalizeMonitor(monitor: MonitorResponse): Monitor {
  return {
    ...monitor,
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
  };
}
