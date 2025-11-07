import * as React from "react";

import { cn } from "@/lib/utils";

interface MicrosoftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const MicrosoftIcon = React.forwardRef<SVGSVGElement, MicrosoftIconProps>(
  ({ className, size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      aria-hidden="true"
      focusable="false"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="10.5" height="10.5" x="1" y="1" fill="#F25022" rx="1.5" />
      <rect width="10.5" height="10.5" x="12.5" y="1" fill="#7FBA00" rx="1.5" />
      <rect width="10.5" height="10.5" x="1" y="12.5" fill="#00A4EF" rx="1.5" />
      <rect width="10.5" height="10.5" x="12.5" y="12.5" fill="#FFB900" rx="1.5" />
    </svg>
  )
);

MicrosoftIcon.displayName = "MicrosoftIcon";

export { MicrosoftIcon };

