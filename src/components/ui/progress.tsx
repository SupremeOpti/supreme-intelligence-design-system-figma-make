import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    showValue?: boolean
    size?: "sm" | "default" | "lg"
  }
>(({ className, value, showValue, size = "default", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-2",
    default: "h-3",
    lg: "h-4",
  }

  return (
    <div className="w-full space-y-1">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full bg-secondary",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <div className="flex justify-end">
          <span className="text-sm text-muted-foreground font-medium">
            {value}%
          </span>
        </div>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
