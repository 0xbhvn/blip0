"use client";

import ConvexClientProvider from "@/components/ConvexClientProvider";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChatBubbleIcon, HomeIcon } from "@radix-ui/react-icons";
import { Shield, Network, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect, useRef, useCallback } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <div className="relative min-h-screen w-full">
        <ProductMenu />
        <main className="w-full">{children}</main>
      </div>
    </ConvexClientProvider>
  );
}

function ProductMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPersistent, setIsPersistent] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smart open logic: combine hover and click states
  const shouldBeOpen = isPersistent || (!isMobile && isHovering);

  // Handle hamburger click
  const handleHamburgerClick = useCallback(() => {
    if (isPersistent) {
      // If already persistent, close it
      setIsPersistent(false);
      setIsOpen(false);
    } else {
      // Make it persistent
      setIsPersistent(true);
      setIsOpen(true);
    }
  }, [isPersistent]);

  // Handle hover with delay for better UX
  const handleMouseEnter = useCallback(() => {
    if (!isMobile && !isPersistent) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsHovering(true);
      setIsOpen(true);
    }
  }, [isMobile, isPersistent]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile && !isPersistent) {
      // Add small delay to prevent flicker when moving between button and sidebar
      timeoutRef.current = setTimeout(() => {
        setIsHovering(false);
        setIsOpen(false);
      }, 150);
    }
  }, [isMobile, isPersistent]);

  // Close on route change
  useEffect(() => {
    setIsPersistent(false);
    setIsOpen(false);
    setIsHovering(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && (isOpen || isPersistent)) {
        setIsPersistent(false);
        setIsOpen(false);
        setIsHovering(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isPersistent]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isPersistent &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('button[aria-label="Toggle menu"]')
      ) {
        setIsPersistent(false);
        setIsOpen(false);
      }
    };

    if (isPersistent) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isPersistent]);

  // Sync isOpen with shouldBeOpen
  useEffect(() => {
    setIsOpen(shouldBeOpen);
  }, [shouldBeOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={handleHamburgerClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-menu"
        className={cn(
          "fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-all duration-200",
          "hover:scale-105 hover:bg-accent hover:border-accent-foreground/20",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isOpen && "bg-accent border-accent-foreground/20",
        )}
      >
        <div className="relative h-5 w-5">
          <Menu
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-200",
              isOpen
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute inset-0 h-5 w-5 transition-all duration-200",
              isOpen
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0",
            )}
          />
        </div>
      </button>

      {/* Backdrop for mobile and persistent state */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden",
          isOpen && isMobile ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => {
          setIsPersistent(false);
          setIsOpen(false);
        }}
      />

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id="sidebar-menu"
        onMouseEnter={() => {
          if (!isMobile) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (isHovering || isPersistent) {
              setIsOpen(true);
            }
          }
        }}
        onMouseLeave={() => {
          if (!isMobile && !isPersistent) {
            handleMouseLeave();
          }
        }}
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 border-r bg-background transition-transform duration-200 ease-out",
          "shadow-xl",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-lg font-semibold">Navigation</h2>
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
          <div className="flex items-center justify-between">
            <span>Press ESC to close</span>
            {!isMobile && <span>{isPersistent ? "Pinned" : "Hover mode"}</span>}
          </div>
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
