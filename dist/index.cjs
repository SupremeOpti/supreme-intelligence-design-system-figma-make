"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  AnnouncementCard: () => AnnouncementCard,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  Banner: () => Banner,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Checkbox: () => Checkbox,
  ContentBox: () => ContentBox,
  ContentBoxContent: () => ContentBoxContent,
  ContentBoxDescription: () => ContentBoxDescription,
  ContentBoxFooter: () => ContentBoxFooter,
  ContentBoxHeader: () => ContentBoxHeader,
  ContentBoxTitle: () => ContentBoxTitle,
  HighlightCTACard: () => HighlightCTACard,
  HighlightCard: () => HighlightCard,
  IconCard: () => IconCard,
  InfoCard: () => InfoCard,
  Input: () => Input,
  Logo: () => Logo,
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  MessageAngle: () => MessageAngle,
  MessageCard: () => MessageCard,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  PageLevel: () => PageLevel,
  PageLevelItem: () => PageLevelItem,
  PageLevelList: () => PageLevelList,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  Persona: () => Persona,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  RangeSlider: () => RangeSlider,
  Slider: () => Slider,
  TabGroup: () => TabGroup,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableCheckbox: () => TableCheckbox,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Textarea: () => Textarea,
  Toast: () => Toast,
  ToastAction: () => ToastAction,
  ToastActions: () => ToastActions,
  ToastClose: () => ToastClose,
  ToastContent: () => ToastContent,
  ToastDescription: () => ToastDescription,
  ToastIcon: () => ToastIcon,
  ToastProvider: () => ToastProvider,
  ToastTitle: () => ToastTitle,
  ToastViewport: () => ToastViewport,
  Toaster: () => Toaster,
  Toggle: () => Toggle,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  badgeVariants: () => badgeVariants,
  bannerVariants: () => bannerVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle,
  pageLevelVariants: () => pageLevelVariants,
  personaVariants: () => personaVariants,
  reducer: () => reducer,
  tabsContentVariants: () => tabsContentVariants,
  tabsListVariants: () => tabsListVariants,
  tabsTriggerVariants: () => tabsTriggerVariants,
  toast: () => toast,
  toggleVariants: () => toggleVariants,
  useIsMobile: () => useIsMobile,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/accordion.tsx
var React = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_outline = require("@heroicons/react/24/outline");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("rounded-md", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center bg-slate-100 rounded-t-md text-neutral-950 justify-between p-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_outline.ChevronDownIcon, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden bg-slate-100 text-neutral-600 px-4 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down rounded-b-md",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/ui/avatar.tsx
var React2 = __toESM(require("react"), 1);
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var avatarVariants = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16"
};
var avatarGroupSpacing = {
  sm: "-space-x-2",
  md: "-space-x-3",
  lg: "-space-x-4"
};
var avatarTextSizes = {
  sm: "text-xs",
  md: "text-base",
  lg: "text-lg"
};
var AvatarGroupContext = React2.createContext({
  isInGroup: false
});
var Avatar = React2.forwardRef(({ className, size = "md", fallback, src, alt, children, ...props }, ref) => {
  const { isInGroup, groupSize } = React2.useContext(AvatarGroupContext);
  const effectiveSize = isInGroup && groupSize ? groupSize : size;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    AvatarPrimitive.Root,
    {
      ref,
      className: cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        avatarVariants[effectiveSize],
        // Automatically add border when inside AvatarGroup
        isInGroup && "border-2 border-background",
        className
      ),
      ...props,
      children: [
        src && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          AvatarPrimitive.Image,
          {
            className: "aspect-square h-full w-full",
            src,
            alt
          }
        ),
        children,
        fallback && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          AvatarPrimitive.Fallback,
          {
            className: cn(
              "flex h-full w-full items-center justify-center rounded-full",
              avatarTextSizes[effectiveSize]
            ),
            children: fallback
          }
        )
      ]
    }
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarGroup = React2.forwardRef(
  ({ className, size = "md", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarGroupContext.Provider, { value: { isInGroup: true, groupSize: size }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      ref,
      className: cn("flex", avatarGroupSpacing[size], className),
      ...props,
      children
    }
  ) })
);
AvatarGroup.displayName = "AvatarGroup";

