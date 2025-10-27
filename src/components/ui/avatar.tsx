import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const avatarVariants = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const avatarGroupSpacing = {
  sm: "-space-x-2",
  md: "-space-x-3",
  lg: "-space-x-4",
};

const avatarTextSizes = {
  sm: "text-xs",
  md: "text-base",
  lg: "text-lg",
};

// Context to track if Avatar is inside AvatarGroup and get group size
const AvatarGroupContext = React.createContext<{
  isInGroup: boolean;
  groupSize?: keyof typeof avatarVariants;
}>({
  isInGroup: false,
});

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: keyof typeof avatarVariants;
  type?: "photo" | "initials";
  fallback?: React.ReactNode;
  src?: string;
  alt?: string;
}

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof avatarVariants;
  children: React.ReactNode;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "md", type, fallback, src, alt, children, ...props }, ref) => {
  const { isInGroup, groupSize } = React.useContext(AvatarGroupContext);

  // Use group size if inside AvatarGroup and no explicit size is provided
  const effectiveSize = isInGroup && groupSize ? groupSize : size;

  // Handle type prop for Figma compatibility
  const shouldShowImage = type === "photo" || (type !== "initials" && src);
  const shouldShowFallback = type === "initials" || (!shouldShowImage && fallback);

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        avatarVariants[effectiveSize],
        // Automatically add border when inside AvatarGroup
        isInGroup && "border-2 border-background",
        className
      )}
      {...props}
    >
      {shouldShowImage && src && (
        <AvatarPrimitive.Image
          className="aspect-square h-full w-full"
          src={src}
          alt={alt}
        />
      )}
      {children}
      {shouldShowFallback && fallback && (
        <AvatarPrimitive.Fallback
          className={cn(
            "flex h-full w-full items-center justify-center rounded-full",
            avatarTextSizes[effectiveSize]
          )}
        >
          {fallback}
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, size = "md", children, ...props }, ref) => (
    <AvatarGroupContext.Provider value={{ isInGroup: true, groupSize: size }}>
      <div
        ref={ref}
        className={cn("flex", avatarGroupSpacing[size], className)}
        {...props}
      >
        {children}
      </div>
    </AvatarGroupContext.Provider>
  )
);
AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup };
