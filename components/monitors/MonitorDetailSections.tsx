"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { MonitorPausedBadge } from "@/components/monitors";
import { formatMonitorDate } from "@/lib/helpers/monitors";
import {
  MonitorResponse,
  MonitorAddress,
  MatchConditions,
  EventCondition,
  FunctionCondition,
  TransactionCondition,
  TriggerCondition,
} from "@/lib/types/monitors";
import { Id } from "@/convex/_generated/dataModel";

interface MonitorDetailHeaderProps {
  monitorId: Id<"monitors">;
}

export function MonitorDetailHeader({ monitorId }: MonitorDetailHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/product/monitors">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Monitors
        </Button>
      </Link>
      <Link href={`/product/monitors/${monitorId}/edit`}>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit Monitor
        </Button>
      </Link>
    </div>
  );
}

interface MonitorNetworksProps {
  networks?: string[];
}

export function MonitorNetworks({ networks }: MonitorNetworksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Networks</h3>
      <div className="flex flex-wrap gap-2">
        {networks?.map((network: string) => (
          <Badge key={network} variant="outline">
            {network}
          </Badge>
        )) || (
          <span className="text-muted-foreground">No networks configured</span>
        )}
      </div>
    </div>
  );
}

interface MonitorAddressesProps {
  addresses?: MonitorAddress[];
}

export function MonitorAddresses({ addresses }: MonitorAddressesProps) {
  if (!addresses || addresses.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Contract Addresses</h3>
      <div className="space-y-3">
        {addresses.map((item, index) => (
          <div key={index} className="space-y-1">
            <code className="block p-2 bg-muted rounded text-sm break-all">
              {item.address}
            </code>
            {item.contract_spec && (
              <p className="text-xs text-muted-foreground ml-2">
                Contract Spec: {item.contract_spec.length} ABI entries
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface MonitorMatchConditionsProps {
  matchConditions?: MatchConditions;
}

export function MonitorMatchConditions({
  matchConditions,
}: MonitorMatchConditionsProps) {
  if (!matchConditions) return null;

  const hasConditions =
    (matchConditions.events && matchConditions.events.length > 0) ||
    (matchConditions.functions && matchConditions.functions.length > 0) ||
    (matchConditions.transactions && matchConditions.transactions.length > 0);

  if (!hasConditions) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Match Conditions</h3>
      <div className="space-y-4">
        {matchConditions.events && matchConditions.events.length > 0 && (
          <div>
            <p className="font-medium text-sm text-muted-foreground mb-2">
              Events ({matchConditions.events.length})
            </p>
            <div className="space-y-2">
              {matchConditions.events.map((event: EventCondition, idx) => (
                <Card key={idx} className="p-3">
                  <code className="text-sm">{event.signature}</code>
                  {event.expression && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Filter: {event.expression}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {matchConditions.functions && matchConditions.functions.length > 0 && (
          <div>
            <p className="font-medium text-sm text-muted-foreground mb-2">
              Functions ({matchConditions.functions.length})
            </p>
            <div className="space-y-2">
              {matchConditions.functions.map((func: FunctionCondition, idx) => (
                <Card key={idx} className="p-3">
                  <code className="text-sm">{func.signature}</code>
                  {func.expression && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Filter: {func.expression}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {matchConditions.transactions &&
          matchConditions.transactions.length > 0 && (
            <div>
              <p className="font-medium text-sm text-muted-foreground mb-2">
                Transactions ({matchConditions.transactions.length})
              </p>
              <div className="space-y-2">
                {matchConditions.transactions.map(
                  (tx: TransactionCondition, idx) => (
                    <Card key={idx} className="p-3">
                      {tx.status && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">Status:</span>
                          <Badge
                            variant={
                              tx.status === "Success"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {tx.status}
                          </Badge>
                        </div>
                      )}
                      {tx.expression && (
                        <div>
                          <p className="text-sm font-medium">Expression:</p>
                          <code className="text-xs block mt-1 p-2 bg-muted rounded">
                            {tx.expression}
                          </code>
                        </div>
                      )}
                    </Card>
                  ),
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

interface MonitorTriggerConditionsProps {
  triggerConditions?: TriggerCondition[];
}

export function MonitorTriggerConditions({
  triggerConditions,
}: MonitorTriggerConditionsProps) {
  if (!triggerConditions || triggerConditions.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">
        Trigger Conditions (Custom Filters)
      </h3>
      <div className="space-y-2">
        {triggerConditions.map((condition, idx) => (
          <Card key={idx} className="p-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{condition.language}</Badge>
                <code className="text-sm flex-1">{condition.script_path}</code>
              </div>
              {condition.arguments && (
                <p className="text-xs text-muted-foreground">
                  Arguments:{" "}
                  {Array.isArray(condition.arguments)
                    ? condition.arguments.join(" ")
                    : condition.arguments}
                </p>
              )}
              {condition.timeout_ms && (
                <p className="text-xs text-muted-foreground">
                  Timeout: {condition.timeout_ms}ms
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

interface MonitorTriggersProps {
  triggers?: string[];
}

export function MonitorTriggers({ triggers }: MonitorTriggersProps) {
  if (!triggers || triggers.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Notification Triggers</h3>
      <div className="space-y-2">
        {triggers.map((triggerId, idx) => (
          <Card key={idx} className="p-3">
            <div className="flex items-center gap-2">
              <Badge>Trigger ID</Badge>
              <code className="text-sm">{triggerId}</code>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

interface MonitorMetadataProps {
  creationTime: number;
}

export function MonitorMetadata({ creationTime }: MonitorMetadataProps) {
  return (
    <div className="pt-4 border-t">
      <p className="text-sm text-muted-foreground">
        Created: {formatMonitorDate(creationTime)}
      </p>
    </div>
  );
}

interface MonitorDetailCardProps {
  monitor: MonitorResponse;
  children: React.ReactNode;
}

export function MonitorDetailCard({
  monitor,
  children,
}: MonitorDetailCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{monitor.name}</CardTitle>
          <MonitorPausedBadge paused={monitor.paused} variant="badge" />
        </div>
        <CardDescription>Created by {monitor.author}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">{children}</CardContent>
    </Card>
  );
}
