"use client";

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
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
  NodeRemoveChange,
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
} from "@/lib/types/nodeEditor";
import { MonitorCreateInput } from "@/lib/types/monitors";
import { toast } from "sonner";

interface ValidationErrors {
  [key: string]: string[];
}

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

  // Validation state - using plain object instead of Map for better React integration
  validationErrors: ValidationErrors;
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

  // Initialize with flow data
  initializeFromFlow: (
    nodes: EditorNode[],
    edges: Edge[],
    monitorName?: string,
    monitorActive?: boolean,
  ) => void;
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
  | TriggerNodeData {
  switch (type) {
    case NodeType.NETWORK:
      return {
        label: "Network",
        networkSlug: "",
        isValid: false,
      } as NetworkNodeData;
    case NodeType.ADDRESS:
      return {
        label: "Contract",
        address: "",
        isValid: false,
      } as AddressNodeData;
    case NodeType.EVENT_CONDITION:
      return {
        label: "Event",
        signature: "",
        isValid: false,
      } as EventConditionNodeData;
    case NodeType.FUNCTION_CONDITION:
      return {
        label: "Function",
        signature: "",
        isValid: false,
      } as FunctionConditionNodeData;
    case NodeType.TRANSACTION_CONDITION:
      return {
        label: "Transaction",
        isValid: true,
      } as TransactionConditionNodeData;
    case NodeType.TRIGGER:
      return {
        label: "Trigger",
        triggerId: "",
        isValid: false,
      } as TriggerNodeData;
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
  }

  return errors;
}

export const useNodeEditor = create<NodeEditorState>()(
  subscribeWithSelector((set, get) => ({
    nodes: [],
    edges: [],
    monitorName: "",
    monitorActive: true,
    selectedNodeId: null,
    drawerOpen: false,
    editingNodeId: null,
    contextMenuPosition: null,
    validationErrors: {},
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
      const removeChanges = changes.filter(
        (change) => change.type === "remove",
      );
      if (removeChanges.length > 0) {
        // Show success toast for deletion
        if (removeChanges.length === 1) {
          toast.success("Node deleted");
        } else {
          toast.success(`${removeChanges.length} nodes deleted`);
        }
      }

      set((state) => {
        const newNodes = applyNodeChanges(changes, state.nodes) as EditorNode[];

        // If the selected node was deleted, clear selection
        const selectedNodeDeleted = removeChanges.some(
          (change) => (change as NodeRemoveChange).id === state.selectedNodeId,
        );

        return {
          nodes: newNodes,
          selectedNodeId: selectedNodeDeleted ? null : state.selectedNodeId,
          // Also update edges to remove connections to deleted nodes
          edges: state.edges.filter((edge) => {
            const deletedNodeIds = removeChanges.map(
              (change) => (change as NodeRemoveChange).id,
            );
            return (
              !deletedNodeIds.includes(edge.source) &&
              !deletedNodeIds.includes(edge.target)
            );
          }),
        };
      });
    },

    onEdgesChange: (changes) => {
      set((state) => ({
        edges: applyEdgeChanges(changes, state.edges),
      }));
    },

    onConnect: (connection: Connection) => {
      const { source, target } = connection;

      if (!source || !target) {
        return;
      }

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
          toast.error(
            `${targetNode.data.label} already has maximum connections`,
          );
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
            animated: false,
            style: {
              stroke: "#6b7280",
              strokeWidth: 2,
            },
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

      if (!sourceNode || !targetNode) {
        return false;
      }

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
      const errors: ValidationErrors = {};
      let isValid = true;

      // Check for required metadata
      const globalErrors: string[] = [];
      if (!state.monitorName || state.monitorName.trim().length === 0) {
        globalErrors.push("Monitor name is required");
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
        (n) => n.type === NodeType.TRIGGER,
      );

      if (!hasNetwork) {
        globalErrors.push("At least one network is required");
        isValid = false;
      }

      if (!hasCondition) {
        globalErrors.push("At least one condition is required");
        isValid = false;
      }

      if (!hasAction) {
        globalErrors.push(
          "At least one trigger is required",
        );
        isValid = false;
      }

      // Check if nodes are connected
      if (state.nodes.length > 1 && state.edges.length === 0) {
        globalErrors.push("Connect your nodes to create the flow");
        isValid = false;
      }

      if (globalErrors.length > 0) {
        errors.global = globalErrors;
      }

      // Validate individual nodes
      state.nodes.forEach((node) => {
        const nodeErrors = validateNodeData(node);
        if (nodeErrors.length > 0) {
          errors[node.id] = nodeErrors;
          isValid = false;
        }
      });

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
              // triggers array expects strings (trigger IDs)
              const triggerId = triggerData.triggerId;

              // Check if trigger already exists
              const exists = config.triggers.includes(triggerId);
              if (!exists) {
                config.triggers.push(triggerId);
              }
            }
            break;
        }
      });

      return config;
    },

    clearCanvas: () => {
      set({
        nodes: [],
        edges: [],
        monitorName: "",
        monitorActive: true,
        selectedNodeId: null,
        editingNodeId: null,
        drawerOpen: false,
        validationErrors: {},
        isValidConfiguration: false,
      });
    },

    initializeFromFlow: (
      nodes: EditorNode[],
      edges: Edge[],
      monitorName?: string,
      monitorActive?: boolean,
    ) => {
      set({
        nodes,
        edges,
        monitorName: monitorName || "",
        monitorActive: monitorActive !== undefined ? monitorActive : true,
        selectedNodeId: null,
        editingNodeId: null,
        drawerOpen: false,
        validationErrors: {},
        isValidConfiguration: false,
      });
    },
  })),
);
