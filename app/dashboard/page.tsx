"use client";

import * as React from "react";
import { SidebarRight } from "@/components/sidebar-right";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Button } from "@/components/ui/button";
import { FlowCanvas } from "@/components/layout/flow-canvas";
import { SidebarRightOpen } from "@/lib/icons";
import { useHeader } from "@/contexts/HeaderContext";
import { useNodesState, NodeProps, Node } from "@xyflow/react";

// Custom node component for the sidebar button - memoized for performance
const SidebarButtonNode = React.memo(function SidebarButtonNode({
  data,
}: NodeProps) {
  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (typeof data?.onOpenSidebar === "function") {
        data.onOpenSidebar();
      }
    },
    [data],
  );

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="lg"
      className="gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
      disabled={Boolean(data?.isDisabled)}
    >
      <SidebarRightOpen className="h-5 w-5" />
      Open Right Sidebar
    </Button>
  );
});

const nodeTypes = {
  sidebarButton: SidebarButtonNode,
};

export default function Page() {
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(false);
  const { setHeaderData } = useHeader();

  // Stable callback to avoid recreating function references
  const openSidebar = React.useCallback(() => {
    setRightSidebarOpen(true);
  }, []);

  // Initialize nodes only once
  const initialNodes = React.useMemo<Node[]>(
    () => [
      {
        id: "sidebar-button",
        type: "sidebarButton",
        position: { x: 400, y: 300 }, // Center position for typical viewport
        data: {
          onOpenSidebar: openSidebar,
          isDisabled: false,
        },
      },
    ],
    [openSidebar],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  // Update only the disabled state when sidebar opens/closes
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === "sidebar-button"
          ? {
              ...node,
              data: {
                ...node.data,
                isDisabled: rightSidebarOpen,
              },
            }
          : node,
      ),
    );
  }, [rightSidebarOpen, setNodes]);

  // Set page-specific header content
  React.useEffect(() => {
    setHeaderData({
      title: "Project Management & Task Tracking",
    });
  }, [setHeaderData]);

  // Close sidebar when clicking outside
  const handleCanvasClick = React.useCallback(() => {
    if (rightSidebarOpen) {
      setRightSidebarOpen(false);
    }
  }, [rightSidebarOpen]);

  return (
    <>
      <DashboardHeader />
      <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
        {/* Main content area */}
        <div
          className="flex-1 relative bg-gray-50 dark:bg-gray-950"
          onClick={handleCanvasClick}
        >
          {/* React Flow canvas with button as node */}
          <FlowCanvas
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
          />
        </div>

        {/* Right Sidebar with smooth transitions */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            rightSidebarOpen ? "w-96" : "w-0"
          }`}
        >
          <SidebarRight />
        </div>
      </div>
    </>
  );
}
