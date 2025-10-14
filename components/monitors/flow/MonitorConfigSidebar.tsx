"use client";

import * as React from "react";
import { DeleteDustbin01 } from "@/lib/icons";
import {
  GlobeNetwork,
  FileCode,
  LightningThunderElectricOn,
  CodeAI,
  Exchange01,
  ClockDefault,
} from "@/lib/icons/solid";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  EditorNode,
  NodeType,
  NetworkNodeData,
  AddressNodeData,
  EventConditionNodeData,
  FunctionConditionNodeData,
  TransactionConditionNodeData,
  Contract,
  EventCondition,
  FunctionCondition,
  TransactionCondition,
} from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ContractList } from "./config/ContractList";
import { ContractForm } from "./config/ContractForm";
import { ConditionList } from "./config/ConditionList";
import { ConditionCard } from "./config/ConditionCard";
import { ConditionForm, ConditionFormData } from "./config/ConditionForm";

interface MonitorConfigSidebarProps {
  node: EditorNode | null;
  onNodeUpdate: (nodeId: string, updates: Partial<EditorNode["data"]>) => void;
  onNodeDelete: (nodeId: string) => void;
  onClose: () => void;
  className?: string;
}

// Helper function to get node icon
const getNodeIcon = (nodeType: NodeType) => {
  switch (nodeType) {
    case NodeType.NETWORK:
      return <GlobeNetwork className="h-5 w-5" />;
    case NodeType.ADDRESS:
      return <FileCode className="h-5 w-5" />;
    case NodeType.EVENT_CONDITION:
      return <LightningThunderElectricOn className="h-5 w-5" />;
    case NodeType.FUNCTION_CONDITION:
      return <CodeAI className="h-5 w-5" />;
    case NodeType.TRANSACTION_CONDITION:
      return <Exchange01 className="h-5 w-5" />;
    case NodeType.TRIGGER:
      return <ClockDefault className="h-5 w-5" />;
    default:
      return null;
  }
};

// Helper function to get node type label
const getNodeTypeLabel = (nodeType: NodeType) => {
  switch (nodeType) {
    case NodeType.NETWORK:
      return "Network";
    case NodeType.ADDRESS:
      return "Contract Address";
    case NodeType.EVENT_CONDITION:
      return "Event Condition";
    case NodeType.FUNCTION_CONDITION:
      return "Function Condition";
    case NodeType.TRANSACTION_CONDITION:
      return "Transaction Condition";
    case NodeType.TRIGGER:
      return "Trigger";
    default:
      return "Node";
  }
};

// Helper function to get node type category
const getNodeTypeCategory = (nodeType: NodeType) => {
  switch (nodeType) {
    case NodeType.NETWORK:
      return "Network Selection";
    case NodeType.ADDRESS:
      return "Contract Target";
    case NodeType.EVENT_CONDITION:
      return "Event Filter";
    case NodeType.FUNCTION_CONDITION:
      return "Function Filter";
    case NodeType.TRANSACTION_CONDITION:
      return "Transaction Filter";
    case NodeType.TRIGGER:
      return "Notification Action";
    default:
      return "Configuration";
  }
};

// Helper function to get node description
const getNodeDescription = (nodeType: NodeType) => {
  switch (nodeType) {
    case NodeType.NETWORK:
      return "Choose which Stellar network to monitor: Mainnet or Testnet.";
    case NodeType.ADDRESS:
      return "Specify the smart contract addresses to monitor. Optionally add contract specs or let them auto-fetch via SEP-48.";
    case NodeType.EVENT_CONDITION:
      return "Match contract events by signature and apply expression filters to event parameters. Add multiple events to monitor different conditions.";
    case NodeType.FUNCTION_CONDITION:
      return "Monitor function calls with argument filters. Primarily used for Stellar contracts. Add multiple functions to track different operations.";
    case NodeType.TRANSACTION_CONDITION:
      return "Filter transactions by status (success/failed/any) and apply custom expression filters. Add multiple conditions for comprehensive monitoring.";
    case NodeType.TRIGGER:
      return "Send alerts via Slack, Email, Discord, Telegram, Webhook, or Script when conditions match. (Configuration coming soon)";
    default:
      return "Configure the settings for this monitoring node.";
  }
};

