import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const UserIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    width="21" 
    height="20" 
    viewBox="0 0 21 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path 
      d="M4.48467 16.6946C5.03216 15.4047 6.31043 14.5 7.8 14.5H13.2C14.6896 14.5 15.9678 15.4047 16.5153 16.6946M14.1 7.75C14.1 9.73822 12.4882 11.35 10.5 11.35C8.51177 11.35 6.9 9.73822 6.9 7.75C6.9 5.76177 8.51177 4.15 10.5 4.15C12.4882 4.15 14.1 5.76177 14.1 7.75ZM19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10Z" 
      stroke="currentColor" 
      strokeWidth="1.43406" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
)

const personaVariants = cva(
  "inline-flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-supreme-blue-50 border-neutral-300 text-supreme-blue-800 hover:bg-supreme-blue-100 hover:border-supreme-blue-800",
        selected: "bg-supreme-blue-50 border-supreme-blue-800 text-supreme-blue-800",
        outline: "bg-white border-neutral-300 text-supreme-blue-800 hover:border-supreme-blue-800",
      },
      size: {
        default: "w-[364px] h-8 px-4 py-2",
        sm: "h-8 px-3 py-1.5 text-sm",
        lg: "h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PersonaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof personaVariants> {
  personas?: string[]
  placeholder?: string
  showLeftIcon?: boolean
  showRightIcon?: boolean
  onClick?: () => void
}

const Persona = React.forwardRef<HTMLDivElement, PersonaProps>(
  ({ 
    className, 
    variant, 
    size, 
    personas = [], 
    placeholder = "Select personas...",
    showLeftIcon = true,
    showRightIcon = true,
    onClick,
    ...props 
  }, ref) => {
    const displayText = personas.length > 0 
      ? personas.join(" + ")
      : placeholder

    return (
      <div
        className={cn(
          personaVariants({ variant, size, className }),
          onClick && "cursor-pointer hover:shadow-sm"
        )}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {showLeftIcon && (
          <UserIcon className="h-4 w-4 text-[#272080] flex-shrink-0" />
        )}
        <span className="flex-1 text-sm font-medium truncate">
          {displayText}
        </span>
        {showRightIcon && (
          <ChevronDown className="h-4 w-4 text-[#272080] flex-shrink-0" />
        )}
      </div>
    )
  }
)
Persona.displayName = "Persona"

export { Persona, personaVariants }
