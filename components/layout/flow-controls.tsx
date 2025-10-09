"use client";

import React from "react";
import { Controls, ControlButton, useReactFlow } from "@xyflow/react";
import {
  PlusDefault,
  MaximizeFourArrow,
  LockClose,
  LockOpen,
  SparkleAI01,
} from "@/lib/icons";
import { cn } from "@/lib/utils";

interface DropdownProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

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
  onAutoLayout?: () => void;
  disableAutoLayout?: boolean;
  addNodeDropdown?: React.ReactNode;
}

export function FlowControls({
  className,
  position = "bottom-center",
  orientation = "horizontal",
  showInteractive = false,
  fitViewOptions = { maxZoom: 1.2, duration: 150 },
  onAutoLayout,
  disableAutoLayout = false,
  addNodeDropdown,
}: FlowControlsProps) {
  const { fitView } = useReactFlow();
  const [isLocked, setIsLocked] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  // Clone the dropdown with open and onOpenChange props
  const dropdownWithProps = addNodeDropdown ? (
    React.cloneElement(addNodeDropdown as React.ReactElement<DropdownProps>, {
      open: dropdownOpen,
      onOpenChange: setDropdownOpen,
      children: (
        <ControlButton
          title="Add Node"
          aria-label="Add Node"
        >
          <PlusDefault />
        </ControlButton>
      ),
    })
  ) : null;

  return (
    <Controls
      position={position}
      orientation={orientation}
      showZoom={false}
      showFitView={false}
      showInteractive={false}
      fitViewOptions={fitViewOptions}
      className={cn(
        // Base container styles
        "!bg-background/95",
        "!border !border-border",
        "!shadow-lg",
        "!backdrop-blur-sm",
        "!rounded-lg",
        "!gap-0.5",
        "!p-0.5",
        // Button styles
        "[&>button]:!bg-transparent",
        "[&>button]:!border-0",
        "[&>button]:!shadow-none",
        "[&>button]:hover:!bg-muted",
        "[&>button]:!w-9",
        "[&>button]:!h-9",
        "[&>button]:!rounded-md",
        "[&>button]:!transition-colors",
        // Icon styles
        "[&_svg]:!w-7",
        "[&_svg]:!h-7",
        "[&_svg]:!fill-muted-foreground",
        className,
      )}
    >
      {/* Add Node dropdown button */}
      {dropdownWithProps}

      {onAutoLayout && (
        <ControlButton
          onClick={onAutoLayout}
          disabled={disableAutoLayout}
          title="Auto-layout"
          aria-label="Auto-layout"
        >
          <SparkleAI01 />
        </ControlButton>
      )}

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
