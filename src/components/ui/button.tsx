import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PlusIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        "primary-stroke":
          "border border-[#272080] bg-gradient-to-b from-[#403A9A] to-[#1A1475] text-white shadow-[0px_0px_0px_3.5px_#E2E8F0] hover:bg-gradient-to-b hover:from-[#4E47AF] hover:to-[#312A93] hover:shadow-[0px_0px_0px_3.5px_#E2E8F0] active:bg-gradient-to-b active:from-[#1A1475] active:to-[#403A9A] active:scale-95 transition-all duration-300 ease-out",
        secondary:
          "border border-[#D4D4D4] bg-white text-[#737373] hover:bg-white hover:text-[#272080] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-color":
          "bg-[#EDEBFD] text-[#272080] border border-[#D4D4D4] hover:border-[#272080] transition-all duration-300 ease-out",
        "secondary-blue":
          "bg-[#EDEBFD] text-gray-700 border border-[#C6C2F8] hover:border-[#272080] transition-all duration-300 ease-out",
        link: "text-[#272080] underline-offset-4 hover:underline bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]",
        ghost: "bg-transparent border-none shadow-none h-5 gap-1 min-w-[83px]",
      },
      size: {
        default: "h-10 rounded-full px-6 py-2",
        md: "h-8 rounded-full px-3.5 py-2 text-sm gap-1 min-w-[105px]",
        lg: "h-10 rounded-full px-5 py-2.5 text-base gap-1 min-w-[123px]",
        xl: "h-12 rounded-full px-10 text-lg",
        icon: "h-10 w-10 rounded-full px-2.5 py-2.5 gap-2.5",
        "icon-sm": "h-8 w-8 rounded-full px-2 py-2 gap-2",
        "icon-lg": "h-12 w-12 rounded-full px-3 py-3 gap-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showIcons?: "after" | "before" | "both" | "center" | "none";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      showIcons = "none",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // When using asChild, render children directly without icon logic
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {showIcons === "before" && (
          <>
            <PlusIcon className="h-4 w-4" />
            {children}
          </>
        )}
        {showIcons === "after" && (
          <>
            {children}
            <PlusIcon className="h-4 w-4" />
          </>
        )}
        {showIcons === "both" && (
          <>
            <PlusIcon className="h-4 w-4" />
            {children}
            <PlusIcon className="h-4 w-4" />
          </>
        )}
        {showIcons === "center" && <PlusIcon className="h-4 w-4" />}
        {showIcons === "none" && children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
