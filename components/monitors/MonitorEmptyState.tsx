import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MonitorEmptyStateProps {
  message: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function MonitorEmptyState({
  message,
  actionLabel = "Create Your First Monitor",
  actionHref = "/product/monitors/create",
  className,
}: MonitorEmptyStateProps) {
  return (
    <Card className={cn(className)}>
      <CardContent className="text-center py-12">
        <p className="text-muted-foreground mb-4">{message}</p>
        {actionHref && (
          <Link href={actionHref}>
            <Button>{actionLabel}</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
