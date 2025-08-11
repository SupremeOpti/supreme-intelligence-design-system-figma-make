import React, { useState } from "react";
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
} from "../components/ui/Icons";

const SidebarDemo: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["supreme-iq"])
  );

  // Sample sidebar data matching the image
  const sidebarItems: SidebarSection[] = [
    {
      id: "main-menu",
      title: "",
      items: [
        {
          id: "menu",
          label: "Menu",
          icon: <HomeIcon className="w-6 h-6" />,
          isActive: true,
        },
        {
          id: "curie-ai-chat",
          label: "Curie AI Chat",
          icon: <AIIcon className="w-6 h-6" />,
        },
        {
          id: "apps",
          label: "Apps",
          icon: <AppIcon className="w-6 h-6" />,
        },
        {
          id: "analytics",
          label: "Analytics",
          icon: <AnalyticsIcon className="w-6 h-6" />,
        },
        {
          id: "digital-asset-management",
          label: "Digital Asset Management",
          icon: <BrandGuidelinesIcon className="w-6 h-6" />,
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
        },
        {
          id: "brand-guidelines",
          label: "Brand Guidelines",
          icon: <BrandGuidelinesIcon className="w-6 h-6" />,
        },
        {
          id: "knowledge-base",
          label: "Knowledge Base",
          icon: <KnowledgeBaseIcon className="w-6 h-6" />,
        },
        {
          id: "data-sources",
          label: "Data Sources",
          icon: <DataSourcesIcon className="w-6 h-6" />,
        },
      ],
    },
  ];

  const handleItemClick = (item: SidebarItem) => {
    console.log("Clicked item:", item.label);
  };

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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Sidebar Component Demo
          </h1>
          <p className="text-gray-600 mt-1">
            A comprehensive sidebar component with collapsible sections and
            navigation
          </p>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Features
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Clean, modern design with consistent styling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Fixed size with optimal spacing and typography
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Collapsible sidebar with smooth animations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Collapsible sections with chevron indicators
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Active state management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Customizable logo and brand name
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Responsive design with proper spacing
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Usage Example
                </h3>
                <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
                  {`<Sidebar
  items={sidebarItems}
    onItemClick={handleItemClick}
    onSectionToggle={handleSectionToggle}
    collapsible={true}
    isCollapsed={isCollapsed}
    onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
/>`}
                </pre>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium text-blue-900 mb-3">
                  Current State
                </h3>
                <div className="text-sm text-blue-700">
                  <p>
                    <strong>Sidebar collapsed:</strong>{" "}
                    {isCollapsed ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Design:</strong> Clean, modern theme
                  </p>
                  <p>
                    <strong>Size:</strong> Fixed (288px width)
                  </p>
                  <p>
                    <strong>Behavior:</strong>{" "}
                    {isCollapsed
                      ? "Icons and chevron indicators visible, sections can be collapsed/expanded"
                      : "Full sidebar with titles, labels, and chevron indicators"}
                  </p>
                  <p>
                    <strong>Supreme IQ section:</strong>{" "}
                    {expandedSections.has("supreme-iq")
                      ? "Expanded"
                      : "Collapsed"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarDemo;
