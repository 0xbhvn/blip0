"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNetworkMutations } from "@/hooks/useNetworks";
import { NetworkCreateInput } from "@/lib/types";
import { DEFAULT_NETWORK } from "@/lib/constants";
import { Id } from "@/convex/_generated/dataModel";
import { Plus, Trash2 } from "lucide-react";

interface NetworkFormProps {
  initialData?: NetworkCreateInput & { _id?: Id<"networks"> };
  mode: "create" | "edit";
}

export function NetworkForm({ initialData, mode }: NetworkFormProps) {
  const router = useRouter();
  const { createNetwork, updateNetwork } = useNetworkMutations();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract only the NetworkCreateInput fields, excluding _id
  const [formData, setFormData] = useState<NetworkCreateInput>(() => {
    if (!initialData) return DEFAULT_NETWORK;

    // Create a new object without _id
    const dataWithoutId: NetworkCreateInput = {
      name: initialData.name,
      slug: initialData.slug,
      network_type: initialData.network_type,
      active: initialData.active,
      chain_id: initialData.chain_id,
      network_passphrase: initialData.network_passphrase,
      rpc_urls: initialData.rpc_urls,
      block_time_ms: initialData.block_time_ms,
      confirmation_blocks: initialData.confirmation_blocks,
      max_past_blocks: initialData.max_past_blocks,
      cron_schedule: initialData.cron_schedule,
      store_blocks: initialData.store_blocks,
    };
    return dataWithoutId;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let result;
      if (mode === "create") {
        result = await createNetwork(formData);
      } else if (initialData?._id) {
        result = await updateNetwork(initialData._id, formData);
      }

      if (result?.success) {
        router.push("/product/networks");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const addRpcUrl = () => {
    setFormData({
      ...formData,
      rpc_urls: [
        ...formData.rpc_urls,
        { type_: "rpc", url: { type: "plain", value: "" }, weight: 100 },
      ],
    });
  };

  const removeRpcUrl = (index: number) => {
    setFormData({
      ...formData,
      rpc_urls: formData.rpc_urls.filter((_, i) => i !== index),
    });
  };

  const updateRpcUrl = (index: number, value: string) => {
    const newRpcUrls = [...formData.rpc_urls];
    newRpcUrls[index] = {
      ...newRpcUrls[index],
      url: { ...newRpcUrls[index].url, value },
    };
    setFormData({ ...formData, rpc_urls: newRpcUrls });
  };

  const updateRpcWeight = (index: number, weight: number) => {
    const newRpcUrls = [...formData.rpc_urls];
    newRpcUrls[index] = { ...newRpcUrls[index], weight };
    setFormData({ ...formData, rpc_urls: newRpcUrls });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Configuration</CardTitle>
          <CardDescription>
            Core settings for the network configuration
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Network Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g., Ethereum Mainnet"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (Unique Identifier)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData({ ...formData, slug: e.target.value })
                }
                placeholder="e.g., eth-mainnet"
                pattern="[a-z0-9-]+"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="network_type">Network Type</Label>
              <Select
                value={formData.network_type}
                onValueChange={(value: "EVM" | "Stellar") =>
                  setFormData({ ...formData, network_type: value })
                }
              >
                <SelectTrigger id="network_type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EVM">EVM</SelectItem>
                  <SelectItem value="Stellar">Stellar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.network_type === "EVM" ? (
              <div className="space-y-2">
                <Label htmlFor="chain_id">Chain ID</Label>
                <Input
                  id="chain_id"
                  type="number"
                  value={formData.chain_id || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      chain_id: e.target.value
                        ? parseInt(e.target.value)
                        : undefined,
                    })
                  }
                  placeholder="e.g., 1"
                  required={formData.network_type === "EVM"}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="network_passphrase">Network Passphrase</Label>
                <Input
                  id="network_passphrase"
                  value={formData.network_passphrase || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      network_passphrase: e.target.value,
                    })
                  }
                  placeholder="e.g., Public Global Stellar Network ; September 2015"
                  required={formData.network_type === "Stellar"}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>RPC Configuration</CardTitle>
          <CardDescription>
            Configure RPC endpoints for the network
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.rpc_urls.map((rpc, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={rpc.url.value}
                onChange={(e) => updateRpcUrl(index, e.target.value)}
                placeholder="https://rpc.example.com"
                className="flex-1"
              />
              <Input
                type="number"
                value={rpc.weight}
                onChange={(e) =>
                  updateRpcWeight(index, parseInt(e.target.value) || 100)
                }
                placeholder="Weight"
                className="w-24"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeRpcUrl(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addRpcUrl}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add RPC URL
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Operational Parameters</CardTitle>
          <CardDescription>
            Configure how the network will be monitored
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="block_time_ms">Block Time (ms)</Label>
              <Input
                id="block_time_ms"
                type="number"
                value={formData.block_time_ms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    block_time_ms: parseInt(e.target.value) || 12000,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmation_blocks">Confirmation Blocks</Label>
              <Input
                id="confirmation_blocks"
                type="number"
                value={formData.confirmation_blocks}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmation_blocks: parseInt(e.target.value) || 12,
                  })
                }
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="max_past_blocks">Max Past Blocks</Label>
              <Input
                id="max_past_blocks"
                type="number"
                value={formData.max_past_blocks}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    max_past_blocks: parseInt(e.target.value) || 100,
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cron_schedule">Cron Schedule</Label>
              <Input
                id="cron_schedule"
                value={formData.cron_schedule}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    cron_schedule: e.target.value,
                  })
                }
                placeholder="0 */1 * * * *"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="store_blocks"
              checked={formData.store_blocks}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, store_blocks: checked })
              }
            />
            <Label htmlFor="store_blocks">Store blocks locally</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="active"
              checked={formData.active ?? false}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, active: checked })
              }
            />
            <Label htmlFor="active">Network is active</Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/product/networks")}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : mode === "create"
              ? "Create Network"
              : "Update Network"}
        </Button>
      </div>
    </form>
  );
}
