"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { PlusDefault, ArrowRight } from "@/lib/icons";
import { NodeType } from "@/lib/types/nodeEditor";
import { Node } from "@xyflow/react";

interface AddNodeDropdownProps {
  nodeSuggestions: Array<{
    type: NodeType;
    label: string;
    description: string;
    isRequired?: boolean;
  }>;
  nodes: Node[];
  configStatus: {
    isComplete: boolean;
    missingRequired: string[];
  };
  onAddNode: (nodeType?: NodeType) => void;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AddNodeDropdown({
  nodeSuggestions,
  nodes,
  configStatus,
  onAddNode,
  children,
  open,
  onOpenChange,
}: AddNodeDropdownProps) {
  // Group suggestions by category
  const conditionSuggestions = nodeSuggestions.filter(
    (s) =>
      s.type === NodeType.EVENT_CONDITION ||
      s.type === NodeType.FUNCTION_CONDITION ||
      s.type === NodeType.TRANSACTION_CONDITION,
  );
  const actionSuggestions = nodeSuggestions.filter(
    (s) => s.type === NodeType.TRIGGER,
  );
  const otherSuggestions = nodeSuggestions.filter(
    (s) =>
      s.type !== NodeType.EVENT_CONDITION &&
      s.type !== NodeType.FUNCTION_CONDITION &&
      s.type !== NodeType.TRANSACTION_CONDITION &&
      s.type !== NodeType.TRIGGER,
  );

  // Count existing conditions for display
  const existingConditionCount = nodes.filter(
    (n) =>
      n.type === NodeType.EVENT_CONDITION ||
      n.type === NodeType.FUNCTION_CONDITION ||
      n.type === NodeType.TRANSACTION_CONDITION,
  ).length;

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {children || (
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md bg-background/95 border border-border shadow-lg backdrop-blur-sm transition-colors hover:bg-muted relative"
            title="Add Node"
            aria-label="Add Node"
          >
            <PlusDefault className="h-7 w-7 fill-muted-foreground" />
            {nodeSuggestions.length > 0 &&
              nodeSuggestions[0].isRequired && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                >
                  !
                </Badge>
              )}
          </button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Suggested Next Steps</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {nodeSuggestions.length > 0 ? (
          <>
            {/* Other suggestions (Network, Contract) */}
            {otherSuggestions.map((suggestion) => (
              <DropdownMenuItem
                key={suggestion.type}
                onClick={() => onAddNode(suggestion.type)}
                className="flex flex-col items-start py-3"
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="font-medium">
                    <ArrowRight className="h-3 w-3 inline mr-1" />
                    {suggestion.label}
                  </span>
                  {suggestion.isRequired && (
                    <Badge
                      variant="destructive"
                      className="ml-auto text-xs"
                    >
                      Required
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {suggestion.description}
                </span>
              </DropdownMenuItem>
            ))}

            {/* Conditions section */}
            {conditionSuggestions.length > 0 && (
              <>
                {(otherSuggestions.length > 0 ||
                  existingConditionCount > 0) && (
                  <DropdownMenuSeparator />
                )}
                <div className="px-2 py-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    Monitor Conditions{" "}
                    {existingConditionCount > 0 &&
                      `(${existingConditionCount} active)`}
                  </p>
                </div>
                {conditionSuggestions.map((suggestion) => (
                  <DropdownMenuItem
                    key={suggestion.type}
                    onClick={() => onAddNode(suggestion.type)}
                    className="flex flex-col items-start py-2 ml-2"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <PlusDefault className="h-3 w-3" />
                      <span className="font-medium">
                        {suggestion.label}
                      </span>
                      {existingConditionCount === 0 &&
                        conditionSuggestions.indexOf(suggestion) === 0 && (
                          <Badge
                            variant="secondary"
                            className="ml-auto text-xs"
                          >
                            Recommended
                          </Badge>
                        )}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 ml-5">
                      {suggestion.description}
                    </span>
                  </DropdownMenuItem>
                ))}
              </>
            )}

            {/* Actions section */}
            {actionSuggestions.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <div className="px-2 py-1">
                  <p className="text-xs font-medium text-muted-foreground">
                    Trigger
                  </p>
                </div>
                {actionSuggestions.map((suggestion) => (
                  <DropdownMenuItem
                    key={suggestion.type}
                    onClick={() => onAddNode(suggestion.type)}
                    className="flex flex-col items-start py-2 ml-2"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <ArrowRight className="h-3 w-3" />
                      <span className="font-medium">
                        {suggestion.label}
                      </span>
                      {suggestion.isRequired && (
                        <Badge
                          variant="destructive"
                          className="ml-auto text-xs"
                        >
                          Required
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground mt-1 ml-5">
                      {suggestion.description}
                    </span>
                  </DropdownMenuItem>
                ))}
              </>
            )}
          </>
        ) : (
          <DropdownMenuItem disabled>
            <span className="text-muted-foreground">
              Configuration complete! Ready to save.
            </span>
          </DropdownMenuItem>
        )}

        {/* Show what's missing if configuration is incomplete */}
        {!configStatus.isComplete &&
          configStatus.missingRequired.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <div className="px-2 py-2">
                <p className="text-xs font-medium text-muted-foreground mb-1">
                  Still needed:
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {configStatus.missingRequired.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}