"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PencilEdit, DeleteDustbin01 } from "@/lib/icons";
import { FileCode } from "@/lib/icons/solid";
import type { Contract } from "@/lib/types/nodeEditor";

export interface ContractCardProps {
  contract: Contract;
  onEdit: () => void;
  onDelete: () => void;
  className?: string;
}

export function ContractCard({
  contract,
  onEdit,
  onDelete,
  className,
}: ContractCardProps) {
  const displayLabel = contract.label || "Unnamed Contract";
  const displayAddress =
    contract.address.length > 50
      ? `${contract.address.slice(0, 24)}...${contract.address.slice(-24)}`
      : contract.address;

  const specInfo = contract.contractSpec
    ? `${contract.contractSpec.length} functions defined`
    : "Auto-fetch (SEP-48)";

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-slate-6 bg-background p-4 hover:border-slate-7 transition-colors",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 text-slate-11">
          <FileCode className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground mb-1">
            {displayLabel}
          </h4>
          <p className="text-xs text-slate-400 font-mono break-all mb-1">
            {displayAddress}
          </p>
          <p className="text-xs text-slate-400">Spec: {specInfo}</p>
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
