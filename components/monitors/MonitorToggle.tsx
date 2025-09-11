"use client";

import { Switch } from "@/components/ui/switch";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { useState } from "react";

interface MonitorToggleProps {
  monitorId: Id<"monitors">;
  initialPaused: boolean;
  onToggle?: (paused: boolean) => void;
}

export function MonitorToggle({ 
  monitorId, 
  initialPaused,
  onToggle 
}: MonitorToggleProps) {
  const [isPaused, setIsPaused] = useState(initialPaused);
  const togglePaused = useMutation(api.monitors.togglePaused);

  const handleToggle = async (checked: boolean) => {
    const expectedNewState = !checked; // Switch is "on" when monitor is active (not paused)
    
    try {
      setIsPaused(expectedNewState);
      const actualNewState = await togglePaused({ id: monitorId });
      
      toast.success(
        actualNewState 
          ? "Monitor paused" 
          : "Monitor resumed"
      );
      
      onToggle?.(actualNewState);
    } catch (error) {
      console.error("Failed to update monitor status:", error);
      setIsPaused(!expectedNewState); // Revert on error
      toast.error("Failed to update monitor status");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={!isPaused}
        onCheckedChange={handleToggle}
        aria-label={isPaused ? "Resume monitor" : "Pause monitor"}
      />
      <span className="text-sm text-muted-foreground">
        {isPaused ? "Paused" : "Active"}
      </span>
    </div>
  );
}