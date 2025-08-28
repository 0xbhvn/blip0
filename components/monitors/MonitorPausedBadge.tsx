import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MonitorPausedBadgeProps {
  paused?: boolean;
  variant?: "inline" | "badge";
  className?: string;
}

export function MonitorPausedBadge({
  paused,
  variant = "badge",
  className,
}: MonitorPausedBadgeProps) {
  if (!paused) return null;

  return (
    <Badge
      variant="secondary"
      className={cn(variant === "inline" && "text-xs", className)}
    >
      Paused
    </Badge>
  );
}
