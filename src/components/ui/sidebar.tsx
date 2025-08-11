import * as React from "react";
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
  onItemClick?: (item: SidebarItem) => void;
  onSectionToggle?: (sectionId: string, isExpanded: boolean) => void;
  onActiveItemChange?: (itemId: string | null) => void;
  collapsible?: boolean;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

// Sidebar Component
const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      items,
      onItemClick,
      onSectionToggle,
      onActiveItemChange,
      collapsible = false,
      isCollapsed = false,
      onToggleCollapse,
      ...props
    },
    ref
  ) => {
    const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
      new Set(items.map((section) => section.id))
    );
    const [activeItemId, setActiveItemId] = React.useState<string | null>(null);

    const handleSectionToggle = (sectionId: string) => {
      const newExpandedSections = new Set(expandedSections);
      if (newExpandedSections.has(sectionId)) {
        newExpandedSections.delete(sectionId);
      } else {
        newExpandedSections.add(sectionId);
      }
      setExpandedSections(newExpandedSections);
      onSectionToggle?.(sectionId, newExpandedSections.has(sectionId));
    };

    const handleItemClick = (item: SidebarItem) => {
      setActiveItemId(item.id);
      onActiveItemChange?.(item.id);
      onItemClick?.(item);
      item.onClick?.();
    };

    const getSizeClasses = () => {
      return {
        sidebar: "w-72 border-r border-slate-200",
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
          "flex flex-col h-full transition-all duration-300 ease-in-out",
          sizeClasses.sidebar,
          isCollapsed && "w-16",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="">
          <div
            className={cn(
              "flex items-center justify-between px-4",
              isCollapsed && "justify-center py-4 mb-4"
            )}
          >
            {!isCollapsed && <Logo size="sm" />}
            {collapsible && (
              <button
                onClick={onToggleCollapse}
                className={cn(
                  "p-4 rounded-md hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out",
                  isCollapsed && "rotate-180"
                )}
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <SidebarIcon
                  size={24}
                  className="transition-all duration-300 ease-in-out text-slate-600 hover:text-slate-900"
                />
              </button>
            )}
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
                    "flex items-center w-full text-left transition-all duration-300 ease-in-out",
                    sizeClasses.sectionTitle,
                    "hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-50 rounded-lg px-2 py-2",
                    isCollapsed && "justify-center px-2 py-2"
                  )}
                >
                  <ChevronDownIcon
                    className={cn(
                      "w-4 h-4 transition-transform duration-500 ease-out",
                      expandedSections.has(section.id)
                        ? "rotate-0"
                        : "-rotate-90",
                      !isCollapsed && "mr-2"
                    )}
                  />
                  {!isCollapsed && section.title}
                </button>
              ) : (
                !isCollapsed && (
                  <div className="font-medium">{section.title}</div>
                )
              )}

              {/* Section Items */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-out",
                  expandedSections.has(section.id) || !section.isCollapsible
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className={cn("space-y-1", !isCollapsed && "mt-2")}>
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={cn(
                        "flex items-center w-full text-left rounded-lg transition-all duration-200 px-4",
                        sizeClasses.item,
                        activeItemId === item.id &&
                          "text-supreme-blue-700 font-semibold"
                      )}
                    >
                      <div
                        className={cn(
                          "flex w-full items-center hover:bg-white rounded-lg p-2 transition-all duration-200",
                          isCollapsed && "justify-center",
                          activeItemId === item.id &&
                            "bg-supreme-blue-50 border border-supreme-blue-200"
                        )}
                      >
                        {item.icon && (
                          <span
                            className={cn(
                              "flex-shrink-0",
                              !isCollapsed && "mr-3",
                              activeItemId === item.id &&
                                "text-supreme-blue-700"
                            )}
                          >
                            {item.icon}
                          </span>
                        )}
                        {!isCollapsed && (
                          <span
                            className={cn(
                              "truncate",
                              activeItemId === item.id &&
                                "text-supreme-blue-700 font-semibold"
                            )}
                          >
                            {item.label}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
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
