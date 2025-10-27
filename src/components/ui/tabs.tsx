import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center bg-muted text-muted-foreground",
  {
    variants: {
      variant: {
        default: "bg-white border-b-2 border-neutral-200",
        "supreme-blue": "bg-supreme-blue-50",
        "card": "bg-white border border-neutral-200 shadow-sm",
        "outlined": "bg-white border-b border-slate-300",
        "filled": "bg-white border border-neutral-300",
        "selector": "bg-transparent",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-white data-[state=active]:text-neutral-900 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900",
        "supreme-blue": "data-[state=active]:bg-white data-[state=active]:text-[#201A72] data-[state=active]:shadow-sm mt-1.5 text-neutral-600 text-base font-semibold hover:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-b-[#201A72]",
        "card": "data-[state=active]:bg-supreme-blue-50 data-[state=active]:text-supreme-blue-700 data-[state=active]:shadow-sm text-neutral-600 hover:text-neutral-900",
        "outlined": "border-b-[3px] border-slate-300 data-[state=active]:border-b-[3px] data-[state=active]:border-indigo-900 data-[state=active]:font-semibold data-[state=active]:text-indigo-900 text-gray-700 font-normal py-3.5",
        "filled": "border border-neutral-300 bg-white data-[state=active]:bg-neutral-50 data-[state=active]:font-medium text-neutral-900 hover:bg-supreme-blue-50 text-sm py-2 px-3.5",
        "selector": "rounded-full px-5 py-2.5 data-[state=active]:bg-supreme-blue-100 data-[state=active]:text-supreme-blue-500 data-[state=active]:font-medium text-neutral-400 hover:text-neutral-600",
      },
      size: {
        default: "px-3 py-1.5 text-sm",
        sm: "px-2.5 py-1 text-xs",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        "supreme-blue": "pt-4",
        "card": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "outlined": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "filled": "bg-white rounded-lg border border-neutral-200 p-4 shadow-sm",
        "selector": "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size, className }))}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, size, className }))}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof tabsContentVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant, className }))}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// Tab Group Component for easier usage
interface TabGroupProps {
  tabs: Array<{
    value: string
    label: string
    content: React.ReactNode
    disabled?: boolean
  }>
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: VariantProps<typeof tabsListVariants>["variant"]
  size?: VariantProps<typeof tabsListVariants>["size"]
  className?: string
  orientation?: "horizontal" | "vertical"
}

const TabGroup = React.forwardRef<
  HTMLDivElement,
  TabGroupProps
>(({ 
  tabs, 
  defaultValue, 
  value, 
  onValueChange, 
  variant = "default",
  size = "default",
  className,
  orientation = "horizontal"
}, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)}>
      <Tabs
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        orientation={orientation}
        className="w-full"
      >
        <TabsList variant={variant} size={size} className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              disabled={tab.disabled}
              variant={variant}
              size={size}
              className="flex-1"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} variant={variant}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
})
TabGroup.displayName = "TabGroup"

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabGroup,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
} 