import { Edge } from "@xyflow/react";
import { NodeType, EditorNode } from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import type { Doc } from "@/convex/_generated/dataModel";
import {
  NetworkNodeData,
  AddressNodeData,
  EventConditionNodeData,
  FunctionConditionNodeData,
  TransactionConditionNodeData,
  TriggerNodeData,
} from "@/lib/types/nodeEditor";

type Monitor = Doc<"monitors">;

interface FlowData {
  nodes: EditorNode[];
  edges: Edge[];
}

/**
 * Converts monitor configuration to flow data for visualization
 * This is used when loading an existing monitor for editing or viewing
 */
export function monitorToFlow(monitor: Monitor): FlowData {
  const nodes: EditorNode[] = [];
  const edges: Edge[] = [];

  const HORIZONTAL_SPACING = 200;
  const VERTICAL_SPACING = 150;
  const INITIAL_X = 50;

  let currentY = 50;
  let nodeIdCounter = 0;

  // Helper to generate unique node IDs
  const getNodeId = (type: string) => `${type}_${++nodeIdCounter}`;

  // Track previous layer node IDs for edge connections
  let previousLayerNodes: string[] = [];
  let currentLayerNodes: string[] = [];

  // Layer 1: Networks (top row)
  if (monitor.networks && monitor.networks.length > 0) {
    monitor.networks.forEach((network, index) => {
      const nodeId = getNodeId("network");
      const networkNode: EditorNode = {
        id: nodeId,
        type: NodeType.NETWORK,
        position: {
          x: INITIAL_X + index * HORIZONTAL_SPACING,
          y: currentY,
        },
        data: {
          label: "Network",
          networkSlug: network,
          isValid: true,
        } as NetworkNodeData & Record<string, unknown>,
      };
      nodes.push(networkNode);
      currentLayerNodes.push(nodeId);
    });

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentY += VERTICAL_SPACING;
  }

  // Layer 2: Addresses (second row)
  if (monitor.addresses && monitor.addresses.length > 0) {
    monitor.addresses.forEach((address, index) => {
      const nodeId = getNodeId("address");
      const addressNode: EditorNode = {
        id: nodeId,
        type: NodeType.ADDRESS,
        position: {
          x: INITIAL_X + index * HORIZONTAL_SPACING,
          y: currentY,
        },
        data: {
          label: "Contract Address",
          address: address.address,
          contractSpec: address.contract_spec,
          isValid: true,
        } as AddressNodeData & Record<string, unknown>,
      };
      nodes.push(addressNode);
      currentLayerNodes.push(nodeId);

      // Connect to all networks
      previousLayerNodes.forEach((networkId) => {
        edges.push({
          id: `${networkId}-${nodeId}`,
          source: networkId,
          target: nodeId,
          type: "smoothstep",
          animated: false,
          style: {
            stroke: "#6b7280",
            strokeWidth: 2,
          },
        });
      });
    });

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentY += VERTICAL_SPACING;
  }

  // Layer 3: Match Conditions (third row)
  let conditionX = INITIAL_X;
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
        const transactionNode: EditorNode = {
          id: nodeId,
          type: NodeType.TRANSACTION_CONDITION,
          position: { x: conditionX, y: currentY },
          data: {
            label: "Transaction Condition",
            status: transaction.status,
            expression: transaction.expression,
            isValid: true,
          } as TransactionConditionNodeData & Record<string, unknown>,
        };
        nodes.push(transactionNode);
        currentLayerNodes.push(nodeId);
        conditionX += HORIZONTAL_SPACING;

        // Connect to previous layer
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: false,
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
            },
          });
        });
      });
    }

    // Event conditions
    if (monitor.match_conditions?.events?.length) {
      monitor.match_conditions.events.forEach((event) => {
        const nodeId = getNodeId("event");
        const eventNode: EditorNode = {
          id: nodeId,
          type: NodeType.EVENT_CONDITION,
          position: { x: conditionX, y: currentY },
          data: {
            label: "Event Condition",
            signature: event.signature,
            expression: event.expression,
            isValid: true,
          } as EventConditionNodeData & Record<string, unknown>,
        };
        nodes.push(eventNode);
        currentLayerNodes.push(nodeId);
        conditionX += HORIZONTAL_SPACING;

        // Connect to previous layer
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: false,
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
            },
          });
        });
      });
    }

    // Function conditions
    if (monitor.match_conditions?.functions?.length) {
      monitor.match_conditions.functions.forEach((func) => {
        const nodeId = getNodeId("function");
        const functionNode: EditorNode = {
          id: nodeId,
          type: NodeType.FUNCTION_CONDITION,
          position: { x: conditionX, y: currentY },
          data: {
            label: "Function Condition",
            signature: func.signature,
            expression: func.expression,
            isValid: true,
          } as FunctionConditionNodeData & Record<string, unknown>,
        };
        nodes.push(functionNode);
        currentLayerNodes.push(nodeId);
        conditionX += HORIZONTAL_SPACING;

        // Connect to previous layer
        previousLayerNodes.forEach((prevId) => {
          edges.push({
            id: `${prevId}-${nodeId}`,
            source: prevId,
            target: nodeId,
            type: "smoothstep",
            animated: false,
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
            },
          });
        });
      });
    }

    previousLayerNodes = [...currentLayerNodes];
    currentLayerNodes = [];
    currentY += VERTICAL_SPACING;
  }

  // Layer 4: Triggers/Notifications (bottom row)
  let actionX = INITIAL_X;

  // Triggers
  if (monitor.triggers && monitor.triggers.length > 0) {
    monitor.triggers.forEach((triggerId) => {
      const nodeId = getNodeId("trigger");
      const triggerNode: EditorNode = {
        id: nodeId,
        type: NodeType.TRIGGER,
        position: { x: actionX, y: currentY },
        data: {
          label: "Trigger",
          triggerId: triggerId,
          isValid: true,
        } as TriggerNodeData & Record<string, unknown>,
      };
      nodes.push(triggerNode);
      actionX += HORIZONTAL_SPACING;

      // Connect to previous layer
      previousLayerNodes.forEach((prevId) => {
        edges.push({
          id: `${prevId}-${nodeId}`,
          source: prevId,
          target: nodeId,
          type: "smoothstep",
          animated: false,
          style: {
            stroke: "#6b7280",
            strokeWidth: 2,
          },
        });
      });
    });
  }

  // Notification nodes would be added here if they are stored in the monitor configuration
  // Currently, notifications are not stored directly in the monitor data

  return { nodes, edges };
}

