"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Activity } from "lucide-react";
import { TransactionCondition } from "@/lib/types/monitors";
import { ExpressionBuilder } from "./ExpressionBuilder";
import { cn } from "@/lib/utils";

interface TransactionConditionBuilderProps {
  conditions: TransactionCondition[];
  onChange: (conditions: TransactionCondition[]) => void;
  className?: string;
  networkTypes?: ("EVM" | "Stellar")[];
}

export function TransactionConditionBuilder({
  conditions,
  onChange,
  className,
  networkTypes = ["EVM", "Stellar"],
}: TransactionConditionBuilderProps) {
  const addCondition = () => {
    onChange([...conditions, { expression: null }]);
  };

  const removeCondition = (index: number) => {
    onChange(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (
    index: number,
    updates: Partial<TransactionCondition>,
  ) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], ...updates };
    onChange(newConditions);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {conditions.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Activity className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              No transaction conditions configured
            </p>
            <Button variant="outline" size="sm" onClick={addCondition}>
              <Plus className="h-4 w-4 mr-2" />
              Add Transaction Condition
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          {conditions.map((condition, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`tx-status-${index}`}>
                        Transaction Status (Optional)
                      </Label>
                      <Select
                        value={condition.status || "any"}
                        onValueChange={(value) =>
                          updateCondition(index, {
                            status:
                              value === "any"
                                ? undefined
                                : (value as "Success" | "Failed"),
                          })
                        }
                      >
                        <SelectTrigger id={`tx-status-${index}`}>
                          <SelectValue placeholder="Any status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Status</SelectItem>
                          <SelectItem value="Success">Success Only</SelectItem>
                          <SelectItem value="Failed">Failed Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeCondition(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <ExpressionBuilder
                    value={condition.expression}
                    onChange={(expression) =>
                      updateCondition(index, { expression })
                    }
                    type="transaction"
                    placeholder="e.g., transaction.value > 1000000000000000000"
                    networkTypes={networkTypes}
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addCondition}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction Condition
          </Button>
        </>
      )}
    </div>
  );
}
