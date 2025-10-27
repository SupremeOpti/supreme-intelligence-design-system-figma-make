import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "flex items-center rounded-full border px-1.5 py-0.5 text-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        foundation:
          "border bg-slate-100/20 text-slate-900 hover:bg-slate-100/50",
        default: "border bg-gray-100/20 text-gray-900 hover:bg-gray-100/50",
        slate:
          "border-transparent bg-slate-500/20 text-slate-900 hover:bg-slate-500/50",
        zinc:
          "border-transparent bg-zinc-500/20 text-zinc-900 hover:bg-zinc-500/50",
        gray:
          "border-transparent bg-gray-500/20 text-gray-900 hover:bg-gray-500/50",
        red: "border-transparent bg-red-500/20 text-red-900 hover:bg-red-500/50",
        orange:
          "border-transparent bg-orange-500/20 text-orange-900 hover:bg-orange-500/50",
        amber:
          "border-transparent bg-amber-500/20 text-amber-900 hover:bg-amber-500/50",
        yellow:
          "border-transparent bg-yellow-500/20 text-yellow-900 hover:bg-yellow-500/50",
        lime:
          "border-transparent bg-lime-500/20 text-lime-900 hover:bg-lime-500/50",
        green:
          "border-transparent bg-green-500/20 text-green-900 hover:bg-green-500/50",
        cyan:
          "border-transparent bg-cyan-500/20 text-cyan-900 hover:bg-cyan-500/50",
        sky:
          "border-transparent bg-sky-500/20 text-sky-900 hover:bg-sky-500/50",
        blue: "border-transparent bg-blue-500/20 text-blue-900 hover:bg-blue-500/50",
        indigo:
          "border-transparent bg-indigo-500/20 text-indigo-900 hover:bg-indigo-500/50",
        violet:
          "border-transparent bg-violet-500/20 text-violet-900 hover:bg-violet-500/50",
        purple:
          "border-transparent bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200",
        pink: "border-transparent bg-pink-500/20 text-pink-900 hover:bg-pink-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  dismissible?: boolean;
  onDismiss?: () => void;
  dot?: boolean;
  size?: "default" | "foundation";
}

function Badge({
  className,
  variant,
  dismissible,
  onDismiss,
  dot,
  size = "default",
  children,
  ...props
}: BadgeProps) {
  const baseClasses = cn(badgeVariants({ variant }), className);

  // Foundation styling with specific dimensions and spacing
  const foundationClasses =
    size === "foundation"
      ? "w-20 h-5 gap-1.5 px-1.5 py-0.5" // 82px width, 20px height, 6px gap
      : "";

  const finalClasses = cn(baseClasses, foundationClasses);

  return (
    <div
      className={
        finalClasses +
        "flex items-center justify-center gap-1.5 cursor-pointer leading-none"
      }
      {...props}
    >
      {dot && <div className="w-2 h-2 rounded-full bg-current opacity-50" />}
      <span className="h-5">{children}</span>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="rounded-full border border-current hover:bg-black/10 transition-colors p-0.5"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
