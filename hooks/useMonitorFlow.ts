import { useCallback, useEffect, useState } from "react";
import {
  useNodesState,
  useEdgesState,
  Node,
  OnConnect,
  Connection,
  addEdge,
} from "@xyflow/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import {
  generateFlowData,
  getLayoutedElements,
  NetworkData,
  FlowNode,
  FlowEdge,
} from "@/lib/helpers";

export function useMonitorFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<FlowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<FlowEdge>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from Convex
  const networks = useQuery(api.networks.list);
  const monitors = useQuery(api.monitors.list);

  // Generate and layout flow data when data changes
  useEffect(() => {
    if (networks && monitors) {
      const networkData: NetworkData[] = networks.map((network) => ({
        _id: network._id,
        name: network.name,
        chainId: network.chain_id ?? 1,
        type: network.network_type === "EVM" ? "mainnet" : "testnet",
        active: network.active,
        rpcUrl: network.rpc_urls?.[0]?.url?.value,
        blockExplorerUrl: undefined,
        slug: network.slug,
        createdByName: network.createdByName,
      }));

      const { nodes: flowNodes, edges: flowEdges } = generateFlowData(
        networkData,
        monitors,
      );

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(flowNodes, flowEdges, "LR");

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
      setIsLoading(false);
    }
  }, [networks, monitors, setNodes, setEdges]);

  // Handle node selection
  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      setSelectedNode(node.id);

      // Highlight connected edges and nodes
      setEdges((eds) =>
        eds.map((edge) => ({
          ...edge,
          animated: edge.source === node.id || edge.target === node.id,
          style: {
            ...edge.style,
            opacity:
              edge.source === node.id || edge.target === node.id ? 1 : 0.3,
          },
        })),
      );

      setNodes((nds) =>
        nds.map((n) => {
          const isConnected = edges.some(
            (e) =>
              (e.source === node.id && e.target === n.id) ||
              (e.target === node.id && e.source === n.id),
          );
          return {
            ...n,
            style: {
              ...n.style,
              opacity: n.id === node.id || isConnected ? 1 : 0.5,
            },
          };
        }),
      );
    },
    [edges, setEdges, setNodes],
  );

  // Reset selection
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);

    // Reset edge and node styles
    setEdges((eds) =>
      eds.map((edge) => ({
        ...edge,
        animated: edge.data?.active !== false,
        style: {
          ...edge.style,
          opacity: 1,
        },
      })),
    );

    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          opacity: 1,
        },
      })),
    );
  }, [setEdges, setNodes]);

  // Handle new connections
  const onConnect: OnConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        ...params,
        type: "networkMonitor",
        animated: true,
      } as FlowEdge;
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges],
  );

  // Layout nodes
  const onLayout = useCallback(
    (direction: "TB" | "LR") => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges, setNodes, setEdges],
  );

  // Filter by network type
  const filterByNetworkType = useCallback(
    (type: "all" | "mainnet" | "testnet") => {
      if (!networks || !monitors) return;

      const filteredNetworks =
        type === "all"
          ? networks
          : networks.filter((n) => {
              const networkType =
                n.network_type === "EVM" ? "mainnet" : "testnet";
              return networkType === type;
            });

      const networkIds = new Set(filteredNetworks.map((n) => n._id));

      // Filter monitors that have at least one connection to filtered networks
      const filteredMonitors = monitors.filter((m) =>
        m.networks?.some((nId) => networkIds.has(nId as Id<"networks">)),
      );

      const networkData: NetworkData[] = filteredNetworks.map((network) => ({
        _id: network._id,
        name: network.name,
        chainId: network.chain_id ?? 1,
        type: network.network_type === "EVM" ? "mainnet" : "testnet",
        active: network.active,
        rpcUrl: network.rpc_urls?.[0]?.url?.value,
        blockExplorerUrl: undefined,
        slug: network.slug,
        createdByName: network.createdByName,
      }));

      const { nodes: flowNodes, edges: flowEdges } = generateFlowData(
        networkData,
        filteredMonitors,
      );

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(flowNodes, flowEdges, "LR");

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    },
    [networks, monitors, setNodes, setEdges],
  );

  // Filter by monitor status
  const filterByMonitorStatus = useCallback(
    (status: "all" | "active" | "paused") => {
      if (!networks || !monitors) return;

      const filteredMonitors =
        status === "all"
          ? monitors
          : status === "active"
            ? monitors.filter((m) => !m.paused)
            : monitors.filter((m) => m.paused);

      // Get network IDs that have connections
      const connectedNetworkIds = new Set<string>();
      filteredMonitors.forEach((m) => {
        m.networks?.forEach((nId) => connectedNetworkIds.add(nId));
      });

      // Filter networks that have connections
      const filteredNetworks = networks.filter((n) =>
        connectedNetworkIds.has(n._id),
      );

      const networkData: NetworkData[] = filteredNetworks.map((network) => ({
        _id: network._id,
        name: network.name,
        chainId: network.chain_id ?? 1,
        type: network.network_type === "EVM" ? "mainnet" : "testnet",
        active: network.active,
        rpcUrl: network.rpc_urls?.[0]?.url?.value,
        blockExplorerUrl: undefined,
        slug: network.slug,
        createdByName: network.createdByName,
      }));

      const { nodes: flowNodes, edges: flowEdges } = generateFlowData(
        networkData,
        filteredMonitors,
      );

      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(flowNodes, flowEdges, "LR");

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    },
    [networks, monitors, setNodes, setEdges],
  );

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onNodeClick,
    onPaneClick,
    onConnect,
    onLayout,
    filterByNetworkType,
    filterByMonitorStatus,
    selectedNode,
    isLoading,
  };
}
