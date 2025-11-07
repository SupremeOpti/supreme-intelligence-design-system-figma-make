import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-4 overflow-hidden rounded-lg border p-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border-neutral-300 bg-white",
        primary: "border-supreme-blue-300 bg-supreme-blue-50",
        error: "border-red-600 bg-red-50",
        warning: "border-orange-300 bg-orange-50",
        success: "border-green-300 bg-green-50",
      },
      size: {
        floating: "max-w-full sm:max-w-xl lg:max-w-3xl",
        "full-width": "max-w-full items-center gap-4 rounded-none border-b border-l-0 border-r-0 border-t-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "floating",
    },
  }
);

type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>;
type ToastSize = NonNullable<VariantProps<typeof toastVariants>["size"]>;

const TOAST_DEFAULT_VARIANT: ToastVariant = "default";
const TOAST_DEFAULT_SIZE: ToastSize = "floating";

const ToastContext = React.createContext<{
  variant: ToastVariant;
  size: ToastSize;
}>({
  variant: TOAST_DEFAULT_VARIANT,
  size: TOAST_DEFAULT_SIZE,
});

const useToastContext = () => React.useContext(ToastContext);

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
    size?: ToastSize;
  }
>(({ className, size = TOAST_DEFAULT_SIZE, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    data-size={size}
    className={cn(
      "fixed top-0 z-[100] flex w-full flex-col gap-3 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:p-6",
      size === "floating" && "sm:max-w-xl lg:max-w-3xl",
      size === "full-width" && "sm:w-full",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, size, ...props }, ref) => {
  const toastVariant: ToastVariant = variant ?? TOAST_DEFAULT_VARIANT;
  const toastSize: ToastSize = size ?? TOAST_DEFAULT_SIZE;

  return (
    <ToastContext.Provider value={{ variant: toastVariant, size: toastSize }}>
      <ToastPrimitives.Root
        ref={ref}
        data-variant={toastVariant}
        data-size={toastSize}
        className={cn(
          toastVariants({ variant: toastVariant, size: toastSize }),
          className
        )}
        {...props}
      />
    </ToastContext.Provider>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof toastVariants>
>(({ className, variant, size, children, ...props }, ref) => {
  const context = useToastContext();
  const iconVariant: ToastVariant = variant ?? context.variant;
  const iconSize: ToastSize = size ?? context.size;

  return (
    <div
      ref={ref}
      className={cn(
        "flex shrink-0 items-center justify-center gap-2.5 rounded-lg border p-2.5",
        iconSize === "full-width" && "gap-0 border-0 p-0",
        iconVariant === "default" && iconSize === "floating" && "border-neutral-200",
        iconVariant === "primary" && iconSize === "floating" && "border-supreme-blue-200",
        iconVariant === "error" && iconSize === "floating" && "border-red-200",
        iconVariant === "warning" && iconSize === "floating" && "border-orange-200",
        iconVariant === "success" && iconSize === "floating" && "border-green-200",
        className
      )}
      {...props}
    >
      {children ?? (
        <InformationCircleIcon
          className={cn(
            "h-6 w-6 shrink-0",
            iconVariant === "default" && "text-neutral-900",
            iconVariant === "primary" && "text-supreme-blue-700",
            iconVariant === "error" && "text-red-800",
            iconVariant === "warning" && "text-orange-800",
            iconVariant === "success" && "text-green-700"
          )}
        />
      )}
    </div>
  );
});
ToastIcon.displayName = "ToastIcon";

const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { size?: ToastSize }
>(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const contentSize: ToastSize = size ?? context.size;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex min-h-px min-w-px flex-1 flex-col items-start gap-1.5",
        contentSize === "full-width" &&
          "sm:flex-row sm:items-center sm:justify-between sm:gap-6",
        className
      )}
      {...props}
    />
  );
});
ToastContent.displayName = "ToastContent";

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const actionVariant: ToastVariant = variant ?? context.variant;

  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md bg-transparent text-sm font-medium ring-offset-background transition-colors focus:outline-none",
        actionVariant === "default" && "text-neutral-500",
        actionVariant === "primary" && "text-supreme-blue-700",
        actionVariant === "error" && "text-red-700",
        actionVariant === "warning" && "text-orange-800",
        actionVariant === "success" && "text-green-700",
        className
      )}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> &
    VariantProps<typeof toastVariants>
>(({ className, variant, size, ...props }, ref) => {
  const context = useToastContext();
  const closeVariant: ToastVariant = variant ?? context.variant;
  const closeSize: ToastSize = size ?? context.size;

  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "h-6 w-6 rounded-md p-1 transition-opacity",
        closeSize === "floating"
          ? "absolute right-2.5 top-2 opacity-0 group-hover:opacity-100"
          : "relative ml-3 flex items-center justify-center opacity-100",
        className
      )}
      toast-close=""
      {...props}
    >
      <XMarkIcon
        className={cn(
          "h-6 w-6",
          closeVariant === "default" && "text-neutral-900",
          closeVariant === "primary" && "text-supreme-blue-700",
          closeVariant === "error" && "text-red-800",
          closeVariant === "warning" && "text-orange-800",
          closeVariant === "success" && "text-green-700"
        )}
      />
    </ToastPrimitives.Close>
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const titleVariant: ToastVariant = variant ?? context.variant;

  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn(
        "text-base font-semibold leading-6",
        titleVariant === "default" && "text-neutral-900",
        titleVariant === "primary" && "text-supreme-blue-700",
        titleVariant === "error" && "text-red-800",
        titleVariant === "warning" && "text-orange-800",
        titleVariant === "success" && "text-green-700",
        className
      )}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const context = useToastContext();
  const descriptionVariant: ToastVariant = variant ?? context.variant;

  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn(
        "text-base font-normal leading-6",
        descriptionVariant === "default" && "text-neutral-500",
        descriptionVariant === "primary" && "text-supreme-blue-700",
        descriptionVariant === "error" && "text-red-700",
        descriptionVariant === "warning" && "text-orange-800",
        descriptionVariant === "success" && "text-green-700",
        className
      )}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

const ToastActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof toastVariants>
>(({ className, size, ...props }, ref) => {
  const context = useToastContext();
  const actionsSize: ToastSize = size ?? context.size;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-wrap gap-1.5",
        actionsSize === "full-width"
          ? "items-center justify-end gap-3"
          : "items-start",
        className
      )}
      {...props}
    />
  );
});
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


