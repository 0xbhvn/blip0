import { MonitorCreateInput, EventCondition } from "@/lib/types/monitors";

export const DEFAULT_MONITOR_CONFIG: MonitorCreateInput = {
  name: "My Monitor",
  networks: ["ethereum_mainnet"],
  paused: false,
  addresses: [
    {
      address: "0x...",
    },
  ],
  match_conditions: {
    events: [
      {
        signature: "Transfer(address,address,uint256)",
        expression: "value > 1000000",
      } satisfies EventCondition,
    ],
    functions: [],
    transactions: [],
  },
  trigger_conditions: [],
  triggers: [],
} as const;

export const NETWORK_OPTIONS = [
  "ethereum_mainnet",
  "ethereum_goerli",
  "polygon",
  "polygon_mumbai",
  "arbitrum",
  "arbitrum_goerli",
  "optimism",
  "optimism_goerli",
  "bsc",
  "bsc_testnet",
  "avalanche",
  "avalanche_fuji",
];

export const DATE_FORMAT_OPTIONS = {
  year: "numeric" as const,
  month: "short" as const,
  day: "numeric" as const,
};
