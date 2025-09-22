"use client";

import React from "react";
import { MonitorBuilder } from "@/components/monitors/flow/MonitorBuilder";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { useHeader } from "@/contexts/HeaderContext";
import { NodeConfigPanel } from "@/components/monitors/flow/NodeConfigPanel";
import type { Node } from "@xyflow/react";

export default function MonitorBuilderPage() {
  const { setHeaderData } = useHeader();
  const [selectedNode, setSelectedNode] = React.useState<Node | null>(null);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    setHeaderData({
      title: "Create Monitor",
    });
  }, [setHeaderData]);

  const handleNodeSelect = React.useCallback((node: Node | null) => {
    setSelectedNode(node);
    setSidebarOpen(true);
  }, []);

  const handleSidebarClose = React.useCallback(() => {
    setSidebarOpen(false);
    setSelectedNode(null);
  }, []);

  return (
    <>
      <DashboardHeader />
      <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
        <div className="flex-1 relative bg-muted">
          <MonitorBuilder
            onNodeSelect={handleNodeSelect}
            selectedNodeId={selectedNode?.id}
          />
        </div>
        
        {/* Right Sidebar for Node Configuration */}
        {sidebarOpen && (
          <div className="w-96 border-l bg-background shadow-lg transition-all duration-300">
            <NodeConfigPanel
              node={selectedNode}
              onClose={handleSidebarClose}
              onUpdate={(updates) => {
                // Handle node updates
                console.log("Node updated:", updates);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}