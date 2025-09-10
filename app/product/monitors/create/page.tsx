"use client";

import { PageHeader } from "@/components/PageHeader";
import { MonitorFlowEditor } from "@/components/monitors/flow";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { MonitorCreateInput } from "@/lib/types/monitors";

export default function CreateMonitorPage() {
  const router = useRouter();
  const createMonitor = useMutation(api.monitors.create);

  const handleSave = async (config: MonitorCreateInput) => {
    try {
      const monitorId = await createMonitor(config);
      toast.success("Monitor created successfully");
      router.push(`/product/monitors/${monitorId}`);
    } catch (error) {
      console.error("Failed to create monitor:", error);
      toast.error("Failed to create monitor");
    }
  };

  const handleCancel = () => {
    router.push("/product/monitors");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="px-6 pt-6 pb-4">
        <PageHeader
          title="Create Monitor"
          description="Build your monitor configuration by connecting nodes"
        />
      </div>
      <div className="flex-1 px-6 pb-6">
        <MonitorFlowEditor
          mode="create"
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
