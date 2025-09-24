import React from "react";
import { Sidebar, SidebarProps, SidebarSection } from "@/components/ui/sidebar";
import {
  HomeIcon,
  AIIcon,
  AnalyticsIcon,
  AppIcon,
  AudiencesIcon,
  BrandGuidelinesIcon,
  KnowledgeBaseIcon,
  DataSourcesIcon,
  DigitalAssetManagementIcon,
} from "@/components/ui/Icons";
import { Header, HeaderProps } from "@/components/ui/header";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showHeader?: boolean;
  headerItems?: HeaderProps["items"];
  sidebarItems?: SidebarProps["items"];
  className?: string;
  variant?: "default" | "analytics" | "minimal";
  backgroundImage?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showSidebar = true,
  showHeader = false,
  headerItems,
  sidebarItems,
}) => {
  // Layout without sidebar and header (for auth pages, 404, etc.)
  if (!showSidebar && !showHeader) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      {showSidebar && (
        <div className="bg-slate-100 border-r border-slate-200 sticky top-0 h-screen z-50">
          <Sidebar items={sidebarItems} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {showHeader && (
          <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <Header items={headerItems} />
          </div>
        )}

        {/* Children Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="w-full min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
};