// src/components/ui/badge.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)(
  "flex items-center rounded-full border px-1.5 py-0.5 text-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        foundation: "border bg-slate-100/20 text-slate-900 hover:bg-slate-100/50",
        default: "border bg-gray-100/20 text-gray-900 hover:bg-gray-100/50",
        red: "border-transparent bg-red-500/20 text-red-900 hover:bg-red-500/50",
        orange: "border-transparent bg-orange-500/20 text-orange-900 hover:bg-orange-500/50",
        yellow: "border-transparent bg-yellow-500/20 text-yellow-900 hover:bg-yellow-500/50",
        green: "border-transparent bg-green-500/20 text-green-900 hover:bg-green-500/50",
        blue: "border-transparent bg-blue-500/20 text-blue-900 hover:bg-blue-500/50",
        indigo: "border-transparent bg-indigo-500/20 text-indigo-900 hover:bg-indigo-500/50",
        purple: "border-transparent bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
        pink: "border-transparent bg-pink-500/20 text-pink-900 hover:bg-pink-500/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  dismissible,
  onDismiss,
  dot,
  size = "default",
  children,
  ...props
}) {
  const baseClasses = cn(badgeVariants({ variant }), className);
  const foundationClasses = size === "foundation" ? "w-20 h-5 gap-1.5 px-1.5 py-0.5" : "";
  const finalClasses = cn(baseClasses, foundationClasses);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: finalClasses + "flex items-center justify-center gap-1.5 cursor-pointer leading-none",
      ...props,
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-2 h-2 rounded-full bg-current opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "h-5", children }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            onClick: onDismiss,
            className: "rounded-full border border-current hover:bg-black/10 transition-colors p-0.5",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_outline2.XMarkIcon, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
}

// src/components/ui/banner.tsx
var React4 = __toESM(require("react"), 1);
var import_class_variance_authority3 = require("class-variance-authority");

// src/components/ui/button.tsx
var React3 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_outline3 = require("@heroicons/react/24/outline");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        "primary-stroke": "border border-[#272080] bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white shadow-[0px_0px_0px_3.5px_#E2E8F0] hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] hover:shadow-[0px_0px_0px_3.5px_#E2E8F0] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        secondary: "border border-[#D4D4D4] bg-white text-[#737373] hover:bg-white hover:text-[#272080] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-color": "bg-[#EDEBFD] text-[#272080] border border-[#D4D4D4] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-blue": "bg-[#EDEBFD] text-gray-700 border border-[#C6C2F8] hover:border-[#272080] transition-all duration-300 ease-out",
        link: "text-[#272080] underline-offset-4 hover:underline bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]"
      },
      size: {
        default: "h-10 rounded-full px-6 py-2",
        md: "h-8 rounded-full px-3.5 py-2 text-sm gap-1 min-w-[105px]",
        lg: "h-10 rounded-full px-5 py-2.5 text-base gap-1 min-w-[123px]",
        xl: "h-12 rounded-full px-10 text-lg",
        icon: "h-10 w-10 rounded-full px-2.5 py-2.5 gap-2.5",
        "icon-sm": "h-8 w-8 rounded-full px-2 py-2 gap-2",
        "icon-lg": "h-12 w-12 rounded-full px-3 py-3 gap-3"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);
var Button = React3.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    showIcons = "none",
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    if (asChild) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
          children
        }
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          showIcons === "before" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
            children
          ] }),
          showIcons === "after" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "both" && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
            children,
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "center" && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_outline3.PlusIcon, { className: "h-4 w-4" }),
          showIcons === "none" && children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/banner.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var bannerVariants = (0, import_class_variance_authority3.cva)(
  "flex items-center justify-between w-full rounded-[66px] transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-supreme-blue-500 to-supreme-blue-700 text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93]",
        primary: "bg-gradient-to-b from-supreme-blue-600 to-supreme-blue-700 text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93]",
        secondary: "bg-gradient-to-b from-supreme-blue-500 to-supreme-blue-600 text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93]",
        dark: "bg-gradient-to-b from-supreme-blue-700 to-supreme-blue-800 text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93]"
      },
      size: {
        default: "px-8 py-[14px] h-[72px]",
        sm: "px-6 py-3 h-16",
        lg: "px-10 py-6 h-20",
        xl: "px-12 py-8 h-24"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Banner = React4.forwardRef(
  ({
    className,
    variant,
    size,
    title,
    ctaText = "Create Free Account",
    onCtaClick,
    showCta = true,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: cn(bannerVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: `text-${size} font-medium leading-relaxed`, children: title }) }),
          showCta && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "ml-[10px]", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            Button,
            {
              variant: "secondary",
              size: "md",
              onClick: onCtaClick,
              className: "bg-white text-supreme-blue-700 border-white hover:bg-gray-50 hover:text-supreme-blue-800 transition-all duration-200",
              children: ctaText
            }
          ) })
        ]
      }
    );
  }
);
Banner.displayName = "Banner";

