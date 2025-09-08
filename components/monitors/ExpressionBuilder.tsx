"use client";

import { useState } from "react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Info, Plus, X } from "lucide-react";
import {
  EXPRESSION_OPERATORS,
  EXPRESSION_FIELDS,
  EXAMPLE_EXPRESSIONS,
} from "@/lib/constants/monitors";
import { cn } from "@/lib/utils";

interface ExpressionBuilderProps {
  value: string | null | undefined;
  onChange: (value: string | null) => void;
  type: "event" | "function" | "transaction";
  placeholder?: string;
  className?: string;
  networkTypes?: ("EVM" | "Stellar")[];
}

export function ExpressionBuilder({
  value,
  onChange,
  type,
  placeholder = "Enter expression...",
  className,
  networkTypes = ["EVM", "Stellar"],
}: ExpressionBuilderProps) {
  // Visual builder only works for transactions (which have fixed fields)
  // Events and functions have dynamic parameters based on their signatures
  const canUseVisualBuilder = type === "transaction";
  const [isAdvanced, setIsAdvanced] = useState(!canUseVisualBuilder); // Default to text for events/functions
  const [showExamples, setShowExamples] = useState(false);

  const examples =
    type === "event"
      ? EXAMPLE_EXPRESSIONS.Events
      : type === "function"
        ? EXAMPLE_EXPRESSIONS.Functions
        : EXAMPLE_EXPRESSIONS.Transactions;

  const handleExampleClick = (expression: string) => {
    onChange(expression);
    setShowExamples(false);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <Label className="text-sm">Expression (Optional)</Label>
        <div className="flex gap-2">
          <Popover open={showExamples} onOpenChange={setShowExamples}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Info className="h-3 w-3 mr-1" />
                Examples
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96" align="end">
              <div className="space-y-2">
                <p className="text-sm font-medium">Example Expressions</p>
                {examples.map((example, index) => (
                  <div
                    key={index}
                    className="p-2 rounded border hover:bg-muted cursor-pointer"
                    onClick={() => handleExampleClick(example.expression)}
                  >
                    <p className="text-sm font-medium">{example.label}</p>
                    <code className="text-xs text-muted-foreground">
                      {example.expression}
                    </code>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          {canUseVisualBuilder && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAdvanced(!isAdvanced)}
            >
              {isAdvanced ? "Visual Builder" : "Text Mode"}
            </Button>
          )}
        </div>
      </div>

      {isAdvanced || !canUseVisualBuilder ? (
        <>
          <Input
            value={value || ""}
            onChange={(e) => onChange(e.target.value || null)}
            placeholder={placeholder}
            className="font-mono text-sm"
          />
          {type !== "transaction" && (
            <p className="text-xs text-muted-foreground">
              {type === "event"
                ? "Use parameter names from the event signature (e.g., 'value', 'from', 'to' for Transfer events)"
                : "Use parameter names from the function signature (e.g., 'amount', 'recipient' for transfer functions)"}
            </p>
          )}
        </>
      ) : (
        <VisualExpressionBuilder
          value={value}
          onChange={onChange}
          type={type}
          networkTypes={networkTypes}
        />
      )}

      {value && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono text-xs">
            {value}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange(null)}
            className="h-5 w-5 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
}

interface Condition {
  field: string;
  operator: string;
  value: string;
  logic?: "AND" | "OR";
}

function VisualExpressionBuilder({
  value,
  onChange,
  type,
  networkTypes = ["EVM", "Stellar"],
}: {
  value: string | null | undefined;
  onChange: (value: string | null) => void;
  type: "event" | "function" | "transaction";
  networkTypes?: ("EVM" | "Stellar")[];
}) {
  const [conditions, setConditions] = useState<Condition[]>(() => {
    // Parse existing expression if available
    if (!value) return [{ field: "", operator: "", value: "" }];

    // Simple parser for basic expressions
    // This is a simplified version - you might want to enhance this
    return [{ field: "", operator: "", value: "" }];
  });

  // Get fields based on network types
  const getTransactionFields = () => {
    if (type !== "transaction") return [];

    const fields: Array<
      [string, { field: string; label: string; type: string }]
    > = [];

    // Add EVM fields if EVM networks are selected
    if (networkTypes.includes("EVM")) {
      Object.entries(EXPRESSION_FIELDS.Transaction.EVM).forEach(([, value]) => {
        fields.push([value.label, value]);
      });
    }

    // Add Stellar fields if Stellar networks are selected
    if (networkTypes.includes("Stellar")) {
      Object.entries(EXPRESSION_FIELDS.Transaction.Stellar).forEach(
        ([, value]) => {
          // Avoid duplicates (e.g., hash, from, to exist in both)
          if (!fields.some(([, v]) => v.field === value.field)) {
            fields.push([value.label, value]);
          }
        },
      );
    }

    return fields;
  };

  const fields = getTransactionFields();

  const addCondition = () => {
    setConditions([
      ...conditions,
      { field: "", operator: "", value: "", logic: "AND" },
    ]);
  };

  const removeCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (index: number, updates: Partial<Condition>) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], ...updates };
    setConditions(newConditions);

    // Build expression string
    const expression = newConditions
      .filter((c) => c.field && c.operator && c.value)
      .map((c, i) => {
        const expr = `${c.field} ${c.operator} ${
          c.operator === "==" ||
          c.operator === "!=" ||
          c.operator.includes("with")
            ? `"${c.value}"`
            : c.value
        }`;
        return i > 0 && c.logic ? `${c.logic} ${expr}` : expr;
      })
      .join(" ");

    onChange(expression || null);
  };

  return (
    <div className="space-y-2">
      {conditions.map((condition, index) => (
        <div key={index} className="flex gap-2 items-end">
          {index > 0 && (
            <Select
              value={condition.logic}
              onValueChange={(value: "AND" | "OR") =>
                updateCondition(index, { logic: value })
              }
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AND">AND</SelectItem>
                <SelectItem value="OR">OR</SelectItem>
              </SelectContent>
            </Select>
          )}

          <div className="flex-1">
            <Label className="text-xs">Field</Label>
            <Select
              value={condition.field}
              onValueChange={(value) =>
                updateCondition(index, { field: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select field" />
              </SelectTrigger>
              <SelectContent>
                {fields.map(([label, fieldData]) => (
                  <SelectItem key={fieldData.field} value={fieldData.field}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-32">
            <Label className="text-xs">Operator</Label>
            <Select
              value={condition.operator}
              onValueChange={(value) =>
                updateCondition(index, { operator: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Operator" />
              </SelectTrigger>
              <SelectContent>
                {EXPRESSION_OPERATORS.Numeric.map((op) => (
                  <SelectItem key={op.value} value={op.value}>
                    {op.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <Label className="text-xs">Value</Label>
            <Input
              value={condition.value}
              onChange={(e) =>
                updateCondition(index, { value: e.target.value })
              }
              placeholder="Value"
            />
          </div>

          {conditions.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeCondition(index)}
              className="mb-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={addCondition}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Condition
      </Button>
    </div>
  );
}
