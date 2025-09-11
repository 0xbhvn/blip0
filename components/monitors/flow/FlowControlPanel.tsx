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
  Plus,
  Minus,
  Maximize2,
  Layout,
  PlusCircle,
  Network,
  MapPin,
  Zap,
  Code,
  Activity,
  Bell,
  AlertCircle,
} from "lucide-react";
import { NodeType } from "@/lib/types/nodeEditor";
import { cn } from "@/lib/utils";

interface FlowControlPanelProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFitView: () => void;
  onAutoLayout: () => void;
  onAddNode: (type: NodeType) => void;
  currentZoom?: number;
  className?: string;
}

const nodeTypeConfig = [
  {
    type: NodeType.NETWORK,
    label: "Network",
    icon: Network,
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
    icon: Zap,
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
  {
    type: NodeType.NOTIFICATION,
    label: "Notification",
    icon: Bell,
    description: "Configure alert notifications",
    color: "text-emerald-500",
  },
];

export function FlowControlPanel({
  onZoomIn,
  onZoomOut,
  onFitView,
  onAutoLayout,
  onAddNode,
  currentZoom = 100,
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
          "absolute bottom-4 left-1/2 -translate-x-1/2 z-10",
          "bg-background/95 backdrop-blur-sm",
          "border rounded-lg shadow-lg",
          "flex items-center gap-1 p-1",
          className,
        )}
      >
        {/* Zoom Controls */}
        <div className="flex items-center gap-1 px-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onZoomOut}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom Out</p>
            </TooltipContent>
          </Tooltip>

          <div className="px-2 text-xs font-medium text-muted-foreground min-w-[3rem] text-center">
            {Math.round(currentZoom)}%
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={onZoomIn}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom In</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="w-px h-6 bg-border" />

        {/* Auto Layout Button - Rearranges nodes */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onAutoLayout}
              className="h-8 w-8 p-0"
            >
              <Layout className="h-4 w-4" />
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
              <Maximize2 className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fit View</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-border" />

        {/* Add Node Button with Popover */}
        <Popover open={isNodePanelOpen} onOpenChange={setIsNodePanelOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2 gap-1">
              <PlusCircle className="h-4 w-4" />
              <span className="text-xs">Add Node</span>
            </Button>
          </PopoverTrigger>
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
