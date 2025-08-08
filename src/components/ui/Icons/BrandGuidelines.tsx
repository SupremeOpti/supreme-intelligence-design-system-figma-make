import React from "react";
import { cn } from "../../../lib/utils";

interface BrandGuidelinesProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const BrandGuidelines: React.FC<BrandGuidelinesProps> = ({
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
        d="M17.6078 12.3739V8.11195C17.6078 6.85569 17.6078 6.22756 17.3633 5.74774C17.1482 5.32567 16.8051 4.98252 16.383 4.76746C15.9032 4.52298 15.2751 4.52298 14.0188 4.52298H9.2335C7.97724 4.52298 7.34912 4.52298 6.86929 4.76746C6.44722 4.98252 6.10407 5.32567 5.88902 5.74774C5.64453 6.22756 5.64453 6.85569 5.64453 8.11195V15.8881C5.64453 17.1443 5.64453 17.7724 5.88902 18.2523C6.10407 18.6743 6.44722 19.0175 6.86929 19.2325C7.34912 19.477 7.97724 19.477 9.2335 19.477H11.6261M13.1216 11.2523H8.63534M10.1307 14.2431H8.63534M14.617 8.26149H8.63534M13.4954 17.2339L14.9908 18.7293L18.3555 15.3647"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
