import React__default from 'react';
import { S as SidebarProps } from './sidebar-Cx6KMRp2.cjs';

interface HeaderProps {
    className?: string;
    items: {
        icon: React__default.ReactNode;
        label: string;
        href: string;
    }[];
}

interface LayoutProps {
    children: React__default.ReactNode;
    showSidebar?: boolean;
    showHeader?: boolean;
    headerItems?: HeaderProps["items"];
    sidebarItems?: SidebarProps["items"];
    className?: string;
    variant?: "default" | "analytics" | "minimal";
    backgroundImage?: string;
}
declare const Layout: React__default.FC<LayoutProps>;

export { Layout };
