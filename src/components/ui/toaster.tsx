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
  ToastActions,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();
  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        children,
        variant,
        ...props
      }) {
        return (
          <Toast key={id} {...props} variant={variant} className="w-full flex">
            <ToastIcon variant={variant} />
            <div className="flex gap-1 flex-col">
              <ToastContent>
                {title && <ToastTitle variant={variant}>{title}</ToastTitle>}
                {description && (
                  <ToastDescription variant={variant}>
                    {description}
                  </ToastDescription>
                )}
              </ToastContent>
              {action}
            </div>
            <ToastClose variant={variant} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
