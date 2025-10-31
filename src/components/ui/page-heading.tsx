import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  description?: string;
  showDescription?: boolean;
}

const PageHeading = React.forwardRef<HTMLDivElement, PageHeadingProps>(
  (
    {
      className,
      heading,
      description,
      showDescription = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-start w-full", className)}
        {...props}
      >
        <div className="flex flex-col gap-7 items-start justify-center w-full">
          <div className="flex flex-col gap-2.5 items-start w-full">
            <h1 className="text-3xl leading-9 font-normal text-neutral-950 w-full">
              {heading}
            </h1>
            {showDescription && description && (
              <p className="text-base leading-6 font-normal text-neutral-600 w-full">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PageHeading.displayName = "PageHeading";

export { PageHeading };

