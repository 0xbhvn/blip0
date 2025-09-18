"use client";

import * as React from "react";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

export default function Page() {
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(true);

  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full">
        <SidebarLeft />

        {/* Main content area that expands */}
        <SidebarInset className="max-w-none flex-1">
          <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Project Management & Task Tracking
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50 flex items-center justify-center">
              {/* Custom trigger for right sidebar */}
              <Button
                onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                {rightSidebarOpen ? (
                  <>
                    <PanelRightClose className="h-5 w-5" />
                    Close Right Sidebar
                  </>
                ) : (
                  <>
                    <PanelRightOpen className="h-5 w-5" />
                    Open Right Sidebar
                  </>
                )}
              </Button>
            </div>
            <div className="mx-auto h-[100vh] w-full max-w-3xl rounded-xl bg-muted/50" />
          </div>
        </SidebarInset>

        {/* Right Sidebar with smooth transitions */}
        <div
          className={`transition-all duration-300 ease-in-out relative ${
            rightSidebarOpen ? "w-64" : "w-0"
          }`}
        >
          <div className="absolute right-0 top-0 h-full w-64">
            <div
              className={`transition-transform duration-300 ease-in-out ${
                rightSidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