export function MonitorConfigSidebar({
  node,
  onNodeUpdate,
  onNodeDelete,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
  className,
}: MonitorConfigSidebarProps) {
  // State for contract form
  const [contractFormOpen, setContractFormOpen] = React.useState(false);
  const [editingContractIndex, setEditingContractIndex] = React.useState<
    number | null
  >(null);

  // State for condition forms
  const [eventFormOpen, setEventFormOpen] = React.useState(false);
  const [editingEventIndex, setEditingEventIndex] = React.useState<
    number | null
  >(null);

  const [functionFormOpen, setFunctionFormOpen] = React.useState(false);
  const [editingFunctionIndex, setEditingFunctionIndex] = React.useState<
    number | null
  >(null);

  const [transactionFormOpen, setTransactionFormOpen] = React.useState(false);
  const [editingTransactionIndex, setEditingTransactionIndex] =
    React.useState<number | null>(null);

  // Contract handlers
  const handleAddContract = () => {
    setEditingContractIndex(null);
    setContractFormOpen(true);
  };

  const handleEditContract = (index: number) => {
    setEditingContractIndex(index);
    setContractFormOpen(true);
  };

  const handleSaveContract = (contract: Contract) => {
    if (!node || node.type !== NodeType.ADDRESS) return;

    const addressData = node.data as AddressNodeData;
    const contracts = addressData.config?.contracts || [];

    let updatedContracts: Contract[];
    if (editingContractIndex !== null) {
      updatedContracts = contracts.map((c, i) =>
        i === editingContractIndex ? contract : c,
      );
    } else {
      updatedContracts = [...contracts, contract];
    }

    const label =
      updatedContracts.length === 1
        ? updatedContracts[0].label || "1 Contract"
        : `${updatedContracts.length} Contracts`;

    onNodeUpdate(node.id, {
      config: { contracts: updatedContracts },
      label,
    });
  };

  const handleDeleteContract = (index: number) => {
    if (!node || node.type !== NodeType.ADDRESS) return;

    const addressData = node.data as AddressNodeData;
    const contracts = addressData.config?.contracts || [];
    const updatedContracts = contracts.filter((_, i) => i !== index);

    const label =
      updatedContracts.length === 0
        ? "No Contracts"
        : updatedContracts.length === 1
          ? updatedContracts[0].label || "1 Contract"
          : `${updatedContracts.length} Contracts`;

    onNodeUpdate(node.id, {
      config: { contracts: updatedContracts },
      label,
    });
  };

  // Event handlers
  const handleAddEvent = () => {
    setEditingEventIndex(null);
    setEventFormOpen(true);
  };

  const handleEditEvent = (index: number) => {
    setEditingEventIndex(index);
    setEventFormOpen(true);
  };

  const handleSaveEvent = (data: ConditionFormData) => {
    if (!node || node.type !== NodeType.EVENT_CONDITION) return;

    const eventData = node.data as EventConditionNodeData;
    const events = eventData.config?.events || [];

    const event: EventCondition = {
      signature: data.signature || "",
      expression: data.expression || undefined,
    };

    let updatedEvents: EventCondition[];
    if (editingEventIndex !== null) {
      updatedEvents = events.map((e, i) => (i === editingEventIndex ? event : e));
    } else {
      updatedEvents = [...events, event];
    }

    const label = `${updatedEvents.length} Event${updatedEvents.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { events: updatedEvents },
      label,
    });
  };

  const handleDeleteEvent = (index: number) => {
    if (!node || node.type !== NodeType.EVENT_CONDITION) return;

    const eventData = node.data as EventConditionNodeData;
    const events = eventData.config?.events || [];
    const updatedEvents = events.filter((_, i) => i !== index);

    const label =
      updatedEvents.length === 0
        ? "No Events"
        : `${updatedEvents.length} Event${updatedEvents.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { events: updatedEvents },
      label,
    });
  };

  // Function handlers
  const handleAddFunction = () => {
    setEditingFunctionIndex(null);
    setFunctionFormOpen(true);
  };

  const handleEditFunction = (index: number) => {
    setEditingFunctionIndex(index);
    setFunctionFormOpen(true);
  };

  const handleSaveFunction = (data: ConditionFormData) => {
    if (!node || node.type !== NodeType.FUNCTION_CONDITION) return;

    const functionData = node.data as FunctionConditionNodeData;
    const functions = functionData.config?.functions || [];

    const func: FunctionCondition = {
      signature: data.signature || "",
      expression: data.expression || undefined,
    };

    let updatedFunctions: FunctionCondition[];
    if (editingFunctionIndex !== null) {
      updatedFunctions = functions.map((f, i) =>
        i === editingFunctionIndex ? func : f,
      );
    } else {
      updatedFunctions = [...functions, func];
    }

    const label = `${updatedFunctions.length} Function${updatedFunctions.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { functions: updatedFunctions },
      label,
    });
  };

  const handleDeleteFunction = (index: number) => {
    if (!node || node.type !== NodeType.FUNCTION_CONDITION) return;

    const functionData = node.data as FunctionConditionNodeData;
    const functions = functionData.config?.functions || [];
    const updatedFunctions = functions.filter((_, i) => i !== index);

    const label =
      updatedFunctions.length === 0
        ? "No Functions"
        : `${updatedFunctions.length} Function${updatedFunctions.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { functions: updatedFunctions },
      label,
    });
  };

  // Transaction handlers
  const handleAddTransaction = () => {
    setEditingTransactionIndex(null);
    setTransactionFormOpen(true);
  };

  const handleEditTransaction = (index: number) => {
    setEditingTransactionIndex(index);
    setTransactionFormOpen(true);
  };

  const handleSaveTransaction = (data: ConditionFormData) => {
    if (!node || node.type !== NodeType.TRANSACTION_CONDITION) return;

    const transactionData = node.data as TransactionConditionNodeData;
    const transactions = transactionData.config?.transactions || [];

    const transaction: TransactionCondition = {
      status: data.status || "Success",
      expression: data.expression || null,
    };

    let updatedTransactions: TransactionCondition[];
    if (editingTransactionIndex !== null) {
      updatedTransactions = transactions.map((t, i) =>
        i === editingTransactionIndex ? transaction : t,
      );
    } else {
      updatedTransactions = [...transactions, transaction];
    }

    const label = `${updatedTransactions.length} Transaction${updatedTransactions.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { transactions: updatedTransactions },
      label,
    });
  };

  const handleDeleteTransaction = (index: number) => {
    if (!node || node.type !== NodeType.TRANSACTION_CONDITION) return;

    const transactionData = node.data as TransactionConditionNodeData;
    const transactions = transactionData.config?.transactions || [];
    const updatedTransactions = transactions.filter((_, i) => i !== index);

    const label =
      updatedTransactions.length === 0
        ? "No Transactions"
        : `${updatedTransactions.length} Transaction${updatedTransactions.length === 1 ? "" : "s"}`;

    onNodeUpdate(node.id, {
      config: { transactions: updatedTransactions },
      label,
    });
  };

  const renderNodeConfig = () => {
    if (!node) return null;

    switch (node.type) {
      case NodeType.NETWORK: {
        const networkData = node.data as NetworkNodeData;
        return (
          <div className="flex flex-col gap-y-7">
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="network"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Select Network
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Choose which blockchain network to monitor
                </p>
              </div>
              <Select
                value={networkData.config?.network || "stellar_mainnet"}
                onValueChange={(value) => {
                  const networkLabels: Record<string, string> = {
                    stellar_mainnet: "Stellar Mainnet",
                    stellar_testnet: "Stellar Testnet",
                  };
                  onNodeUpdate(node.id, {
                    config: { network: value },
                    label: networkLabels[value] || value,
                  });
                }}
              >
                <SelectTrigger id="network" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stellar_mainnet">
                    Stellar Mainnet
                  </SelectItem>
                  <SelectItem value="stellar_testnet">
                    Stellar Testnet
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      }

      case NodeType.ADDRESS: {
        const addressData = node.data as AddressNodeData;
        const contracts = addressData.config?.contracts || [];

        return (
          <>
            <ContractList
              contracts={contracts}
              onAdd={handleAddContract}
              onEdit={handleEditContract}
              onDelete={handleDeleteContract}
            />
            <ContractForm
              open={contractFormOpen}
              onClose={() => {
                setContractFormOpen(false);
                setEditingContractIndex(null);
              }}
              onSave={handleSaveContract}
              initialData={
                editingContractIndex !== null
                  ? contracts[editingContractIndex]
                  : undefined
              }
            />
          </>
        );
      }

      case NodeType.EVENT_CONDITION: {
        const eventData = node.data as EventConditionNodeData;
        const events = eventData.config?.events || [];

        return (
          <>
            <ConditionList
              items={events}
              onAdd={handleAddEvent}
              emptyMessage="No event conditions yet. Add an event to start monitoring."
              addButtonText="Add Event"
              renderCard={(event, index) => (
                <ConditionCard
                  icon={<LightningThunderElectricOn className="h-5 w-5" />}
                  title={event.signature}
                  description={
                    event.expression
                      ? `Filter: ${event.expression}`
                      : "No filter"
                  }
                  onEdit={() => handleEditEvent(index)}
                  onDelete={() => handleDeleteEvent(index)}
                />
              )}
            />
            <ConditionForm
              open={eventFormOpen}
              onClose={() => {
                setEventFormOpen(false);
                setEditingEventIndex(null);
              }}
              onSave={handleSaveEvent}
              initialData={
                editingEventIndex !== null ? events[editingEventIndex] : undefined
              }
              type="event"
            />
          </>
        );
      }

      case NodeType.FUNCTION_CONDITION: {
        const functionData = node.data as FunctionConditionNodeData;
        const functions = functionData.config?.functions || [];

        return (
          <>
            <ConditionList
              items={functions}
              onAdd={handleAddFunction}
              emptyMessage="No function conditions yet. Add a function to start monitoring."
              addButtonText="Add Function"
              renderCard={(func, index) => (
                <ConditionCard
                  icon={<CodeAI className="h-5 w-5" />}
                  title={func.signature}
                  description={
                    func.expression ? `Filter: ${func.expression}` : "No filter"
                  }
                  onEdit={() => handleEditFunction(index)}
                  onDelete={() => handleDeleteFunction(index)}
                />
              )}
            />
            <ConditionForm
              open={functionFormOpen}
              onClose={() => {
                setFunctionFormOpen(false);
                setEditingFunctionIndex(null);
              }}
              onSave={handleSaveFunction}
              initialData={
                editingFunctionIndex !== null
                  ? functions[editingFunctionIndex]
                  : undefined
              }
              type="function"
            />
          </>
        );
      }

      case NodeType.TRANSACTION_CONDITION: {
        const transactionData = node.data as TransactionConditionNodeData;
        const transactions = transactionData.config?.transactions || [];

        return (
          <>
            <ConditionList
              items={transactions}
              onAdd={handleAddTransaction}
              emptyMessage="No transaction conditions yet. Add a transaction filter to start monitoring."
              addButtonText="Add Transaction"
              renderCard={(transaction, index) => (
                <ConditionCard
                  icon={<Exchange01 className="h-5 w-5" />}
                  title={`Status: ${transaction.status}`}
                  description={
                    transaction.expression
                      ? `Filter: ${transaction.expression}`
                      : "No filter"
                  }
                  onEdit={() => handleEditTransaction(index)}
                  onDelete={() => handleDeleteTransaction(index)}
                />
              )}
            />
            <ConditionForm
              open={transactionFormOpen}
              onClose={() => {
                setTransactionFormOpen(false);
                setEditingTransactionIndex(null);
              }}
              onSave={handleSaveTransaction}
              initialData={
                editingTransactionIndex !== null
                  ? transactions[editingTransactionIndex]
                  : undefined
              }
              type="transaction"
            />
          </>
        );
      }

      case NodeType.TRIGGER:
        return (
          <div className="rounded-lg border border-dashed border-slate-6 bg-slate-2/50 p-8 text-center">
            <p className="text-sm text-slate-400 mb-2">
              ⚠️ No configuration options available yet.
            </p>
            <p className="text-xs text-slate-400">
              Future: Configure notification channels (Slack, Email, Discord,
              Telegram, Webhook, Custom Script)
            </p>
          </div>
        );

      default:
        return (
          <p className="text-sm text-slate-400">Select a node to configure</p>
        );
    }
  };

  return (
    <div
      className={cn(
        "h-full w-full bg-background border-l flex flex-col",
        className,
      )}
    >
      <ScrollArea className="flex-1 scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded-full scrollbar-thumb-slate-7 hover:scrollbar-thumb-slate-8">
        <div className="p-5">
          {node ? (
            <div className="space-y-6">
              {/* Node Visual Header */}
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[5px]">
                  <div className="border-slate-6 border-[0.5px] overflow-hidden rounded size-8 flex items-center justify-center">
                    {getNodeIcon(node.type as NodeType)}
                  </div>
                </div>
                <div className="grow">
                  <h3 className="text-[16px] font-medium leading-none text-foreground">
                    {getNodeTypeLabel(node.type as NodeType)}
                  </h3>
                  <p className="text-xs leading-none text-slate-400 mt-[4px]">
                    {getNodeTypeCategory(node.type as NodeType)}
                  </p>
                </div>
              </div>

              {/* Node Description */}
              <div className="mt-4">
                <div
                  className="text-sm text-slate-400"
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  <div className="[&_a]:underline [&_a:hover]:no-underline">
                    <p>{getNodeDescription(node.type as NodeType)}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Node Configuration */}
              <div>{renderNodeConfig()}</div>

              {/* Delete Action */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNodeDelete(node.id)}
                  className="w-full text-destructive hover:text-destructive border-destructive/20 hover:bg-destructive/10"
                >
                  <DeleteDustbin01 className="h-4 w-4 mr-2" />
                  Delete Node
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4">
              <div className="p-4 rounded-lg bg-muted/50 mb-4">
                <FileCode className="h-12 w-12 text-slate-400/50" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Node Selected</h3>
              <p className="text-sm text-slate-400 max-w-[250px]">
                Click on a node in the canvas to view and configure its settings
              </p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
