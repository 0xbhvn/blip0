/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Node } from "@xyflow/react";
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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MultipleCrossCancelDefault, InformationCircle, LabFlaskConical, FloppyDefault } from "@/lib/icons";

interface NodeConfigPanelProps {
  node: Node | null;
  onClose: () => void;
  onUpdate: (updates: any) => void;
}

export function NodeConfigPanel({ node, onClose, onUpdate }: NodeConfigPanelProps) {
  if (!node) return null;

  const renderConfigForm = () => {
    switch (node.type) {
      case "networkSource":
        return <NetworkSourceConfig node={node} onUpdate={onUpdate} />;
      case "address":
        return <AddressConfig node={node} onUpdate={onUpdate} />;
      case "eventCondition":
        return <EventConditionConfig node={node} onUpdate={onUpdate} />;
      case "functionCondition":
        return <FunctionConditionConfig node={node} onUpdate={onUpdate} />;
      case "transactionCondition":
        return <TransactionConditionConfig node={node} onUpdate={onUpdate} />;
      case "notification":
        return <NotificationConfig node={node} onUpdate={onUpdate} />;
      case "webhook":
        return <WebhookConfig node={node} onUpdate={onUpdate} />;
      default:
        return <div className="text-muted-foreground">No configuration available</div>;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <span className="text-lg">{getNodeIcon(node.type)}</span>
          <h3 className="font-semibold">{(node.data as any).label || "Configure Node"}</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <MultipleCrossCancelDefault className="h-4 w-4" />
        </Button>
      </div>

      {/* Configuration Tabs */}
      <Tabs defaultValue="basic" className="flex-1">
        <TabsList className="w-full rounded-none border-b">
          <TabsTrigger value="basic" className="flex-1">Basic</TabsTrigger>
          <TabsTrigger value="advanced" className="flex-1">Advanced</TabsTrigger>
          <TabsTrigger value="test" className="flex-1">Test</TabsTrigger>
        </TabsList>

        <div className="overflow-y-auto flex-1">
          <TabsContent value="basic" className="p-4 space-y-4">
            {renderConfigForm()}
          </TabsContent>

          <TabsContent value="advanced" className="p-4 space-y-4">
            <div className="text-sm text-muted-foreground">
              Advanced configuration options will be available soon.
            </div>
          </TabsContent>

          <TabsContent value="test" className="p-4 space-y-4">
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <LabFlaskConical className="h-4 w-4" />
                  Test Configuration
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Test your node configuration with sample data
                </p>
                <Button size="sm" variant="outline">
                  Run Test
                </Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* Footer */}
      <div className="p-4 border-t bg-muted/50">
        <Button className="w-full" onClick={() => console.log("Save configuration")}>
          <FloppyDefault className="h-4 w-4 mr-2" />
          Save Configuration
        </Button>
      </div>
    </div>
  );
}

