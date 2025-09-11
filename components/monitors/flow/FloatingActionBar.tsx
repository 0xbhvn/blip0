"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Save, Trash2, Keyboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { AutoSaveIndicator, SaveStatus } from "./AutoSaveIndicator";

interface FloatingActionBarProps {
  onSave?: () => void;
  onClear?: () => void;
  isValid?: boolean;
  saveStatus?: SaveStatus;
  lastSaved?: Date;
  position?: "bottom-right" | "bottom-center" | "top-right";
  className?: string;
}

const shortcuts = {
  save: "⌘S",
  undo: "⌘Z",
  redo: "⌘⇧Z",
  clear: "⌘⇧D",
  help: "?",
};

export function FloatingActionBar({
  onSave,
  onClear,
  isValid = true,
  saveStatus = "idle",
  lastSaved,
  position = "bottom-right",
  className,
}: FloatingActionBarProps) {
  const [showShortcuts, setShowShortcuts] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for modifier keys
      const isMeta = e.metaKey || e.ctrlKey;

      if (isMeta && e.key === "s") {
        e.preventDefault();
        onSave?.();
      } else if (isMeta && e.shiftKey && e.key === "d") {
        e.preventDefault();
        onClear?.();
      } else if (e.key === "?") {
        setShowShortcuts(!showShortcuts);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSave, onClear, showShortcuts]);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2",
    "top-right": "top-20 right-6",
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed z-10 flex items-center gap-2",
          positionClasses[position],
          className,
        )}
      >
        {/* Auto-save indicator */}
        <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border px-3 py-1.5">
          <AutoSaveIndicator
            status={saveStatus}
            lastSaved={lastSaved}
            compact
          />
        </div>

        {/* Action buttons */}
        <div className="bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border flex items-center gap-1 p-1">
          {/* Save */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onSave}
                disabled={!isValid || saveStatus === "saving"}
                className="h-8 px-3"
              >
                <Save className="h-4 w-4 mr-1.5" />
                <span className="text-xs">Save</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <div className="flex items-center gap-2">
                <span>Save changes</span>
                <kbd className="text-xs bg-muted px-1 rounded">
                  {shortcuts.save}
                </kbd>
              </div>
            </TooltipContent>
          </Tooltip>

          {/* Clear */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClear}
                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <div className="flex items-center gap-2">
                <span>Clear canvas</span>
                <kbd className="text-xs bg-muted px-1 rounded">
                  {shortcuts.clear}
                </kbd>
              </div>
            </TooltipContent>
          </Tooltip>

          <div className="w-px h-6 bg-border" />

          {/* Help */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowShortcuts(!showShortcuts)}
                className="h-8 w-8 p-0"
              >
                <Keyboard className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <span>Keyboard shortcuts (?)</span>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Shortcuts panel */}
        {showShortcuts && (
          <div className="absolute bottom-full mb-2 right-0 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border p-3 min-w-[200px]">
            <h4 className="text-sm font-semibold mb-2">Keyboard Shortcuts</h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Save</span>
                <kbd className="bg-muted px-1 rounded">{shortcuts.save}</kbd>
              </div>
              <div className="flex justify-between">
                <span>Undo</span>
                <kbd className="bg-muted px-1 rounded">{shortcuts.undo}</kbd>
              </div>
              <div className="flex justify-between">
                <span>Redo</span>
                <kbd className="bg-muted px-1 rounded">{shortcuts.redo}</kbd>
              </div>
              <div className="flex justify-between">
                <span>Clear</span>
                <kbd className="bg-muted px-1 rounded">{shortcuts.clear}</kbd>
              </div>
              <div className="flex justify-between">
                <span>Delete node</span>
                <kbd className="bg-muted px-1 rounded">Delete</kbd>
              </div>
              <div className="flex justify-between">
                <span>Edit node</span>
                <kbd className="bg-muted px-1 rounded">Enter</kbd>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
