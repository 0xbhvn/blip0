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
    // EVM Transaction Fields
    EVM: {
      value: {
        field: "transaction.value",
        label: "Value (wei)",
        type: "uint256",
      },
      from: {
        field: "transaction.from",
        label: "From Address",
        type: "address",
      },
      to: { field: "transaction.to", label: "To Address", type: "address" },
      hash: {
        field: "transaction.hash",
        label: "Transaction Hash",
        type: "string",
      },
      gasPrice: {
        field: "transaction.gas_price",
        label: "Gas Price (wei)",
        type: "uint256",
      },
      maxFeePerGas: {
        field: "transaction.max_fee_per_gas",
        label: "Max Fee Per Gas",
        type: "uint256",
      },
      maxPriorityFeePerGas: {
        field: "transaction.max_priority_fee_per_gas",
        label: "Max Priority Fee",
        type: "uint256",
      },
      gasLimit: {
        field: "transaction.gas_limit",
        label: "Gas Limit",
        type: "uint256",
      },
      nonce: { field: "transaction.nonce", label: "Nonce", type: "uint256" },
      input: {
        field: "transaction.input",
        label: "Input Data",
        type: "string",
      },
      gasUsed: {
        field: "transaction.gas_used",
        label: "Gas Used",
        type: "uint256",
      },
      transactionIndex: {
        field: "transaction.transaction_index",
        label: "Transaction Index",
        type: "uint64",
      },
    },
    // Stellar Transaction Fields
    Stellar: {
      hash: {
        field: "transaction.hash",
        label: "Transaction Hash",
        type: "string",
      },
      ledger: {
        field: "transaction.ledger",
        label: "Ledger Number",
        type: "i64",
      },
      value: { field: "transaction.value", label: "Value", type: "i64" },
      from: {
        field: "transaction.from",
        label: "Source Account",
        type: "address",
      },
      to: { field: "transaction.to", label: "Destination", type: "address" },
    },
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
    {
      label: "Large Transfer (ERC20)",
      expression: "value > 1000000000000000000",
    }, // > 1 ETH worth
    { label: "Specific Sender", expression: 'from == "0xdeadbeef..."' },
    { label: "Multiple Conditions", expression: "value > 100 AND to != from" },
    { label: "Contains Pattern", expression: 'message contains "error"' },
    {
      label: "Stellar Event (indexed)",
      expression: "0 > 10000 AND 1.keyA == 'dataX'",
    }, // Stellar uses indexed params
  ],
  Functions: [
    { label: "High Value Transfer", expression: "amount > 1000000000" },
    { label: "Large Swap (DEX)", expression: "out_min > 1000000000" }, // From the example
    { label: "Specific Recipient", expression: 'recipient == "0xabc..."' },
    {
      label: "Complex Condition",
      expression:
        "(amount > 1000 AND recipient != sender) OR emergency == true",
    },
  ],
  Transactions: [
    {
      label: "High Value (EVM)",
      expression: "transaction.value > 1500000000000000000",
    }, // > 1.5 ETH
    {
      label: "High Gas Price",
      expression: "transaction.gas_price > 100000000000",
    },
    { label: "Contract Creation", expression: "transaction.to == null" },
    {
      label: "Input Data Pattern",
      expression: 'transaction.input starts_with "0xa9059cbb"',
    }, // ERC20 transfer
    {
      label: "Stellar Transaction",
      expression: "transaction.ledger >= 123456 AND transaction.value > 500",
    },
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
