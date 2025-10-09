"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  ReactFlowProvider,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeTypes,
  NodeMouseHandler,
  useReactFlow,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowControls } from "./flow-controls";

interface FlowWithControlsProps {
  nodes?: Node[];
  edges?: Edge[];
  nodeTypes?: NodeTypes;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onConnect?: OnConnect;
  onNodeClick?: NodeMouseHandler;
  onPaneClick?: () => void;
  centerOnInit?: boolean;
  initialZoom?: number;
  autoFitTrigger?: number;
  onAutoLayout?: () => void;
  disableAutoLayout?: boolean;
  addNodeDropdown?: React.ReactNode;
}

function FlowWithControls({
  nodes = [],
  edges = [],
  nodeTypes,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeClick,
  onPaneClick,
  centerOnInit = true,
  initialZoom = 1.2,
  autoFitTrigger,
  onAutoLayout,
  disableAutoLayout,
  addNodeDropdown,
}: FlowWithControlsProps) {
  const { fitView } = useReactFlow();

  // Auto-fit when trigger changes (sidebar state changes)
  React.useEffect(() => {
    if (autoFitTrigger !== undefined && autoFitTrigger > 0) {
      // Add a small delay to wait for sidebar animation to complete
      const timer = setTimeout(() => {
        fitView({
          maxZoom: initialZoom,
          duration: 300,
          padding: 0.1,
        });
      }, 350); // Wait for sidebar animation

      return () => clearTimeout(timer);
    }
  }, [autoFitTrigger, fitView, initialZoom]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      onPaneClick={onPaneClick}
      fitView={centerOnInit}
      fitViewOptions={{
        maxZoom: initialZoom,
        duration: 150,
      }}
      preventScrolling={false}
      panOnScroll={true}
      nodesConnectable={true}
      elementsSelectable={false}
      snapToGrid={true}
      snapGrid={[8, 8]}
      proOptions={{ hideAttribution: true }}
      defaultEdgeOptions={{
        type: "smoothstep",
        animated: false,
        style: {
          stroke: "#D7DBDF",
          strokeWidth: 1,
        },
        markerEnd: {
          type: MarkerType.Arrow,
          color: "#D7DBDF",
          strokeWidth: 1,
          width: 20,
          height: 20,
        },
      }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={16}
        size={1}
        className="[&>pattern>circle]:fill-border dark:[&>pattern>circle]:fill-border"
      />
      <FlowControls
        onAutoLayout={onAutoLayout}
        disableAutoLayout={disableAutoLayout}
        addNodeDropdown={addNodeDropdown}
      />
    </ReactFlow>
  );
}

interface FlowCanvasProps {
  nodes?: Node[];
  edges?: Edge[];
  nodeTypes?: NodeTypes;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onConnect?: OnConnect;
  onNodeClick?: NodeMouseHandler;
  onPaneClick?: () => void;
  centerOnInit?: boolean;
  initialZoom?: number;
  autoFitTrigger?: number;
  onAutoLayout?: () => void;
  disableAutoLayout?: boolean;
  addNodeDropdown?: React.ReactNode;
}

export function FlowCanvas(props: FlowCanvasProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <ReactFlowProvider>
        <FlowWithControls {...props} />
      </ReactFlowProvider>
    </div>
  );
}
