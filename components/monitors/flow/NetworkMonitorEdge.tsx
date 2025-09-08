import { memo } from "react";
import {
  EdgeProps,
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
} from "@xyflow/react";
import { cn } from "@/lib/utils";

function NetworkMonitorEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  selected,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const edgeData = data as
    | { networkType?: "mainnet" | "testnet"; active?: boolean }
    | undefined;
  const isActive = edgeData?.active !== false;
  const networkType = edgeData?.networkType || "mainnet";

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        className={cn(
          "transition-all duration-200",
          selected && "stroke-primary",
          !selected && networkType === "mainnet" && "stroke-blue-500",
          !selected && networkType === "testnet" && "stroke-purple-500",
          !isActive && "opacity-30",
        )}
        style={{
          strokeWidth: selected ? 3 : 2,
          strokeDasharray: isActive ? "5 5" : "2 2",
          animation: isActive ? "dash 1s linear infinite" : undefined,
        }}
      />
      <EdgeLabelRenderer>
        <div
          className="pointer-events-none absolute"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          {isActive && (
            <div className="relative">
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  networkType === "mainnet" ? "bg-blue-500" : "bg-purple-500",
                )}
              />
              <div
                className={cn(
                  "absolute inset-0 h-1.5 w-1.5 rounded-full animate-ping opacity-75",
                  networkType === "mainnet" ? "bg-blue-400" : "bg-purple-400",
                )}
              />
            </div>
          )}
        </div>
      </EdgeLabelRenderer>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </>
  );
}

export default memo(NetworkMonitorEdge);
