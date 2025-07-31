import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

interface TooltipContentProps extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  arrowDirection?: 'top' | 'bottom' | 'left' | 'right'
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, arrowDirection = 'bottom', side, ...props }, ref) => {
  // Automatically set side based on arrow direction
  const getSide = () => {
    if (side) return side // If side is explicitly provided, use it
    switch (arrowDirection) {
      case 'top':
        return 'top'
      case 'bottom':
        return 'bottom'
      case 'left':
        return 'left'
      case 'right':
        return 'right'
      default:
        return 'top'
    }
  }

  const getArrowClasses = () => {
    switch (arrowDirection) {
      case 'top':
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-700"
      case 'bottom':
        return "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-supreme-blue-700"
      case 'left':
        return "absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-supreme-blue-700"
      case 'right':
        return "absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-supreme-blue-700"
      default:
        return "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-supreme-blue-700"
    }
  }

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      side={getSide()}
      className={cn(
        "z-50 overflow-visible rounded-md border-0 bg-supreme-blue-700 px-3 py-1.5 text-sm text-white shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative",
        className
      )}
      {...props}
    >
      {props.children}
      {/* Directional arrow */}
      <div className={getArrowClasses()}></div>
    </TooltipPrimitive.Content>
  )
})
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }