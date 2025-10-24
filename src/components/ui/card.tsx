import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowTrendingUpIcon,
  DocumentIcon,
  PencilSquareIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Announcement Card Component
const AnnouncementCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    author?: string;
    date?: string;
    content: string;
    badgeText?: string;
  }
>(({ className, title, author, date, content, badgeText, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl border border-slate-300 p-6 w-[504px] relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      <div className="flex flex-col gap-2.5 items-start">
        <h3 className="text-lg font-semibold text-black leading-7 whitespace-pre-wrap">
          {title}
        </h3>
        {(author || date) && (
          <div className="flex gap-2.5 items-center">
            {author && (
              <span className="text-xs font-normal text-neutral-500 leading-4">
                {author}
              </span>
            )}
            {author && date && (
              <span className="text-xs text-neutral-500">|</span>
            )}
            {date && (
              <span className="text-xs font-normal text-neutral-500 leading-4">
                {date}
              </span>
            )}
          </div>
        )}
        <p className="text-base font-normal text-neutral-800 leading-6 w-full whitespace-pre-wrap">
          {content}
        </p>
      </div>
      {badgeText && (
        <div className="absolute top-7 right-5">
          <Badge variant="default" className="text-gray-600 text-xs">
            {badgeText}
          </Badge>
        </div>
      )}
    </div>
  );
});
AnnouncementCard.displayName = "AnnouncementCard";

// Info Card Component
const InfoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    subtitle?: string;
    description?: string;
    showIcon?: boolean;
  }
>(({ className, title, subtitle, description, showIcon = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl max-w-[337px] border border-neutral-300 p-6 relative transition-all duration-200 hover:shadow-lg focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      {showIcon && (
        <div className="absolute top-6 right-6">
          <SparklesIcon className="w-[18px] h-[18px]" />
        </div>
      )}
      <div className={cn(showIcon && "pr-8")}>
        {subtitle && (
          <p className="text-lg font-normal text-neutral-700 mb-2">
            {subtitle}
          </p>
        )}
        {title && (
          <h3 className="text-2xl font-semibold text-neutral-800 mb-1">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-base font-normal text-neutral-600 leading-6">
            {description}
          </p>
        )}
      </div>
    </div>
  );
});
InfoCard.displayName = "InfoCard";

// Icon Card Component
const IconCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    value?: string | number;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
  }
>(({ className, title, value, showLeftIcon = true, showRightIcon = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between bg-white rounded-xl border border-slate-300 p-6 w-[379px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      {/* Left side - Icon and content */}
      <div className="flex gap-3 items-center">
        {showLeftIcon && (
          <div className="bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full flex-shrink-0">
            <ArrowTrendingUpIcon className="w-[25px] h-[25px] text-neutral-800" />
          </div>
        )}
        {/* Content */}
        <div className="flex flex-col gap-1 items-start whitespace-nowrap">
          {title && (
            <h3 className="text-base font-normal text-neutral-600 leading-6">
              {title}
            </h3>
          )}
          {value && (
            <div className="text-2xl font-semibold text-neutral-800 leading-8">{value}</div>
          )}
        </div>
      </div>
      {/* Right side - Users icon */}
      {showRightIcon && (
        <UsersIcon className="w-[35px] h-[35px] text-supreme-blue-700" />
      )}
    </div>
  );
});
IconCard.displayName = "IconCard";

// Message Angle
const MessageAngle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
  }
>(({ className, title, description, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white rounded-md p-4 text-black max-w-[232px]",
      className
    )}
    {...props}
  >
    {title && (
      <h3 className="text-base font-normal mb-3 text-neutral-600">{title}</h3>
    )}
    {description && (
      <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
    )}
    {children}
  </div>
));
MessageAngle.displayName = "MessageAngle";

const MessageCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    headerTitle: string;
    mainContent: string;
    nestedTitle: string;
    nestedContent: string;
    showIcon?: boolean;
  }
