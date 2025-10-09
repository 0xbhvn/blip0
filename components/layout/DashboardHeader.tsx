"use client";

import * as React from "react";
import { useHeader } from "@/contexts/HeaderContext";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export function DashboardHeader() {
  const { title, actions, rightActions } = useHeader();

  return (
    <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background border-b">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        {typeof title === "string" || !title ? (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  {title || "Dashboard"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ) : (
          title
        )}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      {rightActions && (
        <div className="flex items-center gap-2 px-3">{rightActions}</div>
      )}
    </header>
  );
}
