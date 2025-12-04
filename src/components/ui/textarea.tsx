import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
  labelClassName?: string;
  state?: "default" | "active" | "error";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      labelClassName,
      required = false,
      hint,
      error,
      state,
      ...props
    },
    ref
  ) => {
    const isError = state === "error" || Boolean(error);
    const isActive = state === "active";
    return (
      <div className="relative">
        {label && (
          <label
            className={cn(
              "text-sm font-medium bg-background px-1 text-neutral-600 dark:text-supreme-blue-300 mb-1 absolute -top-3 z-10 left-4",
              labelClassName,
              isError && "text-destructive"
            )}
          >
            {label}
            {required && <span className="text-destructive"> *</span>}
          </label>
        )}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            isError
              ? "border-destructive focus-visible:ring-2 focus-visible:ring-destructive"
              : isActive
              ? "border-supreme-blue-800 focus-visible:ring-0"
              : "border-neutral-300 focus-visible:ring-2 focus-visible:ring-supreme-blue-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {hint && !isError && (
          <p className="text-xs leading-4 text-neutral-500">{hint}</p>
        )}
        {isError && (
          <p className="text-xs leading-4 text-destructive">{error || hint}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