/**
 * Converts flow data to monitor configuration for saving
 * This is used when saving a monitor from the flow editor
 */
export function flowToMonitor(
  nodes: EditorNode[],
  edges: Edge[],
  monitorName: string,
  monitorActive: boolean,
): MonitorCreateInput | null {
  // Initialize the configuration
  const config: MonitorCreateInput = {
    name: monitorName,
    paused: !monitorActive,
    networks: [],
    addresses: [],
    match_conditions: {
      events: [],
      functions: [],
      transactions: [],
    },
    trigger_conditions: [],
    triggers: [],
  };

  // Process each node and extract configuration
  nodes.forEach((node) => {
    switch (node.type) {
      case NodeType.NETWORK:
        const networkData = node.data as NetworkNodeData;
        if (
          networkData.networkSlug &&
          !config.networks.includes(networkData.networkSlug)
        ) {
          config.networks.push(networkData.networkSlug);
        }
        break;

      case NodeType.ADDRESS:
        const addressData = node.data as AddressNodeData;
        if (addressData.address) {
          config.addresses.push({
            address: addressData.address,
            contract_spec: addressData.contractSpec,
          });
        }
        break;

      case NodeType.EVENT_CONDITION:
        const eventData = node.data as EventConditionNodeData;
        if (eventData.signature && config.match_conditions?.events) {
          config.match_conditions.events.push({
            signature: eventData.signature,
            expression: eventData.expression,
          });
        }
        break;

      case NodeType.FUNCTION_CONDITION:
        const functionData = node.data as FunctionConditionNodeData;
        if (functionData.signature && config.match_conditions?.functions) {
          config.match_conditions.functions.push({
            signature: functionData.signature,
            expression: functionData.expression,
          });
        }
        break;

      case NodeType.TRANSACTION_CONDITION:
        const transactionData = node.data as TransactionConditionNodeData;
        if (config.match_conditions?.transactions) {
          config.match_conditions.transactions.push({
            status: transactionData.status,
            expression: transactionData.expression,
          });
        }
        break;

      case NodeType.TRIGGER:
        const triggerData = node.data as TriggerNodeData;
        if (triggerData.triggerId) {
          const triggerId = triggerData.triggerId;
          if (!config.triggers.includes(triggerId)) {
            config.triggers.push(triggerId);
          }
        }
        break;
    }
  });

  return config;
}

