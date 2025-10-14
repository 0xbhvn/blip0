"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { PlusDefault } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Contract } from "@/lib/types/nodeEditor";
import { ContractCard } from "./ContractCard";

export interface ContractListProps {
  contracts: Contract[];
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  className?: string;
}

export function ContractList({
  contracts,
  onAdd,
  onEdit,
  onDelete,
  className,
}: ContractListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Header with count and add button */}
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-foreground">
          Contracts ({contracts.length})
        </h4>
        <Button
          variant="outline"
          size="sm"
          onClick={onAdd}
          className="h-8 px-3"
        >
          <PlusDefault className="h-3.5 w-3.5 mr-1.5" />
          Add Contract
        </Button>
      </div>

      {/* List of contracts */}
      {contracts.length > 0 ? (
        <div className="space-y-2">
          {contracts.map((contract, index) => (
            <ContractCard
              key={index}
              contract={contract}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-6 bg-slate-2/50 p-8 text-center">
          <p className="text-sm text-slate-400">
            No contracts added yet. Add a contract to monitor.
          </p>
          <Button
            variant="link"
            size="sm"
            onClick={onAdd}
            className="mt-2 text-xs"
          >
            Add Contract
          </Button>
        </div>
      )}
    </div>
  );
}
