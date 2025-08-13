import React from "react";
import { Sidebar, SidebarSection } from "@/components/ui/sidebar";
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
import { Header } from "@/components/ui/header";

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showHeader?: boolean;
  className?: string;
  variant?: "default" | "analytics" | "minimal";
  backgroundImage?: string;
}

const headerItems: {
  icon: React.ReactNode;
  label: string;
  href: string;
}[] = [
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: "Home",
    href: "/home",
  },
  {
    icon: <AIIcon className="w-5 h-5" />,
    label: "Curie AI Chat",
    href: "/curie-ai-chat-demo",
  },
  {
    icon: <AppIcon className="w-5 h-5" />,
    label: "Apps",
    href: "/apps",
  },
  {
    icon: <AnalyticsIcon className="w-5 h-5" />,
    label: "Analytics",
    href: "/analytics",
  },
];

const sidebarItems: SidebarSection[] = [
  {
    id: "main-menu",
    title: "",
    items: [
      {
        id: "home",
        label: "Home",
        icon: <HomeIcon className="w-6 h-6" />,
        isActive: location.pathname === "/",
        href: "/home",
      },
      {
        id: "curie-ai-chat",
        label: "Curie AI Chat",
        icon: <AIIcon className="w-6 h-6" />,
        isActive: location.pathname === "/curie-ai-chat-demo",
        href: "/curie-ai-chat-demo",
      },
      {
        id: "apps",
        label: "Apps",
        icon: <AppIcon className="w-6 h-6" />,
        isActive: location.pathname === "/apps",
        href: "/apps",
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: <AnalyticsIcon className="w-6 h-6" />,
        isActive: location.pathname === "/analytics",
        href: "/analytics",
      },
      {
        id: "digital-asset-management",
        label: "Digital Asset Management",
        icon: <DigitalAssetManagementIcon className="w-6 h-6" />,
        isActive: location.pathname === "/digital-asset-management",
        href: "/digital-asset-management",
      },
    ],
  },
  {
    id: "supreme-iq",
    title: "Supreme IQ",
    isCollapsible: true,
    items: [
      {
        id: "audiences",
        label: "Audiences",
        icon: <AudiencesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/audiences",
        href: "/audiences",
      },
      {
        id: "brand-guidelines",
        label: "Brand Guidelines",
        icon: <BrandGuidelinesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/brand-guidelines",
        href: "/brand-guidelines",
      },
      {
        id: "knowledge-base",
        label: "Knowledge Base",
        icon: <KnowledgeBaseIcon className="w-6 h-6" />,
        isActive: location.pathname === "/knowledge-base",
        href: "/knowledge-base",
      },
      {
        id: "data-sources",
        label: "Data Sources",
        icon: <DataSourcesIcon className="w-6 h-6" />,
        isActive: location.pathname === "/data-sources",
        href: "/data-sources",
      },
    ],
  },
];

export const Layout: React.FC<LayoutProps> = ({
  children,
  showSidebar = true,
  showHeader = true,
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
