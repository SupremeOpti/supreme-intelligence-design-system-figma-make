import React from "react";
import { cn } from "../../../lib/utils";

interface AnalyticsProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Analytics: React.FC<AnalyticsProps> = ({
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
        d="M17.5847 17.9337V13.0471M12 17.9337V10.9529M6.4153 17.9337L6.4153 15.1414M12.982 7.48163L16.59 8.83464M11.1614 7.74231L7.25316 10.6735M18.3251 8.46722C18.7341 8.87615 18.7341 9.53915 18.3251 9.94808C17.9162 10.357 17.2532 10.357 16.8443 9.94808C16.4353 9.53915 16.4353 8.87615 16.8443 8.46722C17.2532 8.05828 17.9162 8.05828 18.3251 8.46722ZM7.15573 10.5615C7.56466 10.9704 7.56466 11.6334 7.15573 12.0423C6.7468 12.4513 6.08379 12.4513 5.67486 12.0423C5.26593 11.6334 5.26593 10.9704 5.67486 10.5615C6.08379 10.1525 6.7468 10.1525 7.15573 10.5615ZM12.7404 6.37295C13.1494 6.78188 13.1494 7.44489 12.7404 7.85382C12.3315 8.26275 11.6685 8.26275 11.2596 7.85382C10.8506 7.44489 10.8506 6.78188 11.2596 6.37295C11.6685 5.96402 12.3315 5.96402 12.7404 6.37295Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
