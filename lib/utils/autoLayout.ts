import dagre from "@dagrejs/dagre";
import { Node, Edge, Position, XYPosition } from "@xyflow/react";
import { NodeType } from "@/lib/types/nodeEditor";
import { NODE_SEQUENCE } from "./nodeSequence";

const nodeWidth = 200;
const nodeHeight = 100;
const nodeSpacing = { x: 150, y: 100 }; // Spacing between nodes

export function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  direction = "TB",
): { nodes: Node[]; edges: Edge[] } {
  if (nodes.length === 0) return { nodes, edges };

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const isHorizontal = direction === "LR";

  // Configure dagre with better spacing
  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: isHorizontal ? nodeSpacing.x : nodeSpacing.y,
    ranksep: isHorizontal ? nodeSpacing.y : nodeSpacing.x,
    marginx: 50,
    marginy: 50,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    if (!nodeWithPosition) {
      // Fallback position if dagre fails
      return {
        ...node,
        position: node.position || { x: 100, y: 100 },
      };
    }

    const newNode = {
      ...node,
      targetPosition: isHorizontal ? Position.Left : Position.Top,
      sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: layoutedNodes, edges };
}

export function getHierarchicalLayout(
  nodes: Node[],
  edges: Edge[],
): { nodes: Node[]; edges: Edge[] } {
  // Use top-to-bottom layout for hierarchical view
  return getLayoutedElements(nodes, edges, "TB");
}

export function getHorizontalLayout(
  nodes: Node[],
  edges: Edge[],
): { nodes: Node[]; edges: Edge[] } {
  // Use left-to-right layout for horizontal flow (recommended for monitor flow)
  return getLayoutedElements(nodes, edges, "LR");
}

/**
 * Get position for a new node based on existing nodes and type
 * This provides intelligent positioning without full relayout
 */
export function getSmartNodePosition(
  newNodeType: NodeType,
  existingNodes: Node[],
  canvasCenter?: XYPosition,
): XYPosition {
  const defaultPosition = canvasCenter || { x: 400, y: 300 };

  if (existingNodes.length === 0) {
    return defaultPosition;
  }

  // Find nodes of the previous type in the sequence
  const typeIndex = NODE_SEQUENCE.indexOf(newNodeType);

  if (typeIndex === -1) {
    // Type not in sequence, place it below the last node
    const lastNode = existingNodes[existingNodes.length - 1];
    return {
      x: lastNode.position.x,
      y: lastNode.position.y + nodeSpacing.y,
    };
  }

  // Find the closest preceding node type that exists
  let precedingNode: Node | null = null;
  for (let i = typeIndex - 1; i >= 0; i--) {
    const precedingType = NODE_SEQUENCE[i];
    const nodesOfType = existingNodes.filter((n) => n.type === precedingType);
    if (nodesOfType.length > 0) {
      // Get the bottommost node of this type (for TB layout)
      precedingNode = nodesOfType.reduce((bottommost, node) =>
        node.position.y > bottommost.position.y ? node : bottommost,
      );
      break;
    }
  }

  if (precedingNode) {
    // Position below the preceding node
    return {
      x: precedingNode.position.x,
      y: precedingNode.position.y + nodeSpacing.y,
    };
  }

  // Find nodes of the next type in sequence
  let followingNode: Node | null = null;
  for (let i = typeIndex + 1; i < NODE_SEQUENCE.length; i++) {
    const followingType = NODE_SEQUENCE[i];
    const nodesOfType = existingNodes.filter((n) => n.type === followingType);
    if (nodesOfType.length > 0) {
      // Get the topmost node of this type
      followingNode = nodesOfType.reduce((topmost, node) =>
        node.position.y < topmost.position.y ? node : topmost,
      );
      break;
    }
  }

  if (followingNode) {
    // Position above the following node
    return {
      x: followingNode.position.x,
      y: followingNode.position.y - nodeSpacing.y,
    };
  }

  // Default: position based on sequence index
  return {
    x: defaultPosition.x,
    y: defaultPosition.y + typeIndex * nodeSpacing.y,
  };
}

/**
 * Auto-layout only new nodes, keeping existing nodes in place
 * This is useful when adding nodes to an existing flow
 */
export function layoutNewNode(
  newNode: Node,
  existingNodes: Node[],
): XYPosition {
  // If there are no existing nodes, place at default position
  if (existingNodes.length === 0) {
    return { x: 100, y: 200 };
  }

  // Try to place the new node intelligently based on its type
  const position = getSmartNodePosition(
    newNode.type as NodeType,
    existingNodes,
    { x: 400, y: 300 },
  );

  // Check for overlaps and adjust if necessary
  const hasOverlap = existingNodes.some(
    (node) =>
      Math.abs(node.position.x - position.x) < nodeWidth &&
      Math.abs(node.position.y - position.y) < nodeHeight,
  );

  if (hasOverlap) {
    // Find a clear spot by offsetting vertically
    let offsetY = nodeSpacing.y;
    let attempts = 0;
    while (attempts < 5) {
      const testPosition = { x: position.x, y: position.y + offsetY };
      const stillOverlaps = existingNodes.some(
        (node) =>
          Math.abs(node.position.x - testPosition.x) < nodeWidth &&
          Math.abs(node.position.y - testPosition.y) < nodeHeight,
      );

      if (!stillOverlaps) {
        return testPosition;
      }

      offsetY += nodeSpacing.y;
      attempts++;
    }
  }

  return position;
}
