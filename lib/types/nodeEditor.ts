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
  NOTIFICATION = "notification",
  TRIGGER = "trigger",
}

// Node data interfaces
export interface BaseNodeData {
  label: string;
  isValid: boolean;
  validationErrors?: string[];
  isEditing?: boolean;
}

export interface NetworkNodeData extends BaseNodeData {
  networkSlug: string;
  networkName?: string;
  chainId?: number;
}

export interface AddressNodeData extends BaseNodeData {
  address: string;
  contractSpec?: object[];
}

export interface EventConditionNodeData extends BaseNodeData {
  signature: string;
  expression?: string;
}

export interface FunctionConditionNodeData extends BaseNodeData {
  signature: string;
  expression?: string;
}

export interface TransactionConditionNodeData extends BaseNodeData {
  status?: "Success" | "Failed";
  expression?: string;
}

export interface NotificationNodeData extends BaseNodeData {
  type: "email" | "webhook" | "slack";
  configuration: Record<string, unknown>;
}

export interface TriggerNodeData extends BaseNodeData {
  triggerId: string;
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
    | NotificationNodeData
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
    targetTypes: [NodeType.TRIGGER, NodeType.NOTIFICATION],
  },
  [NodeType.FUNCTION_CONDITION]: {
    sourceTypes: [NodeType.ADDRESS],
    targetTypes: [NodeType.TRIGGER, NodeType.NOTIFICATION],
  },
  [NodeType.TRANSACTION_CONDITION]: {
    sourceTypes: [NodeType.ADDRESS],
    targetTypes: [NodeType.TRIGGER, NodeType.NOTIFICATION],
  },
  [NodeType.TRIGGER]: {
    sourceTypes: [
      NodeType.EVENT_CONDITION,
      NodeType.FUNCTION_CONDITION,
      NodeType.TRANSACTION_CONDITION,
    ],
    targetTypes: [],
  },
  [NodeType.NOTIFICATION]: {
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
    nodes: [NodeType.TRIGGER, NodeType.NOTIFICATION],
  },
];
