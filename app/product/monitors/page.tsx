"use client";

import { MonitorList } from "@/components/monitors";
import { PageHeader } from "@/components/PageHeader";

export default function MonitorsPage() {
  return (
    <>
      <PageHeader
        title="OpenZeppelin Monitors"
        description="View all monitor configurations. Anyone can read, only creators can edit."
      />
      <MonitorList />
    </>
  );
}