// src/components/ui/breadcrumb.tsx
var React5 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_outline4 = require("@heroicons/react/24/outline");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Breadcrumb = React5.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { ref, "aria-label": "breadcrumb", ...props }));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React5.forwardRef(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? import_react_slot2.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "span",
  {
    ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: cn("font-normal text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline4.ChevronRightIcon, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline4.EllipsisHorizontalIcon, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

// src/components/ui/card.tsx
var React6 = __toESM(require("react"), 1);
var import_outline5 = require("@heroicons/react/24/outline");
var import_jsx_runtime7 = require("react/jsx-runtime");
var AnnouncementCard = React6.forwardRef(({ className, title, author, date, content, badgeText, ...props }, ref) => {
  const contentArray = Array.isArray(content) ? content : [content];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-lg border p-6 max-w-[504px] relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "pr-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-2xl font-semibold text-neutral-800 mb-3", children: title }),
        badgeText && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { variant: "default", className: "text-neutral-700 text-sm", children: badgeText }) }),
        (author || date) && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center text-sm text-neutral-500 mb-4", children: [
          author && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: author }),
          author && date && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "mx-2", children: "|" }),
          date && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: date })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "space-y-3", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base text-neutral-800 leading-relaxed", children: content }) })
      ] })
    }
  );
});
AnnouncementCard.displayName = "AnnouncementCard";
var InfoCard = React6.forwardRef(({ className, title, subtitle, description, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-xl max-w-[337px] border p-6 relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.SparklesIcon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "pr-8", children: [
          subtitle && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-lg font-medium text-neutral-700 mb-1", children: subtitle }),
          title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-2xl font-semibold text-neutral-800 mb-2", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base text-neutral-600 leading-relaxed", children: description })
        ] })
      ]
    }
  );
});
InfoCard.displayName = "InfoCard";
var IconCard = React6.forwardRef(({ className, title, value, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      ref,
      className: cn(
        "flex justify-between items-center bg-white rounded-xl border p-6 max-w-[379px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-10 h-10 bg-supreme-blue-50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-5 h-5 text-neutral-800" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col items-start text-center", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-base font-normal text-neutral-600 mt-1", children: title }),
          value && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-2xl font-semibold text-neutral-800", children: value })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.UsersIcon, { className: "w-10 h-10 text-supreme-blue-700" })
      ]
    }
  );
});
IconCard.displayName = "IconCard";
var MessageAngle = React6.forwardRef(({ className, title, description, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "bg-white rounded-md p-4 text-black max-w-[232px]",
      className
    ),
    ...props,
    children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-base font-normal mb-3 text-neutral-600", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-neutral-600 leading-relaxed", children: description }),
      children
    ]
  }
));
MessageAngle.displayName = "MessageAngle";
var MessageCard = React6.forwardRef(
  ({
    className,
    headerTitle,
    mainContent,
    nestedTitle,
    nestedContent,
    ...props
  }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      ref,
      className: cn(
        "bg-white rounded-lg border max-w-[290px] p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      ),
      tabIndex: 0,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-2.5 h-2.5 bg-supreme-blue-300 rounded-full" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-lg font-semibold text-supreme-blue-800", children: headerTitle })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.PencilSquareIcon, { className: "w-6 h-6 text-neutral-600" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-neutral-600 leading-relaxed mb-6", children: mainContent }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "bg-gray-100 rounded-lg p-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h4", { className: "text-base font-normal text-neutral-700 mb-3", children: nestedTitle }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-xs text-neutral-600 leading-relaxed", children: nestedContent })
          ] })
        ] })
      ]
    }
  )
);
MessageCard.displayName = "MessageCard";
var HighlightCard = React6.forwardRef(({ className, value, title, subtitle, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "flex space-x-4 bg-white max-w-[329px] rounded-xl border p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    tabIndex: 0,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-10 h-10 bg-supreme-blue-50 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-5 h-5 text-neutral-800" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "text-3xl font-semibold text-neutral-800 mb-1", children: [
          value,
          "%"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-base font-semibold text-neutral-600 mb-1", children: title }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base font-normal text-neutral-600", children: subtitle })
      ] })
    ]
  }
));
HighlightCard.displayName = "HighlightCard";
var HighlightCTACard = React6.forwardRef(({ className, title, value, description, onCtaClick, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
  "div",
  {
    ref,
    className: cn(
      "bg-supreme-blue-50 rounded-lg p-6 max-w-[363px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    ),
    ...props,
    tabIndex: 0,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center space-x-3 mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "w-10 h-10 bg-white rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline5.ArrowTrendingUpIcon, { className: "w-5 h-5 text-neutral-800" }) }),
        title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-2xl font-semibold text-supreme-blue-900", children: title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-4xl font-bold text-supreme-blue-900", children: value }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-base text-neutral-600 mb-4 leading-relaxed", children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          onClick: onCtaClick,
          className: "text-supreme-blue-900 font-medium text-sm hover:underline cursor-pointer",
          children: "See More Details"
        }
      )
    ]
  }
));
HighlightCTACard.displayName = "HighlightCTACard";

