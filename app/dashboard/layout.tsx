"use client";

import * as React from "react";
import { SidebarLeft } from "@/components/sidebar-left";
import { HeaderProvider } from "@/contexts/HeaderContext";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderProvider>
      <SidebarProvider defaultOpen={false}>
        <div className="flex min-h-svh w-full">
          <SidebarLeft />

          {/* Main content area that expands */}
          <SidebarInset className="max-w-none flex-1">{children}</SidebarInset>
        </div>
      </SidebarProvider>
    </HeaderProvider>
  );
}
