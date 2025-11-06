import { ToastProps, ToastActionElement } from './components.cjs';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AnnouncementCard, Avatar, AvatarGroup, Badge, BadgeProps, Banner, BannerProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonProps, CardWithProgress, Checkbox, ContentBox, ContentBoxContent, ContentBoxDescription, ContentBoxFooter, ContentBoxHeader, ContentBoxTitle, ContentTypeCard, CurieAIChatPrompt, CurieAIChatPromptProps, HighlightCTACard, HighlightCard, HowItWorksCard, IconCard, InfoCard, Input, InputProps, Logo, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, MessageAngle, MessageCard, PageLevel, PageLevelItem, PageLevelList, PageLevelProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Persona, PersonaProfile, PersonaProfileProps, PersonaProps, Popover, PopoverContent, PopoverTrigger, Progress, Range, RangeProps, RangeSlider, Score, ScoreProps, SingleIconCard, Slider, TabGroup, Table, TableBody, TableCaption, TableCell, TableCellBenchmark, TableCellBenchmarkProps, TableCellGeneric, TableCellGenericProps, TableFooter, TableHead, TableHeader, TableHeaderCell, TableHeaderCellProps, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, TextareaProps, Toast, ToastAction, ToastActions, ToastClose, ToastContent, ToastDescription, ToastIcon, ToastProvider, ToastTitle, ToastViewport, Toaster, Toggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, bannerVariants, buttonVariants, pageLevelVariants, personaProfileVariants, personaVariants, tabsContentVariants, tabsListVariants, tabsTriggerVariants, toggleVariants } from './components.cjs';
import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
export { a as Sidebar, b as SidebarItem, S as SidebarProps, c as SidebarSection } from './sidebar-Cx6KMRp2.cjs';
export { A as AIIcon, a as AnalyticsIcon, b as AppIcon, c as AudiencesIcon, B as BrandGuidelinesIcon, D as DataSourcesIcon, d as DigitalAssetManagementIcon, G as GoogleIcon, H as HomeIcon, K as KnowledgeBaseIcon, L as LinkedInIcon, P as PaletteIcon, e as PersonaIcon, S as SidebarIcon, V as VectorIcon } from './VectorIcon-BG1C-eLa.cjs';
import { ClassValue } from 'clsx';
import '@radix-ui/react-accordion';
import '@radix-ui/react-avatar';
import 'react/jsx-runtime';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-context';
import '@radix-ui/react-menubar';
import '@radix-ui/react-popover';
import '@radix-ui/react-progress';
import '@radix-ui/react-slider';
import '@radix-ui/react-tabs';
import '@radix-ui/react-toast';
import '@radix-ui/react-toggle';
import '@radix-ui/react-tooltip';

interface CreditsProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    label?: string;
    showLabel?: boolean;
}
declare const Credits: React.ForwardRefExoticComponent<CreditsProps & React.RefAttributes<HTMLDivElement>>;

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
    quote: string;
    authorName: string;
    authorTitle: string;
    avatar: React.ReactNode;
}
declare const Quote: React.ForwardRefExoticComponent<QuoteProps & React.RefAttributes<HTMLDivElement>>;

declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const dividerVariants: (props?: {
    variant?: "default" | "high-contrast" | "low-contrast";
} & class_variance_authority_types.ClassProp) => string;
interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    orientation?: "horizontal" | "vertical";
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;

interface CreditOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    credits: number;
    label: string;
    selected?: boolean;
    disabled?: boolean;
}
declare const CreditOption: React.ForwardRefExoticComponent<CreditOptionProps & React.RefAttributes<HTMLDivElement>>;
interface CreditSelectorProps {
    options: Array<{
        id: string;
        credits: number;
        label: string;
        disabled?: boolean;
    }>;
    value?: string;
    defaultValue?: string;
    onValueChange?: (val: string) => void;
    className?: string;
}
declare const CreditSelector: React.FC<CreditSelectorProps>;

interface PageHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    description?: string;
    showDescription?: boolean;
}
declare const PageHeading: React.ForwardRefExoticComponent<PageHeadingProps & React.RefAttributes<HTMLDivElement>>;

interface DragDropProps extends React.HTMLAttributes<HTMLDivElement> {
    onFiles?: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    label?: string;
    sublabel?: string;
}
declare const DragDrop: React.ForwardRefExoticComponent<DragDropProps & React.RefAttributes<HTMLDivElement>>;

interface StepperIndicatorProps {
    stepNumber?: number;
    step?: "active" | "default" | "done";
}
declare const StepperIndicator: React.ForwardRefExoticComponent<StepperIndicatorProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
    stepNumber?: number;
    title: string;
    step?: "active" | "default" | "done";
    showLeftConnector?: boolean;
    showRightConnector?: boolean;
    leftConnectorColor?: string;
    rightConnectorColor?: string;
}
declare const StepperItem: React.ForwardRefExoticComponent<StepperItemProps & React.RefAttributes<HTMLDivElement>>;
interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: Array<{
        stepNumber?: number;
        title: string;
        step: "active" | "default" | "done";
    }>;
}
declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;

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

export { CreditOption, type CreditOptionProps, CreditSelector, type CreditSelectorProps, Credits, type CreditsProps, Divider, type DividerProps, DragDrop, type DragDropProps, PageHeading, type PageHeadingProps, Quote, type QuoteProps, RadioGroup, RadioGroupItem, Stepper, StepperIndicator, type StepperIndicatorProps, StepperItem, type StepperItemProps, type StepperProps, ToastActionElement, ToastProps, cn, reducer, toast, useIsMobile, useToast };