/**
 * Validates if flow data can be converted to a valid monitor configuration
 */
export function validateFlowData(
  nodes: EditorNode[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  edges: Edge[],
): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check for required nodes
  const hasNetwork = nodes.some((n) => n.type === NodeType.NETWORK);
  const hasCondition = nodes.some(
    (n) =>
      n.type === NodeType.EVENT_CONDITION ||
      n.type === NodeType.FUNCTION_CONDITION ||
      n.type === NodeType.TRANSACTION_CONDITION,
  );
  const hasAction = nodes.some(
    (n) => n.type === NodeType.TRIGGER,
  );

  if (!hasNetwork) {
    errors.push("At least one network is required");
  }

  if (!hasCondition) {
    errors.push("At least one condition is required");
  }

  if (!hasAction) {
    errors.push("At least one trigger is required");
  }

  // Validate individual nodes
  nodes.forEach((node) => {
    const nodeData = node.data;
    if (!nodeData.isValid) {
      errors.push(`Node "${nodeData.label}" has validation errors`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
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

/**
 * Auto-layouts nodes in the flow for better visualization
 */
export function autoLayoutFlow(
  nodes: EditorNode[],
  edges: Edge[],
): {
  nodes: EditorNode[];
  edges: Edge[];
} {
  // Group nodes by type
  const nodesByType = {
    network: nodes.filter((n) => n.type === NodeType.NETWORK),
    address: nodes.filter((n) => n.type === NodeType.ADDRESS),
    conditions: nodes.filter(
      (n) =>
        n.type === NodeType.EVENT_CONDITION ||
        n.type === NodeType.FUNCTION_CONDITION ||
        n.type === NodeType.TRANSACTION_CONDITION,
    ),
    actions: nodes.filter(
      (n) => n.type === NodeType.TRIGGER,
    ),
  };

  const HORIZONTAL_SPACING = 200;
  const VERTICAL_SPACING = 150;
  const INITIAL_X = 50;
  let currentY = 50;

  const updatedNodes: EditorNode[] = [];

  // Layout networks (top row)
  nodesByType.network.forEach((node, index) => {
    updatedNodes.push({
      ...node,
      position: {
        x: INITIAL_X + index * HORIZONTAL_SPACING,
        y: currentY,
      },
    });
  });
  if (nodesByType.network.length > 0) currentY += VERTICAL_SPACING;

  // Layout addresses (second row)
  nodesByType.address.forEach((node, index) => {
    updatedNodes.push({
      ...node,
      position: {
        x: INITIAL_X + index * HORIZONTAL_SPACING,
        y: currentY,
      },
    });
  });
  if (nodesByType.address.length > 0) currentY += VERTICAL_SPACING;

  // Layout conditions (third row)
  nodesByType.conditions.forEach((node, index) => {
    updatedNodes.push({
      ...node,
      position: {
        x: INITIAL_X + index * HORIZONTAL_SPACING,
        y: currentY,
      },
    });
  });
  if (nodesByType.conditions.length > 0) currentY += VERTICAL_SPACING;

  // Layout actions (bottom row)
  nodesByType.actions.forEach((node, index) => {
    updatedNodes.push({
      ...node,
      position: {
        x: INITIAL_X + index * HORIZONTAL_SPACING,
        y: currentY,
      },
    });
  });

  return { nodes: updatedNodes, edges };
}
