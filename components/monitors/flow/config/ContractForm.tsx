"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import type { Contract } from "@/lib/types/nodeEditor";

export interface ContractFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (contract: Contract) => void;
  initialData?: Contract;
}

export function ContractForm({
  open,
  onClose,
  onSave,
  initialData,
}: ContractFormProps) {
  const [formData, setFormData] = React.useState<Contract>(
    initialData || { address: "" },
  );
  const [specError, setSpecError] = React.useState<string>("");

  React.useEffect(() => {
    if (open) {
      setFormData(initialData || { address: "" });
      setSpecError("");
    }
  }, [open, initialData]);

  const handleSpecChange = (value: string) => {
    setSpecError("");
    if (value.trim()) {
      try {
        const parsed = JSON.parse(value);
        if (!Array.isArray(parsed)) {
          setSpecError("Contract spec must be a JSON array");
        }
      } catch {
        setSpecError("Invalid JSON format");
      }
    }
  };

  const handleSave = () => {
    const contractToSave: Contract = {
      address: formData.address,
      label: formData.label,
    };

    // Only include contractSpec if it's valid JSON
    if (formData.contractSpec) {
      try {
        const parsed = JSON.parse(
          typeof formData.contractSpec === "string"
            ? formData.contractSpec
            : JSON.stringify(formData.contractSpec),
        );
        if (Array.isArray(parsed)) {
          contractToSave.contractSpec = parsed;
        }
      } catch {
        // Ignore invalid JSON
      }
    }

    onSave(contractToSave);
    onClose();
  };

  const isAddressValid = () => {
    const address = formData.address.trim();
    return address.length > 0 && address.startsWith("C") && address.length === 56;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Contract" : "Add Contract"}
          </DialogTitle>
          <DialogDescription>
            Configure a Stellar contract address to monitor. Contract specs are
            auto-fetched via SEP-48 if not provided.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="address">
              Contract Address <span className="text-gray-400">(required)</span>
            </Label>
            <Input
              id="address"
              placeholder="CA..."
              value={formData.address || ""}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            <p className="text-xs text-slate-400">
              Enter the Stellar contract address (starts with CA, 56 characters)
            </p>
            {formData.address && !isAddressValid() && (
              <p className="text-xs text-destructive">
                Address must start with &quot;C&quot; and be 56 characters long
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="label">
              Display Label <span className="text-gray-400">(optional)</span>
            </Label>
            <Input
              id="label"
              placeholder="Phoenix Protocol DEX"
              value={formData.label || ""}
              onChange={(e) =>
                setFormData({ ...formData, label: e.target.value })
              }
            />
            <p className="text-xs text-slate-400">
              Custom name for this contract
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contractSpec">
              Contract Spec <span className="text-gray-400">(optional)</span>
            </Label>
            <Textarea
              id="contractSpec"
              placeholder='[{"function_v0": {"name": "swap", ...}}]'
              value={
                typeof formData.contractSpec === "string"
                  ? formData.contractSpec
                  : formData.contractSpec
                    ? JSON.stringify(formData.contractSpec, null, 2)
                    : ""
              }
              onChange={(e) => {
                setFormData({ ...formData, contractSpec: e.target.value as unknown as object[] });
                handleSpecChange(e.target.value);
              }}
              rows={6}
              className="font-mono text-xs"
            />
            <p className="text-xs text-slate-400">
              💡 Leave empty to auto-fetch via SEP-48
            </p>
            {specError && (
              <p className="text-xs text-destructive">{specError}</p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!formData.address.trim() || !isAddressValid() || !!specError}
          >
            Save Contract
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
