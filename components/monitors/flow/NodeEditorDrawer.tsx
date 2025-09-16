"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNodeEditor, useNetworks } from "@/hooks";
import { NodeType } from "@/lib/types/nodeEditor";
import { TRIGGER_TYPES } from "@/lib/constants";
import { toast } from "sonner";

interface NodeEditorDrawerProps {
  nodeId: string | null;
  open: boolean;
  onClose: () => void;
}

export function NodeEditorDrawer({
  nodeId,
  open,
  onClose,
}: NodeEditorDrawerProps) {
  const { nodes, updateNode } = useNodeEditor();
  const { networks } = useNetworks();
  const [formData, setFormData] = useState<Record<string, unknown>>({});

  const node = nodes.find((n) => n.id === nodeId);

  // Initialize form data when node changes
  useEffect(() => {
    if (node) {
      setFormData(node.data);
    }
  }, [node]);

  const handleSave = () => {
    if (node) {
      updateNode(node.id, formData);
      toast.success("Node updated");
      onClose();
    }
  };

  const renderEditor = () => {
    if (!node) return null;

    switch (node.type) {
      case NodeType.NETWORK:
        const activeNetworks = networks.filter((n) => n.active !== false);
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="network">Select Network</Label>
              <Select
                value={(formData.networkSlug as string) || ""}
                onValueChange={(value) => {
                  const selectedNetwork = activeNetworks.find(
                    (n) => n.slug === value,
                  );
                  setFormData({
                    ...formData,
                    networkSlug: value,
                    networkName: selectedNetwork?.name || value,
                    chainId: selectedNetwork?.chain_id || 0,
                    isValid: true,
                  });
                }}
              >
                <SelectTrigger id="network">
                  <SelectValue placeholder="Choose a network" />
                </SelectTrigger>
                <SelectContent>
                  {activeNetworks.map((network) => (
                    <SelectItem key={network.slug} value={network.slug}>
                      <div className="flex items-center gap-2">
                        <span>{network.name}</span>
                        {network.chain_id && network.chain_id !== 0 && (
                          <span className="text-xs text-muted-foreground">
                            (Chain ID: {network.chain_id})
                          </span>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                Select the blockchain network to monitor
              </p>
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
                value={(formData.address as string) || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                    isValid: e.target.value.trim().length > 0,
                  })
                }
                placeholder="0x... or G..."
                className="font-mono"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Enter the contract address to monitor
              </p>
            </div>
            <div>
              <Label htmlFor="abi">Contract ABI (Optional)</Label>
              <Textarea
                id="abi"
                value={
                  formData.contractSpec
                    ? JSON.stringify(formData.contractSpec, null, 2)
                    : ""
                }
                onChange={(e) => {
                  try {
                    const abi = JSON.parse(e.target.value);
                    setFormData({ ...formData, contractSpec: abi });
                  } catch {
                    // Invalid JSON, don't update
                  }
                }}
                placeholder="Paste contract ABI JSON here"
                className="font-mono text-xs"
                rows={6}
              />
            </div>
          </div>
        );

      case NodeType.EVENT_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="signature">Event Signature</Label>
              <Input
                id="signature"
                value={(formData.signature as string) || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    signature: e.target.value,
                    isValid: e.target.value.trim().length > 0,
                  })
                }
                placeholder="Transfer(address,address,uint256)"
                className="font-mono"
              />
            </div>
            <div>
              <Label htmlFor="expression">Filter Expression (Optional)</Label>
              <Textarea
                id="expression"
                value={(formData.expression as string) || ""}
                onChange={(e) =>
                  setFormData({ ...formData, expression: e.target.value })
                }
                placeholder="value > 1000000000000000000"
                className="font-mono text-xs"
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Optional expression to filter events
              </p>
            </div>
          </div>
        );

      case NodeType.FUNCTION_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="signature">Function Signature</Label>
              <Input
                id="signature"
                value={(formData.signature as string) || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    signature: e.target.value,
                    isValid: e.target.value.trim().length > 0,
                  })
                }
                placeholder="transfer(address,uint256)"
                className="font-mono"
              />
            </div>
            <div>
              <Label htmlFor="expression">Filter Expression (Optional)</Label>
              <Textarea
                id="expression"
                value={(formData.expression as string) || ""}
                onChange={(e) =>
                  setFormData({ ...formData, expression: e.target.value })
                }
                placeholder="amount > 1000"
                className="font-mono text-xs"
                rows={3}
              />
            </div>
          </div>
        );

      case NodeType.TRANSACTION_CONDITION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="status">Transaction Status</Label>
              <Select
                value={(formData.status as string) || ""}
                onValueChange={(value: "Success" | "Failed") =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Success">Success</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="expression">Filter Expression (Optional)</Label>
              <Textarea
                id="expression"
                value={(formData.expression as string) || ""}
                onChange={(e) =>
                  setFormData({ ...formData, expression: e.target.value })
                }
                placeholder="gas > 100000"
                className="font-mono text-xs"
                rows={3}
              />
            </div>
          </div>
        );

      case NodeType.TRIGGER:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="trigger">Select Trigger</Label>
              <Select
                value={(formData.triggerId as string) || ""}
                onValueChange={(value) => {
                  const trigger = TRIGGER_TYPES.find((t) => t.id === value);
                  setFormData({
                    ...formData,
                    triggerId: value,
                    triggerName: trigger?.label || value,
                    isValid: true,
                  });
                }}
              >
                <SelectTrigger id="trigger">
                  <SelectValue placeholder="Choose a trigger" />
                </SelectTrigger>
                <SelectContent>
                  {TRIGGER_TYPES.map((trigger) => (
                    <SelectItem key={trigger.id} value={trigger.id}>
                      <div>
                        <p>{trigger.label}</p>
                        <p className="text-xs text-muted-foreground">
                          {trigger.description}
                        </p>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case NodeType.NOTIFICATION:
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="notificationType">Notification Type</Label>
              <Select
                value={(formData.type as string) || "email"}
                onValueChange={(value: "email" | "webhook" | "slack") =>
                  setFormData({ ...formData, type: value })
                }
              >
                <SelectTrigger id="notificationType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="webhook">Webhook</SelectItem>
                  <SelectItem value="slack">Slack</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.type === "email" && (
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={
                    ((formData.configuration as Record<string, unknown>)
                      ?.email as string) || ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      configuration: {
                        ...((formData.configuration as Record<
                          string,
                          unknown
                        >) || {}),
                        email: e.target.value,
                      },
                      isValid: e.target.value.includes("@"),
                    })
                  }
                  placeholder="user@example.com"
                />
              </div>
            )}

            {formData.type === "webhook" && (
              <div>
                <Label htmlFor="webhook">Webhook URL</Label>
                <Input
                  id="webhook"
                  type="url"
                  value={
                    ((formData.configuration as Record<string, unknown>)
                      ?.url as string) || ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      configuration: {
                        ...((formData.configuration as Record<
                          string,
                          unknown
                        >) || {}),
                        url: e.target.value,
                      },
                      isValid: e.target.value.startsWith("http"),
                    })
                  }
                  placeholder="https://example.com/webhook"
                />
              </div>
            )}

            {formData.type === "slack" && (
              <div>
                <Label htmlFor="channel">Slack Channel</Label>
                <Input
                  id="channel"
                  value={
                    ((formData.configuration as Record<string, unknown>)
                      ?.channel as string) || ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      configuration: {
                        ...((formData.configuration as Record<
                          string,
                          unknown
                        >) || {}),
                        channel: e.target.value,
                      },
                      isValid: e.target.value.startsWith("#"),
                    })
                  }
                  placeholder="#channel-name"
                />
              </div>
            )}
          </div>
        );

      default:
        return (
          <p className="text-muted-foreground">
            No editor available for this node type
          </p>
        );
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit {node?.data.label}</SheetTitle>
          <SheetDescription>
            Configure the properties for this node
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {renderEditor()}

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} className="flex-1">
              Save Changes
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
