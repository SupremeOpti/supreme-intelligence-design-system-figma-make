import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "checked" | "onCheckedChange"
  > & {
    externalState?: "checked" | "unchecked" | "indeterminate";
  }
>(({ className, externalState, ...props }, ref) => {
  const [state, setState] = React.useState<
    "checked" | "unchecked" | "indeterminate"
  >("unchecked");

  React.useEffect(() => {
    if (externalState) {
      setState(externalState);
    }
  }, [externalState]);

  const handleClick = () => {
    const nextState =
      state === "unchecked"
        ? "checked"
        : state === "checked"
        ? "indeterminate"
        : "unchecked";
    setState(nextState);
    console.log(nextState);
  };

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={state === "checked"}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 bg-white relative",
        "transition-all duration-300 ease-out",
        "hover:border-supreme-blue-700 hover:bg-supreme-blue-50",
        "focus:outline-none focus:ring-4",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-100 disabled:border-neutral-300 disabled:hover:border-neutral-300 disabled:hover:bg-neutral-100",
        state === "checked" && "bg-supreme-blue-50 border-supreme-blue-700",
        state === "indeterminate" &&
          "bg-supreme-blue-50 border-supreme-blue-700",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Custom indicator that always shows based on our state */}
      <div className="absolute inset-0 flex items-center justify-center">
        {state === "checked" && (
          <CheckIcon className="h-4 w-4 text-supreme-blue-700" />
        )}
        {state === "indeterminate" && (
          <MinusIcon className="h-4 w-4 text-supreme-blue-700" />
        )}
      </div>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
