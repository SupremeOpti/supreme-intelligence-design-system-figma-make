import * as React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pageLevelVariants = cva(
  "flex items-center text-sm font-medium text-muted-foreground gap-1",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-foreground",
        secondary: "text-muted-foreground/70",
        brand: "text-supreme-blue-600",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PageLevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pageLevelVariants> {
  level?: number | string;
  showArrow?: boolean;
  arrowPosition?: "before" | "after";
  separator?: React.ReactNode;
}

const PageLevel = React.forwardRef<HTMLDivElement, PageLevelProps>(
  (
    {
      className,
      variant,
      size,
      level = 1,
      showArrow = true,
      arrowPosition = "before",
      separator,
      children,
      ...props
    },
    ref
  ) => {
    const defaultSeparator = <ChevronRightIcon className="h-4 w-4" />;
    const separatorElement = separator || defaultSeparator;

    return (
      <div
        ref={ref}
        className={cn(pageLevelVariants({ variant, size, className }))}
        {...props}
      >
        {showArrow && arrowPosition === "before" && separatorElement}
        <span className="font-medium">{children || `Page level ${level}`}</span>
        {showArrow && arrowPosition === "after" && separatorElement}
      </div>
    );
  }
);
PageLevel.displayName = "PageLevel";

const PageLevelList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    separator?: React.ReactNode;
  }
>(({ className, separator, children, ...props }, ref) => {
  const defaultSeparator = <ChevronRightIcon className="h-4 w-4" />;
  const separatorElement = separator || defaultSeparator;

  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < React.Children.count(children) - 1 && separatorElement}
        </React.Fragment>
      ))}
    </div>
  );
});
PageLevelList.displayName = "PageLevelList";

const PageLevelItem = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    active?: boolean;
  }
>(({ className, active = false, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "font-medium transition-colors",
      active
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground",
      className
    )}
    {...props}
  />
));
PageLevelItem.displayName = "PageLevelItem";

export { PageLevel, PageLevelList, PageLevelItem, pageLevelVariants };
