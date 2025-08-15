import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Logo } from "./logo";
import { SidebarIcon } from "./Icons";

// Sidebar Item Interface
export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

// Sidebar Section Interface
export interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
  isCollapsible?: boolean;
  isExpanded?: boolean;
}

// Sidebar Props Interface
export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarSection[];
}

// Sidebar Component
const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, items, ...props }, ref) => {
    const navigate = useNavigate();
    const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
      new Set(items.map((section) => section.id))
    );
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    // Get current pathname to determine active item
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";

    const handleSectionToggle = (sectionId: string) => {
      const newExpandedSections = new Set(expandedSections);
      if (newExpandedSections.has(sectionId)) {
        newExpandedSections.delete(sectionId);
      } else {
        newExpandedSections.add(sectionId);
      }
      setExpandedSections(newExpandedSections);
    };

    const handleItemClick = (item: SidebarItem) => {
      // Navigate to href if it exists using React Router
      if (item.href) {
        navigate(item.href);
      }
      item.onClick?.();
    };

    const toggleCollapse = () => {
      const newCollapsedState = !isCollapsed;
      setIsCollapsed(newCollapsedState);
    };

    // Helper function to check if item is active based on URL
    const isItemActive = (item: SidebarItem) => {
      if (item.href) {
        return currentPath === item.href || currentPath.startsWith(item.href);
      }
      return false;
    };

    const getSizeClasses = () => {
      return {
        sidebar: "",
        item: "px-4 text-base font-medium text-neutral-600 hover:text-neutral-900",
        sectionTitle:
          "px-4 py-2 text-sm text-neutral-400 hover:text-neutral-700",
        logo: "w-10 h-10",
        brandText: "text-base",
      };
    };

    const sizeClasses = getSizeClasses();

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col h-screen transition-all duration-500 ease-in-out bg-slate-100 overflow-hidden",
          sizeClasses.sidebar,
          isCollapsed ? "w-16" : "w-72",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="py-8">
          <div
            className={cn(
              "flex items-center justify-between px-4",
              isCollapsed && "justify-center"
            )}
          >
            <div
              className={cn(
                "transition-all duration-500 ease-in-out overflow-hidden",
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              <Logo size="sm" />
            </div>
            <button
              onClick={toggleCollapse}
              className={cn(
                "rounded-md transition-all duration-500 ease-in-out py-4",
                isCollapsed && "rotate-180"
              )}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <SidebarIcon
                size={24}
                className="transition-all duration-500 ease-in-out text-slate-600"
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-col flex h-full py-6 gap-32">
          {items.map((section) => (
            <div key={section.id} className="mb-4">
              {/* Section Header */}
              {section.isCollapsible ? (
                <button
                  onClick={() => handleSectionToggle(section.id)}
                  className={cn(
                    "flex items-center w-full text-left transition-all duration-500 ease-in-out",
                    sizeClasses.sectionTitle,
                    "hover:text-slate-700 dark:hover:text-slate-300 rounded-lg px-2 py-2",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <ChevronDownIcon
                    className={cn(
                      "w-4 h-4 transition-transform duration-500 ease-in-out flex-shrink-0",
                      expandedSections.has(section.id)
                        ? "rotate-0"
                        : "-rotate-90",
                      !isCollapsed && "mr-2"
                    )}
                  />
                  <span
                    className={cn(
                      "transition-all duration-500 ease-in-out",
                      isCollapsed
                        ? "opacity-0 scale-95 w-0"
                        : "opacity-100 scale-100 w-auto"
                    )}
                  >
                    {section.title}
                  </span>
                </button>
              ) : (
                <div
                  className={cn(
                    "font-medium transition-all duration-500 ease-in-out",
                    isCollapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  )}
                >
                  {!isCollapsed && section.title}
                </div>
              )}

              {/* Section Items */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedSections.has(section.id) || !section.isCollapsible
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = isItemActive(item);
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className={cn(
                          "flex items-center w-full text-left rounded-lg transition-all duration-500 px-4",
                          sizeClasses.item,
                          isActive && "text-slate-600 font-semibold",
                          isCollapsed && "justify-center"
                        )}
                      >
                        <div
                          className={cn(
                            "flex w-full items-center hover:bg-white rounded-lg transition-all duration-500 ease-in-out py-2 px-2",
                            isCollapsed && "justify-center",
                            isActive && "bg-white border border-slate-200"
                          )}
                        >
                          {item.icon && (
                            <span
                              className={cn(
                                "flex-shrink-0 transition-all duration-500 ease-in-out",
                                !isCollapsed && "mr-1",
                                isActive && "text-slate-600"
                              )}
                            >
                              {item.icon}
                            </span>
                          )}
                          <span
                            className={cn(
                              "transition-all duration-500 ease-in-out",
                              isCollapsed
                                ? "opacity-0 scale-95 w-0"
                                : "opacity-100 scale-100 w-auto",
                              "truncate",
                              isActive && "text-slate-600 font-semibold"
                            )}
                          >
                            {!isCollapsed && item.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
