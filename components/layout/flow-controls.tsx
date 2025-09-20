"use client";

import React from "react";
import { Controls, ControlButton, useReactFlow } from "@xyflow/react";
import {
  PlusDefault,
  MinusDefault,
  MaximizeFourArrow,
  LockClose,
  LockOpen,
} from "@/lib/icons";
import { cn } from "@/lib/utils";

interface FlowControlsProps {
  className?: string;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  orientation?: "horizontal" | "vertical";
  showInteractive?: boolean;
  fitViewOptions?: {
    maxZoom?: number;
    duration?: number;
  };
}

export function FlowControls({
  className,
  position = "bottom-center",
  orientation = "horizontal",
  showInteractive = false,
  fitViewOptions = { maxZoom: 1.2, duration: 150 },
}: FlowControlsProps) {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const [isLocked, setIsLocked] = React.useState(false);

  return (
    <Controls
      position={position}
      orientation={orientation}
      showZoom={false}
      showFitView={false}
      showInteractive={false}
      fitViewOptions={fitViewOptions}
      className={cn(
        // // Base container styles
        "!bg-white/95 dark:!bg-gray-900/95",
        "!border !border-gray-200 dark:!border-gray-700",
        "!shadow-lg dark:!shadow-gray-900/50",
        "!backdrop-blur-sm",
        "!rounded-lg",
        "!gap-0.5",
        "!p-0.5",
        // // Button styles
        "[&>button]:!bg-transparent",
        "[&>button]:!border-0",
        "[&>button]:!shadow-none",
        "[&>button]:hover:!bg-gray-100",
        "[&>button]:dark:hover:!bg-gray-800",
        "[&>button]:!w-9",
        "[&>button]:!h-9",
        "[&>button]:!rounded-md",
        "[&>button]:!transition-colors",
        // Icon styles
        "[&_svg]:!w-7",
        "[&_svg]:!h-7",
        "[&_svg]:!fill-gray-600",
        "[&_svg]:dark:!fill-gray-300",
        className,
      )}
    >
      <ControlButton
        onClick={() => zoomIn({ duration: 200 })}
        title="Zoom in"
        aria-label="Zoom in"
      >
        <PlusDefault />
      </ControlButton>

      <ControlButton
        onClick={() => zoomOut({ duration: 200 })}
        title="Zoom out"
        aria-label="Zoom out"
      >
        <MinusDefault />
      </ControlButton>

      <ControlButton
        onClick={() => fitView(fitViewOptions)}
        title="Fit to view"
        aria-label="Fit to view"
      >
        <MaximizeFourArrow />
      </ControlButton>

      {showInteractive && (
        <ControlButton
          onClick={() => setIsLocked(!isLocked)}
          title={isLocked ? "Unlock" : "Lock"}
          aria-label={isLocked ? "Unlock controls" : "Lock controls"}
          className={cn(isLocked && "!text-blue-600 dark:!text-blue-400")}
        >
          {isLocked ? <LockClose /> : <LockOpen />}
        </ControlButton>
      )}
    </Controls>
  );
}
