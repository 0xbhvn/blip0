"use client";

import { cn } from "@/lib/utils";
import { AutoSaveIndicator, SaveStatus } from "./AutoSaveIndicator";

interface FloatingActionBarProps {
  saveStatus?: SaveStatus;
  lastSaved?: Date;
  position?: "bottom-right" | "bottom-center" | "top-right";
  className?: string;
}

export function FloatingActionBar({
  saveStatus = "idle",
  lastSaved,
  position = "bottom-right",
  className,
}: FloatingActionBarProps) {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    "top-right": "top-20 right-6",
  };

  return (
    <div className={cn("fixed z-10", positionClasses[position], className)}>
      {/* Auto-save indicator only */}
      <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border px-3 py-1.5">
        <AutoSaveIndicator status={saveStatus} lastSaved={lastSaved} compact />
      </div>
    </div>
  );
}