// src/components/ui/checkbox.tsx
var React7 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_outline6 = require("@heroicons/react/24/outline");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Checkbox = React7.forwardRef(({ className, externalState, ...props }, ref) => {
  const [state, setState] = React7.useState("unchecked");
  React7.useEffect(() => {
    if (externalState) {
      setState(externalState);
    }
  }, [externalState]);
  const handleClick = () => {
    const nextState = state === "unchecked" ? "checked" : state === "checked" ? "indeterminate" : "unchecked";
    setState(nextState);
    console.log(nextState);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    CheckboxPrimitive.Root,
    {
      ref,
      checked: state === "checked",
      className: cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 bg-white relative",
        "transition-all duration-300 ease-out",
        "hover:border-supreme-blue-700 hover:bg-supreme-blue-50",
        "focus:outline-none focus:ring-4",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:hover:border-neutral-300 disabled:hover:bg-neutral-100",
        state === "checked" && "bg-supreme-blue-50 border-supreme-blue-700",
        state === "indeterminate" && "bg-supreme-blue-50 border-supreme-blue-700",
        className
      ),
      onClick: handleClick,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "absolute inset-0 flex items-center justify-center", children: [
        state === "checked" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline6.CheckIcon, { className: "h-4 w-4 text-supreme-blue-700" }),
        state === "indeterminate" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline6.MinusIcon, { className: "h-4 w-4 text-supreme-blue-700" })
      ] })
    }
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/ui/contentbox.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var ContentBox = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
ContentBox.displayName = "ContentBox";
var ContentBoxHeader = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
ContentBoxHeader.displayName = "ContentBoxHeader";
var ContentBoxTitle = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
ContentBoxTitle.displayName = "ContentBoxTitle";
var ContentBoxDescription = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
ContentBoxDescription.displayName = "ContentBoxDescription";
var ContentBoxContent = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
ContentBoxContent.displayName = "ContentBoxContent";
var ContentBoxFooter = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
ContentBoxFooter.displayName = "ContentBoxFooter";

// src/components/ui/input.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var Input = React9.forwardRef(
  ({
    className,
    type,
    label,
    required = false,
    hint,
    leftIcon,
    rightIcon,
    error,
    ...props
  }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        "label",
        {
          className: cn(
            "text-sm font-medium bg-white px-1 text-neutral-600 dark:text-supreme-blue-300 mb-1 absolute -top-3 z-10 left-4",
            error && "text-destructive"
          ),
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative", children: [
        leftIcon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: leftIcon }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "input",
          {
            type,
            className: cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-destructive focus-visible:ring-destructive",
              className
            ),
            ref,
            ...props
          }
        ),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: rightIcon })
      ] }),
      hint && !error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-xs text-muted-foreground", children: hint }),
      error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-xs text-destructive", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/components/ui/logo.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var Logo = React10.forwardRef(
  ({
    className,
    variant = "supreme",
    theme = "original",
    size = "md",
    showText = true,
    imageSrc,
    imageAlt,
    ...props
  }, ref) => {
    const defaultImages = {
      curie: {
        "black-text": "/assets/CurieAiBlackText.svg",
        "black-icon": "/assets/CurieAiBlackIcon.svg",
        "white-text": "/assets/CurieAiWhiteText.svg",
        "white-icon": "/assets/CurieAiWhiteIcon.svg",
        "original-text": "/assets/CurieAiOriginalText.svg",
        "original-icon": "/assets/CurieAiOriginalIcon.svg"
      },
      supreme: {
        "black-text": "/assets/SupremeIntelligenceBlackText.svg",
        "black-icon": "/assets/SupremeIntelligenceBlackIcon.svg",
        "white-text": "/assets/SupremeIntelligenceWhiteText.svg",
        "white-icon": "/assets/SupremeIntelligenceWhiteIcon.svg",
        "original-text": "/assets/SupremeIntelligenceOriginalText.svg",
        "original-icon": "/assets/SupremeIntelligenceOriginalIcon.svg"
      }
    };
    const getImageSrc = () => {
      if (imageSrc) return imageSrc;
      const imageKey = showText ? `${theme}-text` : `${theme}-icon`;
      return defaultImages[variant][imageKey];
    };
    const getImageAlt = () => {
      if (imageAlt) return imageAlt;
      return `${variant === "curie" ? "Curie AI" : "Supreme Intelligence"} Logo`;
    };
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        ref,
        className: cn("flex items-center gap-2", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn(
          "relative flex items-center justify-center"
        ), children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "img",
          {
            src: getImageSrc(),
            alt: getImageAlt(),
            className: "w-full h-full object-contain",
            onError: (e) => {
              console.warn(`Failed to load logo image: ${getImageSrc()}. Falling back to SVG.`);
              e.currentTarget.style.display = "none";
            }
          }
        ) })
      }
    );
  }
);
Logo.displayName = "Logo";

