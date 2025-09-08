"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Eye, EyeOff, Network, Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import { MonitorResponse } from "@/lib/types/monitors";
import { useMonitorForm, useNetworks } from "@/hooks";
import { AddressInput } from "./AddressInput";
import { EventConditionBuilder } from "./EventConditionBuilder";
import { FunctionConditionBuilder } from "./FunctionConditionBuilder";
import { TransactionConditionBuilder } from "./TransactionConditionBuilder";
import { TRIGGER_TYPES } from "@/lib/constants/monitors";
import { getSelectedNetworkTypes } from "@/lib/helpers/monitors";
import { cn } from "@/lib/utils";

interface MonitorFormProps {
  monitor?: MonitorResponse;
  className?: string;
}

export function MonitorForm({ monitor, className }: MonitorFormProps) {
  const router = useRouter();
  const { networks } = useNetworks();
  const {
    formData,
    updateFormData,
    isSubmitting,
    error,
    handleSubmit,
    isEditMode,
  } = useMonitorForm(monitor);

  const [activeMatchTab, setActiveMatchTab] = useState("events");

  // Filter to show only active networks
  const activeNetworks = networks.filter((n) => n.active !== false);

  // Get selected network types
  const selectedNetworkTypes = getSelectedNetworkTypes(
    formData.networks,
    activeNetworks,
  );

  const handleNetworkChange = (networkSlug: string, selected: boolean) => {
    const newNetworks = selected
      ? [...formData.networks, networkSlug]
      : formData.networks.filter((n) => n !== networkSlug);
    updateFormData({ networks: newNetworks });
  };

  const handleTriggerChange = (triggerId: string, selected: boolean) => {
    const newTriggers = selected
      ? [...formData.triggers, triggerId]
      : formData.triggers.filter((t) => t !== triggerId);
    updateFormData({ triggers: newTriggers });
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle>{isEditMode ? "Edit Monitor" : "New Monitor"}</CardTitle>
          <CardDescription>
            Configure your OpenZeppelin monitor to track blockchain activity
          </CardDescription>
        </CardHeader>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Form Fields */}
      {/* Basic Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Configuration</CardTitle>
          <CardDescription>Essential settings for your monitor</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Monitor Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData({ name: e.target.value })}
                placeholder="e.g., Large Transfer Monitor"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="paused"
                checked={!formData.paused}
                onCheckedChange={(checked) =>
                  updateFormData({ paused: !checked })
                }
              />
              <Label htmlFor="paused" className="flex items-center gap-2">
                {formData.paused ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Monitor Paused
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Monitor Active
                  </>
                )}
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Network Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Networks</CardTitle>
          <CardDescription>
            Select which networks this monitor should watch
          </CardDescription>
        </CardHeader>
        <CardContent>
          {activeNetworks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Network className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No active networks available</p>
              <p className="text-xs mt-1">
                Please contact your administrator to enable networks
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {activeNetworks.map((network) => (
                  <div
                    key={network.slug}
                    className="flex items-center space-x-2"
                  >
                    <Switch
                      id={`network-${network.slug}`}
                      checked={formData.networks.includes(network.slug)}
                      onCheckedChange={(checked) =>
                        handleNetworkChange(network.slug, checked)
                      }
                    />
                    <Label
                      htmlFor={`network-${network.slug}`}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Network className="h-3 w-3" />
                      {network.name}
                    </Label>
                  </div>
                ))}
              </div>
              {formData.networks.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2">
                  At least one network is required
                </p>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Contract Addresses */}
      <AddressInput
        addresses={formData.addresses}
        onChange={(addresses) => updateFormData({ addresses })}
      />

      {/* Match Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Match Conditions</CardTitle>
          <CardDescription>
            Define what blockchain activity to monitor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeMatchTab} onValueChange={setActiveMatchTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="events">
                Events
                {(formData.match_conditions.events?.length ?? 0) > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {formData.match_conditions.events?.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="functions">
                Functions
                {(formData.match_conditions.functions?.length ?? 0) > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {formData.match_conditions.functions?.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="transactions">
                Transactions
                {(formData.match_conditions.transactions?.length ?? 0) > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {formData.match_conditions.transactions?.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="mt-4">
              <EventConditionBuilder
                conditions={formData.match_conditions.events || []}
                onChange={(events) =>
                  updateFormData({
                    match_conditions: {
                      ...formData.match_conditions,
                      events,
                    },
                  })
                }
              />
            </TabsContent>

            <TabsContent value="functions" className="mt-4">
              <FunctionConditionBuilder
                conditions={formData.match_conditions.functions || []}
                onChange={(functions) =>
                  updateFormData({
                    match_conditions: {
                      ...formData.match_conditions,
                      functions,
                    },
                  })
                }
              />
            </TabsContent>

            <TabsContent value="transactions" className="mt-4">
              <TransactionConditionBuilder
                conditions={formData.match_conditions.transactions || []}
                onChange={(transactions) =>
                  updateFormData({
                    match_conditions: {
                      ...formData.match_conditions,
                      transactions,
                    },
                  })
                }
                networkTypes={selectedNetworkTypes.networkTypes}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Notifications / Triggers */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how you want to be notified when conditions match
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {TRIGGER_TYPES.map((trigger) => (
              <div
                key={trigger.id}
                className="flex items-start space-x-3 rounded-lg border p-4"
              >
                <Switch
                  id={`trigger-${trigger.id}`}
                  checked={formData.triggers.includes(trigger.id)}
                  onCheckedChange={(checked) =>
                    handleTriggerChange(trigger.id, checked)
                  }
                />
                <div className="flex-1">
                  <Label
                    htmlFor={`trigger-${trigger.id}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Bell className="h-4 w-4" />
                    {trigger.label}
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    {trigger.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-4">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : isEditMode
              ? "Update Monitor"
              : "Create Monitor"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
