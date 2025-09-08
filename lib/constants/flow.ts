// Flow Layout Constants

// Node dimensions
export const NODE_WIDTH = 280;
export const NODE_HEIGHT = 120;

// Layout configuration
export const GRAPH_PADDING = 50;
export const GRID_SIZE = 20; // Grid snap size for infinite canvas

// Dagre layout configuration
export const DAGRE_CONFIG = {
  NODE_SEPARATION: 100,
  RANK_SEPARATION: 200,
} as const;

// Network icon mapping by chain ID
export const NETWORK_ICONS: Record<number, string> = {
  1: "🟦", // Ethereum Mainnet
  5: "🟪", // Goerli
  11155111: "🟨", // Sepolia
  137: "🟣", // Polygon
  80001: "🟣", // Mumbai
  10: "🔴", // Optimism
  420: "🔴", // Optimism Goerli
  42161: "🔵", // Arbitrum
  421613: "🔵", // Arbitrum Goerli
  8453: "🔷", // Base
  84531: "🔷", // Base Goerli
};

export const DEFAULT_NETWORK_ICON = "🔗";

// Network colors by type
export const NETWORK_COLORS = {
  mainnet: "blue",
  testnet: "purple",
} as const;
