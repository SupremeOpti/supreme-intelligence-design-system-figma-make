import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar, SidebarItem, SidebarSection } from "../components/ui/sidebar";
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
} from "../components/ui/Icons";
import { CurieAIChatPrompt } from "@/components/ui/curie-ai-chat-prompt";

const SidebarDemo: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["supreme-iq"])
  );
  const navigate = useNavigate();
  const location = useLocation();

  // Sample sidebar data matching the image
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

  const handleItemClick = (item: SidebarItem) => {
    console.log("Clicked item:", item.label);

    // Navigate to the specified route if href is provided
    if (item.href) {
      navigate(item.href);
    }

    // You can also add additional logic here like:
    // - Opening modals
    // - Triggering API calls
    // - Updating global state
    // - Analytics tracking
  };

  // Update active item based on current route
  React.useEffect(() => {
    const currentItem = sidebarItems
      .flatMap((section) => section.items)
      .find((item) => item.href === location.pathname);
    if (currentItem) {
      // This will be handled by the Sidebar component's internal state
      console.log("Current active item:", currentItem.label);
    }
  }, [location.pathname, sidebarItems]);

  const handleSectionToggle = (sectionId: string, isExpanded: boolean) => {
    console.log("Section toggled:", sectionId, "Expanded:", isExpanded);
    const newExpandedSections = new Set(expandedSections);
    if (isExpanded) {
      newExpandedSections.add(sectionId);
    } else {
      newExpandedSections.delete(sectionId);
    }
    setExpandedSections(newExpandedSections);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        items={sidebarItems}
        onItemClick={handleItemClick}
        onSectionToggle={handleSectionToggle}
        collapsible={true}
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <CurieAIChatPrompt />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarDemo;
