import React from "react";
import { cn } from "../../../lib/utils";

interface LinkedInIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({
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
        d="M7.44 5.25784C7.43974 5.78827 7.22877 6.29687 6.85351 6.67176C6.47825 7.04664 5.96944 7.2571 5.439 7.25684C4.90857 7.25657 4.39997 7.0456 4.02508 6.67034C3.6502 6.29508 3.43974 5.78627 3.44 5.25584C3.44027 4.7254 3.65124 4.2168 4.0265 3.84192C4.40176 3.46703 4.91057 3.25657 5.441 3.25684C5.97144 3.2571 6.48004 3.46807 6.85492 3.84333C7.22981 4.21859 7.44027 4.7274 7.44 5.25784ZM7.5 8.73784H3.5V21.2578H7.5V8.73784ZM13.82 8.73784H9.84V21.2578H13.78V14.6878C13.78 11.0278 18.55 10.6878 18.55 14.6878V21.2578H22.5V13.3278C22.5 7.15784 15.44 7.38784 13.78 10.4178L13.82 8.73784Z"
        fill="#0A66C2"
      />
    </svg>
  );
};
