import { Edge } from "@xyflow/react";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import type { Doc } from "@/convex/_generated/dataModel";

type Monitor = Doc<"monitors">;

interface FlowData {
  nodes: EditorNode[];
  edges: Edge[];
}

/**
 * Generates a flow diagram from monitor configuration data
 * Layout: Networks -> Addresses -> Match Conditions -> Triggers/Notifications
 */
export function generateFlowFromMonitor(monitor: Monitor): FlowData {
  const nodes: EditorNode[] = [];
  const edges: Edge[] = [];

  const HORIZONTAL_SPACING = 250;
  const VERTICAL_SPACING = 100;

  let currentX = 50;
  let nodeIdCounter = 0;

  // Helper to generate unique node IDs
  const getNodeId = (type: string) => `${type}_${++nodeIdCounter}`;

  // Track previous layer node IDs for edge connections
  let previousLayerNodes: string[] = [];
  let currentLayerNodes: string[] = [];

  // Layer 1: Networks
  if (monitor.networks && monitor.networks.length > 0) {
    monitor.networks.forEach((network, index) => {
      const nodeId = getNodeId("network");
      nodes.push({
        id: nodeId,
        type: NodeType.NETWORK,
        position: {
          x: currentX,
          y: 50 + index * VERTICAL_SPACING,
        },
        data: {
          label: "Network",
          networkSlug: network,
          isValid: true,
        },
      } as EditorNode);
      currentLayerNodes.push(nodeId);
    });

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentX += HORIZONTAL_SPACING;
  }

  // Layer 2: Addresses
  if (monitor.addresses && monitor.addresses.length > 0) {
    monitor.addresses.forEach((address, index) => {
      const nodeId = getNodeId("address");
      nodes.push({
        id: nodeId,
        type: NodeType.ADDRESS,
        position: {
          x: currentX,
          y: 50 + index * VERTICAL_SPACING,
        },
        data: {
          label: "Contract Address",
          address: address.address,
          contractSpec: address.contract_spec,
          isValid: true,
        },
      } as EditorNode);
      currentLayerNodes.push(nodeId);

      // Connect to all networks
      previousLayerNodes.forEach((networkId) => {
        edges.push({
          id: `${networkId}-${nodeId}`,
          source: networkId,
          target: nodeId,
          type: "smoothstep",
          animated: true,
        });
      });
    });

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentX += HORIZONTAL_SPACING;
  }

  // Layer 3: Match Conditions
  let conditionY = 50;
  const hasConditions =
    monitor.match_conditions &&
    ((monitor.match_conditions.transactions &&
      monitor.match_conditions.transactions.length > 0) ||
      (monitor.match_conditions.events &&
        monitor.match_conditions.events.length > 0) ||
      (monitor.match_conditions.functions &&
        monitor.match_conditions.functions.length > 0));

  if (hasConditions) {
    // Transaction conditions
    if (monitor.match_conditions?.transactions?.length) {
      monitor.match_conditions.transactions.forEach((transaction) => {
        const nodeId = getNodeId("transaction");
        nodes.push({
          id: nodeId,
          type: NodeType.TRANSACTION_CONDITION,
          position: { x: currentX, y: conditionY },
          data: {
            label: "Transaction Condition",
            status: transaction.status,
            expression: transaction.expression,
            isValid: true,
          },
        } as EditorNode);
        currentLayerNodes.push(nodeId);
        conditionY += VERTICAL_SPACING;

        // Connect to previous layer (addresses or networks)
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: true,
          });
        });
      });
    }

    // Event conditions
    if (monitor.match_conditions?.events?.length) {
      monitor.match_conditions.events.forEach((event) => {
        const nodeId = getNodeId("event");
        nodes.push({
          id: nodeId,
          type: NodeType.EVENT_CONDITION,
          position: { x: currentX, y: conditionY },
          data: {
            label: "Event Condition",
            signature: event.signature,
            expression: event.expression,
            isValid: true,
          },
        } as EditorNode);
        currentLayerNodes.push(nodeId);
        conditionY += VERTICAL_SPACING;

        // Connect to previous layer
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: true,
          });
        });
      });
    }

    // Function conditions
    if (monitor.match_conditions?.functions?.length) {
      monitor.match_conditions.functions.forEach((func) => {
        const nodeId = getNodeId("function");
        nodes.push({
          id: nodeId,
          type: NodeType.FUNCTION_CONDITION,
          position: { x: currentX, y: conditionY },
          data: {
            label: "Function Condition",
            signature: func.signature,
            expression: func.expression,
            isValid: true,
          },
        } as EditorNode);
        currentLayerNodes.push(nodeId);
        conditionY += VERTICAL_SPACING;

        // Connect to previous layer
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: true,
          });
        });
      });
    }

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentX += HORIZONTAL_SPACING;
  }

  // Layer 4: Triggers/Notifications
  let actionY = 50;

  // Triggers
  if (monitor.triggers && monitor.triggers.length > 0) {
    monitor.triggers.forEach((triggerId) => {
      const nodeId = getNodeId("trigger");
      nodes.push({
        id: nodeId,
        type: NodeType.TRIGGER,
        position: { x: currentX, y: actionY },
        data: {
          label: "Trigger",
          triggerId: triggerId,
          isValid: true,
        },
      } as EditorNode);
      actionY += VERTICAL_SPACING;

      // Connect to previous layer (conditions or addresses/networks if no conditions)
      previousLayerNodes.forEach((prevId) => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          type: "smoothstep",
          animated: true,
        });
      });
    });
  }

  // Add a notification node if triggers exist (common pattern)
  if (monitor.triggers && monitor.triggers.length > 0) {
    const nodeId = getNodeId("notification");
    nodes.push({
      id: nodeId,
      type: NodeType.NOTIFICATION,
      position: { x: currentX, y: actionY },
      data: {
        label: "Notification",
        type: "email",
        configuration: {},
        isValid: true,
      },
    } as EditorNode);

    // Connect to previous layer
    previousLayerNodes.forEach((prevId) => {
      edges.push({
        id: `${prevId}-${nodeId}`,
        source: prevId,
        target: nodeId,
        type: "smoothstep",
        animated: true,
      });
    });
  }

  return { nodes, edges };
}

/**
 * Checks if a monitor has flow data to visualize
 */
export function hasFlowData(monitor: Monitor): boolean {
  return !!(
    monitor.networks?.length ||
    monitor.addresses?.length ||
    (monitor.match_conditions &&
      (monitor.match_conditions.transactions?.length ||
        monitor.match_conditions.events?.length ||
        monitor.match_conditions.functions?.length)) ||
    monitor.triggers?.length
  );
}
