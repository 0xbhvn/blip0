"use client";

import { PageHeader } from "@/components/PageHeader";
import { InteractiveMonitorFlow } from "@/components/monitors/nodeEditor";

export default function MonitorFlowPage() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="px-6 pt-6">
        <PageHeader
          title="Create Monitor - Visual Editor"
          description="Build your monitor configuration by connecting nodes"
        />
      </div>
      <div className="flex-1 p-6">
        <InteractiveMonitorFlow mode="create" />
      </div>
    </div>
  );
}
