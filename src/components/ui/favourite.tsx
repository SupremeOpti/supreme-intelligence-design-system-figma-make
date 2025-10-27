import * as React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export interface FavouriteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Favourite = React.forwardRef<HTMLButtonElement, FavouriteProps>(
  ({ className, active = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center p-2 rounded-full border transition-all duration-200",
          active
            ? "bg-supreme-blue-500 border-supreme-blue-500"
            : "bg-white border-neutral-300 hover:bg-supreme-blue-50 hover:border-supreme-blue-200",
          className
        )}
        {...props}
      >
        <div className="size-[15px] flex items-center justify-center">
          {active ? (
            <HeartSolidIcon className="size-[15px] text-white" />
          ) : (
            <HeartIcon className="size-[15px] text-neutral-500" />
          )}
        </div>
      </button>
    );
  }
);
Favourite.displayName = "Favourite";

export { Favourite };

