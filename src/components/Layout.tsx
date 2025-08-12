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

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showHeader?: boolean;
  className?: string;
  variant?: "default" | "analytics" | "minimal";
  backgroundImage?: string;
}

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
        href: "/",
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
  className = "",
  variant = "default",
}) => {
  // Layout without sidebar and header (for auth pages, 404, etc.)
  if (!showSidebar && !showHeader) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[rgba(245,245,247,1)] flex">
      {showSidebar && <Sidebar items={sidebarItems} />}

      <div className="flex-1 flex flex-col items-center font-medium md:pl-2 pt-2 max-md:pb-[100px] min-w-0">
        <div className="relative w-full h-full bg-white rounded-tl-[20px]">
          <div
            className={`relative z-10 flex flex-col items-center h-full px-4 ${className}`}
          >
            <div className="w-full min-w-0 h-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
