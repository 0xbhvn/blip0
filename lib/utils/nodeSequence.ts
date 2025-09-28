import { NodeType, EditorNode, CONNECTION_RULES } from "@/lib/types/nodeEditor";
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
  const existingTypes = new Set(nodes.map(n => n.type));

  // Remove placeholder nodes from consideration
  const actualNodes = nodes.filter(n => !((n.data as any)?.isPlaceholder));
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

  // Priority 3: At least one condition is required
  const hasCondition = actualTypes.has(NodeType.EVENT_CONDITION) ||
                      actualTypes.has(NodeType.FUNCTION_CONDITION) ||
                      actualTypes.has(NodeType.TRANSACTION_CONDITION);

  if (!hasCondition) {
    // Suggest conditions based on common use cases
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

    return suggestions.slice(0, 3); // Show top 3 condition options
  }

  // Priority 4: Action nodes (trigger or notification)
  const hasAction = actualTypes.has(NodeType.TRIGGER) ||
                   actualTypes.has(NodeType.NOTIFICATION);

  if (!hasAction) {
    suggestions.push({
      type: NodeType.TRIGGER,
      label: "Trigger",
      description: "Execute actions when conditions are met",
      priority: 60,
      isRequired: true,
    });

    suggestions.push({
      type: NodeType.NOTIFICATION,
      label: "Notification",
      description: "Send alerts when conditions are met",
      priority: 55,
    });

    return suggestions;
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
    !((node.data as any)?.isPlaceholder)
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
  const actualNodes = nodes.filter(n => !((n.data as any)?.isPlaceholder));
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