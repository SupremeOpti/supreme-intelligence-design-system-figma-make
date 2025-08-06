import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as _radix_ui_react_context from '@radix-ui/react-context';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: {
    sm: string;
    md: string;
    lg: string;
};
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    size?: keyof typeof avatarVariants;
    fallback?: React.ReactNode;
    src?: string;
    alt?: string;
}
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: keyof typeof avatarVariants;
    children: React.ReactNode;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: {
    variant?: "default" | "foundation" | "red" | "orange" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
} & class_variance_authority_types.ClassProp) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    dismissible?: boolean;
    onDismiss?: () => void;
    dot?: boolean;
    size?: "default" | "foundation";
}
declare function Badge({ className, variant, dismissible, onDismiss, dot, size, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const bannerVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "dark";
    size?: "default" | "sm" | "lg" | "xl";
} & class_variance_authority_types.ClassProp) => string;
interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    title: string;
    ctaText?: string;
    onCtaClick?: () => void;
    showCta?: boolean;
}
declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;

declare const Breadcrumb: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const buttonVariants: (props?: {
    variant?: "link" | "primary" | "primary-stroke" | "secondary" | "secondary-color" | "secondary-blue";
    size?: "default" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    showIcons?: "after" | "before" | "both" | "center" | "none";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const AnnouncementCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    author?: string;
    date?: string;
    content: string;
    badgeText?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const InfoCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    subtitle?: string;
    description?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const IconCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    value?: string | number;
} & React.RefAttributes<HTMLDivElement>>;
declare const MessageAngle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const MessageCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    headerTitle: string;
    headerIcon?: React.ReactNode;
    mainContent: string;
    nestedTitle: string;
    nestedContent: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const HighlightCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    value: string | number;
    title: string;
    subtitle?: string;
} & React.RefAttributes<HTMLDivElement>>;
declare const HighlightCTACard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    title?: string;
    value: string | number;
    description: string;
    ctaText?: string;
    onCtaClick?: () => void;
} & React.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref">, "checked" | "onCheckedChange"> & {
    externalState?: "checked" | "unchecked" | "indeterminate";
} & React.RefAttributes<HTMLButtonElement>>;

declare const ContentBox: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const ContentBoxDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const ContentBoxContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ContentBoxFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    error?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "curie" | "supreme";
    theme?: "original" | "black" | "white";
    size?: "sm" | "md" | "lg";
    showText?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<LogoProps & React.RefAttributes<HTMLDivElement>>;

