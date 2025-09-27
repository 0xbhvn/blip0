"use client";

import * as React from "react";
import { X, Trash2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EditorNode, NodeType } from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";

// Type helper for config access
type ConfigType = Record<string, unknown>;

interface MonitorConfigSidebarProps extends React.ComponentProps<typeof Sidebar> {
  node: EditorNode | null;
  monitorName: string;
  isActive: boolean;
  onMonitorNameChange: (name: string) => void;
  onActiveChange: (active: boolean) => void;
  onNodeUpdate: (nodeId: string, updates: Partial<EditorNode["data"]>) => void;
  onNodeDelete: (nodeId: string) => void;
  onClose: () => void;
}

export function MonitorConfigSidebar({
  node,
  monitorName,
  isActive,
  onMonitorNameChange,
  onActiveChange,
  onNodeUpdate,
  onNodeDelete,
  onClose,
  className,
  ...props
}: MonitorConfigSidebarProps) {
  const renderNodeConfig = () => {
    if (!node) return null;

    switch (node.type) {
      case NodeType.NETWORK:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="network">Network</Label>
              <Select
                value={(node.data.config as ConfigType)?.network as string || "ethereum"}
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), network: value },
                    label: value.charAt(0).toUpperCase() + value.slice(1),
                  })
                }
              >
                <SelectTrigger id="network">
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
        );

      case NodeType.ADDRESS:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Contract Address</Label>
              <Input
                id="address"
                placeholder="0x..."
                value={(node.data.config as ConfigType)?.address as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), address: e.target.value },
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                placeholder="Contract Name"
                value={node.data.label || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, { label: e.target.value })
                }
              />
            </div>
          </div>
        );

      case NodeType.EVENT_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="event">Event Name</Label>
              <Input
                id="event"
                placeholder="Transfer, Approval, etc."
                value={(node.data.config as ConfigType)?.eventName as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), eventName: e.target.value },
                    label: e.target.value || "Event",
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="filters">Event Filters (JSON)</Label>
              <Textarea
                id="filters"
                placeholder='{"from": "0x...", "value": ">1000000"}'
                value={(node.data.config as ConfigType)?.filters as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), filters: e.target.value },
                  })
                }
                rows={4}
              />
            </div>
          </div>
        );

      case NodeType.FUNCTION_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="function">Function Name</Label>
              <Input
                id="function"
                placeholder="balanceOf, totalSupply, etc."
                value={(node.data.config as ConfigType)?.functionName as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), functionName: e.target.value },
                    label: e.target.value || "Function",
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="condition">Condition</Label>
              <Select
                value={(node.data.config as ConfigType)?.condition as string || "equals"}
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), condition: value },
                  })
                }
              >
                <SelectTrigger id="condition">
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
            <div>
              <Label htmlFor="value">Expected Value</Label>
              <Input
                id="value"
                placeholder="1000000"
                value={(node.data.config as ConfigType)?.expectedValue as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), expectedValue: e.target.value },
                  })
                }
              />
            </div>
          </div>
        );

      case NodeType.TRANSACTION_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="txType">Transaction Type</Label>
              <Select
                value={(node.data.config as ConfigType)?.txType as string || "any"}
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), txType: value },
                    label: value.charAt(0).toUpperCase() + value.slice(1),
                  })
                }
              >
                <SelectTrigger id="txType">
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
            <div>
              <Label htmlFor="valueThreshold">Value Threshold (ETH)</Label>
              <Input
                id="valueThreshold"
                type="number"
                placeholder="0.1"
                value={(node.data.config as ConfigType)?.valueThreshold as string || ""}
                onChange={(e) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), valueThreshold: e.target.value },
                  })
                }
              />
            </div>
          </div>
        );

      case NodeType.NOTIFICATION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="notificationType">Notification Type</Label>
              <Select
                value={(node.data.config as ConfigType)?.type as string || "email"}
                onValueChange={(value) =>
                  onNodeUpdate(node.id, {
                    config: { ...(node.data.config || {}), type: value },
                    label: value.charAt(0).toUpperCase() + value.slice(1),
                  })
                }
              >
                <SelectTrigger id="notificationType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="webhook">Webhook</SelectItem>
                  <SelectItem value="slack">Slack</SelectItem>
                  <SelectItem value="telegram">Telegram</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {(node.data.config as ConfigType)?.type === "webhook" && (
              <div>
                <Label htmlFor="webhookUrl">Webhook URL</Label>
                <Input
                  id="webhookUrl"
                  type="url"
                  placeholder="https://..."
                  value={(node.data.config as ConfigType)?.webhookUrl as string || ""}
                  onChange={(e) =>
                    onNodeUpdate(node.id, {
                      config: { ...(node.data.config || {}), webhookUrl: e.target.value },
                    })
                  }
                />
              </div>
            )}
            {(node.data.config as ConfigType)?.type === "email" && (
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={(node.data.config as ConfigType)?.email as string || ""}
                  onChange={(e) =>
                    onNodeUpdate(node.id, {
                      config: { ...(node.data.config || {}), email: e.target.value },
                    })
                  }
                />
              </div>
            )}
          </div>
        );

      default:
        return <p className="text-sm text-muted-foreground">Select a node to configure</p>;
    }
  };

  return (
    <Sidebar
      collapsible="none"
      className={cn("hidden lg:flex h-full border-l w-full", className)}
      style={{ "--sidebar-width": "100%" } as React.CSSProperties}
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-sidebar-border px-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Monitor Configuration</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <ScrollArea className="h-full">
          <div className="space-y-6 py-4">
            {/* Monitor Settings */}
            <div>
              <h4 className="text-sm font-medium mb-3">Monitor Settings</h4>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="monitorName">Monitor Name</Label>
                  <Input
                    id="monitorName"
                    placeholder="My Monitor"
                    value={monitorName}
                    onChange={(e) => onMonitorNameChange(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="active" className="cursor-pointer">
                    Active
                  </Label>
                  <Switch
                    id="active"
                    checked={isActive}
                    onCheckedChange={onActiveChange}
                  />
                </div>
              </div>
            </div>

            <SidebarSeparator />

            {/* Node Configuration */}
            {node && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium">
                    {node.type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                  </h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onNodeDelete(node.id)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {renderNodeConfig()}
              </div>
            )}

            {!node && (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">
                  Click on a node to configure it
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="px-4 py-3 border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-full justify-center"
              onClick={() => {
                // Additional save logic if needed
                onClose();
              }}
            >
              Done
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}