// Network Source Configuration
function NetworkSourceConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Network</Label>
        <Select
          value={(node.data as any).network || ""}
          onValueChange={(value) => onUpdate({ network: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a network" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ethereum">Ethereum Mainnet</SelectItem>
            <SelectItem value="polygon">Polygon</SelectItem>
            <SelectItem value="arbitrum">Arbitrum</SelectItem>
            <SelectItem value="optimism">Optimism</SelectItem>
            <SelectItem value="base">Base</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <InformationCircle className="h-4 w-4 text-blue-500 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-blue-900 dark:text-blue-100">Pro tip</p>
            <p className="text-blue-700 dark:text-blue-300">
              Choose the network where your smart contracts are deployed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Address Configuration
function AddressConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Contract Address</Label>
        <Input
          placeholder="0x..."
          value={(node.data as any).address || ""}
          onChange={(e) => onUpdate({ address: e.target.value })}
        />
        <p className="text-xs text-muted-foreground">
          Enter the smart contract address to monitor
        </p>
      </div>

      <div className="space-y-2">
        <Label>Contract Type (Optional)</Label>
        <Select
          value={(node.data as any).contractType || ""}
          onValueChange={(value) => onUpdate({ contractType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Auto-detect" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto-detect</SelectItem>
            <SelectItem value="erc20">ERC-20 Token</SelectItem>
            <SelectItem value="erc721">ERC-721 NFT</SelectItem>
            <SelectItem value="erc1155">ERC-1155</SelectItem>
            <SelectItem value="custom">Custom Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// Event Condition Configuration
function EventConditionConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Event Name</Label>
        <Select
          value={(node.data as any).eventName || ""}
          onValueChange={(value) => onUpdate({ eventName: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Transfer">Transfer</SelectItem>
            <SelectItem value="Approval">Approval</SelectItem>
            <SelectItem value="Mint">Mint</SelectItem>
            <SelectItem value="Burn">Burn</SelectItem>
            <SelectItem value="custom">Custom Event</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(node.data as any).eventName === "custom" && (
        <div className="space-y-2">
          <Label>Event Signature</Label>
          <Input
            placeholder="EventName(uint256,address)"
            value={(node.data as any).eventSignature || ""}
            onChange={(e) => onUpdate({ eventSignature: e.target.value })}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label>Filters (Optional)</Label>
        <Textarea
          placeholder="Add filters to narrow down events..."
          className="min-h-[80px]"
        />
      </div>
    </div>
  );
}

// Function Condition Configuration
function FunctionConditionConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Function Name</Label>
        <Input
          placeholder="e.g., transfer, approve, mint"
          value={(node.data as any).functionName || ""}
          onChange={(e) => onUpdate({ functionName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>Function Signature</Label>
        <Input
          placeholder="functionName(uint256,address)"
          value={(node.data as any).functionSignature || ""}
          onChange={(e) => onUpdate({ functionSignature: e.target.value })}
        />
        <p className="text-xs text-muted-foreground">
          Enter the full function signature with parameter types
        </p>
      </div>
    </div>
  );
}

// Transaction Condition Configuration
function TransactionConditionConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Transaction Status</Label>
        <Select
          value={(node.data as any).txStatus || "Any"}
          onValueChange={(value) => onUpdate({ txStatus: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Any">Any Status</SelectItem>
            <SelectItem value="Success">Success Only</SelectItem>
            <SelectItem value="Failed">Failed Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Value Threshold (ETH)</Label>
        <Input
          type="number"
          placeholder="0.0"
          value={(node.data as any).valueThreshold || ""}
          onChange={(e) => onUpdate({ valueThreshold: e.target.value })}
        />
      </div>
    </div>
  );
}

// Notification Configuration
function NotificationConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Notification Channel</Label>
        <Select
          value={(node.data as any).channel || ""}
          onValueChange={(value) => onUpdate({ channel: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select channel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="slack">Slack</SelectItem>
            <SelectItem value="discord">Discord</SelectItem>
            <SelectItem value="telegram">Telegram</SelectItem>
            <SelectItem value="webhook">Custom Webhook</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(node.data as any).channel && (
        <div className="space-y-2">
          <Label>Recipients</Label>
          <Textarea
            placeholder={getRecipientPlaceholder((node.data as any).channel)}
            className="min-h-[80px]"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label>Message Template</Label>
        <Textarea
          placeholder="Alert: {{event}} detected on {{network}}"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

// Webhook Configuration
function WebhookConfig({ node, onUpdate }: { node: Node; onUpdate: (updates: any) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Webhook URL</Label>
        <Input
          type="url"
          placeholder="https://your-api.com/webhook"
          value={(node.data as any).url || ""}
          onChange={(e) => onUpdate({ url: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label>HTTP Method</Label>
        <Select
          value={(node.data as any).method || "POST"}
          onValueChange={(value) => onUpdate({ method: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label>Retry on Failure</Label>
        <Switch
          checked={(node.data as any).retryOnFail || false}
          onCheckedChange={(checked) => onUpdate({ retryOnFail: checked })}
        />
      </div>
    </div>
  );
}

// Helper functions
function getNodeIcon(type?: string): string {
  const icons: Record<string, string> = {
    networkSource: "🌐",
    address: "📋",
    eventCondition: "⚡",
    functionCondition: "🔧",
    transactionCondition: "💰",
    notification: "🔔",
    webhook: "🌐",
  };
  return icons[type || ""] || "📦";
}

function getRecipientPlaceholder(channel: string): string {
  const placeholders: Record<string, string> = {
    email: "email@example.com\nanother@example.com",
    slack: "#channel-name or @username",
    discord: "Channel ID or webhook URL",
    telegram: "Chat ID or @username",
    webhook: "Will use webhook configuration",
  };
  return placeholders[channel] || "Enter recipients";
}