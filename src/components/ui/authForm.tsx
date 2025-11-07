import * as React from "react";

import { cn } from "@/lib/utils";

type AuthFormElement = HTMLDivElement;

interface AuthFormProps extends React.HTMLAttributes<AuthFormElement> {
  withCard?: boolean;
}

const AuthForm = React.forwardRef<AuthFormElement, AuthFormProps>(
  ({ className, withCard = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full max-w-[440px] flex-col items-center gap-10 text-center",
          withCard &&
            "rounded-3xl border border-neutral-200 bg-white px-10 py-12 shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);
AuthForm.displayName = "AuthForm";

const AuthFormHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-col items-center gap-3 text-center",
        className
      )}
      {...props}
    />
  )
);
AuthFormHeader.displayName = "AuthFormHeader";

const AuthFormTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "text-4xl font-semibold leading-[40px] tracking-tight text-supreme-blue-900",
        className
      )}
      {...props}
    />
  )
);
AuthFormTitle.displayName = "AuthFormTitle";

const AuthFormSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-base font-medium leading-6 text-neutral-700",
        className
      )}
      {...props}
    />
  )
);
AuthFormSubtitle.displayName = "AuthFormSubtitle";

const AuthFormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "max-w-[360px] text-base leading-6 text-neutral-600",
        className
      )}
      {...props}
    />
  )
);
AuthFormDescription.displayName = "AuthFormDescription";

const AuthFormBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    />
  )
);
AuthFormBody.displayName = "AuthFormBody";

const AuthFormActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  )
);
AuthFormActions.displayName = "AuthFormActions";

const AuthFormPrimary = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("w-full", className)} {...props} />
  )
);
AuthFormPrimary.displayName = "AuthFormPrimary";

interface AuthFormDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const AuthFormDivider = React.forwardRef<HTMLDivElement, AuthFormDividerProps>(
  ({ className, label = "OR", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500",
        className
      )}
      {...props}
    >
      <span className="h-px flex-1 bg-neutral-200" />
      <span>{label}</span>
      <span className="h-px flex-1 bg-neutral-200" />
    </div>
  )
);
AuthFormDivider.displayName = "AuthFormDivider";

const AuthFormFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col items-center gap-2 text-sm text-neutral-500", className)}
      {...props}
    />
  )
);
AuthFormFooter.displayName = "AuthFormFooter";

type AuthFormComponent = React.ForwardRefExoticComponent<
  AuthFormProps & React.RefAttributes<AuthFormElement>
> & {
  Header: typeof AuthFormHeader;
  Title: typeof AuthFormTitle;
  Subtitle: typeof AuthFormSubtitle;
  Description: typeof AuthFormDescription;
  Body: typeof AuthFormBody;
  Primary: typeof AuthFormPrimary;
  Actions: typeof AuthFormActions;
  Divider: typeof AuthFormDivider;
  Footer: typeof AuthFormFooter;
};

const AuthFormComponent = AuthForm as AuthFormComponent;

AuthFormComponent.Header = AuthFormHeader;
AuthFormComponent.Title = AuthFormTitle;
AuthFormComponent.Subtitle = AuthFormSubtitle;
AuthFormComponent.Description = AuthFormDescription;
AuthFormComponent.Body = AuthFormBody;
AuthFormComponent.Primary = AuthFormPrimary;
AuthFormComponent.Actions = AuthFormActions;
AuthFormComponent.Divider = AuthFormDivider;
AuthFormComponent.Footer = AuthFormFooter;

export type { AuthFormProps, AuthFormDividerProps };
export {
  AuthFormComponent as AuthForm,
  AuthFormHeader,
  AuthFormTitle,
  AuthFormSubtitle,
  AuthFormDescription,
  AuthFormBody,
  AuthFormPrimary,
  AuthFormActions,
  AuthFormDivider,
  AuthFormFooter,
};
export default AuthFormComponent;
