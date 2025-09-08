import { MonitorCreateInput } from "@/lib/types/monitors";

export const DEFAULT_MONITOR_CONFIG: MonitorCreateInput = {
  name: "",
  networks: [],
  paused: false,
  addresses: [],
  match_conditions: {
    events: [],
    functions: [],
    transactions: [],
  },
  trigger_conditions: [],
  triggers: [],
} as const;

// Common ERC20/ERC721 Event Signatures
export const COMMON_EVENT_SIGNATURES = {
  ERC20: {
    Transfer: "Transfer(address,address,uint256)",
    Approval: "Approval(address,address,uint256)",
  },
  ERC721: {
    Transfer: "Transfer(address,address,uint256)",
    Approval: "Approval(address,address,uint256)",
    ApprovalForAll: "ApprovalForAll(address,address,bool)",
  },
  ERC1155: {
    TransferSingle: "TransferSingle(address,address,address,uint256,uint256)",
    TransferBatch: "TransferBatch(address,address,address,uint256[],uint256[])",
    ApprovalForAll: "ApprovalForAll(address,address,bool)",
  },
  Common: {
    OwnershipTransferred: "OwnershipTransferred(address,address)",
    Paused: "Paused(address)",
    Unpaused: "Unpaused(address)",
  },
} as const;

// Common Function Signatures
export const COMMON_FUNCTION_SIGNATURES = {
  ERC20: {
    transfer: "transfer(address,uint256)",
    approve: "approve(address,uint256)",
    transferFrom: "transferFrom(address,address,uint256)",
    mint: "mint(address,uint256)",
    burn: "burn(uint256)",
  },
  ERC721: {
    safeTransferFrom: "safeTransferFrom(address,address,uint256)",
    transferFrom: "transferFrom(address,address,uint256)",
    approve: "approve(address,uint256)",
    setApprovalForAll: "setApprovalForAll(address,bool)",
    mint: "mint(address,uint256)",
  },
  Common: {
    pause: "pause()",
    unpause: "unpause()",
    renounceOwnership: "renounceOwnership()",
    transferOwnership: "transferOwnership(address)",
  },
} as const;

// Expression Operators
export const EXPRESSION_OPERATORS = {
  Numeric: [
    { value: ">", label: "Greater than" },
    { value: ">=", label: "Greater than or equal" },
    { value: "<", label: "Less than" },
    { value: "<=", label: "Less than or equal" },
    { value: "==", label: "Equals" },
    { value: "!=", label: "Not equals" },
  ],
  String: [
    { value: "==", label: "Equals" },
    { value: "!=", label: "Not equals" },
    { value: "contains", label: "Contains" },
    { value: "starts_with", label: "Starts with" },
    { value: "ends_with", label: "Ends with" },
  ],
  Address: [
    { value: "==", label: "Equals" },
    { value: "!=", label: "Not equals" },
  ],
  Boolean: [
    { value: "==", label: "Equals" },
    { value: "!=", label: "Not equals" },
  ],
} as const;

// Common Expression Fields
export const EXPRESSION_FIELDS = {
  Event: {
    // Event-specific fields (depend on signature)
    // These will be dynamically populated based on the event signature
  },
  Transaction: {
    value: "transaction.value",
    from: "transaction.from",
    to: "transaction.to",
    gasPrice: "transaction.gasPrice",
    gasLimit: "transaction.gasLimit",
    nonce: "transaction.nonce",
    input: "transaction.input",
  },
  Block: {
    number: "block.number",
    timestamp: "block.timestamp",
    hash: "block.hash",
  },
} as const;

// Example Expressions
export const EXAMPLE_EXPRESSIONS = {
  Events: [
    { label: "Large Transfer", expression: "value > 1000000000000000000" }, // > 1 ETH
    { label: "Specific Sender", expression: 'from == "0x..."' },
    { label: "Multiple Conditions", expression: "value > 100 AND to != from" },
  ],
  Functions: [
    { label: "High Value Transfer", expression: "amount > 1000000" },
    { label: "Specific Recipient", expression: 'recipient == "0x..."' },
  ],
  Transactions: [
    { label: "Failed Transactions", expression: 'status == "Failed"' },
    {
      label: "High Gas Price",
      expression: "transaction.gasPrice > 100000000000",
    },
    { label: "Contract Creation", expression: "transaction.to == null" },
  ],
} as const;

// Available Trigger Types (these would come from your trigger configuration)
export const TRIGGER_TYPES = [
  {
    id: "webhook",
    label: "Webhook",
    description: "Send notifications to a webhook URL",
  },
  { id: "email", label: "Email", description: "Send email notifications" },
  { id: "slack", label: "Slack", description: "Send notifications to Slack" },
  {
    id: "discord",
    label: "Discord",
    description: "Send notifications to Discord",
  },
  {
    id: "telegram",
    label: "Telegram",
    description: "Send notifications to Telegram",
  },
] as const;

// Script Languages for Trigger Conditions
export const SCRIPT_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
] as const;

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
