"use client";

import { create } from "zustand";
import {
  Edge,
  Connection,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  XYPosition,
  OnConnect,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";
import {
  NodeType,
  EditorNode,
  CONNECTION_RULES,
  BaseNodeData,
  NetworkNodeData,
  AddressNodeData,
  EventConditionNodeData,
  FunctionConditionNodeData,
  TransactionConditionNodeData,
  TriggerNodeData,
  NotificationNodeData,
} from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { toast } from "sonner";

interface NodeEditorState {
  // Core state
  nodes: EditorNode[];
  edges: Edge[];

  // Monitor metadata (not nodes)
  monitorName: string;
  monitorActive: boolean;

  // UI state
  selectedNodeId: string | null;
  drawerOpen: boolean;
  editingNodeId: string | null;
  contextMenuPosition: XYPosition | null;

  // Validation state
  validationErrors: Map<string, string[]>;
  isValidConfiguration: boolean;

  // Actions
  addNode: (type: NodeType, position: XYPosition) => string;
  updateNode: (nodeId: string, data: Record<string, unknown>) => void;
  deleteNode: (nodeId: string) => void;

  setMonitorName: (name: string) => void;
  setMonitorActive: (active: boolean) => void;

  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;

  validateConnection: (source: string, target: string) => boolean;
  validateConfiguration: () => boolean;

  selectNode: (nodeId: string | null) => void;
  openNodeEditor: (nodeId: string) => void;
  closeNodeEditor: () => void;

  // Convert to monitor configuration
  buildMonitorConfig: () => MonitorCreateInput | null;

  // Clear canvas
  clearCanvas: () => void;
}

function createNodeData(
  type: NodeType,
):
  | BaseNodeData
  | NetworkNodeData
  | AddressNodeData
  | EventConditionNodeData
  | FunctionConditionNodeData
  | TransactionConditionNodeData
  | TriggerNodeData
  | NotificationNodeData {
  switch (type) {
    case NodeType.NETWORK:
      return {
        label: "Network",
        networkSlug: "",
        isValid: false,
      } as NetworkNodeData;
    case NodeType.ADDRESS:
      return {
        label: "Contract Address",
        address: "",
        isValid: false,
      } as AddressNodeData;
    case NodeType.EVENT_CONDITION:
      return {
        label: "Event Condition",
        signature: "",
        isValid: false,
      } as EventConditionNodeData;
    case NodeType.FUNCTION_CONDITION:
      return {
        label: "Function Condition",
        signature: "",
        isValid: false,
      } as FunctionConditionNodeData;
    case NodeType.TRANSACTION_CONDITION:
      return {
        label: "Transaction Condition",
        isValid: true,
      } as TransactionConditionNodeData;
    case NodeType.TRIGGER:
      return {
        label: "Trigger",
        triggerId: "",
        isValid: false,
      } as TriggerNodeData;
    case NodeType.NOTIFICATION:
      return {
        label: "Notification",
        type: "email",
        configuration: {},
        isValid: false,
      } as NotificationNodeData;
    default:
      return { label: "Unknown", isValid: false } as BaseNodeData;
  }
}

function validateNodeData(node: EditorNode): string[] {
  const errors: string[] = [];

  switch (node.type) {
    case NodeType.NETWORK:
      const networkData = node.data as NetworkNodeData;
      if (!networkData.networkSlug) {
        errors.push("Network selection is required");
      }
      break;

    case NodeType.ADDRESS:
      const addressData = node.data as AddressNodeData;
      if (!addressData.address) {
        errors.push("Address is required");
      }
      break;

    case NodeType.EVENT_CONDITION:
      const eventData = node.data as EventConditionNodeData;
      if (!eventData.signature) {
        errors.push("Event signature is required");
      }
      break;

    case NodeType.FUNCTION_CONDITION:
      const functionData = node.data as FunctionConditionNodeData;
      if (!functionData.signature) {
        errors.push("Function signature is required");
      }
      break;

    case NodeType.TRIGGER:
      const triggerData = node.data as TriggerNodeData;
      if (!triggerData.triggerId) {
        errors.push("Trigger selection is required");
      }
      break;

    case NodeType.NOTIFICATION:
      const notificationData = node.data as NotificationNodeData;
      if (
        notificationData.type === "email" &&
        !notificationData.configuration?.email
      ) {
        errors.push("Email address is required");
      }
      if (
        notificationData.type === "webhook" &&
        !notificationData.configuration?.url
      ) {
        errors.push("Webhook URL is required");
      }
      if (
        notificationData.type === "slack" &&
        !notificationData.configuration?.channel
      ) {
        errors.push("Slack channel is required");
      }
      break;
  }

  return errors;
}

export const useNodeEditor = create<NodeEditorState>((set, get) => ({
  nodes: [],
  edges: [],
  monitorName: "",
  monitorActive: true,
  selectedNodeId: null,
  drawerOpen: false,
  editingNodeId: null,
  contextMenuPosition: null,
  validationErrors: new Map(),
  isValidConfiguration: false,

  addNode: (type: NodeType, position: XYPosition) => {
    const nodeId = `${type}-${Date.now()}`;
    const newNode: EditorNode = {
      id: nodeId,
      type,
      position,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: createNodeData(type) as any,
    };

    set((state) => ({
      nodes: [...state.nodes, newNode],
    }));

    return nodeId;
  },

  updateNode: (nodeId: string, data: Record<string, unknown>) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...data } }
          : node,
      ),
    }));
    // No automatic validation - only validate on save to prevent performance issues
  },

  deleteNode: (nodeId: string) => {
    set((state) => ({
      nodes: state.nodes.filter((n) => n.id !== nodeId),
      edges: state.edges.filter(
        (e) => e.source !== nodeId && e.target !== nodeId,
      ),
    }));
  },

  setMonitorName: (name: string) => {
    set({ monitorName: name });
  },

  setMonitorActive: (active: boolean) => {
    set({ monitorActive: active });
  },

  onNodesChange: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes) as EditorNode[],
    }));
  },

  onEdgesChange: (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },

  onConnect: (connection: Connection) => {
    const { source, target } = connection;
    if (!source || !target) return;

    // Validate connection with detailed feedback
    const state = get();
    const sourceNode = state.nodes.find((n) => n.id === source);
    const targetNode = state.nodes.find((n) => n.id === target);

    if (!sourceNode || !targetNode) {
      return;
    }

    const sourceRules = CONNECTION_RULES[sourceNode.type as NodeType];
    const targetRules = CONNECTION_RULES[targetNode.type as NodeType];

    // Check if connection is allowed
    if (!sourceRules.targetTypes.includes(targetNode.type as NodeType)) {
      toast.error(
        `Cannot connect ${sourceNode.data.label} to ${targetNode.data.label}`,
      );
      return;
    }

    // Check max connections
    if (targetRules.maxConnections) {
      const existingConnections = state.edges.filter(
        (e) => e.target === target,
      ).length;
      if (existingConnections >= targetRules.maxConnections) {
        toast.error(`${targetNode.data.label} already has maximum connections`);
        return;
      }
    }

    // Check for duplicate connections
    const isDuplicate = state.edges.some(
      (e) => e.source === source && e.target === target,
    );
    if (isDuplicate) {
      toast.warning("This connection already exists");
      return;
    }

    // Add the connection
    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
        },
        state.edges,
      ),
    }));

    // Success feedback
    toast.success(
      `Connected ${sourceNode.data.label} to ${targetNode.data.label}`,
    );
  },

  validateConnection: (sourceId: string, targetId: string) => {
    const state = get();
    const sourceNode = state.nodes.find((n) => n.id === sourceId);
    const targetNode = state.nodes.find((n) => n.id === targetId);

    if (!sourceNode || !targetNode) return false;

    const sourceRules = CONNECTION_RULES[sourceNode.type as NodeType];
    const targetRules = CONNECTION_RULES[targetNode.type as NodeType];

    // Check if connection is allowed
    if (!sourceRules.targetTypes.includes(targetNode.type as NodeType)) {
      return false;
    }

    // Check max connections
    if (targetRules.maxConnections) {
      const existingConnections = state.edges.filter(
        (e) => e.target === targetId,
      ).length;
      if (existingConnections >= targetRules.maxConnections) {
        return false;
      }
    }

    // Prevent duplicate connections
    const isDuplicate = state.edges.some(
      (e) => e.source === sourceId && e.target === targetId,
    );
    if (isDuplicate) {
      return false;
    }

    return true;
  },

  validateConfiguration: () => {
    const state = get();
    const errors = new Map<string, string[]>();
    let isValid = true;

    // Check for required metadata
    if (!state.monitorName || state.monitorName.trim().length === 0) {
      errors.set("global", [
        ...(errors.get("global") || []),
        "Monitor name is required",
      ]);
      isValid = false;
    }

    // Check for required nodes
    const hasNetwork = state.nodes.some((n) => n.type === NodeType.NETWORK);
    const hasCondition = state.nodes.some(
      (n) =>
        n.type === NodeType.EVENT_CONDITION ||
        n.type === NodeType.FUNCTION_CONDITION ||
        n.type === NodeType.TRANSACTION_CONDITION,
    );
    const hasAction = state.nodes.some(
      (n) => n.type === NodeType.TRIGGER || n.type === NodeType.NOTIFICATION,
    );

    if (!hasNetwork) {
      errors.set("global", [
        ...(errors.get("global") || []),
        "At least one network is required",
      ]);
      isValid = false;
    }

    if (!hasCondition) {
      errors.set("global", [
        ...(errors.get("global") || []),
        "At least one condition is required",
      ]);
      isValid = false;
    }

    if (!hasAction) {
      errors.set("global", [
        ...(errors.get("global") || []),
        "At least one action (trigger or notification) is required",
      ]);
      isValid = false;
    }

    // Validate individual nodes
    state.nodes.forEach((node) => {
      const nodeErrors = validateNodeData(node);
      if (nodeErrors.length > 0) {
        errors.set(node.id, nodeErrors);
        isValid = false;
      }
    });

    // Always update state with validation results
    // The performance issue was from calling this too frequently, not from the update itself
    set({
      validationErrors: errors,
      isValidConfiguration: isValid,
    });

    return isValid;
  },

  selectNode: (nodeId: string | null) => {
    set({ selectedNodeId: nodeId });
  },

  openNodeEditor: (nodeId: string) => {
    set({
      editingNodeId: nodeId,
      drawerOpen: true,
    });
  },

  closeNodeEditor: () => {
    set({
      editingNodeId: null,
      drawerOpen: false,
    });
  },

  buildMonitorConfig: () => {
    const state = get();
    if (!state.validateConfiguration()) return null;

    // Build configuration from nodes
    const config: MonitorCreateInput = {
      name: state.monitorName,
      paused: !state.monitorActive,
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

    // Process each node
    state.nodes.forEach((node) => {
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
          if (eventData.signature) {
            config.match_conditions.events?.push({
              signature: eventData.signature,
              expression: eventData.expression || null,
            });
          }
          break;

        case NodeType.FUNCTION_CONDITION:
          const functionData = node.data as FunctionConditionNodeData;
          if (functionData.signature) {
            config.match_conditions.functions?.push({
              signature: functionData.signature,
              expression: functionData.expression || null,
            });
          }
          break;

        case NodeType.TRANSACTION_CONDITION:
          const txData = node.data as TransactionConditionNodeData;
          config.match_conditions.transactions?.push({
            status: txData.status,
            expression: txData.expression || null,
          });
          break;

        case NodeType.TRIGGER:
          const triggerData = node.data as TriggerNodeData;
          if (triggerData.triggerId) {
            config.triggers.push(triggerData.triggerId);
          }
          break;

        case NodeType.NOTIFICATION:
          // Notification nodes would be handled here if they affect the config
          // Currently notifications might be handled separately
          break;
      }
    });

    return config;
  },

  clearCanvas: () => {
    set({
      nodes: [],
      edges: [],
      selectedNodeId: null,
      editingNodeId: null,
      validationErrors: new Map(),
      isValidConfiguration: false,
      // Keep monitor name and status when clearing canvas
    });
  },
}));
