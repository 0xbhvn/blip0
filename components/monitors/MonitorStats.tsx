import { MonitorResponse } from "@/lib/types";
import {
  getNetworksDisplay,
  getContractsCount,
  getTriggersCount,
} from "@/lib/helpers";
import { cn } from "@/lib/utils";

interface MonitorStatsProps {
  monitor: MonitorResponse;
  className?: string;
}

export function MonitorStats({ monitor, className }: MonitorStatsProps) {
  return (
    <div className={cn("space-y-2 text-sm", className)}>
      <div>
        <span className="font-medium">Networks:</span>{" "}
        {getNetworksDisplay(monitor.networks)}
      </div>
      {monitor.addresses && monitor.addresses.length > 0 && (
        <div>
          <span className="font-medium">Contracts:</span>{" "}
          {getContractsCount(monitor.addresses)}
        </div>
      )}
      {monitor.triggers && monitor.triggers.length > 0 && (
        <div>
          <span className="font-medium">Triggers:</span>{" "}
          {getTriggersCount(monitor.triggers)}
        </div>
      )}
    </div>
  );
}
