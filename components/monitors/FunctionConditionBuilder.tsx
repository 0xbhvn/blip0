"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Code } from "lucide-react";
import { FunctionCondition } from "@/lib/types/monitors";
import { COMMON_FUNCTION_SIGNATURES } from "@/lib/constants/monitors";
import { ExpressionBuilder } from "./ExpressionBuilder";
import { cn } from "@/lib/utils";

interface FunctionConditionBuilderProps {
  conditions: FunctionCondition[];
  onChange: (conditions: FunctionCondition[]) => void;
  className?: string;
}

export function FunctionConditionBuilder({
  conditions,
  onChange,
  className,
}: FunctionConditionBuilderProps) {
  const addCondition = () => {
    onChange([...conditions, { signature: "", expression: null }]);
  };

  const removeCondition = (index: number) => {
    onChange(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (
    index: number,
    updates: Partial<FunctionCondition>,
  ) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], ...updates };
    onChange(newConditions);
  };

  const handleSignatureSelect = (index: number, value: string) => {
    if (value === "custom") {
      updateCondition(index, { signature: "" });
    } else {
      updateCondition(index, { signature: value });
    }
  };

  // Flatten all function signatures for the select dropdown
  const allSignatures = Object.entries(COMMON_FUNCTION_SIGNATURES).flatMap(
    ([category, sigs]) =>
      Object.entries(sigs).map(([name, signature]) => ({
        category,
        name,
        signature,
      })),
  );

  return (
    <div className={cn("space-y-4", className)}>
      {conditions.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Code className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              No function conditions configured
            </p>
            <Button variant="outline" size="sm" onClick={addCondition}>
              <Plus className="h-4 w-4 mr-2" />
              Add Function Condition
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
                      <Label htmlFor={`function-sig-${index}`}>
                        Function Signature
                      </Label>
                      <Select
                        value={
                          allSignatures.find(
                            (s) => s.signature === condition.signature,
                          )?.signature || "custom"
                        }
                        onValueChange={(value) =>
                          handleSignatureSelect(index, value)
                        }
                      >
                        <SelectTrigger id={`function-sig-${index}`}>
                          <SelectValue placeholder="Select or enter custom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom">
                            Custom Signature
                          </SelectItem>
                          {Object.entries(COMMON_FUNCTION_SIGNATURES).map(
                            ([category, sigs]) => (
                              <div key={category}>
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                                  {category}
                                </div>
                                {Object.entries(sigs).map(
                                  ([name, signature]) => (
                                    <SelectItem
                                      key={signature}
                                      value={signature}
                                    >
                                      <span className="font-medium">
                                        {name}
                                      </span>
                                      <span className="ml-2 text-xs text-muted-foreground">
                                        {signature}
                                      </span>
                                    </SelectItem>
                                  ),
                                )}
                              </div>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                      {(!condition.signature ||
                        !allSignatures.find(
                          (s) => s.signature === condition.signature,
                        )) && (
                        <Input
                          value={condition.signature}
                          onChange={(e) =>
                            updateCondition(index, {
                              signature: e.target.value,
                            })
                          }
                          placeholder="e.g., transfer(address,uint256)"
                          className="font-mono text-sm"
                        />
                      )}
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
                    type="function"
                    placeholder="e.g., amount > 1000000"
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
            Add Function Condition
          </Button>
        </>
      )}
    </div>
  );
}
