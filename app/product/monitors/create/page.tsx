"use client";

import { MonitorFlowEditor } from "@/components/monitors/flow";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { useEffect } from "react";
import { useNodeEditor } from "@/hooks/useNodeEditor";
import { useHeader } from "@/contexts/HeaderContext";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function CreateMonitorPage() {
  const router = useRouter();
  const createMonitor = useMutation(api.monitors.create);
  const {
    clearCanvas,
    monitorName,
    setMonitorName,
    monitorActive,
    setMonitorActive,
  } = useNodeEditor();
  const { setHeaderData, clearHeaderData } = useHeader();

  // Clear the canvas when the create page mounts to ensure a fresh start
  useEffect(() => {
    clearCanvas();
  }, [clearCanvas]);

  // Set custom header with name input
  useEffect(() => {
    setHeaderData({
      title: " ", // Use a space to prevent fallback to "Monitors"
      actions: (
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="New Monitor"
            value={monitorName}
            onChange={(e) => setMonitorName(e.target.value)}
            className="w-64 h-8"
          />
          <div className="flex items-center gap-2">
            <Switch
              id="monitor-active"
              checked={monitorActive}
              onCheckedChange={setMonitorActive}
            />
            <Label htmlFor="monitor-active" className="text-sm cursor-pointer">
              {monitorActive ? "Active" : "Paused"}
            </Label>
          </div>
        </div>
      ),
    });

    return () => {
      clearHeaderData();
    };
  }, [
    monitorName,
    setMonitorName,
    monitorActive,
    setMonitorActive,
    setHeaderData,
    clearHeaderData,
  ]);

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

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1">
        <MonitorFlowEditor mode="create" onSave={handleSave} />
      </div>
    </div>
  );
}
