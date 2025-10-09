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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EditorNode, NodeType } from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

// Type helper for config access
type ConfigType = Record<string, unknown>;

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
      return "Blockchain";
    case NodeType.ADDRESS:
      return "Contract";
    case NodeType.EVENT_CONDITION:
    case NodeType.FUNCTION_CONDITION:
    case NodeType.TRANSACTION_CONDITION:
      return "Condition";
    case NodeType.TRIGGER:
      return "Timer";
    default:
      return "Configuration";
  }
};

// Helper function to get node description
const getNodeDescription = (nodeType: NodeType) => {
  switch (nodeType) {
    case NodeType.NETWORK:
      return "Select the blockchain network to monitor for smart contract events and transactions.";
    case NodeType.ADDRESS:
      return "Specify the smart contract address you want to monitor for events and function calls.";
    case NodeType.EVENT_CONDITION:
      return "Configure which contract events to monitor and set up filters for specific conditions.";
    case NodeType.FUNCTION_CONDITION:
      return "Monitor smart contract function calls and set conditions based on return values.";
    case NodeType.TRANSACTION_CONDITION:
      return "Set up conditions for monitoring blockchain transactions with custom filters.";
    case NodeType.TRIGGER:
      return "Configure the recurring schedule for when this monitor should execute.";
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
  const renderNodeConfig = () => {
    if (!node) return null;

    switch (node.type) {
      case NodeType.NETWORK:
        return (
          <div className="flex flex-col gap-y-7">
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
                  value={
                    ((node.data.config as ConfigType)?.network as string) ||
                    "ethereum"
                  }
                  onValueChange={(value) =>
                    onNodeUpdate(node.id, {
                      config: { ...(node.data.config || {}), network: value },
                      label: value.charAt(0).toUpperCase() + value.slice(1),
                    })
                  }
                >
                  <SelectTrigger id="network" className="mt-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="optimism">Optimism</SelectItem>
                    <SelectItem value="base">Base</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case NodeType.ADDRESS:
        return (
          <div className="flex flex-col gap-y-7">
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="address"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Contract Address
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Enter the smart contract address to monitor
                </p>
              </div>
              <Input
                id="address"
                placeholder="0x..."
                value={
                  ((node.data.config as ConfigType)?.address as string) || ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      address: e.target.value,
                    },
                  })
                }
                className="mt-1.5"
              />
            </div>
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="label"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Display Label
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (optional)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Custom name for this contract in your monitor
                </p>
              </div>
              <Input
                id="label"
                placeholder="Contract Name"
                value={node.data.label || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, { label: e.target.value })
                }
                className="mt-1.5"
              />
            </div>
          </div>
        );

      case NodeType.EVENT_CONDITION:
        return (
          <div className="flex flex-col gap-y-7">
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="event"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Event Name
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Specify the event to monitor (e.g., Transfer, Approval)
                </p>
              </div>
              <Input
                id="event"
                placeholder="Transfer, Approval, etc."
                value={
                  ((node.data.config as ConfigType)?.eventName as string) || ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      eventName: e.target.value,
                    },
                    label: e.target.value || "Event",
                  })
                }
                className="mt-1.5"
              />
            </div>
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="filters"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Event Filters (JSON)
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (optional)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Add filters to narrow down events
                </p>
              </div>
              <Textarea
                id="filters"
                placeholder='{"from": "0x...", "value": ">1000000"}'
                value={
                  ((node.data.config as ConfigType)?.filters as string) || ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      filters: e.target.value,
                    },
                  })
                }
                rows={4}
                className="mt-1.5 font-mono text-xs"
              />
            </div>
          </div>
        );

      case NodeType.FUNCTION_CONDITION:
        return (
          <div className="flex flex-col gap-y-7">
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="function"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Function Name
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Contract function to call and monitor
                </p>
              </div>
              <Input
                id="function"
                placeholder="balanceOf, totalSupply, etc."
                value={
                  ((node.data.config as ConfigType)?.functionName as string) ||
                  ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      functionName: e.target.value,
                    },
                    label: e.target.value || "Function",
                  })
                }
                className="mt-1.5"
              />
            </div>
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="condition"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Condition Type
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  How to compare the function return value
                </p>
              </div>
              <Select
                value={
                  ((node.data.config as ConfigType)?.condition as string) ||
                  "equals"
                }
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      condition: value,
                    },
                  })
                }
              >
                <SelectTrigger id="condition" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equals">Equals</SelectItem>
                  <SelectItem value="greater">Greater Than</SelectItem>
                  <SelectItem value="less">Less Than</SelectItem>
                  <SelectItem value="between">Between</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="value"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Expected Value
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Value to compare against
                </p>
              </div>
              <Input
                id="value"
                placeholder="1000000"
                value={
                  ((node.data.config as ConfigType)?.expectedValue as string) ||
                  ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      expectedValue: e.target.value,
                    },
                  })
                }
                className="mt-1.5"
              />
            </div>
          </div>
        );

      case NodeType.TRANSACTION_CONDITION:
        return (
          <div className="flex flex-col gap-y-7">
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="txType"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Transaction Type
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (required)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Select the type of transaction to monitor
                </p>
              </div>
              <Select
                value={
                  ((node.data.config as ConfigType)?.txType as string) || "any"
                }
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), txType: value },
                    label: value.charAt(0).toUpperCase() + value.slice(1),
                  })
                }
              >
                <SelectTrigger id="txType" className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Transaction</SelectItem>
                  <SelectItem value="incoming">Incoming</SelectItem>
                  <SelectItem value="outgoing">Outgoing</SelectItem>
                  <SelectItem value="internal">Internal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <div className="mb-1.5 pb-0 select-none">
                <section className="flex items-center">
                  <Label
                    htmlFor="valueThreshold"
                    className="block text-sm mb-0 select-none text-foreground font-medium"
                  >
                    Value Threshold (ETH)
                  </Label>
                  <label className="block select-none mb-0 ml-1 text-xs font-medium text-gray-400">
                    (optional)
                  </label>
                </section>
                <p className="select-none text-xs font-medium text-slate-400 mt-1">
                  Minimum transaction value to trigger monitor
                </p>
              </div>
              <Input
                id="valueThreshold"
                type="number"
                placeholder="0.1"
                value={
                  ((node.data.config as ConfigType)?.valueThreshold as string) ||
                  ""
                }
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: {
                      ...(node.data.config || {}),
                      valueThreshold: e.target.value,
                    },
                  })
                }
                className="mt-1.5"
              />
            </div>
          </div>
        );

      default:
        return (
          <p className="text-sm text-slate-400">
            Select a node to configure
          </p>
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
                    WebkitLineClamp: 2,
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
