"use client";

/**
 * Example components showing how to use the refactored flow-based monitor components
 */

import React from "react";
import { MonitorFlowEditor, MonitorFlowViewer, MonitorFlowPreview } from "./";
import { MonitorCreateInput } from "@/lib/types/monitors";
import type { Doc } from "@/convex/_generated/dataModel";
import { toast } from "sonner";
import { monitorToFlow } from "@/lib/helpers/flowConverter";
import { Node } from "@xyflow/react";

type Monitor = Doc<"monitors">;

/**
 * Example: Creating a new monitor with the flow editor
 */
export function CreateMonitorExample() {
  const handleSave = async (config: MonitorCreateInput) => {
    console.log("Saving new monitor:", config);
    toast.success("Monitor created successfully!");
    // Your actual save logic here
  };

  return (
    <div className="h-screen">
      <MonitorFlowEditor mode="create" onSave={handleSave} />
    </div>
  );
}

/**
 * Example: Editing an existing monitor
 */
export function EditMonitorExample({ monitor }: { monitor: Monitor }) {
  const handleSave = async (config: MonitorCreateInput) => {
    console.log("Updating monitor:", config);
    toast.success("Monitor updated successfully!");
    // Your actual update logic here
  };

  // Convert monitor to flow data
  const flowData = monitorToFlow(monitor);

  return (
    <div className="h-screen">
      <MonitorFlowEditor
        mode="edit"
        initialData={flowData}
        initialMonitorName={monitor.name}
        initialMonitorActive={!monitor.paused}
        onSave={handleSave}
      />
    </div>
  );
}

/**
 * Example: Viewing a monitor flow (read-only)
 */
export function ViewMonitorExample({ monitor }: { monitor: Monitor }) {
  const handleNodeClick = (node: Node) => {
    console.log("Node clicked:", node);
    // You could show node details in a modal or sidebar
  };

  return (
    <div className="h-96">
      <MonitorFlowViewer
        monitor={monitor}
        showControls={true}
        showMinimap={true}
        interactive={true}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
}

/**
 * Example: Monitor flow preview in a card or list
 */
export function MonitorCardWithPreview({ monitor }: { monitor: Monitor }) {
  return (
    <div className="rounded-lg border p-4 space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{monitor.name}</h3>
        <p className="text-sm text-muted-foreground">
          Status: {monitor.paused ? "Paused" : "Active"}
        </p>
      </div>

      {/* Compact flow preview */}
      <MonitorFlowPreview monitor={monitor} className="h-32" />

      <div className="flex gap-2">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-secondary">View Details</button>
      </div>
    </div>
  );
}

/**
 * Example: Full-screen monitor viewer
 */
export function FullscreenMonitorViewer({ monitor }: { monitor: Monitor }) {
  return (
    <MonitorFlowViewer
      monitor={monitor}
      showControls={true}
      showMinimap={true}
      fullscreen={true}
      className="absolute inset-0"
    />
  );
}

/**
 * Example: Embedded monitor viewer in a dashboard
 */
export function DashboardMonitorWidget({ monitor }: { monitor: Monitor }) {
  return (
    <div className="bg-card rounded-lg border p-4">
      <h4 className="text-sm font-medium mb-2">{monitor.name}</h4>
      <MonitorFlowViewer
        monitor={monitor}
        showControls={false}
        showMinimap={false}
        interactive={false}
        className="h-64"
      />
    </div>
  );
}
