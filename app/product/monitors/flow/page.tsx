"use client";

import { PageHeader } from "@/components/PageHeader";
import { MonitorFlowVisualization } from "@/components/monitors/flow";

export default function MonitorFlowPage() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="px-6 pt-6">
        <PageHeader
          title="Monitor Flow Visualization"
          description="Visualize the connections between networks and monitors"
        />
      </div>
      <div className="flex-1 p-6">
        <MonitorFlowVisualization />
      </div>
    </div>
  );
}
