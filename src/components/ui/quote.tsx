import * as React from "react";
import { cn } from "@/lib/utils";

export interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  authorName: string;
  authorTitle: string;
  avatar: React.ReactNode;
}

const Quote = React.forwardRef<HTMLDivElement, QuoteProps>(
  ({ 
    className, 
    quote, 
    authorName, 
    authorTitle, 
    avatar,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2.5 w-full max-w-[850px]", className)}
        {...props}
      >
        <div className="flex flex-col gap-[15px] w-full">
          {/* Quote bubble with tail */}
          <div className="flex flex-col pb-1.5 w-full">
            {/* Quote content */}
            <div className="bg-supreme-blue-50 flex gap-2.5 items-center justify-center px-6 py-[17px] rounded-[10px] w-full mb-[-6px]">
              <p className="flex-1 text-base font-normal leading-6 text-neutral-800 whitespace-pre-wrap">
                "{quote}"
              </p>
            </div>
          </div>
          
          {/* Author section */}
          <div className="flex gap-2.5 items-center">
            {avatar}
            <div className="flex flex-col gap-0.5 text-neutral-800">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold leading-5">{authorName}</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-normal leading-4">{authorTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Quote.displayName = "Quote";

export { Quote };