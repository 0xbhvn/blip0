"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PencilEdit, DeleteDustbin01 } from "@/lib/icons";

export interface ConditionCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  details?: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

export function ConditionCard({
  icon,
  title,
  description,
  details,
  onEdit,
  onDelete,
  className,
}: ConditionCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border border-slate-6 bg-background p-4 hover:border-slate-7 transition-colors",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 text-slate-11">{icon}</div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
          {description && (
            <p className="text-xs text-slate-400 break-words">{description}</p>
          )}
          {details && (
            <div className="mt-2 text-xs text-slate-400">{details}</div>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            className="h-7 w-7 p-0 hover:bg-slate-3"
          >
            <PencilEdit className="h-3.5 w-3.5" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onDelete}
            className="h-7 w-7 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <DeleteDustbin01 className="h-3.5 w-3.5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
