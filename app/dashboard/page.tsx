"use client";

import * as React from "react";
import { SidebarRight } from "@/components/sidebar-right";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";
import { useHeader } from "@/contexts/HeaderContext";

export default function Page() {
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(false);
  const { setHeaderData } = useHeader();

  // Set page-specific header content
  React.useEffect(() => {
    setHeaderData({
      title: "Project Management & Task Tracking",
    });

    return () => {
      setHeaderData({});
    };
  }, [setHeaderData]);

  return (
    <>
      <DashboardHeader />
      <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
        {/* Main content area */}
        <div
          className="flex-1 flex flex-col gap-4 p-4 overflow-hidden"
          onClick={() => rightSidebarOpen && setRightSidebarOpen(false)}
        >
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50 flex items-center justify-center">
            {/* Custom trigger for right sidebar */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setRightSidebarOpen(true);
              }}
              variant="outline"
              size="lg"
              className="gap-2"
              disabled={rightSidebarOpen}
            >
              <PanelRightOpen className="h-5 w-5" />
              Open Right Sidebar
            </Button>
          </div>
          <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
        </div>

        {/* Right Sidebar with smooth transitions */}
        <div
          className={`transition-all duration-300 ease-in-out relative overflow-hidden ${
            rightSidebarOpen ? "w-80" : "w-0"
          }`}
        >
          <div className="absolute right-0 top-0 h-full w-80">
            <div
              className={`h-full transition-transform duration-300 ease-in-out ${
                rightSidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