declare const MenubarMenu: {
    (props: MenubarPrimitive.MenubarMenuProps & {
        __scopeMenubar?: _radix_ui_react_context.Scope;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const MenubarPortal: React.FC<MenubarPrimitive.MenubarPortalProps>;
declare const MenubarSub: React.FC<MenubarPrimitive.MenubarSubProps>;
declare const MenubarRadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Menubar: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const MenubarSubTrigger: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarSubContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarContent: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarCheckboxItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarRadioItem: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarLabel: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const MenubarSeparator: React.ForwardRefExoticComponent<Omit<MenubarPrimitive.MenubarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayname: string;
};

declare const NavigationMenu: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const NavigationMenuList: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuListProps & React.RefAttributes<HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp) => string;
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const NavigationMenuContent: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuLink: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>>;
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const NavigationMenuIndicator: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuIndicatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const pageLevelVariants: (props?: {
    variant?: "default" | "primary" | "secondary" | "brand";
    size?: "default" | "sm" | "lg" | "xl";
} & class_variance_authority_types.ClassProp) => string;
interface PageLevelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageLevelVariants> {
    level?: number | string;
    showArrow?: boolean;
    arrowPosition?: "before" | "after";
    separator?: React.ReactNode;
}
declare const PageLevel: React.ForwardRefExoticComponent<PageLevelProps & React.RefAttributes<HTMLDivElement>>;
declare const PageLevelList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    separator?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
declare const PageLevelItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & {
    active?: boolean;
} & React.RefAttributes<HTMLSpanElement>>;

declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const personaVariants: (props?: {
    variant?: "selected" | "default" | "outline";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
interface PersonaProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof personaVariants> {
    personas?: string[];
    placeholder?: string;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    onClick?: () => void;
}
declare const Persona: React.ForwardRefExoticComponent<PersonaProps & React.RefAttributes<HTMLDivElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Progress: React.ForwardRefExoticComponent<Omit<ProgressPrimitive.ProgressProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    showValue?: boolean;
    size?: "sm" | "default" | "lg";
} & React.RefAttributes<HTMLDivElement>>;

declare const Slider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const RangeSlider: React.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
    defaultValue?: [number, number];
    value?: [number, number];
    onValueChange?: (value: [number, number]) => void;
} & React.RefAttributes<HTMLSpanElement>>;

declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & {
    sortable?: boolean;
    sorted?: "asc" | "desc" | false;
    onSort?: () => void;
} & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
declare const TableCheckbox: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;

declare const tabsListVariants: (props?: {
    variant?: "default" | "supreme-blue" | "card";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const tabsTriggerVariants: (props?: {
    variant?: "default" | "supreme-blue" | "card";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const tabsContentVariants: (props?: {
    variant?: "default" | "supreme-blue" | "card";
} & class_variance_authority_types.ClassProp) => string;
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "supreme-blue" | "card";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "supreme-blue" | "card";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "supreme-blue" | "card";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
interface TabGroupProps {
    tabs: Array<{
        value: string;
        label: string;
        content: React.ReactNode;
        disabled?: boolean;
    }>;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    variant?: VariantProps<typeof tabsListVariants>["variant"];
    size?: VariantProps<typeof tabsListVariants>["size"];
    className?: string;
    orientation?: "horizontal" | "vertical";
}
declare const TabGroup: React.ForwardRefExoticComponent<TabGroupProps & React.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    required?: boolean;
    hint?: string;
    error?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const ToastProvider: React.FC<ToastPrimitives.ToastProviderProps>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLOListElement>>;
declare const Toast$1: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastProps & React.RefAttributes<HTMLLIElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLLIElement>>;
declare const ToastIcon: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastCloseProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastTitleProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastDescriptionProps & React.RefAttributes<HTMLDivElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "destructive" | "info" | "success" | "warning";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const ToastActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
type ToastProps = React.ComponentPropsWithoutRef<typeof Toast$1>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

declare function Toaster(): react_jsx_runtime.JSX.Element;

declare const toggleVariants: (props?: {
    variant?: "disabled" | "checked" | "default" | "disabledChecked";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "disabled" | "checked" | "default" | "disabledChecked";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
    arrowDirection?: 'top' | 'bottom' | 'left' | 'right';
}
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

declare function useIsMobile(): boolean;

type Toast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: ToastActionElement;
};
declare const actionTypes: {
    readonly ADD_TOAST: "ADD_TOAST";
    readonly UPDATE_TOAST: "UPDATE_TOAST";
    readonly DISMISS_TOAST: "DISMISS_TOAST";
    readonly REMOVE_TOAST: "REMOVE_TOAST";
};
type ActionType = typeof actionTypes;
type Action = {
    type: ActionType["ADD_TOAST"];
    toast: Toast;
} | {
    type: ActionType["UPDATE_TOAST"];
    toast: Partial<Toast>;
} | {
    type: ActionType["DISMISS_TOAST"];
    toastId?: Toast["id"];
} | {
    type: ActionType["REMOVE_TOAST"];
    toastId?: Toast["id"];
};
interface State {
    toasts: Toast[];
}
declare const reducer: (state: State, action: Action) => State;
declare function toast({ ...props }: Toast): {
    id: string;
    dismiss: () => void;
    update: (props: Toast) => void;
};
declare function useToast(): {
    toast: typeof toast;
    dismiss: (toastId?: string) => void;
    toasts: Toast[];
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AnnouncementCard, Avatar, AvatarGroup, Badge, type BadgeProps, Banner, type BannerProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, type ButtonProps, Checkbox, ContentBox, ContentBoxContent, ContentBoxDescription, ContentBoxFooter, ContentBoxHeader, ContentBoxTitle, HighlightCTACard, HighlightCard, IconCard, InfoCard, Input, type InputProps, Logo, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MessageAngle, MessageCard, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, PageLevel, PageLevelItem, PageLevelList, type PageLevelProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Persona, type PersonaProps, Popover, PopoverContent, PopoverTrigger, Progress, RangeSlider, Slider, TabGroup, Table, TableBody, TableCaption, TableCell, TableCheckbox, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Toast$1 as Toast, ToastAction, type ToastActionElement, ToastActions, ToastClose, ToastContent, ToastDescription, ToastIcon, type ToastProps, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, bannerVariants, buttonVariants, cn, navigationMenuTriggerStyle, pageLevelVariants, personaVariants, reducer, tabsContentVariants, tabsListVariants, tabsTriggerVariants, toast, toggleVariants, useIsMobile, useToast };
