import React from "react";
import { cn } from "../../../lib/utils";

interface AppIconIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const AppIconIcon: React.FC<AppIconIconProps> = ({
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
        opacity="0.8"
        d="M18.8887 9.9334H5.11133M13.3777 15.7888L15.0999 14.0666L13.3777 12.3444M10.6223 12.3444L8.9001 14.0666L10.6223 15.7888M5.11133 9.10676L5.11133 14.8932C5.11133 16.0506 5.11133 16.6293 5.33657 17.0714C5.53471 17.4603 5.85086 17.7764 6.23971 17.9746C6.68178 18.1998 7.26048 18.1998 8.41789 18.1998H15.5821C16.7395 18.1998 17.3182 18.1998 17.7603 17.9746C18.1491 17.7764 18.4653 17.4603 18.6634 17.0714C18.8887 16.6293 18.8887 16.0506 18.8887 14.8932V9.10676C18.8887 7.94935 18.8887 7.37065 18.6634 6.92858C18.4653 6.53972 18.1491 6.22357 17.7603 6.02544C17.3182 5.80019 16.7395 5.80019 15.5821 5.80019L8.41789 5.80019C7.26049 5.80019 6.68178 5.80019 6.23971 6.02544C5.85086 6.22357 5.53471 6.53972 5.33657 6.92858C5.11133 7.37065 5.11133 7.94935 5.11133 9.10676Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
