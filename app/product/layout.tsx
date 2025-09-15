"use client";

import ConvexClientProvider from "@/components/ConvexClientProvider";
import { ReactNode } from "react";
import { AppHeader } from "@/components/layout/AppHeader";
import { HeaderProvider } from "@/contexts/HeaderContext";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <ConvexClientProvider>
      <HeaderProvider>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset>
            <AppHeader />
            <main className="w-full h-[calc(100vh-3.5rem)] bg-gray-50 dark:bg-zinc-900">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </HeaderProvider>
    </ConvexClientProvider>
  );
}