// src/components/ui/menubar.tsx
var React11 = __toESM(require("react"), 1);
var MenubarPrimitive = __toESM(require("@radix-ui/react-menubar"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.Root,
  {
    ref,
    className: cn(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      className
    ),
    ...props
  }
));
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    ),
    ...props
  }
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = React11.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  MenubarPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react.ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = React11.forwardRef(
  ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenubarPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    MenubarPrimitive.Content,
    {
      ref,
      align,
      alignOffset,
      sideOffset,
      className: cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    }
  ) })
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = React11.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  MenubarPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react.Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  MenubarPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react.Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  MenubarPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "span",
    {
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

// src/components/ui/navigation-menu.tsx
var React12 = __toESM(require("react"), 1);
var NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu"), 1);
var import_class_variance_authority4 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var NavigationMenu = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(NavigationMenuViewport, {})
    ]
  }
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  }
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item;
var navigationMenuTriggerStyle = (0, import_class_variance_authority4.cva)(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React12.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_lucide_react2.ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  }
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link;
var NavigationMenuViewport = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  }
) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// src/components/ui/page-level.tsx
var React13 = __toESM(require("react"), 1);
var import_outline7 = require("@heroicons/react/24/outline");
var import_class_variance_authority5 = require("class-variance-authority");
var import_jsx_runtime14 = require("react/jsx-runtime");
var pageLevelVariants = (0, import_class_variance_authority5.cva)(
  "flex items-center text-sm font-medium text-muted-foreground gap-1",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-foreground",
        secondary: "text-muted-foreground/70",
        brand: "text-supreme-blue-600"
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var PageLevel = React13.forwardRef(
  ({
    className,
    variant,
    size,
    level = 1,
    showArrow = true,
    arrowPosition = "before",
    separator,
    children,
    ...props
  }, ref) => {
    const defaultSeparator = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_outline7.ChevronRightIcon, { className: "h-4 w-4" });
    const separatorElement = separator || defaultSeparator;
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        ref,
        className: cn(pageLevelVariants({ variant, size, className })),
        ...props,
        children: [
          showArrow && arrowPosition === "before" && separatorElement,
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "font-medium", children: children || `Page level ${level}` }),
          showArrow && arrowPosition === "after" && separatorElement
        ]
      }
    );
  }
);
PageLevel.displayName = "PageLevel";
var PageLevelList = React13.forwardRef(({ className, separator, children, ...props }, ref) => {
  const defaultSeparator = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_outline7.ChevronRightIcon, { className: "h-4 w-4" });
  const separatorElement = separator || defaultSeparator;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      ref,
      className: cn("flex items-center gap-2", className),
      ...props,
      children: React13.Children.map(children, (child, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(React13.Fragment, { children: [
        child,
        index < React13.Children.count(children) - 1 && separatorElement
      ] }, index))
    }
  );
});
PageLevelList.displayName = "PageLevelList";
var PageLevelItem = React13.forwardRef(({ className, active = false, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
  "span",
  {
    ref,
    className: cn(
      "font-medium transition-colors",
      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      className
    ),
    ...props
  }
));
PageLevelItem.displayName = "PageLevelItem";

// src/components/ui/pagination.tsx
var React14 = __toESM(require("react"), 1);
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex justify-center", className),
    ...props
  }
);
Pagination.displayName = "Pagination";
var PaginationContent = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { ref, className: cn("", className), ...props }));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "a",
  {
    "aria-current": isActive ? "page" : void 0,
    className: cn(
      buttonVariants({
        variant: isActive ? "secondary" : "secondary",
        size
      }),
      className,
      "rounded-none border-y-2 border-neutral-200 text-neutral-800 px-4"
    ),
    ...props
  }
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  PaginationLink,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("!rounded-l-lg", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react3.ChevronLeft, { className: "h-4 w-4" })
  }
);
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  PaginationLink,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: cn("!rounded-r-lg", className),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react3.ChevronRight, { className: "h-4 w-4" })
  }
);
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
  "span",
  {
    "aria-hidden": true,
    className: cn("flex h-10 w-10 items-center justify-center border-y-2 border-neutral-200", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react3.MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/ui/persona.tsx
var React15 = __toESM(require("react"), 1);
var import_lucide_react4 = require("lucide-react");
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime16 = require("react/jsx-runtime");
var UserIcon = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "svg",
  {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "path",
      {
        d: "M4.48467 16.6946C5.03216 15.4047 6.31043 14.5 7.8 14.5H13.2C14.6896 14.5 15.9678 15.4047 16.5153 16.6946M14.1 7.75C14.1 9.73822 12.4882 11.35 10.5 11.35C8.51177 11.35 6.9 9.73822 6.9 7.75C6.9 5.76177 8.51177 4.15 10.5 4.15C12.4882 4.15 14.1 5.76177 14.1 7.75ZM19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10Z",
        stroke: "currentColor",
        strokeWidth: "1.43406",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
var personaVariants = (0, import_class_variance_authority6.cva)(
  "inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-supreme-blue-50 border-neutral-300 text-supreme-blue-800 hover:bg-supreme-blue-100 hover:border-supreme-blue-800",
        selected: "bg-supreme-blue-50 border-supreme-blue-800 text-supreme-blue-800",
        outline: "bg-white border-neutral-300 text-supreme-blue-800 hover:border-supreme-blue-800"
      },
      size: {
        default: "w-[364px] h-8 px-4 py-2",
        sm: "h-8 px-3 py-1.5 text-sm",
        lg: "h-12 px-6 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Persona = React15.forwardRef(
  ({
    className,
    variant,
    size,
    personas = [],
    placeholder = "Select personas...",
    showLeftIcon = true,
    showRightIcon = true,
    onClick,
    ...props
  }, ref) => {
    const displayText = personas.length > 0 ? personas.join(" + ") : placeholder;
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        className: cn(
          personaVariants({ variant, size, className }),
          onClick && "cursor-pointer hover:shadow-sm"
        ),
        ref,
        onClick,
        ...props,
        children: [
          showLeftIcon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(UserIcon, { className: "h-4 w-4 text-[#272080] flex-shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "flex-1 text-sm font-medium truncate", children: displayText }),
          showRightIcon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react4.ChevronDown, { className: "h-4 w-4 text-[#272080] flex-shrink-0" })
        ]
      }
    );
  }
);
Persona.displayName = "Persona";

// src/components/ui/popover.tsx
var React16 = __toESM(require("react"), 1);
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React16.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// src/components/ui/progress.tsx
var React17 = __toESM(require("react"), 1);
var ProgressPrimitive = __toESM(require("@radix-ui/react-progress"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var Progress = React17.forwardRef(({ className, value, showValue, size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-2",
    default: "h-3",
    lg: "h-4"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "w-full space-y-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      ProgressPrimitive.Root,
      {
        ref,
        className: cn(
          "relative overflow-hidden rounded-full bg-secondary",
          sizeClasses[size],
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          ProgressPrimitive.Indicator,
          {
            className: "h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out rounded-r-full",
            style: { transform: `translateX(-${100 - (value || 0)}%)` }
          }
        )
      }
    ),
    showValue && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "text-sm text-muted-foreground font-medium", children: [
      value,
      "%"
    ] }) })
  ] });
});
Progress.displayName = ProgressPrimitive.Root.displayName;

