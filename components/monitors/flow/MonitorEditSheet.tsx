"use client";

import { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Loader2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MonitorForm } from "@/components/monitors";
import { toast } from "sonner";

interface MonitorEditSheetProps {
  monitorId: Id<"monitors"> | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaveSuccess?: () => void;
}

export function MonitorEditSheet({
  monitorId,
  open,
  onOpenChange,
  onSaveSuccess,
}: MonitorEditSheetProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Fetch monitor data when sheet opens
  const monitor = useQuery(
    api.monitors.get,
    monitorId ? { id: monitorId } : "skip",
  );

  // Reset loading state when monitor data changes
  useEffect(() => {
    if (open && monitorId) {
      setIsLoading(true);
      if (monitor !== undefined) {
        setIsLoading(false);
      }
    }
  }, [open, monitorId, monitor]);

  // Handle save success
  const handleSaveSuccess = () => {
    toast.success("Monitor updated", {
      description: "Your monitor has been successfully updated.",
    });
    onOpenChange(false);
    onSaveSuccess?.();
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[40vw] min-w-[500px] max-w-[800px] overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            {monitor ? `Edit ${monitor.name}` : "Edit Monitor"}
          </SheetTitle>
          <SheetDescription>
            Update your monitor configuration without leaving the flow view
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : monitor ? (
            <MonitorForm
              monitor={monitor}
              hideHeader
              onSaveSuccess={handleSaveSuccess}
              className="space-y-4"
            />
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              Monitor not found
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
