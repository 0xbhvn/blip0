"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { PageHeader } from "@/components/PageHeader";
import { MonitorFlowEditor } from "@/components/monitors/flow";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { monitorToFlow } from "@/lib/helpers/flowConverter";
import { useMemo } from "react";

export default function EditMonitorPage() {
  const params = useParams();
  const router = useRouter();
  const monitorId = params.id as Id<"monitors">;

  const monitor = useQuery(api.monitors.get, { id: monitorId });
  const updateMonitor = useMutation(api.monitors.update);

  // Convert monitor data to flow format for the editor
  const flowData = useMemo(() => {
    if (!monitor) return null;
    try {
      return monitorToFlow(monitor);
    } catch (error) {
      console.error("Failed to convert monitor to flow:", error);
      return { nodes: [], edges: [] };
    }
  }, [monitor]);

  const handleSave = async (config: MonitorCreateInput) => {
    try {
      await updateMonitor({
        id: monitorId,
        ...config,
      });
      toast.success("Monitor updated successfully");
      router.push(`/product/monitors/${monitorId}`);
    } catch (error) {
      console.error("Failed to update monitor:", error);
      toast.error("Failed to update monitor");
    }
  };

  const handleCancel = () => {
    router.push(`/product/monitors/${monitorId}`);
  };

  if (!monitor) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="px-6 pt-6 pb-4">
        <PageHeader
          title={`Edit: ${monitor.name}`}
          description="Update your monitor configuration using the visual editor"
        />
      </div>
      <div className="flex-1 px-6 pb-6">
        <MonitorFlowEditor
          mode="edit"
          monitorId={monitorId}
          initialData={flowData || undefined}
          initialMonitorName={monitor.name}
          initialMonitorActive={!monitor.paused}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
