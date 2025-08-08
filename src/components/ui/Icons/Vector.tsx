import React from "react";
import { cn } from "../../../lib/utils";

interface VectorProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Vector: React.FC<VectorProps> = ({
  size = 24,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M9.25 9.25L9.29149 9.22926C9.86461 8.9427 10.5099 9.46034 10.3545 10.082L9.64549 12.918C9.49009 13.5397 10.1354 14.0573 10.7085 13.7707L10.75 13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 6.25H10.0075V6.2575H10V6.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
