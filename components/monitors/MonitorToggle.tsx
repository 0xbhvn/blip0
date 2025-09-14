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
  onToggle,
}: MonitorToggleProps) {
  const [isPaused, setIsPaused] = useState(initialPaused);
  const togglePaused = useMutation(api.monitors.togglePaused);

  const handleToggle = async (checked: boolean) => {
    const expectedNewState = !checked; // Switch is "on" when monitor is active (not paused)

    try {
      setIsPaused(expectedNewState);
      const actualNewState = await togglePaused({ id: monitorId });

      toast.success(actualNewState ? "Monitor paused" : "Monitor resumed");

      onToggle?.(actualNewState);
    } catch (error) {
      console.error("Failed to update monitor status:", error);
      setIsPaused(!expectedNewState); // Revert on error
      toast.error("Failed to update monitor status");
    }
  };

  return (
    <Switch
      checked={!isPaused}
      onCheckedChange={handleToggle}
      aria-label={isPaused ? "Resume monitor" : "Pause monitor"}
      className="h-4 w-8 [&>span]:h-3 [&>span]:w-3 [&>span]:data-[state=checked]:translate-x-4"
    />
  );
}
