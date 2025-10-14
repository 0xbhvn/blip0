"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MaximizeTwoArrow,
  LayoutGridTwoHorizontal,
  PlusCircle,
  GlobeNetwork,
  MapPin,
  LightningThunderElectricOn,
  Code,
  Activity,
  AlertCircle,
  UturnLeft,
  UturnRight,
  GitBranch,
} from "@/lib/icons";
import { NodeType } from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";

interface FlowControlPanelProps {
  onFitView: () => void;
  onAutoLayout: () => void;
  onAddNode: (type: NodeType) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  onAutoConnect?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  hasNodes?: boolean;
  className?: string;
}

const nodeTypeConfig = [
  {
    type: NodeType.NETWORK,
    label: "Network",
    icon: GlobeNetwork,
    description: "Monitor a blockchain network",
    color: "text-blue-500",
  },
  {
    type: NodeType.ADDRESS,
    label: "Address",
    icon: MapPin,
    description: "Track specific wallet address",
    color: "text-purple-500",
  },
  {
    type: NodeType.EVENT_CONDITION,
    label: "Event",
    icon: LightningThunderElectricOn,
    description: "Listen for contract events",
    color: "text-yellow-500",
  },
  {
    type: NodeType.FUNCTION_CONDITION,
    label: "Function",
    icon: Code,
    description: "Monitor function calls",
    color: "text-orange-500",
  },
  {
    type: NodeType.TRANSACTION_CONDITION,
    label: "Transaction",
    icon: Activity,
    description: "Track transaction patterns",
    color: "text-amber-500",
  },
  {
    type: NodeType.TRIGGER,
    label: "Trigger",
    icon: AlertCircle,
    description: "Define trigger conditions",
    color: "text-green-500",
  },
];

export function FlowControlPanel({
  onFitView,
  onAutoLayout,
  onAddNode,
  onUndo,
  onRedo,
  onAutoConnect,
  canUndo = false,
  canRedo = false,
  hasNodes = false,
  className,
}: FlowControlPanelProps) {
  const [isNodePanelOpen, setIsNodePanelOpen] = useState(false);

  const handleAddNode = (type: NodeType) => {
    onAddNode(type);
    setIsNodePanelOpen(false);
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-10",
          "bg-background/95 backdrop-blur-sm",
          "border rounded-lg shadow-lg",
          "flex items-center gap-1 p-1",
          className,
        )}
      >
        {/* Undo/Redo Controls */}
        <div className="flex items-center gap-0.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onUndo}
                disabled={!canUndo}
                className="h-8 w-8 p-0"
              >
                <UturnLeft className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Undo (⌘Z)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onRedo}
                disabled={!canRedo}
                className="h-8 w-8 p-0"
              >
                <UturnRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Redo (⌘⇧Z)</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Auto Connect Button - Connects nodes automatically */}
        {hasNodes && onAutoConnect && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onAutoConnect}
                className="h-8 w-8 p-0"
              >
                <GitBranch className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Auto Connect - Connect nodes</p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* Auto Layout Button - Rearranges nodes */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onAutoLayout}
              className="h-8 w-8 p-0"
            >
              <LayoutGridTwoHorizontal className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Auto Layout - Arrange nodes</p>
          </TooltipContent>
        </Tooltip>

        {/* Fit View Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onFitView}
              className="h-8 w-8 p-0"
            >
              <MaximizeTwoArrow className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fit View</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-border" />

        {/* Add Node Button with Popover */}
        <Popover open={isNodePanelOpen} onOpenChange={setIsNodePanelOpen}>
          <Tooltip>
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <TooltipContent>
              <p>Add Node</p>
            </TooltipContent>
          </Tooltip>
          <PopoverContent
            align="center"
            side="top"
            className="w-80 p-3"
            sideOffset={8}
          >
            <div className="space-y-2">
              <h4 className="text-sm font-semibold mb-3">Select Node Type</h4>
              <div className="grid grid-cols-2 gap-2">
                {nodeTypeConfig.map((node) => {
                  const Icon = node.icon;
                  return (
                    <Button
                      key={node.type}
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddNode(node.type)}
                      className="h-auto flex flex-col items-start gap-2 p-3 hover:bg-accent transition-colors"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <Icon className={cn("h-4 w-4", node.color)} />
                        <span className="text-sm font-medium">
                          {node.label}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground text-left">
                        {node.description}
                      </span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </TooltipProvider>
  );
}
