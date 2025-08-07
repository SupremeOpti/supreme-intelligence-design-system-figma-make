import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  ArrowTrendingUpIcon,
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
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-lg border p-6 max-w-[504px] relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      <div className="pr-16">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
          {title}
        </h3>
        {badgeText && (
          <div className="absolute top-6 right-6">
            <Badge variant="default" className="text-neutral-700 text-sm">
              {badgeText}
            </Badge>
          </div>
        )}
        {(author || date) && (
          <div className="flex items-center text-sm text-neutral-500 mb-4">
            {author && <span>{author}</span>}
            {author && date && <span className="mx-2">|</span>}
            {date && <span>{date}</span>}
          </div>
        )}
        <div className="space-y-3">
          <p className="text-base text-neutral-800 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
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
  }
>(({ className, title, subtitle, description, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl max-w-[337px] border p-6 relative hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      <div className="absolute top-4 right-4">
        <SparklesIcon className="w-6 h-6" />
      </div>
      <div className="pr-8">
        {subtitle && (
          <p className="text-lg font-medium text-neutral-700 mb-1">
            {subtitle}
          </p>
        )}
        {title && (
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-base text-neutral-600 leading-relaxed">
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
  }
>(({ className, title, value, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex justify-between items-center bg-white rounded-xl border p-6 max-w-[379px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      {/* Left side - Circular icon container */}
      <div className="w-10 h-10 bg-supreme-blue-50 rounded-full flex items-center justify-center">
        <ArrowTrendingUpIcon className="w-5 h-5 text-neutral-800" />
      </div>
      {/* Center content */}
      <div className="flex flex-col items-start text-center">
        {title && (
          <h3 className="text-base font-normal text-neutral-600 mt-1">
            {title}
          </h3>
        )}
        {value && (
          <div className="text-2xl font-semibold text-neutral-800">{value}</div>
        )}
      </div>
      {/* Right side - Users icon container */}
      <UsersIcon className="w-10 h-10 text-supreme-blue-700" />
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
    headerIcon?: React.ReactNode;
    mainContent: string;
    nestedTitle: string;
    nestedContent: string;
  }
>(
  (
    {
      className,
      headerTitle,
      mainContent,
      nestedTitle,
      nestedContent,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-lg border max-w-[290px] p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
        className
      )}
      tabIndex={0}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 bg-supreme-blue-300 rounded-full"></div>
          <h3 className="text-lg font-semibold text-supreme-blue-800">
            {headerTitle}
          </h3>
        </div>
        <PencilSquareIcon className="w-6 h-6 text-neutral-600" />
      </div>
      <div>
        <p className="text-xs text-neutral-600 leading-relaxed mb-6">
          {mainContent}
        </p>
        <div className="bg-gray-100 rounded-lg p-4">
          <h4 className="text-base font-normal text-neutral-700 mb-3">
            {nestedTitle}
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {nestedContent}
          </p>
        </div>
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
  }
>(({ className, value, title, subtitle, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex space-x-4 bg-white max-w-[329px] rounded-xl border p-6 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )}
    tabIndex={0}
    {...props}
  >
    {/* Left side - Circular icon container */}
    <div className="w-10 h-10 bg-supreme-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
      <ArrowTrendingUpIcon className="w-5 h-5 text-neutral-800" />
    </div>

    {/* Right side - Content */}
    <div className="flex-1 min-w-0">
      <div className="text-3xl font-semibold text-neutral-800 mb-1">
        {value}%
      </div>
      <h3 className="text-base font-semibold text-neutral-600 mb-1">{title}</h3>
      {subtitle && (
        <p className="text-base font-normal text-neutral-600">{subtitle}</p>
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
  }
>(({ className, title, value, description, onCtaClick, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-supreme-blue-50 rounded-lg p-6 max-w-[363px] hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-supreme-blue-100 focus:outline-none cursor-pointer outline-none",
      className
    )}
    {...props}
    tabIndex={0}
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <ArrowTrendingUpIcon className="w-5 h-5 text-neutral-800" />
      </div>
      {title && (
        <h3 className="text-2xl font-semibold text-supreme-blue-900">
          {title}
        </h3>
      )}
    </div>
    <div className="mb-4">
      <div className="text-4xl font-bold text-supreme-blue-900">{value}</div>
    </div>
    <p className="text-base text-neutral-600 mb-4 leading-relaxed">
      {description}
    </p>
    <button
      onClick={onCtaClick}
      className="text-supreme-blue-900 font-medium text-sm hover:underline cursor-pointer"
    >
      See More Details
    </button>
  </div>
));
HighlightCTACard.displayName = "HighlightCTACard";

export {
  InfoCard,
  IconCard,
  MessageAngle,
  MessageCard,
  HighlightCard,
  HighlightCTACard,
  AnnouncementCard,
};
