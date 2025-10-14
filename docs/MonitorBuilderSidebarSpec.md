# OpenZeppelin Monitor - Node Sidebar Configuration Specification

**Version**: 1.0
**Date**: 2025-01-14
**Status**: Approved for Implementation

## Executive Summary

This document provides the complete specification for sidebar configuration options for each node type in the OpenZeppelin Monitor Builder interface (`/dashboard/monitors/builder`). It is based on comprehensive analysis of the OpenZeppelin Monitor documentation, existing codebase patterns, and user requirements.

> **📝 Important Note**: This specification currently focuses on **Stellar network support only** (Mainnet and Testnet). EVM networks (Ethereum, Polygon, BSC, etc.) will be added in a future update once the Stellar implementation is complete and stable.

## Table of Contents

1. [Key Findings](#key-findings)
2. [Node Configuration Specifications](#node-configuration-specifications)
3. [Implementation Plan](#implementation-plan)
4. [Technical Considerations](#technical-considerations)
5. [Success Criteria](#success-criteria)

## Key Findings

### Data Structure Insights

Based on analysis of OpenZeppelin Monitor's JSON configuration format:

- **Networks**: Array of network slugs (e.g., `["stellar_mainnet", "ethereum_mainnet"]`)
- **Addresses**: Array of contract objects:

  ```json
  {
    "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    "contract_spec": [ /* ABI array */ ]
  }
  ```

- **Events**: Array of event conditions:

  ```json
  {
    "signature": "Transfer(address,address,uint256)",
    "expression": "value > 10000000000"
  }
  ```

- **Functions**: Array of function conditions:

  ```json
  {
    "signature": "swap(Address,U32,U32,U128,U128)",
    "expression": "out_min > 1000000000"
  }
  ```

- **Transactions**: Array of transaction conditions:

  ```json
  {
    "status": "Success",
    "expression": null
  }
  ```

- **Triggers**: Array of trigger IDs (e.g., `["slack_notification_1", "email_notification_1"]`)

### Current Implementation Gaps

1. ❌ Sidebar only supports single item configuration per node
2. ❌ No "Add Condition" or "Add Contract" functionality exists
3. ❌ No card-based list UI for managing multiple items
4. ❌ Missing proper form validation for required fields
5. ❌ Data structure doesn't match OpenZeppelin Monitor JSON format

### Existing Patterns to Leverage

The codebase already has patterns for displaying multiple items:

- `MonitorDetailSections.tsx` shows how to render arrays of contracts, events, functions, and transactions
- Card-based design with edit/delete actions
- Proper empty states

## Node Configuration Specifications

### 1. Network Node

**Multiplicity Rules**:

- ✅ Multiple Network nodes allowed (one per network)
- ❌ Multiple networks per node NOT allowed (single selection only)

**Form Fields**:

| Field | Type | Required | Options | Description |
|-------|------|----------|---------|-------------|
| Select Network | Dropdown | ✅ Yes | stellar_mainnet, stellar_testnet | Blockchain network to monitor |

**Note**: Currently only Stellar networks are supported. EVM networks (Ethereum, Polygon, BSC) will be added in a future update.

**UI Design**:

```text
┌─────────────────────────────────────────────┐
│ Select Network                   (required) │
│ ┌─────────────────────────────────────────┐ │
│ │ [Dropdown: Stellar Mainnet           ▼] │ │
│ └─────────────────────────────────────────┘ │
│ Choose which Stellar network to monitor     │
└─────────────────────────────────────────────┘
```

**Validation Rules**:

- Must select exactly one network
- Network selection updates node label

**Data Structure**:

```typescript
{
  type: NodeType.NETWORK,
  data: {
    config: {
      network: "stellar_mainnet"
    },
    label: "Stellar Mainnet"
  }
}
```

---

### 2. Address Node (Contract)

**Multiplicity Rules**:

- ✅ Multiple Address nodes allowed
- ✅ Multiple contracts per node allowed (recommended pattern)

**Form Fields** (per contract):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Contract Address | Input | ✅ Yes | Stellar contract address (CA...) |
| Display Label | Input | ❌ Optional | Custom name for this contract |
| Contract Spec | Textarea/Upload | ❌ Optional | Contract spec JSON (auto-fetched via SEP-48 if omitted) |

**Note**: Currently only Stellar contracts are supported. EVM contracts will be added in a future update.

**UI Design**:

```text
┌───────────────────────────────────────────────────┐
│ Contracts (2)                  [+ Add Contract]   │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ 📄 Phoenix Protocol DEX          [Edit] [✕]  │ │
│ │ CA6PUJLBYKZKUEKLZJMKBZLEKP2OTHANDEOWSFF44FTS │ │
│ │ Spec: Auto-fetch (SEP-48)                     │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ 📄 Liquidity Pool                [Edit] [✕]  │ │
│ │ CCDEFGHIJKLMNOPQRSTUVWXYZ123456789ABCDEFGHI  │ │
│ │ Spec: 5 functions defined                     │ │
│ └───────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘

WHEN CLICKING [+ Add Contract] OR [Edit]:
┌─────────────────────────────────────────────┐
│ Add/Edit Contract                           │
├─────────────────────────────────────────────┤
│                                             │
│ Contract Address              (required)    │
│ ┌─────────────────────────────────────────┐ │
│ │ CA...                                   │ │
│ └─────────────────────────────────────────┘ │
│ Enter the Stellar contract address          │
│                                             │
│ Display Label                 (optional)    │
│ ┌─────────────────────────────────────────┐ │
│ │ Phoenix Protocol DEX                    │ │
│ └─────────────────────────────────────────┘ │
│ Custom name for this contract               │
│                                             │
│ Contract Spec                 (optional)    │
│ ┌─────────────────────────────────────────┐ │
│ │ [                                       │ │
│ │   {"function_v0": {                     │ │
│ │     "name": "swap", ...}}               │ │
│ │ ]                                       │ │
│ └─────────────────────────────────────────┘ │
│ Paste contract spec JSON                    │
│ 💡 Leave empty to auto-fetch via SEP-48     │
│                                             │
│                    [Cancel]  [Save Contract]│
└─────────────────────────────────────────────┘
```

**Validation Rules**:

- At least one contract required
- Contract address must be valid Stellar format (starts with CA... and 56 characters)
- Contract spec must be valid JSON array if provided
- Duplicate addresses should show warning

**Data Structure**:

```typescript
{
  type: NodeType.ADDRESS,
  data: {
    config: {
      contracts: [
        {
          address: "CA6PUJLBYKZKUEKLZJMKBZLEKP2OTHANDEOWSFF44FTS",
          label: "Phoenix Protocol DEX"
          // contractSpec omitted (auto-fetch via SEP-48)
        },
        {
          address: "CCDEFGHIJKLMNOPQRSTUVWXYZ123456789ABCDEFGHIJKLMNOPQR",
          label: "Liquidity Pool",
          contractSpec: [{ /* Stellar contract spec */ }]
        }
      ]
    },
    label: "2 Contracts"
  }
}
```

---

### 3. Event Condition Node

**Multiplicity Rules**:

- ❌ Only ONE Event Condition node per monitor
- ✅ Multiple event conditions per node

**Form Fields** (per event):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Event Signature | Input | ✅ Yes | Event signature (e.g., `Transfer(address,address,uint256)`) |
| Expression Filter | Input | ❌ Optional | Filter expression (e.g., `value > 10000000000`) |

**UI Design**:

```text
┌───────────────────────────────────────────────────┐
│ Event Conditions (2)               [+ Add Event]  │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ ⚡ Event 1                       [Edit] [✕]  │ │
│ │ Transfer(address,address,uint256)             │ │
│ │ 📊 Filter: value > 10000000000                 │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ ⚡ Event 2                       [Edit] [✕]  │ │
│ │ Approval(address,address,uint256)             │ │
│ │ 📊 Filter: (none)                              │ │
│ └───────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘

WHEN CLICKING [+ Add Event] OR [Edit]:
┌─────────────────────────────────────────────┐
│ Add/Edit Event Condition                    │
├─────────────────────────────────────────────┤
│                                             │
│ Event Signature               (required)    │
│ ┌─────────────────────────────────────────┐ │
│ │ Transfer(address,address,uint256)       │ │
│ └─────────────────────────────────────────┘ │
│ Example: Transfer(address,address,uint256), │
│ Approval(address,address,uint256)           │
│                                             │
│ Expression Filter             (optional)    │
│ ┌─────────────────────────────────────────┐ │
│ │ value > 10000000000                     │ │
│ └─────────────────────────────────────────┘ │
│ Filter event parameters                     │
│ Examples: value > 1000, from == "0x..."     │
│                                             │
│                       [Cancel]  [Save Event]│
└─────────────────────────────────────────────┘
```

**Validation Rules**:

- Event signature required when condition exists
- Signature must match pattern: `Name(type1,type2,...)`
- Expression is optional but should be validated for syntax

**Data Structure**:

```typescript
{
  type: NodeType.EVENT_CONDITION,
  data: {
    config: {
      events: [
        {
          signature: "Transfer(address,address,uint256)",
          expression: "value > 10000000000"
        },
        {
          signature: "Approval(address,address,uint256)",
          expression: null
        }
      ]
    },
    label: "2 Events"
  }
}
```

---

### 4. Function Condition Node

**Multiplicity Rules**:

- ❌ Only ONE Function Condition node per monitor
- ✅ Multiple function conditions per node

**Form Fields** (per function):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| Function Signature | Input | ✅ Yes | Function signature (e.g., `swap(Address,U32,U32,U128,U128)`) |
| Expression Filter | Input | ❌ Optional | Filter expression (e.g., `out_min > 1000000000`) |

**UI Design**:

```text
┌───────────────────────────────────────────────────┐
│ Function Conditions (2)         [+ Add Function]  │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ ⚙️ Function 1                    [Edit] [✕]  │ │
│ │ swap(Address,U32,U32,U128,U128)               │ │
│ │ 📊 Filter: out_min > 1000000000                │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ ⚙️ Function 2                    [Edit] [✕]  │ │
│ │ balanceOf(Address)                            │ │
│ │ 📊 Filter: (none)                              │ │
│ └───────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘

WHEN CLICKING [+ Add Function] OR [Edit]:
┌─────────────────────────────────────────────┐
│ Add/Edit Function Condition                 │
├─────────────────────────────────────────────┤
│                                             │
│ Function Signature            (required)    │
│ ┌─────────────────────────────────────────┐ │
│ │ swap(Address,U32,U32,U128,U128)         │ │
│ └─────────────────────────────────────────┘ │
│ Example: swap(Address,U32,U32,U128,U128),   │
│ balanceOf(Address)                          │
│                                             │
│ Expression Filter             (optional)    │
│ ┌─────────────────────────────────────────┐ │
│ │ out_min > 1000000000                    │ │
│ └─────────────────────────────────────────┘ │
│ Filter function arguments                   │
│ Examples: out_min > 1000, user == "G..."    │
│                                             │
│                   [Cancel]  [Save Function] │
└─────────────────────────────────────────────┘
```

**Validation Rules**:

- Function signature required when condition exists
- Signature must match pattern: `name(Type1,Type2,...)`
- Expression is optional but should be validated for syntax
- Primarily used for Stellar contracts

**Data Structure**:

```typescript
{
  type: NodeType.FUNCTION_CONDITION,
  data: {
    config: {
      functions: [
        {
          signature: "swap(Address,U32,U32,U128,U128)",
          expression: "out_min > 1000000000"
        },
        {
          signature: "balanceOf(Address)",
          expression: null
        }
      ]
    },
    label: "2 Functions"
  }
}
```

---

### 5. Transaction Condition Node

**Multiplicity Rules**:

- ❌ Only ONE Transaction Condition node per monitor
- ✅ Multiple transaction conditions per node

**Form Fields** (per transaction):

| Field | Type | Required | Options | Description |
|-------|------|----------|---------|-------------|
| Transaction Status | Dropdown | ✅ Yes | Success, Failed, Any | Filter by transaction status |
| Expression Filter | Input | ❌ Optional | - | Custom expression for additional filtering |

**UI Design**:

```text
┌───────────────────────────────────────────────────┐
│ Transaction Conditions (2)  [+ Add Transaction]   │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ 🔄 Transaction 1                 [Edit] [✕]  │ │
│ │ Status: ✅ Success                             │ │
│ │ 📊 Filter: (none)                              │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ 🔄 Transaction 2                 [Edit] [✕]  │ │
│ │ Status: ❌ Failed                              │ │
│ │ 📊 Filter: gas_used > 100000                   │ │
│ └───────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘

WHEN CLICKING [+ Add Transaction] OR [Edit]:
┌─────────────────────────────────────────────┐
│ Add/Edit Transaction Condition              │
├─────────────────────────────────────────────┤
│                                             │
│ Transaction Status            (required)    │
│ ┌─────────────────────────────────────────┐ │
│ │ [Dropdown: Success                   ▼] │ │
│ └─────────────────────────────────────────┘ │
│ Options: Success, Failed, Any               │
│                                             │
│ Expression Filter             (optional)    │
│ ┌─────────────────────────────────────────┐ │
│ │ gas_used > 100000                       │ │
│ └─────────────────────────────────────────┘ │
│ Custom transaction filters                  │
│                                             │
│               [Cancel]  [Save Transaction]  │
└─────────────────────────────────────────────┘
```

**Validation Rules**:

- Transaction status required when condition exists
- Expression is optional but should be validated for syntax

**Data Structure**:

```typescript
{
  type: NodeType.TRANSACTION_CONDITION,
  data: {
    config: {
      transactions: [
        {
          status: "Success",
          expression: null
        },
        {
          status: "Failed",
          expression: "gas_used > 100000"
        }
      ]
    },
    label: "2 Transactions"
  }
}
```

---

### 6. Trigger Node

**Multiplicity Rules**:

- ❌ Only ONE Trigger node per monitor (current requirement)
- ⏸️ No configuration options yet (future: multiple triggers per node)

**Form Fields**:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| (none) | - | - | No configuration options currently |

**UI Design** (Current):

```text
┌─────────────────────────────────────────────┐
│ Trigger Configuration                       │
│                                             │
│ ⚠️  No configuration options available yet. │
│                                             │
│ Future: You'll be able to configure         │
│ notification channels here:                 │
│ - Slack                                     │
│ - Email                                     │
│ - Discord                                   │
│ - Telegram                                  │
│ - Webhook                                   │
│ - Custom Script                             │
└─────────────────────────────────────────────┘
```

**UI Design** (Future):

```text
┌───────────────────────────────────────────────────┐
│ Notification Channels (2)     [+ Add Channel]     │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ 💬 Slack Notification            [Edit] [✕]  │ │
│ │ Channel: #monitoring                          │ │
│ │ Webhook: https://hooks.slack.com/...          │ │
│ └───────────────────────────────────────────────┘ │
│                                                   │
│ ┌───────────────────────────────────────────────┐ │
│ │ ✉️  Email Notification           [Edit] [✕]  │ │
│ │ To: team@example.com, alerts@example.com      │ │
│ │ SMTP: smtp.gmail.com:465                      │ │
│ └───────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────┘
```

**Validation Rules** (Future):

- At least one notification channel required
- Each channel must have valid configuration

**Data Structure** (Future):

```typescript
// Future implementation
{
  type: NodeType.TRIGGER,
  data: {
    config: {
      channels: [
        {
          type: "slack",
          name: "Slack Notification",
          slackUrl: "https://hooks.slack.com/...",
          message: {
            title: "Alert",
            body: "..."
          }
        },
        {
          type: "email",
          name: "Email Notification",
          host: "smtp.gmail.com",
          port: 465,
          recipients: ["team@example.com"]
        }
      ]
    },
    label: "2 Channels"
  }
}
```

---

## Implementation Plan

### Phase 1: Data Structure Updates

**Files to modify**: `lib/types/nodeEditor.ts`

1. Update type definitions to support arrays:

```typescript
export interface AddressNodeData extends BaseNodeData {
  contracts: Array<{
    address: string;
    label?: string;
    contractSpec?: object[];
  }>;
}

export interface EventConditionNodeData extends BaseNodeData {
  events: Array<{
    signature: string;
    expression?: string;
  }>;
}

export interface FunctionConditionNodeData extends BaseNodeData {
  functions: Array<{
    signature: string;
    expression?: string;
  }>;
}

export interface TransactionConditionNodeData extends BaseNodeData {
  transactions: Array<{
    status: "Success" | "Failed" | "Any";
    expression?: string;
  }>;
}
```

### Phase 2: Shared Components

**New files to create**:

1. `components/monitors/flow/config/ConditionList.tsx`
   - Generic list component for conditions
   - Props: items, onEdit, onDelete, emptyMessage, addButtonText

2. `components/monitors/flow/config/ConditionCard.tsx`
   - Individual condition card with edit/delete buttons
   - Props: condition, onEdit, onDelete, icon

3. `components/monitors/flow/config/ConditionForm.tsx`
   - Add/Edit form dialog for conditions
   - Props: condition, onSave, onCancel, type (event/function/transaction)

4. `components/monitors/flow/config/ContractList.tsx`
   - Contract-specific list component
   - Props: contracts, onEdit, onDelete, onAdd

5. `components/monitors/flow/config/ContractCard.tsx`
   - Individual contract card
   - Props: contract, onEdit, onDelete

6. `components/monitors/flow/config/ContractForm.tsx`
   - Contract add/edit form dialog
   - Props: contract, onSave, onCancel

**Design pattern**: Follow the card-based design seen in `MonitorDetailSections.tsx`

### Phase 3: Sidebar Updates

**File to modify**: `components/monitors/flow/MonitorConfigSidebar.tsx`

1. Refactor to use new components
2. Implement "Add" buttons for each node type
3. Add card-based list rendering
4. Implement inline editing and deletion
5. Add proper validation
6. Add empty states

**Example implementation structure**:

```typescript
case NodeType.EVENT_CONDITION:
  return (
    <ConditionList
      items={node.data.config.events || []}
      onAdd={() => setEditingEvent({ signature: "", expression: "" })}
      onEdit={(index) => setEditingEvent(node.data.config.events[index])}
      onDelete={(index) => handleDeleteEvent(index)}
      emptyMessage="No event conditions yet"
      addButtonText="Add Event"
    />
  );
```

### Phase 4: Integration

**Files to modify**:

- `app/dashboard/monitors/builder/page.tsx` - Handle new data structure
- `lib/utils/nodeSequence.ts` - Update validation logic
- `components/monitors/flow/MonitorFlowEditor.tsx` - Update monitor config builder

1. Update `handleNodeUpdate` to work with arrays
2. Update validation to check array contents
3. Update monitor config export to match OpenZeppelin format
4. Test data persistence

### Phase 5: Polish

1. Add smooth animations for add/remove
2. Add confirmation dialogs for deletions
3. Improve error messaging
4. Add keyboard shortcuts (Enter to save, Escape to cancel)
5. Add drag-and-drop reordering (optional)

---

## Technical Considerations

### Form State Management

```typescript
// Local state for add/edit dialogs
const [editingContract, setEditingContract] = useState<{
  index?: number;
  address: string;
  label?: string;
  contractSpec?: object[];
} | null>(null);

// Validation
const validateContract = (contract: Contract) => {
  const errors: string[] = [];
  if (!contract.address) errors.push("Address is required");
  if (contract.contractSpec && !isValidJSON(contract.contractSpec)) {
    errors.push("Contract spec must be valid JSON");
  }
  return errors;
};
```

### UX Patterns

1. **Card-based Design**: Each item in a list is a card with:
   - Icon and label
   - Summary of configuration
   - Edit and delete buttons
   - Hover state for better interaction

2. **Inline Editing**: Click edit to open a dialog/drawer with form fields

3. **Empty States**: Show helpful message when no items exist

4. **Loading States**: Show skeleton or spinner during operations

5. **Confirmation Dialogs**: Ask before deleting items

### Validation Rules

```typescript
// Network validation
const validateNetwork = (node: NetworkNode) => {
  return node.data.config.network ? [] : ["Network selection is required"];
};

// Address validation
const validateAddress = (node: AddressNode) => {
  const errors: string[] = [];
  if (!node.data.config.contracts || node.data.config.contracts.length === 0) {
    errors.push("At least one contract address is required");
  }
  node.data.config.contracts?.forEach((contract, index) => {
    if (!contract.address) {
      errors.push(`Contract ${index + 1}: Address is required`);
    }
  });
  return errors;
};

// Event validation
const validateEvent = (node: EventConditionNode) => {
  const errors: string[] = [];
  node.data.config.events?.forEach((event, index) => {
    if (!event.signature) {
      errors.push(`Event ${index + 1}: Signature is required`);
    }
  });
  return errors;
};
```

### Accessibility Considerations

1. Use semantic HTML elements
2. Add proper ARIA labels
3. Ensure keyboard navigation works
4. Provide focus management in dialogs
5. Add screen reader announcements for add/delete actions

---

## Files to Create/Modify

### New Files (6)

1. ✨ `components/monitors/flow/config/ConditionList.tsx`
2. ✨ `components/monitors/flow/config/ConditionCard.tsx`
3. ✨ `components/monitors/flow/config/ConditionForm.tsx`
4. ✨ `components/monitors/flow/config/ContractList.tsx`
5. ✨ `components/monitors/flow/config/ContractCard.tsx`
6. ✨ `components/monitors/flow/config/ContractForm.tsx`

### Modified Files (5)

1. 📝 `lib/types/nodeEditor.ts` - Update type definitions
2. 📝 `components/monitors/flow/MonitorConfigSidebar.tsx` - Refactor to support multiple items
3. 📝 `app/dashboard/monitors/builder/page.tsx` - Handle new data structure
4. 📝 `lib/utils/nodeSequence.ts` - Update validation logic
5. 📝 `components/monitors/flow/MonitorFlowEditor.tsx` - Update config builder

### Documentation (1)

1. 📚 `docs/MonitorBuilderSidebarSpec.md` - This document

**Total**: 12 files

---

## Success Criteria

### Functional Requirements

- ✅ Each node type has proper sidebar configuration matching OpenZeppelin Monitor spec
- ✅ Users can add multiple contracts to Address node
- ✅ Users can add multiple conditions to Event/Function/Transaction nodes
- ✅ Each item can be edited and deleted independently
- ✅ Form validation works correctly for required fields
- ✅ Data structure matches OpenZeppelin Monitor JSON format exactly

### UX Requirements

- ✅ UI is intuitive and follows established patterns
- ✅ "Add" buttons are clearly visible
- ✅ Edit/delete actions are accessible
- ✅ Empty states provide helpful guidance
- ✅ Animations are smooth and not distracting
- ✅ Error messages are clear and actionable

### Technical Requirements

- ✅ No breaking changes to existing monitor configurations
- ✅ Components are reusable and maintainable
- ✅ Type safety is preserved throughout
- ✅ Performance is acceptable with many items
- ✅ Code follows existing patterns and conventions

---

## Appendix A: OpenZeppelin Monitor JSON Examples

### Complete Monitor Configuration (Stellar Example)

```json
{
  "name": "Large Transfer of USDC Token",
  "paused": false,
  "networks": ["ethereum_mainnet"],
  "addresses": [
    {
      "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "contract_spec": [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      ]
    }
  ],
  "match_conditions": {
    "functions": [],
    "events": [
      {
        "signature": "Transfer(address,address,uint256)",
        "expression": "value > 10000000000"
      }
    ],
    "transactions": [
      {
        "status": "Success",
        "expression": null
      }
    ]
  },
  "trigger_conditions": [
    {
      "script_path": "./config/filters/evm_filter_block_number.sh",
      "language": "bash",
      "arguments": ["--verbose"],
      "timeout_ms": 1000
    }
  ],
  "triggers": ["evm_large_transfer_usdc_slack", "evm_large_transfer_usdc_email"]
}
```

---

## Appendix B: Component API Reference

### ConditionList Component

```typescript
interface ConditionListProps<T> {
  items: T[];
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  emptyMessage: string;
  addButtonText: string;
  renderCard: (item: T, index: number) => React.ReactNode;
}
```

### ConditionCard Component

```typescript
interface ConditionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
  children?: React.ReactNode;
}
```

### ConditionForm Component

```typescript
interface ConditionFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: ConditionData) => void;
  initialData?: ConditionData;
  title: string;
  fields: FormField[];
}
```
