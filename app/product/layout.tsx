"use client";

import ConvexClientProvider from "@/components/ConvexClientProvider";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChatBubbleIcon, HomeIcon } from "@radix-ui/react-icons";
import { Shield, Network, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect, useRef, useCallback } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { HeaderProvider } from "@/contexts/HeaderContext";

export default function ProductLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ConvexClientProvider>
      <HeaderProvider>
        <div className="relative min-h-screen w-full flex">
          <ProductMenu isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

          {/* Main content area that gets pushed when sidebar opens */}
          <div
            className={cn(
              "flex-1 min-h-screen transition-all duration-200 ease-out",
              sidebarOpen ? "ml-64" : "ml-0",
            )}
          >
            <AppHeader
              onMenuClick={toggleSidebar}
              isSidebarOpen={sidebarOpen}
            />
            <main className="w-full h-[calc(100vh-4rem)] bg-gray-50 dark:bg-zinc-900">
              {children}
            </main>
          </div>
        </div>
      </HeaderProvider>
    </ConvexClientProvider>
  );
}

interface ProductMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function ProductMenu({ isOpen, setIsOpen }: ProductMenuProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar
  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, setIsOpen]);

  // Handle click outside for mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobile &&
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isMobile && isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobile, isOpen, setIsOpen]);

  return (
    <>
      {/* Backdrop for mobile only */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Fixed position, translates left when hidden */}
      <aside
        ref={sidebarRef}
        id="sidebar-menu"
        className={cn(
          "fixed left-0 top-0 h-full w-64 border-r bg-white dark:bg-black transition-transform duration-200 ease-out",
          "z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Sidebar Header with close button */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={toggleSidebar}
            className="h-9 w-9 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 p-4">
          <MenuLink href="/product" currentPath={pathname}>
            <ChatBubbleIcon className="h-4 w-4" />
            Chat
          </MenuLink>
          <MenuLink href="/product/monitors" currentPath={pathname}>
            <Shield className="h-4 w-4" />
            Monitors
          </MenuLink>
          <MenuLink href="/product/networks" currentPath={pathname}>
            <Network className="h-4 w-4" />
            Networks
          </MenuLink>
          <div className="my-2 border-t" />
          <MenuLink href="/" currentPath={pathname}>
            <HomeIcon className="h-4 w-4" />
            Home
          </MenuLink>
        </nav>

        {/* Footer with keyboard hint */}
        <div className="absolute bottom-4 left-4 right-4 text-xs text-muted-foreground">
          <span>Press ESC to close</span>
        </div>
      </aside>
    </>
  );
}

function MenuLink({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string;
  children: ReactNode;
}) {
  // Determine if this link is active
  const isActive =
    href === "/" ? currentPath === href : currentPath.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
        isActive
          ? "bg-primary/10 text-primary font-semibold"
          : "text-muted-foreground",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
