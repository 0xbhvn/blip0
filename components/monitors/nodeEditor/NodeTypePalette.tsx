"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NodeType, NODE_PALETTE_CATEGORIES } from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";
import {
  Network,
  FileCode,
  Zap,
  Code,
  ArrowRightLeft,
  Bell,
  Mail,
  Target,
  Settings,
  Filter,
} from "lucide-react";

interface NodeTypePaletteProps {
  selectedType: NodeType | null;
  onSelectType: (type: NodeType | null) => void;
}

const NODE_ICONS: Record<NodeType, React.ReactNode> = {
  [NodeType.NETWORK]: <Network className="h-4 w-4" />,
  [NodeType.ADDRESS]: <FileCode className="h-4 w-4" />,
  [NodeType.EVENT_CONDITION]: <Zap className="h-4 w-4" />,
  [NodeType.FUNCTION_CONDITION]: <Code className="h-4 w-4" />,
  [NodeType.TRANSACTION_CONDITION]: <ArrowRightLeft className="h-4 w-4" />,
  [NodeType.TRIGGER]: <Bell className="h-4 w-4" />,
  [NodeType.NOTIFICATION]: <Mail className="h-4 w-4" />,
};

const NODE_LABELS: Record<NodeType, string> = {
  [NodeType.NETWORK]: "Network",
  [NodeType.ADDRESS]: "Address",
  [NodeType.EVENT_CONDITION]: "Event",
  [NodeType.FUNCTION_CONDITION]: "Function",
  [NodeType.TRANSACTION_CONDITION]: "Transaction",
  [NodeType.TRIGGER]: "Trigger",
  [NodeType.NOTIFICATION]: "Notification",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Settings: <Settings className="h-4 w-4" />,
  FileCode: <FileCode className="h-4 w-4" />,
  Filter: <Filter className="h-4 w-4" />,
  Bell: <Bell className="h-4 w-4" />,
  Target: <Target className="h-4 w-4" />,
};

export function NodeTypePalette({
  selectedType,
  onSelectType,
}: NodeTypePaletteProps) {
  return (
    <Card className="w-64">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm">Add Node</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <div className="p-3 space-y-4">
            {NODE_PALETTE_CATEGORIES.map((category) => (
              <div key={category.name}>
                <div className="flex items-center gap-2 mb-2">
                  {CATEGORY_ICONS[category.icon]}
                  <span className="text-xs font-medium text-muted-foreground">
                    {category.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.nodes.map((nodeType) => (
                    <Button
                      key={nodeType}
                      size="sm"
                      variant={
                        selectedType === nodeType ? "default" : "outline"
                      }
                      className={cn(
                        "justify-start",
                        selectedType === nodeType && "ring-2 ring-primary",
                      )}
                      onClick={() =>
                        onSelectType(
                          selectedType === nodeType ? null : nodeType,
                        )
                      }
                    >
                      {NODE_ICONS[nodeType]}
                      <span className="ml-2 text-xs">
                        {NODE_LABELS[nodeType]}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        {selectedType && (
          <div className="p-3 border-t">
            <p className="text-xs text-muted-foreground">
              Click on the canvas to add a {NODE_LABELS[selectedType]} node
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
