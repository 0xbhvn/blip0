import { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MonitorResponse } from "@/lib/types/monitors";
import { formatMonitorDate } from "@/lib/helpers/monitors";
import {
  Activity,
  PauseCircle,
  Network,
  FileCode,
  User,
  Clock,
} from "lucide-react";

function MonitorNode({ data, selected }: NodeProps) {
  const { monitor } = data as { monitor: MonitorResponse };
  const isActive = !monitor.paused;

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        className="!bg-primary"
        style={{ width: 8, height: 8 }}
      />
      <Card
        className={cn(
          "w-[280px] transition-all duration-200",
          selected && "ring-2 ring-primary",
          isActive && "border-r-4 border-r-green-500",
          !isActive && "opacity-75",
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-sm truncate">{monitor.name}</h3>
              <p className="text-xs text-muted-foreground">
                ID: {monitor._id.slice(-6)}
              </p>
            </div>
            <Badge
              variant={isActive ? "default" : "secondary"}
              className="text-xs ml-2"
            >
              {isActive ? (
                <Activity className="h-3 w-3 mr-1" />
              ) : (
                <PauseCircle className="h-3 w-3 mr-1" />
              )}
              {isActive ? "Active" : "Paused"}
            </Badge>
          </div>

          <div className="space-y-1 mt-3">
            {monitor.networks && monitor.networks.length > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Network className="h-3 w-3" />
                <span>
                  {monitor.networks.length} network
                  {monitor.networks.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}

            {monitor.addresses && monitor.addresses.length > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <FileCode className="h-3 w-3" />
                <span>
                  {monitor.addresses.length} address
                  {monitor.addresses.length !== 1 ? "es" : ""}
                </span>
              </div>
            )}

            {monitor.author && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" />
                <span>{monitor.author}</span>
              </div>
            )}

            {monitor._creationTime && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{formatMonitorDate(monitor._creationTime)}</span>
              </div>
            )}
          </div>

          {monitor.match_conditions && (
            <div className="mt-2 pt-2 border-t">
              <div className="flex flex-wrap gap-1">
                {monitor.match_conditions.events &&
                  monitor.match_conditions.events.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {monitor.match_conditions.events.length} Event
                      {monitor.match_conditions.events.length !== 1 ? "s" : ""}
                    </Badge>
                  )}
                {monitor.match_conditions.functions &&
                  monitor.match_conditions.functions.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {monitor.match_conditions.functions.length} Function
                      {monitor.match_conditions.functions.length !== 1
                        ? "s"
                        : ""}
                    </Badge>
                  )}
                {monitor.match_conditions.transactions &&
                  monitor.match_conditions.transactions.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {monitor.match_conditions.transactions.length} Tx
                    </Badge>
                  )}
              </div>
            </div>
          )}

          {isActive && (
            <div className="mt-2 flex justify-center">
              <div className="relative">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 h-2 w-2 rounded-full bg-green-400 animate-ping opacity-75" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

export default memo(MonitorNode);
