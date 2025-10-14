"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlusDefault } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface ConditionListProps<T> {
  items: T[];
  onAdd: () => void;
  emptyMessage: string;
  addButtonText: string;
  renderCard: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function ConditionList<T>({
  items,
  onAdd,
  emptyMessage,
  addButtonText,
  renderCard,
  className,
}: ConditionListProps<T>) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Header with count and add button */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-foreground">
          {addButtonText.replace("Add ", "")} ({items.length})
        </h4>
        <Button
          variant="outline"
          size="sm"
          onClick={onAdd}
          className="h-8 px-3"
        >
          <PlusDefault className="h-3.5 w-3.5 mr-1.5" />
          {addButtonText}
        </Button>
      </div>

      {/* List of items */}
      {items.length > 0 ? (
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index}>{renderCard(item, index)}</div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-6 bg-slate-2/50 p-8 text-center">
          <p className="text-sm text-slate-400">{emptyMessage}</p>
          <Button
            variant="link"
            size="sm"
            onClick={onAdd}
            className="mt-2 text-xs"
          >
            {addButtonText}
          </Button>
        </div>
      )}
    </div>
  );
}
