import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-normal transition-colors",
  {
    variants: {
      variant: {
        foundation: "bg-gray-100 text-gray-800",
        default: "bg-gray-100 text-gray-800",
        slate: "bg-slate-100 text-slate-800",
        zinc: "bg-zinc-100 text-zinc-800", 
        gray: "bg-gray-100 text-gray-800",
        red: "bg-red-100 text-red-800",
        orange: "bg-orange-100 text-orange-800",
        amber: "bg-amber-100 text-amber-800",
        yellow: "bg-yellow-100 text-yellow-800",
        lime: "bg-lime-100 text-lime-800",
        green: "bg-green-100 text-green-800",
        cyan: "bg-cyan-100 text-cyan-800",
        sky: "bg-sky-100 text-sky-800",
        blue: "bg-blue-100 text-blue-800",
        indigo: "bg-indigo-100 text-indigo-800",
        violet: "bg-violet-100 text-violet-800",
        purple: "bg-purple-100 text-purple-800",
        pink: "bg-pink-100 text-pink-800",
      },
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  showDot?: boolean;
  showRemove?: boolean;
  onRemove?: () => void;
  // Legacy props for backward compatibility
  dismissible?: boolean;
  onDismiss?: () => void;
  dot?: boolean;
  size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    showDot, 
    showRemove, 
    onRemove,
    // Legacy props for backward compatibility
    dismissible,
    onDismiss,
    dot,
    children, 
    size="sm",
    ...props 
  }, ref) => {
    // Handle legacy props
    const shouldShowDot = showDot ?? dot ?? false;
    const shouldShowRemove = showRemove ?? dismissible ?? false;
    const handleRemove = onRemove ?? onDismiss;

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {shouldShowDot && (
          <div className={cn(
            "rounded-full bg-current",
            size === "sm" && "w-1.5 h-1.5",
            size === "md" && "w-2 h-2",
            size === "lg" && "w-2.5 h-2.5"
          )} />
        )}
        <span>{children}</span>
        {shouldShowRemove && (
          <button
            type="button"
            onClick={handleRemove}
            className={cn(
              "rounded-full border flex items-center justify-center hover:bg-current/10 transition-colors",
              size === "sm" && "w-3.5 h-3.5 ml-0.5",
              size === "md" && "w-4 h-4 ml-0.5",
              size === "lg" && "w-5 h-5 ml-1",
              variant === "slate" && "border-slate-300",
              variant === "zinc" && "border-zinc-300",
              variant === "gray" && "border-gray-300",
              variant === "red" && "border-red-300",
              variant === "orange" && "border-orange-300",
              variant === "amber" && "border-amber-300",
              variant === "yellow" && "border-yellow-300",
              variant === "lime" && "border-lime-300",
              variant === "green" && "border-green-300",
              variant === "cyan" && "border-cyan-300",
              variant === "sky" && "border-sky-300",
              variant === "blue" && "border-blue-300",
              variant === "indigo" && "border-indigo-300",
              variant === "violet" && "border-violet-300",
              variant === "purple" && "border-purple-300",
              variant === "pink" && "border-pink-300",
              (!variant || variant === "foundation" || variant === "default") && "border-gray-300"
            )}
          >
            <XMarkIcon className={cn(
              size === "sm" && "w-2.5 h-2.5",
              size === "md" && "w-3 h-3",
              size === "lg" && "w-4 h-4"
            )} />
          </button>
        )}
      </div>
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
