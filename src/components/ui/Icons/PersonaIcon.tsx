import React from "react";
import { cn } from "../../../lib/utils";

interface PersonaIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PersonaIcon: React.FC<PersonaIconProps> = ({
  size = 24,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M5.98467 18.6946C6.53216 17.4047 7.81043 16.5 9.3 16.5H14.7C16.1896 16.5 17.4678 17.4047 18.0153 18.6946M15.6 9.75C15.6 11.7382 13.9882 13.35 12 13.35C10.0118 13.35 8.4 11.7382 8.4 9.75C8.4 7.76177 10.0118 6.15 12 6.15C13.9882 6.15 15.6 7.76177 15.6 9.75ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke="currentColor"
        strokeWidth="1.43406"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
