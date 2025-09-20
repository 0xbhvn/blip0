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
  NodeTypes,
  NodeMouseHandler,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FlowControls } from "./flow-controls";

interface FlowWithControlsProps {
  nodes?: Node[];
  edges?: Edge[];
  nodeTypes?: NodeTypes;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onNodeClick?: NodeMouseHandler;
  centerOnInit?: boolean;
  initialZoom?: number;
}

function FlowWithControls({
  nodes = [],
  edges = [],
  nodeTypes,
  onNodesChange,
  onEdgesChange,
  onNodeClick,
  centerOnInit = true,
  initialZoom = 1.2,
}: FlowWithControlsProps) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      fitView={centerOnInit}
      fitViewOptions={{
        maxZoom: initialZoom,
        duration: 150,
      }}
      preventScrolling={false}
      panOnScroll={true}
      nodesConnectable={false}
      elementsSelectable={false}
      proOptions={{ hideAttribution: true }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={16}
        size={1}
        className="[&>pattern>circle]:fill-border dark:[&>pattern>circle]:fill-border"
      />
      <FlowControls />
    </ReactFlow>
  );
}

interface FlowCanvasProps {
  nodes?: Node[];
  edges?: Edge[];
  nodeTypes?: NodeTypes;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onNodeClick?: NodeMouseHandler;
  centerOnInit?: boolean;
  initialZoom?: number;
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