>(
  (
    {
      className,
      headerTitle,
      mainContent,
      nestedTitle,
      nestedContent,
      showIcon = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl border border-neutral-300 p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none relative",
        className
      )}
      tabIndex={0}
      {...props}
    >
      {showIcon && (
        <div className="absolute top-6 right-6">
          <PencilSquareIcon className="w-[18px] h-[18px] text-neutral-600" />
        </div>
      )}
      <div className="flex flex-col gap-2.5 items-start">
        <div className="flex gap-2 items-center">
          <div className="w-2.5 h-2.5 bg-supreme-blue-300 rounded-full"></div>
          <h3 className="text-lg font-semibold text-supreme-blue-800 leading-7 whitespace-nowrap">
            {headerTitle}
          </h3>
        </div>
        <p className="text-xs font-normal text-neutral-600 leading-4 w-full whitespace-pre-wrap">
          {mainContent}
        </p>
        <MessageAngle title={nestedTitle} description={nestedContent} className="bg-gray-100 rounded-lg p-4" />
      </div>
    </div>
  )
);
MessageCard.displayName = "MessageCard";

const HighlightCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string | number;
    title: string;
    subtitle?: string;
    showIcon?: boolean;
  }
>(({ className, value, title, subtitle, showIcon = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex gap-3.5 items-start bg-white rounded-xl border border-slate-300 p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )}
    tabIndex={0}
    {...props}
  >
    {/* Left side - Circular icon container */}
    {showIcon && (
      <div className="bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full flex-shrink-0">
        <ArrowTrendingUpIcon className="w-[25px] h-[25px] text-neutral-800" />
      </div>
    )}

    {/* Right side - Content */}
    <div className="flex flex-col gap-1">
      <div className="text-3xl font-semibold text-neutral-800 leading-9 whitespace-nowrap">
        {value}%
      </div>
      <h3 className="text-base font-semibold text-neutral-600 leading-6">{title}</h3>
      {subtitle && (
        <p className="text-base font-normal text-neutral-600 leading-6">{subtitle}</p>
      )}
    </div>
  </div>
));
HighlightCard.displayName = "HighlightCard";

const HighlightCTACard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    title?: string;
    value: string | number;
    description: string;
    ctaText?: string;
    onCtaClick?: () => void;
    showIcon?: boolean;
    showDescription?: boolean;
    showAction?: boolean;
  }
>(({ className, title, value, description, ctaText, onCtaClick, showIcon = true, showDescription = true, showAction = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-supreme-blue-50 rounded-xl p-6 flex flex-col gap-3.5 items-start justify-center hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )}
    {...props}
    tabIndex={0}
  >
    {/* Icon and Title */}
    <div className="flex gap-3 items-center">
      {showIcon && (
        <div className="bg-white flex items-center justify-center p-2.5 rounded-full flex-shrink-0">
          <ArrowTrendingUpIcon className="w-[25px] h-[25px] text-supreme-blue-900" />
        </div>
      )}
      {title && (
        <h3 className="text-2xl font-semibold text-supreme-blue-900 leading-8 whitespace-pre-wrap">
          {title}
        </h3>
      )}
    </div>
    
    {/* Value */}
    <div className="text-4xl font-bold text-supreme-blue-900 leading-10 whitespace-nowrap">
      {value}
    </div>
    
    {/* Description */}
    {showDescription && (
      <p className="text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap">
        {description}
      </p>
    )}
    
    {/* CTA Button */}
    {showAction && (
      <button
        onClick={onCtaClick}
        className="text-supreme-blue-900 font-medium text-sm hover:underline cursor-pointer"
      >
        {ctaText || "See More Details"}
      </button>
    )}
  </div>
));
HighlightCTACard.displayName = "HighlightCTACard";

// How It Works Card Component
const HowItWorksCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    stepNumber?: number;
    title: string;
    description: string;
    type?: "numbers" | "icons";
    icon?: React.ReactNode;
  }
