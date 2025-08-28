import { MonitorForm } from "@/components/monitors";
import { PageHeader } from "@/components/PageHeader";

export default function CreateMonitorPage() {
  return (
    <>
      <PageHeader
        title="Create Monitor"
        description="Configure a new OpenZeppelin monitor"
      />
      <MonitorForm />
    </>
  );
}
