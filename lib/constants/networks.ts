import { NetworkCreateInput } from "@/lib/types/networks";

// Default network configuration
export const DEFAULT_NETWORK: NetworkCreateInput = {
  name: "",
  slug: "",
  network_type: "EVM",
  active: true,
  chain_id: undefined,
  network_passphrase: undefined,
  rpc_urls: [],
  block_time_ms: 12000,
  confirmation_blocks: 1,
  max_past_blocks: 1000,
  cron_schedule: "*/1 * * * *",
  store_blocks: true,
} as const;

// Common chain IDs for EVM networks
export const COMMON_CHAIN_IDS = {
  ETHEREUM_MAINNET: 1,
  ETHEREUM_GOERLI: 5,
  ETHEREUM_SEPOLIA: 11155111,
  POLYGON_MAINNET: 137,
  POLYGON_MUMBAI: 80001,
  ARBITRUM_ONE: 42161,
  ARBITRUM_GOERLI: 421613,
  OPTIMISM_MAINNET: 10,
  OPTIMISM_GOERLI: 420,
  BSC_MAINNET: 56,
  BSC_TESTNET: 97,
  AVALANCHE_C_CHAIN: 43114,
  AVALANCHE_FUJI: 43113,
} as const;

// Common network passphrases for Stellar
export const STELLAR_PASSPHRASES = {
  PUBLIC: "Public Global Stellar Network ; September 2015",
  TESTNET: "Test SDF Network ; September 2015",
} as const;
