import * as React from "react"
import { BoltIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

export interface CreditsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  label?: string
  showLabel?: boolean
}

const Credits = React.forwardRef<HTMLDivElement, CreditsProps>(
  ({ className, value, label = "Total credits used:", showLabel = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100",
          className
        )}
        {...props}
      >
        {showLabel && (
          <span className="text-xs text-teal-800">
            {label}
          </span>
        )}
        <div className="flex items-center gap-1">
          <BoltIcon className="size-3.5 text-teal-800" />
          <span className="text-xs font-medium text-teal-800">
            {value.toLocaleString()}
          </span>
        </div>
      </div>
    )
  }
)
Credits.displayName = "Credits"

export { Credits }

