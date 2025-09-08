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
import { Plus, Trash2, Sparkles } from "lucide-react";
import { EventCondition } from "@/lib/types/monitors";
import { COMMON_EVENT_SIGNATURES } from "@/lib/constants/monitors";
import { ExpressionBuilder } from "./ExpressionBuilder";
import { cn } from "@/lib/utils";

interface EventConditionBuilderProps {
  conditions: EventCondition[];
  onChange: (conditions: EventCondition[]) => void;
  className?: string;
}

export function EventConditionBuilder({
  conditions,
  onChange,
  className,
}: EventConditionBuilderProps) {
  const addCondition = () => {
    onChange([...conditions, { signature: "", expression: null }]);
  };

  const removeCondition = (index: number) => {
    onChange(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (index: number, updates: Partial<EventCondition>) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], ...updates };
    onChange(newConditions);
  };

  const handleSignatureSelect = (index: number, value: string) => {
    if (value === "custom") {
      updateCondition(index, { signature: "" });
    } else {
      // Remove category prefix if present (e.g., "ERC20::Transfer(...)" -> "Transfer(...)")
      const signature = value.includes("::") ? value.split("::")[1] : value;
      updateCondition(index, { signature });
    }
  };

  // Flatten all event signatures for the select dropdown
  const allSignatures = Object.entries(COMMON_EVENT_SIGNATURES).flatMap(
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
            <Sparkles className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-4">
              No event conditions configured
            </p>
            <Button variant="outline" size="sm" onClick={addCondition}>
              <Plus className="h-4 w-4 mr-2" />
              Add Event Condition
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
                      <Label htmlFor={`event-sig-${index}`}>
                        Event Signature
                      </Label>
                      <Select
                        value={
                          // Find matching signature with category prefix or just the signature
                          allSignatures.find(
                            (s) => s.signature === condition.signature,
                          )
                            ? `${allSignatures.find((s) => s.signature === condition.signature)?.category}::${condition.signature}`
                            : condition.signature
                              ? "custom"
                              : ""
                        }
                        onValueChange={(value) =>
                          handleSignatureSelect(index, value)
                        }
                      >
                        <SelectTrigger id={`event-sig-${index}`}>
                          <SelectValue placeholder="Select or enter custom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom">
                            Custom Signature
                          </SelectItem>
                          {Object.entries(COMMON_EVENT_SIGNATURES).map(
                            ([category, sigs]) => (
                              <div key={category}>
                                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                                  {category}
                                </div>
                                {Object.entries(sigs).map(
                                  ([name, signature]) => (
                                    <SelectItem
                                      key={`${category}-${name}`}
                                      value={`${category}::${signature}`}
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
                          placeholder="e.g., Transfer(address,address,uint256)"
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
                    type="event"
                    placeholder="e.g., value > 10000000000 or from == '0x...'"
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
            Add Event Condition
          </Button>
        </>
      )}
    </div>
  );
}
