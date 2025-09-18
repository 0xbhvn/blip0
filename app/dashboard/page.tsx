"use client";

import * as React from "react";
import { SidebarRight } from "@/components/sidebar-right";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Button } from "@/components/ui/button";
import { PanelRightOpen, PanelRightClose } from "lucide-react";
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
      <div className="flex h-[calc(100vh-3.5rem)]">
        {/* Main content area */}
        <div className="flex-1 flex flex-col gap-4 p-4">
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
    </>
  );
}
