"use client";
import {
  SidebarIcon,
  SupremeIcon,
  cn
} from "./chunk-QWFTKI6L.js";

// src/components/ui/avatar.tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx, jsxs } from "react/jsx-runtime";
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
var AvatarGroupContext = React.createContext({
  isInGroup: false
});
var Avatar = React.forwardRef(({ className, size = "md", fallback, src, alt, children, ...props }, ref) => {
  const { isInGroup, groupSize } = React.useContext(AvatarGroupContext);
  const effectiveSize = isInGroup && groupSize ? groupSize : size;
  return /* @__PURE__ */ jsxs(
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
        src && /* @__PURE__ */ jsx(
          AvatarPrimitive.Image,
          {
            className: "aspect-square h-full w-full",
            src,
            alt
          }
        ),
        children,
        fallback && /* @__PURE__ */ jsx(
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
var AvatarGroup = React.forwardRef(
  ({ className, size = "md", children, ...props }, ref) => /* @__PURE__ */ jsx(AvatarGroupContext.Provider, { value: { isInGroup: true, groupSize: size }, children: /* @__PURE__ */ jsx(
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

// src/components/ui/button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        "primary-stroke": "border border-[#272080] bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white shadow-[0px_0px_0px_3.5px_#E2E8F0] hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] hover:shadow-[0px_0px_0px_3.5px_#E2E8F0] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        secondary: "border border-[#D4D4D4] bg-white text-[#737373] hover:bg-white hover:text-[#272080] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-color": "bg-[#EDEBFD] text-[#272080] border border-[#D4D4D4] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-blue": "bg-[#EDEBFD] text-gray-700 border border-[#C6C2F8] hover:border-[#272080] transition-all duration-300 ease-out",
        link: "text-[#272080] underline-offset-4 hover:underline bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]",
        ghost: "bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]"
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
var Button = React2.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    showIcons = "none",
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    if (asChild) {
      return /* @__PURE__ */ jsx2(
        Comp,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          ...props,
          children
        }
      );
    }
    return /* @__PURE__ */ jsxs2(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props,
        children: [
          showIcons === "before" && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2(PlusIcon, { className: "h-4 w-4" }),
            children
          ] }),
          showIcons === "after" && /* @__PURE__ */ jsxs2(Fragment, { children: [
            children,
            /* @__PURE__ */ jsx2(PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "both" && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2(PlusIcon, { className: "h-4 w-4" }),
            children,
            /* @__PURE__ */ jsx2(PlusIcon, { className: "h-4 w-4" })
          ] }),
          showIcons === "center" && /* @__PURE__ */ jsx2(PlusIcon, { className: "h-4 w-4" }),
          showIcons === "none" && children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/sidebar.tsx
import * as React3 from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Sidebar = React3.forwardRef(
  ({ className, items, ...props }, ref) => {
    const navigate = useNavigate();
    const [expandedSections, setExpandedSections] = React3.useState(
      new Set(items.map((section) => section.id))
    );
    const [isCollapsed, setIsCollapsed] = React3.useState(false);
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    const handleSectionToggle = (sectionId) => {
      const newExpandedSections = new Set(expandedSections);
      if (newExpandedSections.has(sectionId)) {
        newExpandedSections.delete(sectionId);
      } else {
        newExpandedSections.add(sectionId);
      }
      setExpandedSections(newExpandedSections);
    };
    const handleItemClick = (item) => {
      if (item.href) {
        navigate(item.href);
      }
      item.onClick?.();
    };
    const toggleCollapse = () => {
      const newCollapsedState = !isCollapsed;
      setIsCollapsed(newCollapsedState);
    };
    const isItemActive = (item) => {
      if (item.href) {
        return currentPath === item.href || currentPath.startsWith(item.href);
      }
      return false;
    };
    const getSizeClasses = () => {
      return {
        sidebar: "",
        item: "text-base font-medium text-neutral-600 hover:text-neutral-900",
        sectionTitle: "px-4 py-2 text-sm text-neutral-400 hover:text-neutral-700",
        logo: "w-10 h-10",
        brandText: "text-base"
      };
    };
    const sizeClasses = getSizeClasses();
    return /* @__PURE__ */ jsxs3(
      "div",
      {
        ref,
        className: cn(
          "flex flex-col h-screen transition-all duration-500 ease-in-out bg-slate-100 overflow-hidden py-3",
          sizeClasses.sidebar,
          isCollapsed ? "w-16 px-3" : "w-[315px]  px-6",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx3("div", { className: "pb-7", children: /* @__PURE__ */ jsxs3(
            "div",
            {
              className: cn(
                "flex items-center justify-between",
                isCollapsed && "justify-center"
              ),
              children: [
                /* @__PURE__ */ jsx3(
                  "div",
                  {
                    className: cn(
                      "transition-all duration-500 ease-in-out overflow-hidden",
                      isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                    ),
                    children: /* @__PURE__ */ jsx3(SupremeIcon, {})
                  }
                ),
                /* @__PURE__ */ jsx3(
                  "button",
                  {
                    onClick: toggleCollapse,
                    className: cn(
                      "rounded-md transition-all duration-500 ease-in-out py-4",
                      isCollapsed && "rotate-180"
                    ),
                    "aria-label": isCollapsed ? "Expand sidebar" : "Collapse sidebar",
                    children: /* @__PURE__ */ jsx3(
                      SidebarIcon,
                      {
                        size: 24,
                        className: "transition-all duration-500 ease-in-out text-slate-600"
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx3("div", { className: "w-full h-[1px] bg-slate-200" }),
          /* @__PURE__ */ jsx3("div", { className: "flex-col flex h-full gap-20 pt-7", children: items.map((section) => /* @__PURE__ */ jsxs3("div", { className: "mb-4", children: [
            section.isCollapsible ? /* @__PURE__ */ jsxs3(
              "button",
              {
                onClick: () => handleSectionToggle(section.id),
                className: cn(
                  "flex items-center w-full text-left transition-all duration-500 ease-in-out",
                  sizeClasses.sectionTitle,
                  "hover:text-slate-700 dark:hover:text-slate-300 rounded-lg px-2 py-2",
                  isCollapsed && "justify-center px-2"
                ),
                children: [
                  /* @__PURE__ */ jsx3(
                    ChevronDownIcon,
                    {
                      className: cn(
                        "w-4 h-4 transition-transform duration-500 ease-in-out flex-shrink-0",
                        expandedSections.has(section.id) ? "rotate-0" : "-rotate-90",
                        !isCollapsed && "mr-2"
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx3(
                    "span",
                    {
                      className: cn(
                        "transition-all duration-500 ease-in-out",
                        isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100 w-auto"
                      ),
                      children: section.title
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsx3(
              "div",
              {
                className: cn(
                  "font-medium transition-all duration-500 ease-in-out",
                  isCollapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"
                ),
                children: !isCollapsed && section.title
              }
            ),
            /* @__PURE__ */ jsx3(
              "div",
              {
                className: cn(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  expandedSections.has(section.id) || !section.isCollapsible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                ),
                children: /* @__PURE__ */ jsx3("div", { className: "space-y-1", children: section.items.map((item) => {
                  const isActive = isItemActive(item);
                  return /* @__PURE__ */ jsx3(
                    "button",
                    {
                      onClick: () => handleItemClick(item),
                      className: cn(
                        "flex items-center w-full text-left rounded-lg transition-all duration-500",
                        sizeClasses.item,
                        isActive && "text-slate-600 font-semibold",
                        isCollapsed && "justify-center"
                      ),
                      children: /* @__PURE__ */ jsxs3(
                        "div",
                        {
                          className: cn(
                            "flex w-full items-center hover:bg-white rounded-xl transition-all duration-500 ease-in-out py-2.5 px-3.5",
                            isCollapsed && "justify-center",
                            !isCollapsed && "gap-2",
                            isActive && "bg-white border border-slate-200"
                          ),
                          children: [
                            item.icon && /* @__PURE__ */ jsx3(
                              "span",
                              {
                                className: cn(
                                  "flex-shrink-0 transition-all duration-500 ease-in-out",
                                  !isCollapsed && "mr-1 ",
                                  isActive && "text-slate-600"
                                ),
                                children: item.icon
                              }
                            ),
                            /* @__PURE__ */ jsx3(
                              "span",
                              {
                                className: cn(
                                  "transition-all duration-500 ease-in-out",
                                  isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100 w-auto",
                                  "truncate",
                                  isActive && "text-slate-600 font-semibold"
                                ),
                                children: !isCollapsed && item.label
                              }
                            )
                          ]
                        }
                      )
                    },
                    item.id
                  );
                }) })
              }
            )
          ] }, section.id)) })
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";

export {
  Avatar,
  AvatarGroup,
  buttonVariants,
  Button,
  Sidebar
};
