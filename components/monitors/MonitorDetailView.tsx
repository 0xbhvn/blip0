"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonitorResponse } from "@/lib/types";
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
} from "./MonitorDetailSections";
import { MonitorFlowViewer } from "./flow/MonitorFlowViewer";
import { hasFlowData } from "@/lib/helpers/flowConverter";

interface MonitorDetailViewProps {
  monitor: MonitorResponse;
  monitorId: Id<"monitors">;
}

export function MonitorDetailView({
  monitor,
  monitorId,
}: MonitorDetailViewProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const showFlowTab = hasFlowData(monitor);

  return (
    <div className="space-y-6">
      <MonitorDetailHeader monitorId={monitorId} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {showFlowTab && (
            <TabsTrigger value="flow">Flow Visualization</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="overview">
          <MonitorDetailCard monitor={monitor}>
            <MonitorNetworks networks={monitor.networks} />
            <MonitorAddresses addresses={monitor.addresses} />
            <MonitorMatchConditions
              matchConditions={monitor.match_conditions}
            />
            <MonitorTriggerConditions
              triggerConditions={monitor.trigger_conditions}
            />
            <MonitorTriggers triggers={monitor.triggers} />
            <MonitorMetadata creationTime={monitor._creationTime} />
          </MonitorDetailCard>
        </TabsContent>

        {showFlowTab && (
          <TabsContent value="flow" className="space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">
                Monitor Flow Visualization
              </h3>
              <div className="h-[600px]">
                <MonitorFlowViewer monitor={monitor} interactive showMinimap />
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
