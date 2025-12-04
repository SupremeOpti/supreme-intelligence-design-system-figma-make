import * as React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const pageLevelVariants = cva(
  "flex items-center text-xs font-normal text-neutral-600 opacity-80 gap-1.5",
  {
    variants: {
      variant: {
        default: "text-neutral-600",
        primary: "text-foreground",
        secondary: "text-neutral-600/70",
        brand: "text-supreme-blue-600",
      },
      size: {
        sm: "text-xs",
        default: "text-xs",
        lg: "text-sm",
        xl: "text-base",
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
  /**
   * Additional CSS class names.
   */
  className?: string;
  /**
   * The content of the page level.
   */
  children?: React.ReactNode;
  /**
   * The variant style of the page level.
   * @default "default"
   */
  variant?: "default" | "primary" | "secondary" | "brand"
  /**
   * The size of the page level.
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "xl"
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
    const defaultSeparator = <ChevronRightIcon className="h-4 w-4 text-neutral-400" />;
    const separatorElement = separator || defaultSeparator;

    return (
      <div
        ref={ref}
        className={cn(pageLevelVariants({ variant, size, className }))}
        {...props}
      >
        {showArrow && arrowPosition === "before" && separatorElement}
        <span>{children || `Page level ${level}`}</span>
        {showArrow && arrowPosition === "after" && separatorElement}
      </div>
    );
  }
);
PageLevel.displayName = "PageLevel";

const PageLevelList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the page level list.
     */
    children?: React.ReactNode;
    separator?: React.ReactNode;
  }
>(({ className, separator, children, ...props }, ref) => {
  const defaultSeparator = <ChevronRightIcon className="h-4 w-4 text-neutral-400" />;
  const separatorElement = separator || defaultSeparator;

  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-1.5", className)}
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
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * The content of the page level item.
     */
    children?: React.ReactNode;
    active?: boolean;
  }
>(({ className, active = false, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "text-xs leading-4 font-normal text-neutral-600 opacity-80 transition-colors",
      active && "text-foreground opacity-100",
      className
    )}
    {...props}
  />
));
PageLevelItem.displayName = "PageLevelItem";

export { PageLevel, PageLevelList, PageLevelItem, pageLevelVariants };
