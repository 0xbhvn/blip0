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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ConditionType = "event" | "function" | "transaction";

export interface ConditionFormData {
  signature?: string;
  expression?: string | null;
  status?: "Success" | "Failed";
}

export interface ConditionFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: ConditionFormData) => void;
  initialData?: ConditionFormData;
  type: ConditionType;
}

export function ConditionForm({
  open,
  onClose,
  onSave,
  initialData,
  type,
}: ConditionFormProps) {
  const [formData, setFormData] = React.useState<ConditionFormData>(
    initialData || {},
  );

  React.useEffect(() => {
    if (open) {
      setFormData(initialData || {});
    }
  }, [open, initialData]);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const getTitle = () => {
    const action = initialData ? "Edit" : "Add";
    switch (type) {
      case "event":
        return `${action} Event Condition`;
      case "function":
        return `${action} Function Condition`;
      case "transaction":
        return `${action} Transaction Condition`;
    }
  };

  const getDescription = () => {
    switch (type) {
      case "event":
        return "Configure event monitoring with signature and optional filter expression.";
      case "function":
        return "Configure function call monitoring with signature and optional filter expression.";
      case "transaction":
        return "Configure transaction monitoring with status and optional filter expression.";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {type === "transaction" ? (
            <div className="grid gap-2">
              <Label htmlFor="status">
                Transaction Status <span className="text-gray-400">(required)</span>
              </Label>
              <Select
                value={formData.status || "Success"}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    status: value as "Success" | "Failed",
                  })
                }
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Success">Success</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-400">
                Filter by transaction status
              </p>
            </div>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor="signature">
                {type === "event" ? "Event" : "Function"} Signature{" "}
                <span className="text-gray-400">(required)</span>
              </Label>
              <Input
                id="signature"
                placeholder={
                  type === "event"
                    ? "Transfer(address,address,uint256)"
                    : "swap(Address,U32,U32,U128,U128)"
                }
                value={formData.signature || ""}
                onChange={(e) =>
                  setFormData({ ...formData, signature: e.target.value })
                }
              />
              <p className="text-xs text-slate-400">
                {type === "event"
                  ? "Example: Transfer(address,address,uint256)"
                  : "Example: swap(Address,U32,U32,U128,U128)"}
              </p>
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="expression">
              Expression Filter <span className="text-gray-400">(optional)</span>
            </Label>
            <Input
              id="expression"
              placeholder={
                type === "event"
                  ? "value > 10000000000"
                  : type === "function"
                    ? "out_min > 1000000000"
                    : "gas_used > 100000"
              }
              value={formData.expression || ""}
              onChange={(e) =>
                setFormData({ ...formData, expression: e.target.value })
              }
            />
            <p className="text-xs text-slate-400">
              {type === "event"
                ? "Examples: value > 1000, from == \"0x...\""
                : type === "function"
                  ? "Examples: out_min > 1000, user == \"G...\""
                  : "Custom transaction filters"}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={
              type !== "transaction" && (!formData.signature || !formData.signature.trim())
            }
          >
            Save {type === "event" ? "Event" : type === "function" ? "Function" : "Transaction"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