// src/components/ui/slider.tsx
var React18 = __toESM(require("react"), 1);
var SliderPrimitive = __toESM(require("@radix-ui/react-slider"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
var Slider = React18.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-300", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-supreme-blue-500" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-supreme-blue-500 bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;
var RangeSlider = React18.forwardRef(({ className, defaultValue, value, onValueChange, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    defaultValue,
    value,
    onValueChange,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-300", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Range, { className: "absolute h-full bg-supreme-blue-500" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-supreme-blue-500 bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-supreme-blue-500 bg-white shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
RangeSlider.displayName = "RangeSlider";

// src/components/ui/table.tsx
var React19 = __toESM(require("react"), 1);
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Table = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
var TableHeader = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("thead", { ref, className: cn("bg-gray-50 border-b border-gray-200", className), ...props }));
TableHeader.displayName = "TableHeader";
var TableBody = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "tbody",
  {
    ref,
    className: cn("divide-y divide-gray-200", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
var TableFooter = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
var TableRow = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "tr",
  {
    ref,
    className: cn(
      "transition-colors hover:bg-gray-50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
var TableHead = React19.forwardRef(({ className, sortable, sorted, onSort, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-gray-700 [&:has([role=checkbox])]:pr-0",
      sortable && "cursor-pointer select-none",
      className
    ),
    onClick: sortable ? onSort : void 0,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
      children,
      sortable && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react5.ChevronDown, { className: cn(
        "h-4 w-4 transition-transform",
        sorted === "asc" && "rotate-180",
        sorted === false && "opacity-30"
      ) })
    ] })
  }
));
TableHead.displayName = "TableHead";
var TableCell = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
var TableCaption = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
var TableCheckbox = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "input",
  {
    ref,
    type: "checkbox",
    className: cn(
      "h-4 w-4 rounded border-gray-300 text-supreme-blue-600 focus:ring-supreme-blue-500",
      className
    ),
    ...props
  }
));
TableCheckbox.displayName = "TableCheckbox";

// src/components/ui/tabs.tsx
var React20 = __toESM(require("react"), 1);
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime21 = require("react/jsx-runtime");
var tabsListVariants = (0, import_class_variance_authority7.cva)(
  "inline-flex h-10 items-center justify-center bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-b-2 border-neutral-200",
        "supreme-blue": "bg-supreme-blue-50",
        "card": "bg-white border border-neutral-200 shadow-sm"
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var tabsTriggerVariants = (0, import_class_variance_authority7.cva)(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900",
        "supreme-blue": "data-[state=active]:bg-white data-[state=active]:text-[#201A72] data-[state=active]:shadow-sm mt-1.5 text-neutral-600 text-base font-semibold hover:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-b-[#201A72]",
        "card": "data-[state=active]:bg-supreme-blue-50 data-[state=active]:text-supreme-blue-700 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900"
      },
      size: {
        default: "px-3 py-1.5 text-sm",
        sm: "px-2.5 py-1 text-xs",
        lg: "px-4 py-2 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var tabsContentVariants = (0, import_class_variance_authority7.cva)(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        "supreme-blue": "pt-4",
        "card": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Tabs = TabsPrimitive.Root;
var TabsList = React20.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  TabsPrimitive.List,
  {
    ref,
    className: cn(tabsListVariants({ variant, size, className })),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React20.forwardRef(({ className, variant, size, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(tabsTriggerVariants({ variant, size, className })),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React20.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(tabsContentVariants({ variant, className })),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TabGroup = React20.forwardRef(({
  tabs,
  defaultValue,
  value,
  onValueChange,
  variant = "default",
  size = "default",
  className,
  orientation = "horizontal"
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { ref, className: cn("w-full", className), children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    Tabs,
    {
      defaultValue,
      value,
      onValueChange,
      orientation,
      className: "w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabsList, { variant, size, className: "w-full", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          TabsTrigger,
          {
            value: tab.value,
            disabled: tab.disabled,
            variant,
            size,
            className: "flex-1",
            children: tab.label
          },
          tab.value
        )) }),
        tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TabsContent, { value: tab.value, variant, children: tab.content }, tab.value))
      ]
    }
  ) });
});
TabGroup.displayName = "TabGroup";

