import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dividerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-slate-200",
      "high-contrast": "bg-slate-300",
      "low-contrast": "bg-slate-100",
    },
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
})

export interface DividerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "orientation">,
    VariantProps<typeof dividerVariants> {
  /**
   * The variant style of the divider.
   * @default "default"
   */
  variant?: "default" | "high-contrast" | "low-contrast"
  /**
   * The orientation of the divider.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Whether the divider is decorative (purely visual, not semantic).
   * When `true`, the divider will have `aria-hidden="true"`.
   * @default false
   */
  decorative?: boolean
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className,
      variant,
      orientation = "horizontal",
      decorative = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          dividerVariants({ variant, orientation }),
          className
        )}
        role="separator"
        aria-orientation={orientation}
        aria-hidden={decorative ? "true" : undefined}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
