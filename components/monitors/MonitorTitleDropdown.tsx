"use client";

import { useState } from "react";
import { ChevronDown, PencilEdit, DeleteDustbin01 } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface MonitorTitleDropdownProps {
  monitorId: Id<"monitors">;
  monitorName: string;
  className?: string;
}

export function MonitorTitleDropdown({
  monitorId,
  monitorName,
  className,
}: MonitorTitleDropdownProps) {
  const router = useRouter();
  const [isRenameOpen, setIsRenameOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [newName, setNewName] = useState(monitorName);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const updateMonitor = useMutation(api.monitors.update);
  const deleteMonitor = useMutation(api.monitors.remove);

  const handleRename = async () => {
    if (newName.trim() && newName !== monitorName) {
      try {
        await updateMonitor({
          id: monitorId,
          name: newName.trim(),
        });
        toast.success("Monitor renamed successfully");
        setIsRenameOpen(false);
      } catch (error) {
        toast.error("Failed to rename monitor");
        console.error("Error renaming monitor:", error);
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMonitor({ id: monitorId });
      toast.success("Monitor deleted successfully");
      router.push("/product/monitors");
    } catch (error) {
      toast.error("Failed to delete monitor");
      console.error("Error deleting monitor:", error);
    }
  };

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={`h-6 px-[5px] py-0 text-sm font-medium text-slate-12 dark:text-slate-12 border-transparent ring-2 ring-transparent hover:bg-slate-100 dark:hover:bg-slate-900 focus:bg-slate-50 dark:focus:bg-slate-950 active:bg-slate-50 dark:active:bg-slate-950 active:ring-2 transition-colors rounded-md flex items-center gap-x-1 leading-none whitespace-nowrap ${className}`}
          >
            <span className="truncate leading-4">{monitorName}</span>
            <ChevronDown
              className={`h-4 w-4 text-slate-500 dark:text-slate-400 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem
            onClick={() => {
              setNewName(monitorName);
              setIsRenameOpen(true);
              setIsDropdownOpen(false);
            }}
          >
            <PencilEdit className="mr-2 h-4 w-4" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setIsDeleteOpen(true);
              setIsDropdownOpen(false);
            }}
            className="text-destructive focus:text-destructive"
          >
            <DeleteDustbin01 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Rename Dialog */}
      <Dialog open={isRenameOpen} onOpenChange={setIsRenameOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Monitor</DialogTitle>
            <DialogDescription>
              Enter a new name for this monitor.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter monitor name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRename();
                  }
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRenameOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleRename}
              disabled={!newName.trim() || newName === monitorName}
            >
              Rename
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Monitor</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &ldquo;{monitorName}&rdquo;? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
