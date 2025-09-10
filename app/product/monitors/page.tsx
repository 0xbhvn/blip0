"use client";

import { MonitorList } from "@/components/monitors";
import { PageHeader } from "@/components/PageHeader";

export default function MonitorsPage() {
  return (
    <>
      <PageHeader
        title="Monitors"
        description="Create and manage your OpenZeppelin monitor configurations"
      />
      <MonitorList />
    </>
  );
}
