import * as React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export interface StepperIndicatorProps {
  stepNumber?: number;
  step?: "active" | "default" | "done";
}

const StepperIndicator = React.forwardRef<
  HTMLDivElement,
  StepperIndicatorProps & React.HTMLAttributes<HTMLDivElement>
>(({ className, stepNumber, step = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center rounded-full shrink-0 size-[30px]",
        step === "done" &&
          "bg-indigo-950 border-2 !border-white border-shadow-sm p-[6px]",
        step === "default" &&
          "bg-indigo-100 border-2 !border-indigo-300 border-shadow-sm p-[10px]",
        step === "active" &&
          "bg-supreme-blue-500 border-2 !border-white border-shadow-sm p-[10px]",
        className
      )}
      {...props}
    >
      {step === "done" ? (
        <CheckIcon className="w-6 h-6 text-white" />
      ) : (
        <p
          className={cn(
            "font-bold leading-4 text-xs text-center w-full whitespace-pre-wrap",
            step === "default" && "text-indigo-400",
            step === "active" && "text-white"
          )}
        >
          {stepNumber || 1}
        </p>
      )}
    </div>
  );
});
StepperIndicator.displayName = "StepperIndicator";

export interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  stepNumber?: number;
  title: string;
  step?: "active" | "default" | "done";
  showLeftConnector?: boolean;
  showRightConnector?: boolean;
  leftConnectorColor?: string;
  rightConnectorColor?: string;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, stepNumber, title, step = "default", showLeftConnector = false, showRightConnector = false, leftConnectorColor, rightConnectorColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 items-center w-[130px] relative",
          className
        )}
        {...props}
      >
        {showLeftConnector && (
          <div
            className={cn("h-[2px] absolute top-[15px] left-0 z-0", leftConnectorColor)}
            style={{ width: "50px" }}
          />
        )}
        <StepperIndicator stepNumber={stepNumber} step={step} />
        {showRightConnector && (
          <div
            className={cn("h-[2px] absolute top-[15px] right-0 z-0", rightConnectorColor)}
            style={{ width: "50px" }}
          />
        )}
        <p
          className={cn(
            "leading-4 text-xs text-center tracking-normal",
            step === "done" && "text-neutral-800 font-normal",
            step === "default" && "text-neutral-500 font-bold",
            step === "active" && "text-neutral-800 font-bold"
          )}
        >
          {title}
        </p>
      </div>
    );
  }
);
StepperItem.displayName = "StepperItem";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Array<{
    stepNumber?: number;
    title: string;
    step: "active" | "default" | "done";
  }>;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center relative", className)}
        {...props}
      >
        {steps.map((stepData, index) => {
          // Calculate left connector color
          const prevStep = index > 0 ? steps[index - 1] : null;
          let leftConnectorColor = "";
          if (prevStep) {
            if (prevStep.step === "done" && stepData.step === "active") {
              leftConnectorColor = "bg-gradient-to-r from-indigo-700 to-indigo-500";
            } else if (prevStep.step === "done" || prevStep.step === "active") {
              leftConnectorColor = "bg-gradient-to-r from-indigo-300 to-slate-50";
            } else {
              leftConnectorColor = "bg-slate-50";
            }
          }
          
          // Calculate right connector color
          const nextStep = index < steps.length - 1 ? steps[index + 1] : null;
          let rightConnectorColor = "";
          if (nextStep) {
            if (stepData.step === "done" && nextStep.step === "active") {
              rightConnectorColor = "bg-gradient-to-r from-indigo-950 to-indigo-700";
            } else if (stepData.step === "done" || stepData.step === "active") {
              rightConnectorColor = "bg-gradient-to-r from-indigo-500 to-indigo-300";
            } else {
              rightConnectorColor = "bg-slate-50";
            }
          }
          
          return (
            <StepperItem
              key={index}
              stepNumber={stepData.stepNumber}
              title={stepData.title}
              step={stepData.step}
              showLeftConnector={index > 0}
              showRightConnector={index < steps.length - 1}
              leftConnectorColor={leftConnectorColor}
              rightConnectorColor={rightConnectorColor}
            />
          );
        })}
      </div>
    );
  }
);
Stepper.displayName = "Stepper";

export { Stepper, StepperItem, StepperIndicator };

