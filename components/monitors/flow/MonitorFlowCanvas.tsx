"use client";

import React, { useRef, useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
  Node,
  Edge,
  Connection,
  ReactFlowInstance,
  OnConnect,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  OnSelectionChangeFunc,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { NodeType } from "@/lib/types/nodeEditor";

// Import custom node components
import NetworkNode from "../nodeEditor/nodes/NetworkNode";
import AddressNode from "../nodeEditor/nodes/AddressNode";
import EventConditionNode from "../nodeEditor/nodes/EventConditionNode";
import FunctionConditionNode from "../nodeEditor/nodes/FunctionConditionNode";
import TransactionConditionNode from "../nodeEditor/nodes/TransactionConditionNode";
import TriggerNode from "../nodeEditor/nodes/TriggerNode";
import NotificationNode from "../nodeEditor/nodes/NotificationNode";

// Memoize node types to prevent recreation
const nodeTypes = {
  [NodeType.NETWORK]: NetworkNode,
  [NodeType.ADDRESS]: AddressNode,
  [NodeType.EVENT_CONDITION]: EventConditionNode,
  [NodeType.FUNCTION_CONDITION]: FunctionConditionNode,
  [NodeType.TRANSACTION_CONDITION]: TransactionConditionNode,
  [NodeType.TRIGGER]: TriggerNode,
  [NodeType.NOTIFICATION]: NotificationNode,
};

export interface MonitorFlowCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onConnect?: OnConnect;
  onNodeClick?: NodeMouseHandler;
  onNodeDoubleClick?: NodeMouseHandler;
  onPaneClick?: (event: React.MouseEvent) => void;
  onSelectionChange?: OnSelectionChangeFunc;
  isValidConnection?: (connection: Edge | Connection) => boolean;
  isInteractive?: boolean;
  fitView?: boolean;
  showControls?: boolean;
  showMiniMap?: boolean;
  showBackground?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Base canvas component for displaying monitor flows
 * Used by both MonitorFlowEditor and MonitorFlowViewer
 */
export function MonitorFlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeClick,
  onNodeDoubleClick,
  onPaneClick,
  onSelectionChange,
  isValidConnection,
  isInteractive = true,
  fitView: shouldFitView = true,
  showControls = true,
  showMiniMap = true,
  showBackground = true,
  className = "",
  children,
}: MonitorFlowCanvasProps) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    React.useState<ReactFlowInstance | null>(null);

  // Memoize default edge options
  const defaultEdgeOptions = useMemo(
    () => ({
      type: "smoothstep",
      animated: true,
      style: {
        stroke: "#6366f1",
        strokeWidth: 2,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "#6366f1",
      },
    }),
    [],
  );

  // Memoize connection line style
  const connectionLineStyle = useMemo(
    () => ({
      stroke: "#6366f1",
      strokeWidth: 2,
      strokeDasharray: "5 5",
    }),
    [],
  );

  // Memoize MiniMap node color function
  const miniMapNodeColor = useCallback((node: Node) => {
    switch (node.type) {
      case NodeType.NETWORK:
        return "#3b82f6";
      case NodeType.ADDRESS:
        return "#8b5cf6";
      case NodeType.EVENT_CONDITION:
      case NodeType.FUNCTION_CONDITION:
      case NodeType.TRANSACTION_CONDITION:
        return "#f59e0b";
      case NodeType.TRIGGER:
      case NodeType.NOTIFICATION:
        return "#10b981";
      default:
        return "#6b7280";
    }
  }, []);

  // Handle fit view when instance is ready
  const onInit = useCallback(
    (instance: ReactFlowInstance) => {
      setReactFlowInstance(instance);
      if (shouldFitView) {
        instance.fitView({ padding: 0.2 });
      }
    },
    [shouldFitView],
  );

  // Fit view when nodes change (useful for viewer)
  React.useEffect(() => {
    if (reactFlowInstance && shouldFitView && nodes.length > 0) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2 });
      }, 100);
    }
  }, [nodes, reactFlowInstance, shouldFitView]);

  return (
    <div ref={reactFlowWrapper} className={`h-full w-full ${className}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={isInteractive ? onNodesChange : undefined}
        onEdgesChange={isInteractive ? onEdgesChange : undefined}
        onConnect={isInteractive ? onConnect : undefined}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onPaneClick={onPaneClick}
        onSelectionChange={onSelectionChange}
        nodeTypes={nodeTypes}
        isValidConnection={isValidConnection}
        onInit={onInit}
        fitView={shouldFitView}
        deleteKeyCode={isInteractive ? "Delete" : ""} // Enable default delete key behavior
        multiSelectionKeyCode={isInteractive ? "Shift" : null}
        panOnScroll
        selectionOnDrag={isInteractive}
        snapToGrid={true}
        snapGrid={[10, 10]}
        minZoom={0.5}
        maxZoom={2}
        attributionPosition="bottom-left"
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineStyle={connectionLineStyle}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        nodesConnectable={isInteractive}
        nodesDraggable={isInteractive}
        elementsSelectable={isInteractive}
        panOnDrag={true}
        zoomOnScroll={true}
      >
        {showBackground && (
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={2}
            color="#94a3b8"
            style={{ opacity: 0.8 }}
          />
        )}
        {showControls && <Controls />}
        {showMiniMap && (
          <MiniMap
            nodeColor={miniMapNodeColor}
            nodeStrokeWidth={3}
            pannable={false}
            zoomable={false}
          />
        )}
        {children}
      </ReactFlow>
    </div>
  );
}
