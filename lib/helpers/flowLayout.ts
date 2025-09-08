import dagre from "@dagrejs/dagre";
import { Node, Edge, Position } from "@xyflow/react";
import { Id } from "@/convex/_generated/dataModel";
import { MonitorResponse } from "@/lib/types/monitors";

export interface NetworkData {
  _id: Id<"networks">;
  name: string;
  chainId: number;
  type: "mainnet" | "testnet";
  active?: boolean;
  rpcUrl?: string;
  createdByName?: string;
  blockExplorerUrl?: string;
  slug: string;
}

export interface FlowNode extends Node {
  type: "network" | "monitor";
  data: {
    network?: NetworkData;
    monitor?: MonitorResponse;
  };
}

export interface FlowEdge extends Edge {
  type: "networkMonitor";
  data?: {
    networkType: "mainnet" | "testnet";
    active: boolean;
  };
}

const NODE_WIDTH = 280;
const NODE_HEIGHT = 120;
const GRAPH_PADDING = 50;
const GRID_SIZE = 20; // Grid snap size for infinite canvas

export function generateFlowData(
  networks: NetworkData[],
  monitors: MonitorResponse[],
): { nodes: FlowNode[]; edges: FlowEdge[] } {
  const nodes: FlowNode[] = [];
  const edges: FlowEdge[] = [];

  // Create network nodes
  networks.forEach((network) => {
    nodes.push({
      id: `network-${network._id}`,
      type: "network",
      position: { x: 0, y: 0 }, // Will be calculated by layout
      data: { network },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    });
  });

  // Create monitor nodes
  monitors.forEach((monitor) => {
    nodes.push({
      id: `monitor-${monitor._id}`,
      type: "monitor",
      position: { x: 0, y: 0 }, // Will be calculated by layout
      data: { monitor },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    });
  });

  // Create edges based on monitor.networks (which contains network slugs)
  monitors.forEach((monitor) => {
    if (monitor.networks) {
      monitor.networks.forEach((networkSlug) => {
        const network = networks.find((n) => n.slug === networkSlug);
        if (network) {
          edges.push({
            id: `e-${network._id}-${monitor._id}`,
            source: `network-${network._id}`,
            target: `monitor-${monitor._id}`,
            type: "networkMonitor",
            animated: !monitor.paused,
            data: {
              networkType: network.type,
              active: !monitor.paused && (network.active ?? true),
            },
          });
        }
      });
    }
  });

  return { nodes, edges };
}

// Helper function to snap position to grid
function snapToGrid(position: number): number {
  return Math.round(position / GRID_SIZE) * GRID_SIZE;
}

export function getLayoutedElements(
  nodes: FlowNode[],
  edges: FlowEdge[],
  direction: "TB" | "LR" = "LR",
) {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: 100,
    ranksep: 200,
    marginx: GRAPH_PADDING,
    marginy: GRAPH_PADDING,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: NODE_WIDTH,
      height: NODE_HEIGHT,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    // Snap positions to grid for cleaner alignment
    const x = snapToGrid(nodeWithPosition.x - NODE_WIDTH / 2);
    const y = snapToGrid(nodeWithPosition.y - NODE_HEIGHT / 2);

    return {
      ...node,
      position: { x, y },
    };
  });

  return { nodes: layoutedNodes, edges };
}

export function getNetworkIcon(chainId: number): string {
  const icons: Record<number, string> = {
    1: "🟦", // Ethereum Mainnet
    5: "🟪", // Goerli
    11155111: "🟨", // Sepolia
    137: "🟣", // Polygon
    80001: "🟣", // Mumbai
    10: "🔴", // Optimism
    420: "🔴", // Optimism Goerli
    42161: "🔵", // Arbitrum
    421613: "🔵", // Arbitrum Goerli
    8453: "🔷", // Base
    84531: "🔷", // Base Goerli
  };
  return icons[chainId] || "🔗";
}

export function getNetworkColor(type: "mainnet" | "testnet"): string {
  return type === "mainnet" ? "blue" : "purple";
}
