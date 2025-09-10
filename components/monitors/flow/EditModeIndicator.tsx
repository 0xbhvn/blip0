"use client";

import { useState, useEffect } from "react";
import { Edit3, Lock, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EditModeIndicatorProps {
  isEditable?: boolean;
  isOwner?: boolean;
  hasUnsavedChanges?: boolean;
  className?: string;
  onToggleReadOnly?: () => void;
}

export function EditModeIndicator({
  isEditable = true,
  isOwner = true,
  hasUnsavedChanges = false,
  className,
  onToggleReadOnly,
}: EditModeIndicatorProps) {
  const [showPulse, setShowPulse] = useState(false);

  // Pulse animation when there are unsaved changes
  useEffect(() => {
    if (hasUnsavedChanges) {
      setShowPulse(true);
      const timer = setTimeout(() => setShowPulse(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasUnsavedChanges]);

  if (!isOwner) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md",
                "bg-orange-100 dark:bg-orange-900/20",
                "text-orange-700 dark:text-orange-400",
                "text-sm font-medium",
                className,
              )}
            >
              <Lock className="h-3.5 w-3.5" />
              <span>View Only</span>
              <Info className="h-3 w-3" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>You can view but not edit this monitor</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleReadOnly}
            className={cn(
              "gap-2 transition-all duration-200",
              isEditable
                ? "text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                : "text-muted-foreground hover:bg-muted",
              hasUnsavedChanges && showPulse && "animate-pulse",
              className,
            )}
          >
            {isEditable ? (
              <>
                <Edit3 className="h-3.5 w-3.5" />
                <span className="text-sm font-medium">
                  Edit Mode
                  {hasUnsavedChanges && (
                    <span className="ml-1.5 text-xs opacity-70">(unsaved)</span>
                  )}
                </span>
              </>
            ) : (
              <>
                <Lock className="h-3.5 w-3.5" />
                <span className="text-sm font-medium">Read Only</span>
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {isEditable
              ? "Click to switch to read-only mode"
              : "Click to enable editing"}
          </p>
          {hasUnsavedChanges && (
            <p className="text-xs text-orange-400 mt-1">
              You have unsaved changes
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
