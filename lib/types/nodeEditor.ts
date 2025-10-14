import { Node } from "@xyflow/react";

// Base node types
export enum NodeType {
  // Configuration nodes
  NETWORK = "network",
  ADDRESS = "address",

  // Condition nodes
  EVENT_CONDITION = "eventCondition",
  FUNCTION_CONDITION = "functionCondition",
  TRANSACTION_CONDITION = "transactionCondition",

  // Action nodes
  TRIGGER = "trigger",
}

// Node data interfaces
export interface BaseNodeData {
  label: string;
  isValid: boolean;
  validationErrors?: string[];
  isEditing?: boolean;
  isPlaceholder?: boolean;
  config?: Record<string, unknown>;
}

// Contract type for Address node
export interface Contract {
  address: string;
  label?: string;
  contractSpec?: object[];
}

// Event condition type
export interface EventCondition {
  signature: string;
  expression?: string;
}

// Function condition type
export interface FunctionCondition {
  signature: string;
  expression?: string;
}

// Transaction condition type
export interface TransactionCondition {
  status?: "Success" | "Failed";
  expression?: string | null;
}

export interface NetworkNodeData extends BaseNodeData {
  config: {
    network: string;
  };
  networkSlug?: string;
  networkName?: string;
  chainId?: number;
}

export interface AddressNodeData extends BaseNodeData {
  config: {
    contracts: Contract[];
  };
}

export interface EventConditionNodeData extends BaseNodeData {
  config: {
    events: EventCondition[];
  };
}

export interface FunctionConditionNodeData extends BaseNodeData {
  config: {
    functions: FunctionCondition[];
  };
}

export interface TransactionConditionNodeData extends BaseNodeData {
  config: {
    transactions: TransactionCondition[];
  };
}

export interface TriggerNodeData extends BaseNodeData {
  triggerId?: string;
  triggerName?: string;
}

// Extended node type with specific data
export type EditorNode = Node & {
  type: NodeType;
  data:
    | BaseNodeData
    | NetworkNodeData
    | AddressNodeData
    | EventConditionNodeData
    | FunctionConditionNodeData
    | TransactionConditionNodeData
    | TriggerNodeData;
};

// Connection rules
export interface ConnectionRule {
  sourceTypes: NodeType[];
  targetTypes: NodeType[];
  maxConnections?: number;
  required?: boolean;
}

export const CONNECTION_RULES: Record<NodeType, ConnectionRule> = {
  [NodeType.NETWORK]: {
    sourceTypes: [],
    targetTypes: [NodeType.ADDRESS],
    required: true,
  },
  [NodeType.ADDRESS]: {
    sourceTypes: [NodeType.NETWORK],
    targetTypes: [
      NodeType.EVENT_CONDITION,
      NodeType.FUNCTION_CONDITION,
      NodeType.TRANSACTION_CONDITION,
    ],
    maxConnections: 1, // One network per address
    required: true,
  },
  [NodeType.EVENT_CONDITION]: {
    sourceTypes: [NodeType.ADDRESS],
    targetTypes: [NodeType.TRIGGER],
  },
  [NodeType.FUNCTION_CONDITION]: {
    sourceTypes: [NodeType.ADDRESS],
    targetTypes: [NodeType.TRIGGER],
  },
  [NodeType.TRANSACTION_CONDITION]: {
    sourceTypes: [NodeType.ADDRESS],
    targetTypes: [NodeType.TRIGGER],
  },
  [NodeType.TRIGGER]: {
    sourceTypes: [
      NodeType.EVENT_CONDITION,
      NodeType.FUNCTION_CONDITION,
      NodeType.TRANSACTION_CONDITION,
    ],
    targetTypes: [],
  },
};

// Node palette categories
export interface NodePaletteCategory {
  name: string;
  icon: string;
  nodes: NodeType[];
}

export const NODE_PALETTE_CATEGORIES: NodePaletteCategory[] = [
  {
    name: "Network",
    icon: "Network",
    nodes: [NodeType.NETWORK],
  },
  {
    name: "Contracts",
    icon: "FileCode",
    nodes: [NodeType.ADDRESS],
  },
  {
    name: "Conditions",
    icon: "Filter",
    nodes: [
      NodeType.EVENT_CONDITION,
      NodeType.FUNCTION_CONDITION,
      NodeType.TRANSACTION_CONDITION,
    ],
  },
  {
    name: "Actions",
    icon: "Bell",
    nodes: [NodeType.TRIGGER],
  },
];
