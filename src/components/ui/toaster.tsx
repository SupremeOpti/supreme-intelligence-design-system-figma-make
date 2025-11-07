import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastIcon,
  ToastContent,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();
  const viewportSize = toasts.some((toast) => toast.size === "full-width")
    ? "full-width"
    : "floating";
  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        size,
        children,
        variant,
        ...props
      }) {
        return (
          <Toast key={id} {...props} variant={variant} size={size}>
            <ToastIcon />
            <ToastContent>
              <div className="flex flex-col gap-1.5">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
              {action}
            </ToastContent>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport size={viewportSize} />
    </ToastProvider>
  );
}
