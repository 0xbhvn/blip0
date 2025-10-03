import { NodeType, CONNECTION_RULES } from "@/lib/types/nodeEditor";
import { Node, Edge } from "@xyflow/react";

/**
 * The ideal sequence of nodes in a monitor configuration following OpenZeppelin pattern
 */
export const NODE_SEQUENCE: NodeType[] = [
  NodeType.NETWORK,
  NodeType.ADDRESS,
  NodeType.TRANSACTION_CONDITION,
  NodeType.EVENT_CONDITION,
  NodeType.FUNCTION_CONDITION,
  NodeType.TRIGGER,
];

export interface NodeSuggestion {
  type: NodeType;
  label: string;
  description: string;
  priority: number; // Higher number = higher priority
  isRequired?: boolean;
}

/**
 * Get intelligent node suggestions based on existing nodes
 */
export function getNextNodeSuggestion(nodes: Node[]): NodeSuggestion[] {
  const suggestions: NodeSuggestion[] = [];

  // Remove placeholder nodes from consideration
  const actualNodes = nodes.filter(n => !(n.data as { isPlaceholder?: boolean })?.isPlaceholder);
  const actualTypes = new Set(actualNodes.map(n => n.type));

  // Debug logging
  console.log("getNextNodeSuggestion - nodes:", nodes);
  console.log("getNextNodeSuggestion - actualNodes:", actualNodes);
  console.log("getNextNodeSuggestion - actualTypes:", Array.from(actualTypes));

  // Priority 1: Required base nodes
  if (!actualTypes.has(NodeType.NETWORK)) {
    suggestions.push({
      type: NodeType.NETWORK,
      label: "Network",
      description: "Start by selecting a blockchain network",
      priority: 100,
      isRequired: true,
    });
    return suggestions; // Network must be first
  }

  // Priority 2: Contract/Address node (required after network)
  if (!actualTypes.has(NodeType.ADDRESS)) {
    suggestions.push({
      type: NodeType.ADDRESS,
      label: "Contract",
      description: "Add a smart contract to monitor",
      priority: 90,
      isRequired: true,
    });
    return suggestions; // Must have at least one address
  }

  // After first contract, allow adding more contracts (up to 5)
  const addressCount = actualNodes.filter(n => n.type === NodeType.ADDRESS).length;
  if (addressCount < 5) {
    suggestions.push({
      type: NodeType.ADDRESS,
      label: "Another Contract",
      description: "Monitor multiple contracts (edges will merge at conditions)",
      priority: 85, // High priority, but below conditions if none exist yet
    });
  }

  // Priority 3: Condition phase - support multiple conditions
  const conditionTypes = [
    NodeType.EVENT_CONDITION,
    NodeType.FUNCTION_CONDITION,
    NodeType.TRANSACTION_CONDITION
  ];

  const existingConditions = conditionTypes.filter(type => actualTypes.has(type));
  const unusedConditions = conditionTypes.filter(type => !actualTypes.has(type));

  // No conditions yet - suggest all three with equal priority
  if (existingConditions.length === 0) {
    suggestions.push({
      type: NodeType.TRANSACTION_CONDITION,
      label: "Transaction",
      description: "Monitor all transactions to/from the contract",
      priority: 80,
    });

    suggestions.push({
      type: NodeType.EVENT_CONDITION,
      label: "Event",
      description: "Monitor specific contract events",
      priority: 75,
    });

    suggestions.push({
      type: NodeType.FUNCTION_CONDITION,
      label: "Function",
      description: "Monitor specific function calls",
      priority: 70,
    });

    return suggestions;
  }

  // Has some conditions - suggest both remaining conditions AND actions
  const hasAction = actualTypes.has(NodeType.TRIGGER) ||
                   actualTypes.has(NodeType.NOTIFICATION);

  // Add unused conditions with high priority for multi-condition monitors
  unusedConditions.forEach((condType, index) => {
    const conditionInfo: Record<NodeType, { label: string; desc: string }> = {
      [NodeType.EVENT_CONDITION]: {
        label: "Event",
        desc: "Add event monitoring for specific contract events"
      },
      [NodeType.FUNCTION_CONDITION]: {
        label: "Function",
        desc: "Add function call monitoring"
      },
      [NodeType.TRANSACTION_CONDITION]: {
        label: "Transaction",
        desc: "Add transaction monitoring"
      },
      [NodeType.NETWORK]: { label: "", desc: "" }, // Dummy entries for other types
      [NodeType.ADDRESS]: { label: "", desc: "" },
      [NodeType.TRIGGER]: { label: "", desc: "" },
      [NodeType.NOTIFICATION]: { label: "", desc: "" },
    };

    if (conditionInfo[condType].label) {
      suggestions.push({
        type: condType,
        label: conditionInfo[condType].label + " Condition",
        description: conditionInfo[condType].desc + " (combine multiple conditions)",
        priority: 65 - index * 5, // Keep high priority: 65, 60, 55
      });
    }
  });

  // Also suggest actions but with slightly lower priority than unused conditions
  if (!hasAction) {
    suggestions.push({
      type: NodeType.TRIGGER,
      label: "Trigger",
      description: "Execute actions when conditions are met",
      priority: 50,
      isRequired: existingConditions.length >= 2, // Only required after 2+ conditions
    });

    suggestions.push({
      type: NodeType.NOTIFICATION,
      label: "Notification",
      description: "Send alerts when conditions are met",
      priority: 45,
    });
  }

  // Return sorted suggestions if we have any
  if (suggestions.length > 0) {
    return suggestions.sort((a, b) => b.priority - a.priority);
  }

  // Additional nodes (optional enhancements)

  // Can add more addresses
  if (actualNodes.filter(n => n.type === NodeType.ADDRESS).length < 5) {
    suggestions.push({
      type: NodeType.ADDRESS,
      label: "Another Contract",
      description: "Monitor multiple contracts",
      priority: 40,
    });
  }

  // Can add more conditions
  if (!actualTypes.has(NodeType.EVENT_CONDITION)) {
    suggestions.push({
      type: NodeType.EVENT_CONDITION,
      label: "Event Condition",
      description: "Add event monitoring",
      priority: 35,
    });
  }

  if (!actualTypes.has(NodeType.FUNCTION_CONDITION)) {
    suggestions.push({
      type: NodeType.FUNCTION_CONDITION,
      label: "Function Condition",
      description: "Monitor function calls",
      priority: 30,
    });
  }

  // Can add more actions
  if (!actualTypes.has(NodeType.NOTIFICATION)) {
    suggestions.push({
      type: NodeType.NOTIFICATION,
      label: "Notification",
      description: "Add notification channel",
      priority: 25,
    });
  }

  return suggestions.sort((a, b) => b.priority - a.priority);
}

