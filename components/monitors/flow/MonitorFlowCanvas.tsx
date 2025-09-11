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
import { FlowControlPanel } from "./FlowControlPanel";
import { getHierarchicalLayout } from "@/lib/utils/autoLayout";

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
  onAddNode?: (type: NodeType) => void;
  onLayoutChange?: (nodes: Node[], edges: Edge[]) => void;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  isValidConnection?: (connection: Edge | Connection) => boolean;
  isInteractive?: boolean;
  showControls?: boolean;
  showMiniMap?: boolean;
  showBackground?: boolean;
  showFlowControls?: boolean;
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
  onAddNode,
  onLayoutChange,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  isValidConnection,
  isInteractive = true,
  showControls = true,
  showMiniMap = true,
  showBackground = true,
  showFlowControls = false,
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

      // Center nodes in viewport
      if (nodes.length > 0) {
        // Wait for next tick to ensure DOM is ready
        setTimeout(() => {
          // Simply fit view with proper constraints
          instance.fitView({
            padding: 0.2,
            maxZoom: 1.0, // Don't zoom in beyond 100%
            minZoom: 0.5, // Allow some zoom out if needed
            duration: 0, // No animation
          });

          // Get the resulting viewport
          const viewport = instance.getViewport();

          // If zoom is less than 100%, reset to 100% while keeping centered
          if (viewport.zoom < 1) {
            // Calculate the center point of the current view
            const containerWidth =
              reactFlowWrapper.current?.offsetWidth || window.innerWidth;
            const containerHeight =
              reactFlowWrapper.current?.offsetHeight || window.innerHeight;

            // Calculate bounds of all nodes
            let minX = Infinity,
              minY = Infinity;
            let maxX = -Infinity,
              maxY = -Infinity;

            nodes.forEach((node) => {
              minX = Math.min(minX, node.position.x);
              minY = Math.min(minY, node.position.y);
              maxX = Math.max(maxX, node.position.x + 200);
              maxY = Math.max(maxY, node.position.y + 100);
            });

            // Calculate center of nodes
            const nodesWidth = maxX - minX;
            const nodesHeight = maxY - minY;
            const nodesCenterX = minX + nodesWidth / 2;
            const nodesCenterY = minY + nodesHeight / 2;

            // Calculate viewport position to center nodes at 100% zoom
            const x = containerWidth / 2 - nodesCenterX;
            const y = containerHeight / 2 - nodesCenterY;

            instance.setViewport({ x, y, zoom: 1 }, { duration: 0 });
          }
        }, 10);
      }
    },
    [nodes],
  );

  const handleFitView = useCallback(() => {
    if (reactFlowInstance) {
      reactFlowInstance.fitView({
        padding: 0.2,
        duration: 800,
        maxZoom: 1.0, // Don't zoom in beyond 100%
        minZoom: 0.3, // Allow zooming out to 30%
      });
    }
  }, [reactFlowInstance]);

  // Handle auto-layout - actually rearranges nodes
  const handleAutoLayout = useCallback(() => {
    if (nodes.length === 0) return;

    // Apply hierarchical layout to nodes
    const { nodes: layoutedNodes, edges: layoutedEdges } =
      getHierarchicalLayout(nodes, edges);

    // Notify parent component of the new layout
    if (onLayoutChange) {
      onLayoutChange(layoutedNodes, layoutedEdges);
    }

    // After layout, fit the view to show all nodes
    setTimeout(() => {
      if (reactFlowInstance) {
        reactFlowInstance.fitView({
          padding: 0.2,
          duration: 800,
          maxZoom: 1.0,
          minZoom: 0.3,
        });
      }
    }, 50);
  }, [nodes, edges, onLayoutChange, reactFlowInstance]);

  // Track zoom changes
  const onMove = useCallback(() => {
    // Removed zoom tracking - not needed anymore
  }, []);

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
        onMove={onMove}
        nodeTypes={nodeTypes}
        isValidConnection={isValidConnection}
        onInit={onInit}
        fitView={false} // We handle centering manually in onInit
        deleteKeyCode={isInteractive ? "Delete" : ""} // Enable default delete key behavior
        multiSelectionKeyCode={isInteractive ? "Shift" : null}
        panOnScroll
        selectionOnDrag={isInteractive}
        snapToGrid={true}
        snapGrid={[10, 10]}
        minZoom={0.3}
        maxZoom={1.5}
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
      {showFlowControls && onAddNode && (
        <FlowControlPanel
          onFitView={handleFitView}
          onAutoLayout={handleAutoLayout}
          onAddNode={onAddNode}
          onUndo={onUndo}
          onRedo={onRedo}
          canUndo={canUndo}
          canRedo={canRedo}
        />
      )}
    </div>
  );
}