// src/components/ui/textarea.tsx
var React21 = __toESM(require("react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
var Textarea = React21.forwardRef(
  ({ className, label, required = false, hint, error, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "label",
        {
          className: cn(
            "text-sm font-medium bg-white px-1 text-neutral-600 dark:text-supreme-blue-300 mb-1 absolute -top-3 z-10 left-4",
            error && "text-destructive"
          ),
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "text-destructive", children: " *" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "textarea",
        {
          className: cn(
            "flex min-h-[80px] w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-supreme-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            className
          ),
          ref,
          ...props
        }
      ),
      hint && !error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm text-muted-foreground", children: hint }),
      error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm text-destructive", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/toast.tsx
var React22 = __toESM(require("react"), 1);
var ToastPrimitives = __toESM(require("@radix-ui/react-toast"), 1);
var import_class_variance_authority8 = require("class-variance-authority");
var import_outline8 = require("@heroicons/react/24/outline");

// src/components/ui/Icons/Vector.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var Vector = ({
  size = 24,
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "path",
        {
          d: "M9.25 9.25L9.29149 9.22926C9.86461 8.9427 10.5099 9.46034 10.3545 10.082L9.64549 12.918C9.49009 13.5397 10.1354 14.0573 10.7085 13.7707L10.75 13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 6.25H10.0075V6.2575H10V6.25Z",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

// src/components/ui/toast.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React22.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] max-h-screen w-1/2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-1/2",
      variant === "success" && "bg-transparent border-green-500 text-green-500",
      variant === "info" && "bg-transparent border-blue-500 text-blue-500",
      variant === "warning" && "bg-transparent border-yellow-500 text-yellow-500",
      variant === "destructive" && "bg-transparent border-red-500 text-red-500",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = (0, import_class_variance_authority8.cva)(
  "group pointer-events-auto relative flex w-full items-start space-x-4 overflow-hidden rounded-md border border-neutral-300 bg-white p-6 pr-8 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-neutral-300 bg-white text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
        info: "border-neutral-300 bg-blue-100 text-blue-500",
        success: "border-green-300 bg-green-100 text-green-500",
        warning: "border-yellow-300 bg-yellow-100 text-yellow-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React22.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastIcon = React22.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  "div",
  {
    ref,
    className: cn(
      "flex-shrink-0 w-10 h-10 rounded-sm border bg-white flex items-center justify-center",
      variant === "success" && "bg-transparent border-green-500 text-green-500",
      variant === "info" && "bg-transparent border-blue-500 text-blue-500",
      variant === "warning" && "bg-transparent border-yellow-500 text-yellow-500",
      variant === "destructive" && "bg-transparent border-red-500 text-red-500",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Vector, { className: cn("w-5 h-5", variant === "success" && "text-green-500", variant === "info" && "text-blue-500", variant === "warning" && "text-yellow-500", variant === "destructive" && "text-red-500") })
  }
));
ToastIcon.displayName = "ToastIcon";
var ToastContent = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  "div",
  {
    ref,
    className: cn("flex-1", className),
    ...props
  }
));
ToastContent.displayName = "ToastContent";
var ToastAction = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent text-sm font-medium ring-offset-background transition-colors focus:outline-none",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React22.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_outline8.XMarkIcon, { className: cn("h-6 w-6", variant === "success" && "text-green-500", variant === "info" && "text-blue-500", variant === "warning" && "text-yellow-500", variant === "destructive" && "text-red-500") })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React22.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold text-foreground", variant === "success" && "text-green-500", variant === "info" && "text-blue-500", variant === "warning" && "text-yellow-500", variant === "destructive" && "text-red-500", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React22.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", variant === "success" && "text-green-500", variant === "info" && "text-blue-500", variant === "warning" && "text-yellow-500", variant === "destructive" && "text-red-500", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
var ToastActions = React22.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center text-sm gap-2", className),
    ...props
  }
));
ToastActions.displayName = "ToastActions";