>(({ className, stepNumber, title, description, type = "numbers", icon, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "flex flex-col gap-2.5 items-center w-[233px] border border-neutral-300 p-6 rounded-xl hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )} 
    {...props}
  >
    <div className="flex flex-col gap-3.5 items-center justify-center shrink-0 w-full">
      <div className="bg-supreme-blue-50 flex items-center justify-center p-2.5 rounded-full shrink-0 size-[41px]">
        {type === "icons" && icon ? (
          <div className="size-6 flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="text-[#4136d4] text-lg font-bold leading-7 text-center w-full">
            {stepNumber || 1}
          </span>
        )}
      </div>
      <h3 className="text-xl font-normal text-black text-center leading-7">
        {title}
      </h3>
    </div>
    <p className="text-base font-normal text-neutral-600 text-center leading-6 w-full whitespace-pre-wrap">
      {description}
    </p>
  </div>
));
HowItWorksCard.displayName = "HowItWorksCard";

// Card with Single Icon Component
const SingleIconCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description?: string;
    icon?: React.ReactNode;
  }
>(({ className, title, description, icon, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "bg-white rounded-2xl p-5 w-[399px] flex flex-col items-center gap-5 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )} 
    tabIndex={0} 
    {...props}
  >
    {/* Icon container */}
    <div className="size-[60px] shrink-0 flex items-center justify-center">
      {icon || <UsersIcon className="w-15 h-15 text-neutral-900" />}
    </div>
    
    {/* Content */}
    <div className="flex flex-col gap-1.5 items-start text-center w-full">
      <h3 className="text-lg font-semibold text-neutral-900 w-full leading-7">
        {title}
      </h3>
      {description && (
        <p className="text-base font-normal text-neutral-600 w-full leading-6">
          {description}
        </p>
      )}
    </div>
  </div>
));
SingleIconCard.displayName = "SingleIconCard";

// Content Type Card Component
const ContentTypeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    icon?: React.ReactNode;
    variant?: "default" | "selected" | "hover" | "ghost";
  }
>(({ className, title, description, icon, variant = "default", ...props }, ref) => {
  const baseClasses = "flex flex-col gap-2.5 items-start rounded-lg w-[236px]";
  
  const variantClasses = {
    default: "bg-white border border-neutral-300 p-4",
    selected: "bg-supreme-blue-50 border-2 border-supreme-blue-300 p-4",
    hover: "bg-white border border-neutral-400 p-4",
    ghost: "gap-2.5",
  };

  return (
    <div 
      ref={ref} 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )} 
      {...props}
    >
      <div className="flex gap-2.5 items-start relative shrink-0 w-full">
        <div className="size-[35px] flex items-center justify-center shrink-0">
          {icon || <DocumentIcon className="w-[35px] h-[35px] text-supreme-blue-700" />}
        </div>
        <div className="flex flex-1 flex-col gap-1 items-start leading-6 min-w-0 whitespace-pre-wrap">
          <p className="text-lg font-semibold text-neutral-900 w-full">
            {title}
          </p>
          <p className="text-base font-normal text-neutral-600 w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});
ContentTypeCard.displayName = "ContentTypeCard";

// Card With Progress Component
const CardWithProgress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    description: string;
    progressItems: Array<{
      label: string;
      value: number;
      badge?: string;
    }>;
  }
>(({ className, title, description, progressItems, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "bg-white border border-slate-300 rounded-xl p-6 w-[481px] flex flex-col gap-2.5 items-start",
      className
    )} 
    {...props}
  >
    {/* Header */}
    <div className="flex gap-3 items-center">
      <ArrowTrendingUpIcon className="w-[25px] h-[25px] text-neutral-800" />
      <h3 className="text-xl font-bold text-supreme-blue-900 leading-7 whitespace-pre-wrap w-[258px]">
        {title}
      </h3>
    </div>
    
    {/* Description */}
    <p className="text-base font-normal text-neutral-600 leading-6 w-full whitespace-pre-wrap">
      {description}
    </p>
    
    {/* Progress Items */}
    <div className="flex flex-col gap-2.5 w-full">
      {progressItems.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-normal text-neutral-600">{item.label}</span>
            {item.badge && (
              <Badge variant="default" className="text-gray-600 text-xs">
                {item.badge}
              </Badge>
            )}
          </div>
          <Progress value={item.value} className="h-2" indicatorClassName="bg-supreme-blue-600" />
        </div>
      ))}
    </div>
  </div>
));
CardWithProgress.displayName = "CardWithProgress";

export {
  InfoCard,
  IconCard,
  MessageAngle,
  MessageCard,
  HighlightCard,
  HighlightCTACard,
  AnnouncementCard,
  HowItWorksCard,
  SingleIconCard,
  ContentTypeCard,
  CardWithProgress,
};
