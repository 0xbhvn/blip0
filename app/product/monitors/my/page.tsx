"use client";

import { MonitorList } from "@/components/monitors";
import { PageHeader } from "@/components/PageHeader";

export default function MyMonitorsPage() {
  return (
    <>
      <PageHeader
        title="My Monitors"
        description="Manage your OpenZeppelin monitor configurations"
      />
      <MonitorList variant="owned" />
    </>
  );
}
