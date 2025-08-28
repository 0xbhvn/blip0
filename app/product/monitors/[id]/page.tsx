"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import {
  MonitorDetailHeader,
  MonitorDetailCard,
  MonitorNetworks,
  MonitorAddresses,
  MonitorMatchConditions,
  MonitorTriggerConditions,
  MonitorTriggers,
  MonitorMetadata,
} from "@/components/monitors";

export default function MonitorDetailsPage() {
  const params = useParams();
  const monitorId = params.id as Id<"monitors">;

  const monitor = useQuery(api.monitors.get, { id: monitorId });

  if (!monitor) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <MonitorDetailHeader monitorId={monitorId} />

      <MonitorDetailCard monitor={monitor}>
        <MonitorNetworks networks={monitor.networks} />
        <MonitorAddresses addresses={monitor.addresses} />
        <MonitorMatchConditions matchConditions={monitor.match_conditions} />
        <MonitorTriggerConditions
          triggerConditions={monitor.trigger_conditions}
        />
        <MonitorTriggers triggers={monitor.triggers} />
        <MonitorMetadata creationTime={monitor._creationTime} />
      </MonitorDetailCard>
    </div>
  );
}
