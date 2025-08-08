import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import { VectorIcon } from "./Icons/VectorIcon";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] max-h-screen w-1/2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-1/2",
      variant === "success" && "bg-transparent border-green-500 text-green-500",
      variant === "info" && "bg-transparent border-blue-500 text-blue-500",
      variant === "warning" &&
        "bg-transparent border-yellow-500 text-yellow-500",
      variant === "destructive" && "bg-transparent border-red-500 text-red-500",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start space-x-4 overflow-hidden rounded-md border border-neutral-300 bg-white p-6 pr-8 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-neutral-300 bg-white text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        info: "border-neutral-300 bg-blue-100 text-blue-500",
        success: "border-green-300 bg-green-100 text-green-500",
        warning: "border-yellow-300 bg-yellow-100 text-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-shrink-0 w-10 h-10 rounded-sm border bg-white flex items-center justify-center",
      variant === "success" && "bg-transparent border-green-500 text-green-500",
      variant === "info" && "bg-transparent border-blue-500 text-blue-500",
      variant === "warning" &&
        "bg-transparent border-yellow-500 text-yellow-500",
      variant === "destructive" && "bg-transparent border-red-500 text-red-500",
      className
    )}
    {...props}
  >
    <VectorIcon
      className={cn(
        "w-5 h-5",
        variant === "success" && "text-green-500",
        variant === "info" && "text-blue-500",
        variant === "warning" && "text-yellow-500",
        variant === "destructive" && "text-red-500"
      )}
    />
  </div>
));
ToastIcon.displayName = "ToastIcon";

const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-1", className)} {...props} />
));
ToastContent.displayName = "ToastContent";

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent text-sm font-medium ring-offset-background transition-colors focus:outline-none",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <XMarkIcon
      className={cn(
        "h-6 w-6",
        variant === "success" && "text-green-500",
        variant === "info" && "text-blue-500",
        variant === "warning" && "text-yellow-500",
        variant === "destructive" && "text-red-500"
      )}
    />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "text-sm font-semibold text-foreground",
      variant === "success" && "text-green-500",
      variant === "info" && "text-blue-500",
      variant === "warning" && "text-yellow-500",
      variant === "destructive" && "text-red-500",
      className
    )}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground",
      variant === "success" && "text-green-500",
      variant === "info" && "text-blue-500",
      variant === "warning" && "text-yellow-500",
      variant === "destructive" && "text-red-500",
      className
    )}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

const ToastActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center text-sm gap-2", className)}
    {...props}
  />
));
ToastActions.displayName = "ToastActions";

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastIcon,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastActions,
};
