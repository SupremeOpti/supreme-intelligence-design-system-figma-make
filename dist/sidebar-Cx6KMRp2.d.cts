import * as React from 'react';

interface SidebarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    isActive?: boolean;
    onClick?: () => void;
}
interface SidebarSection {
    id: string;
    title: string;
    items: SidebarItem[];
    isCollapsible?: boolean;
    isExpanded?: boolean;
}
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    items: SidebarSection[];
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;

export { type SidebarProps as S, Sidebar as a, type SidebarItem as b, type SidebarSection as c };
