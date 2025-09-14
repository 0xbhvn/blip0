"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Plus } from "lucide-react";
import { useNetworks } from "@/hooks";
import { useHeader } from "@/contexts/HeaderContext";

interface AppHeaderProps {
  className?: string;
  onMenuClick?: () => void;
  isSidebarOpen?: boolean;
}

export function AppHeader({
  className,
  onMenuClick,
  isSidebarOpen = false,
}: AppHeaderProps) {
  const pathname = usePathname();
  const { isAdmin } = useNetworks();
  const { title: customTitle, badge, actions, rightActions } = useHeader();

  // Determine which section we're in
  const isMonitors = pathname.includes("/monitors");
  const isNetworks = pathname.includes("/networks");
  const isChat = pathname === "/product" || pathname === "/product/";

  // Determine if we're on a detail page
  const isMonitorDetail = pathname.match(/\/monitors\/[^\/]+$/);
  const isNetworkDetail = pathname.match(/\/networks\/[^\/]+$/);

  // Use custom title if provided, otherwise use section name
  const displayTitle =
    customTitle ||
    (isChat ? "Chat" : isMonitors ? "Monitors" : isNetworks ? "Networks" : "");

  return (
    <header
      className={cn(
        "h-16 border-b bg-white dark:bg-black flex items-center justify-between px-4",
        className,
      )}
    >
      {/* Left Section - Hamburger + Title/Breadcrumb */}
      <div className="flex items-center gap-3">
        {!isSidebarOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-9 w-9"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <div className="flex items-center gap-3">
          <h1 className="text-sm font-medium text-slate-12 dark:text-slate-12">
            {displayTitle}
          </h1>
          {actions && <div className="flex items-center">{actions}</div>}
          {badge && (
            <Badge variant="outline" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
      </div>

      {/* Center Section - Navigation Tabs (optional) */}
      <nav className="hidden md:flex items-center gap-1">
        {/* Add navigation tabs here if needed */}
      </nav>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-2">
        {rightActions ? (
          rightActions
        ) : isMonitors && !isMonitorDetail ? (
          <Link href="/product/monitors/create">
            <Button
              size="sm"
              variant="outline"
              className="h-8 text-sm font-medium border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <Plus className="mr-2 h-4 w-4" /> New Monitor
            </Button>
          </Link>
        ) : isNetworks && !isNetworkDetail && isAdmin ? (
          <Link href="/product/networks/create">
            <Button
              size="sm"
              variant="outline"
              className="h-8 text-sm font-medium border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              <Plus className="mr-2 h-4 w-4" /> New Network
            </Button>
          </Link>
        ) : isChat ? (
          <>
            <Button variant="ghost" size="sm">
              Share
            </Button>
            <Button variant="outline" size="sm">
              Test
            </Button>
            <Button size="sm">Deploy</Button>
          </>
        ) : null}
      </div>
    </header>
  );
}