/**
 * Determine if nodes should be auto-connected based on their types
 */
export function shouldAutoConnect(sourceNode: Node, targetNode: Node): boolean {
  const sourceRules = CONNECTION_RULES[sourceNode.type as NodeType];

  if (!sourceRules) return false;

  // Check if connection is allowed
  if (!sourceRules.targetTypes.includes(targetNode.type as NodeType)) {
    return false;
  }

  // Auto-connect for sequential flow
  const sourceIndex = NODE_SEQUENCE.indexOf(sourceNode.type as NodeType);
  const targetIndex = NODE_SEQUENCE.indexOf(targetNode.type as NodeType);

  // Only auto-connect if target comes after source in sequence
  return targetIndex > sourceIndex;
}

/**
 * Find the best source node to connect to a new node
 */
export function findBestSourceNode(
  newNodeType: NodeType,
  existingNodes: Node[],
  existingEdges: Edge[]
): Node | null {
  const targetRules = CONNECTION_RULES[newNodeType];

  if (!targetRules.sourceTypes || targetRules.sourceTypes.length === 0) {
    return null;
  }

  // Find potential source nodes
  const potentialSources = existingNodes.filter(node =>
    targetRules.sourceTypes.includes(node.type as NodeType) &&
    !(node.data as { isPlaceholder?: boolean })?.isPlaceholder
  );

  if (potentialSources.length === 0) return null;

  // Sort by sequence order (prefer earlier nodes in the flow)
  potentialSources.sort((a, b) => {
    const aIndex = NODE_SEQUENCE.indexOf(a.type as NodeType);
    const bIndex = NODE_SEQUENCE.indexOf(b.type as NodeType);
    return aIndex - bIndex;
  });

  // Check for nodes without many connections (prefer less connected nodes)
  const connectionCounts = new Map<string, number>();
  existingEdges.forEach(edge => {
    connectionCounts.set(edge.source, (connectionCounts.get(edge.source) || 0) + 1);
  });

  // Return the best source (earliest in sequence with fewest connections)
  return potentialSources.sort((a, b) => {
    const aConnections = connectionCounts.get(a.id) || 0;
    const bConnections = connectionCounts.get(b.id) || 0;
    return aConnections - bConnections;
  })[0];
}

/**
 * Get a user-friendly description of what's missing in the monitor configuration
 */
export function getConfigurationStatus(nodes: Node[]): {
  isComplete: boolean;
  missingRequired: string[];
  suggestions: string[];
} {
  const actualNodes = nodes.filter(n => !(n.data as { isPlaceholder?: boolean })?.isPlaceholder);
  const types = new Set(actualNodes.map(n => n.type));

  const missingRequired: string[] = [];
  const suggestions: string[] = [];

  if (!types.has(NodeType.NETWORK)) {
    missingRequired.push("Network selection");
  }

  if (!types.has(NodeType.ADDRESS)) {
    missingRequired.push("Contract address");
  }

  const hasCondition = types.has(NodeType.EVENT_CONDITION) ||
                      types.has(NodeType.FUNCTION_CONDITION) ||
                      types.has(NodeType.TRANSACTION_CONDITION);

  if (!hasCondition) {
    missingRequired.push("At least one monitoring condition");
  }

  const hasAction = types.has(NodeType.TRIGGER) ||
                   types.has(NodeType.NOTIFICATION);

  if (!hasAction) {
    missingRequired.push("Action (trigger or notification)");
  }

  // Suggestions for improvements
  if (types.has(NodeType.NETWORK) && types.has(NodeType.ADDRESS)) {
    if (!types.has(NodeType.EVENT_CONDITION)) {
      suggestions.push("Consider adding event monitoring for specific contract events");
    }
    if (!types.has(NodeType.FUNCTION_CONDITION)) {
      suggestions.push("Add function monitoring to track specific contract calls");
    }
  }

  return {
    isComplete: missingRequired.length === 0,
    missingRequired,
    suggestions,
  };
}