// src/hooks/use-toast.ts
var React23 = __toESM(require("react"), 1);
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e4;
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
    default:
      return state;
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = props.id;
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React23.useState(memoryState);
  React23.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toaster.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function Toaster() {
  const { toasts } = useToast();
  console.log(toasts);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, children, variant, ...props }) {
      return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Toast, { ...props, variant, className: "w-full flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ToastIcon, { variant }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex gap-1 flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(ToastContent, { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ToastTitle, { variant, children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ToastDescription, { variant, children: description })
          ] }),
          action
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ToastClose, { variant })
      ] }, id);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ToastViewport, {})
  ] });
}

// src/components/ui/toggle.tsx
var React24 = __toESM(require("react"), 1);
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"), 1);
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime26 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority9.cva)(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative",
  {
    variants: {
      variant: {
        default: "bg-white border border-slate-400 focus:ring-4 focus:ring-blue-500/20",
        checked: "bg-gradient-to-b from-[#403A9A] to-[#1A1475] border border-[#403A9A] focus:ring-4 focus:ring-blue-500/20",
        disabled: "bg-white border border-slate-400 opacity-50 focus:ring-4 focus:ring-blue-500/20",
        disabledChecked: "bg-gradient-to-b from-[#403A9A] to-[#1A1475] border border-[#403A9A] opacity-50 focus:ring-4 focus:ring-blue-500/20"
      },
      size: {
        sm: "w-8 h-4 p-0.5",
        md: "w-10 h-5 p-1",
        lg: "w-14 h-7 p-1.5"
      }
    },
    defaultVariants: {
      variant: "checked",
      size: "md"
    }
  }
);
var Toggle = React24.forwardRef(({ className, variant, size = "md", pressed, defaultPressed, onPressedChange, ...props }, ref) => {
  const [isFocused, setIsFocused] = React24.useState(false);
  const isChecked = pressed ?? defaultPressed ?? false;
  const getVariant = () => {
    if (props.disabled) {
      return isChecked ? "disabledChecked" : "disabled";
    }
    return isChecked ? "checked" : "default";
  };
  const getThumbColor = () => {
    if (props.disabled) {
      return isChecked ? "bg-white" : "bg-slate-400";
    }
    return isChecked ? "bg-white" : "bg-[#403A9A]";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    TogglePrimitive.Root,
    {
      ref,
      className: cn(toggleVariants({ variant: getVariant(), size, className })),
      pressed,
      defaultPressed,
      onPressedChange,
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "div",
        {
          className: cn(
            "absolute rounded-full transition-all duration-300",
            size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : "w-5 h-5",
            getThumbColor(),
            isChecked ? "right-0.5" : "left-0.5"
          )
        }
      )
    }
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

// src/components/ui/tooltip.tsx
var React25 = __toESM(require("react"), 1);
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime27 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React25.forwardRef(({ className, sideOffset = 4, arrowDirection = "bottom", side, ...props }, ref) => {
  const getSide = () => {
    if (side) return side;
    switch (arrowDirection) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      case "left":
        return "left";
      case "right":
        return "right";
      default:
        return "top";
    }
  };
  const getArrowClasses = () => {
    switch (arrowDirection) {
      case "top":
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-700";
      case "bottom":
        return "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-supreme-blue-700";
      case "left":
        return "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-supreme-blue-700";
      case "right":
        return "absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-supreme-blue-700";
      default:
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-700";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    TooltipPrimitive.Content,
    {
      ref,
      sideOffset,
      side: getSide(),
      className: cn(
        "z-50 overflow-visible rounded-md border-0 bg-supreme-blue-700 px-3 py-1.5 text-sm text-white shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative",
        className
      ),
      ...props,
      children: [
        props.children,
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getArrowClasses() })
      ]
    }
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/hooks/use-mobile.tsx
var React26 = __toESM(require("react"), 1);
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React26.useState(void 0);
  React26.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AnnouncementCard,
  Avatar,
  AvatarGroup,
  Badge,
  Banner,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Checkbox,
  ContentBox,
  ContentBoxContent,
  ContentBoxDescription,
  ContentBoxFooter,
  ContentBoxHeader,
  ContentBoxTitle,
  HighlightCTACard,
  HighlightCard,
  IconCard,
  InfoCard,
  Input,
  Logo,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MessageAngle,
  MessageCard,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  PageLevel,
  PageLevelItem,
  PageLevelList,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Persona,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RangeSlider,
  Slider,
  TabGroup,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableCheckbox,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toast,
  ToastAction,
  ToastActions,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  Toggle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  badgeVariants,
  bannerVariants,
  buttonVariants,
  cn,
  navigationMenuTriggerStyle,
  pageLevelVariants,
  personaVariants,
  reducer,
  tabsContentVariants,
  tabsListVariants,
  tabsTriggerVariants,
  toast,
  toggleVariants,
  useIsMobile,
  useToast
});
