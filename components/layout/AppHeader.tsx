"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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

  // Determine which section we're in
  const isMonitors = pathname.includes("/monitors");
  const isNetworks = pathname.includes("/networks");
  const isChat = pathname === "/product" || pathname === "/product/";

  return (
    <header
      className={cn(
        "h-16 border-b bg-background flex items-center justify-between px-4",
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
          <h1 className="text-lg font-semibold">
            {isChat && "Chat"}
            {isMonitors && "Monitors"}
            {isNetworks && "Networks"}
          </h1>
          <Badge variant="outline" className="text-xs">
            Development
          </Badge>
        </div>
      </div>

      {/* Center Section - Navigation Tabs (optional) */}
      <nav className="hidden md:flex items-center gap-1">
        {/* Add navigation tabs here if needed */}
      </nav>

      {/* Right Section - Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Share
        </Button>
        <Button variant="outline" size="sm">
          Test
        </Button>
        <Button size="sm">Deploy</Button>
      </div>
    </header>
  );
}
