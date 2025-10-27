import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva("h-px -translate-y-1/2", {
  variants: {
    variant: {
      default: "bg-slate-200",
      "high-contrast": "bg-slate-300",
      "low-contrast": "bg-slate-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  orientation?: "horizontal" | "vertical"
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          dividerVariants({ variant, className }),
          orientation === "vertical" && "h-full w-px -translate-x-1/2"
        )}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
