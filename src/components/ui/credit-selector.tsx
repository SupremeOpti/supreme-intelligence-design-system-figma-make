import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { BoltIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export interface CreditOptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  credits: number;
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export const CreditOption = React.forwardRef<HTMLDivElement, CreditOptionProps>(
  (
    { id, credits, label, selected = false, disabled = false, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start justify-between px-[14px] py-4 rounded-lg w-[490px] border",
          selected
            ? "border-[#847cf0] bg-supreme-blue-50"
            : "border-neutral-300 bg-white",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-[14px]">
          <RadioGroupItem id={id} value={id} disabled={disabled} />

          {/* Credits chip (neutral styling per Figma) */}
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full">
            <BoltIcon className="h-[18px] w-[18px] text-neutral-600" />
            <span className="text-base leading-6 text-neutral-600">
              {credits.toLocaleString()}
            </span>
          </div>
        </div>

        <p className="text-base leading-6 text-neutral-600">{label}</p>
      </div>
    );
  }
);
CreditOption.displayName = "CreditOption";

export interface CreditSelectorProps {
  options: Array<{ id: string; credits: number; label: string; disabled?: boolean }>;
  value?: string;
  defaultValue?: string;
  onValueChange?: (val: string) => void;
  className?: string;
}

export const CreditSelector: React.FC<CreditSelectorProps> = ({
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}) => {
  return (
    <RadioGroup
      className={cn("flex flex-col gap-3", className)}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      {options.map((opt) => (
        <CreditOption
          key={opt.id}
          id={opt.id}
          credits={opt.credits}
          label={opt.label}
          selected={value ? value === opt.id : defaultValue === opt.id}
          disabled={opt.disabled}
          data-node-id="3093:829"
        />
      ))}
    </RadioGroup>
  );
};

CreditSelector.displayName = "CreditSelector";

export default CreditSelector;


