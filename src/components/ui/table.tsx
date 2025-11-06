import * as React from "react";
import { GlobeAltIcon, ArrowDownIcon, LinkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

// Get color for score ranges using design system colors
const getScoreColor = (score: number) => {
  if (1 <= score && score <= 10) return "bg-[#FF8F8F] text-neutral-800";
  if (11 <= score && score <= 20) return "bg-[#FFB28E] text-neutral-800";
  if (21 <= score && score <= 30) return "bg-[#FFE15D] text-neutral-800";
  if (31 <= score && score <= 50) return "bg-[#6CFFA5] text-neutral-800";
  return "bg-[#FF8F8F] text-neutral-800";
};


const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-violet-50 border-b border-neutral-200", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y divide-gray-200", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    onClick?: () => void;
    clickable?: boolean;
  }
>(({ className, onClick, clickable, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-neutral-50 data-[state=selected]:bg-muted",
      clickable && "cursor-pointer hover:bg-blue-50",
      className
    )}
    onClick={onClick}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
  }
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "px-6 py-4 text-left align-middle font-semibold text-sm leading-4 text-neutral-800 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  >
    {children}
  </th>
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

// Checkbox component for table selection
const TableCheckbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "h-4 w-4 rounded border-gray-300 text-supreme-blue-600 focus:ring-supreme-blue-500",
      className
    )}
    {...props}
  />
));
TableCheckbox.displayName = "TableCheckbox";

// TableHeader cell component for table headers with optional checkbox and sort icon
export interface TableHeaderCellProps {
  showCheckbox?: boolean;
  rightIcon?: boolean | React.ReactNode;
  showText?: string;
  state?: "Default";
  children?: React.ReactNode;
  selectedRows?: Set<number>;
  setSelectedRows?: (selectedRows: Set<number>) => void;
  tableData?: any[];
  handleHeaderCheckbox?: (checked: boolean) => void;
}

const TableHeaderCell = React.forwardRef<
  HTMLDivElement,
  TableHeaderCellProps & React.HTMLAttributes<HTMLDivElement>
>(({ className, showCheckbox = true, rightIcon = true, showText = "", state = "Default", selectedRows, setSelectedRows, tableData, handleHeaderCheckbox, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-2 items-center", className)}
    {...props}
  >
    {showCheckbox && (
      <TableCheckbox
        checked={
          selectedRows.size === tableData.length &&
          tableData.length > 0
        }
        onChange={(e) => handleHeaderCheckbox(e.target.checked)}
      />
    )}
    {showText && (
      <p className="font-semibold leading-4 relative shrink-0 text-neutral-800 text-sm">
        {showText}
      </p>
    )}
    {rightIcon && (
      typeof rightIcon === "boolean" ? (
        <ArrowDownIcon className="h-4 w-4 relative shrink-0" />
      ) : (
        <div className="relative shrink-0 flex items-center justify-center">
          {rightIcon}
        </div>
      )
    )}
  </div>
));
TableHeaderCell.displayName = "TableHeaderCell";

// TableCellGeneric component for various cell styles
export interface TableCellGenericProps {
  showCheckbox?: boolean;
  style?: "Lead Text" | "Text" | "Badge" | "CTA" | "Score" | "Range";
  description?: boolean;
  state?: "Default";
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  selectedRows?: Set<number>;
  handleRowCheckbox?: (rowId: number, checked: boolean) => void;
  rowId?: number;
  score?: number;
  range?: string;
  lvl?: "1" | "2";
}

const TableCellGeneric = React.forwardRef<
  HTMLTableCellElement,
  TableCellGenericProps & React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, showCheckbox = true, style = "Lead Text", description = true, state = "Default", title, subtitle, selectedRows,
  handleRowCheckbox,
  rowId, children, score, range, lvl, ...props }, ref) => {
  if (style === "Score") {
    return (
      <Score score={score} />
    );
  }

  if (style === "Range") {
    return (
      <Range range={range} lvl={lvl} />
    )
  }

  if (style === "Text" && description === true && state === "Default") {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap", className)}
        {...props}
      >
        <p className="font-medium relative shrink-0 text-neutral-800 w-full">
          {title || "Tempor suspendisse amet"}
        </p>
        <p className="font-normal relative shrink-0 text-neutral-600 w-full">
          {subtitle || "At enim nisi commodo"}
        </p>
      </div>
    );
  }

  if (style === "Text" && description === false && state === "Default") {
    return (
      <div
        ref={ref}
        className={cn("flex leading-4 relative text-neutral-600 text-sm whitespace-pre-wrap", className)}
        {...props}
      >
        <p className="font-normal relative shrink-0 w-full">
          {children || "Tempor suspendisse amet"}
        </p>
      </div>
    );
  }

  // CTA style
  if (style === "CTA" && state === "Default") {
    return (
      <div
        ref={ref}
        className={cn("flex gap-1.5 items-center", className)}
        {...props}
      >
        {children}
      </div>
    );
  }


  // Badge style
  if (style === "Badge" && state === "Default") {
    return (
      <div
        ref={ref}
        className={cn("flex justify-center gap-1.5 items-center", className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Default: Lead Text style
  return (
    <div
      ref={ref}
      className={cn("flex gap-1.5 items-center", className)}
      {...props}
    >
      {showCheckbox && (
        <TableCheckbox
          checked={selectedRows.has(rowId)}
          onChange={(e) =>
            handleRowCheckbox(rowId, e.target.checked)
          }
        />
      )}
      {children || (
        <div className="flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap">
          <p className="font-medium relative shrink-0 text-neutral-800 w-full">
            {title || "Tempor suspendisse amet"}
          </p>
          <p className="font-normal relative shrink-0 text-neutral-600 w-full">
            {subtitle || "At enim nisi commodo"}
          </p>
        </div>
      )}
    </div>
  );
});
TableCellGeneric.displayName = "TableCellGeneric";

// TableCellBenchmark component for lead and score cell types
export interface TableCellBenchmarkProps {
  leftIcon?: React.ReactNode;
  showCheckbox?: boolean;
  descriptionText?: string;
  showScore?: boolean;
  rightIcon?: React.ReactNode;
  style?: "Lead" | "Score";
  state?: "Default" | "Hover";
  children?: React.ReactNode;
  score?: number;
  scoreColor?: string;
  selectedRows?: Set<number>;
  handleRowCheckbox?: (rowId: number, checked: boolean) => void;
  rowId?: number;
}

const TableCellBenchmark = React.forwardRef<
  HTMLTableCellElement,
  TableCellBenchmarkProps & React.TdHTMLAttributes<HTMLTableCellElement>
>(({
  className,
  leftIcon = true,
  showCheckbox = true,
  descriptionText,
  showScore = true,
  rightIcon = false,
  style = "Lead",
  state = "Default",
  children,
  score,
  scoreColor = "#6CFFA5",
  selectedRows,
  handleRowCheckbox,
  rowId,
  ...props
}, ref) => {
  if (style === "Score" && state === "Default") {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white flex gap-2 h-[68px] items-center px-6 py-4",
          className
        )}
        {...props}
      >
        {showScore && (
          <div
            className="flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9"
            style={{ backgroundColor: scoreColor }}
          >
            <p className="text-xs leading-4 text-neutral-800">
              {score || 40}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (style === "Score" && state === "Hover") {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-violet-50 flex gap-2 h-[68px] items-center px-6 py-4",
          className
        )}
        {...props}
      >
        {showScore && (
          <div
            className="flex flex-col gap-[10px] items-center justify-center px-2.5 py-0 rounded-[2px] shrink-0 w-9"
            style={{ backgroundColor: scoreColor }}
          >
            <p className="text-xs leading-4 text-neutral-800">
              {score || 40}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (style === "Lead" && state === "Hover") {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-violet-50 flex gap-2 items-center px-6 py-4 w-[357px]",
          className
        )}
        {...props}
      >
        <div className="flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0">
          {showCheckbox && (
            <TableCheckbox
              checked={selectedRows.has(rowId)}
              onChange={(e) =>
                handleRowCheckbox(rowId, e.target.checked)
              }
            />
          )}
          <div className="flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0">
            {leftIcon !== undefined && (
              <div className="flex gap-6 items-end relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-4">
                  {leftIcon === true ? (
                    <GlobeAltIcon className="size-4 text-neutral-900" />
                  ) : leftIcon ? (
                    leftIcon
                  ) : null}
                </div>
              </div>
            )}
            {children ? (
              children
            ) : (
              <div className="flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap">
                <p className="font-medium relative shrink-0 text-supreme-blue-700 w-full">
                  Company Name Here
                </p>
                {descriptionText && (
                  <p className="font-normal relative shrink-0 text-neutral-500 w-full">
                    {descriptionText}
                  </p>
                )}
              </div>
            )}
            {rightIcon !== undefined && (
              <div className="overflow-clip relative shrink-0 size-4">
                {rightIcon === true ? (
                  <LinkIcon className="size-4 text-supreme-blue-700" />
                ) : rightIcon ? (
                  rightIcon
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default: Lead style, Default state
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white flex gap-2 items-center px-4 py-2 w-[357px]",
        className
      )}
      {...props}
    >
      <div className="flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0">
        {showCheckbox && (
          <input
            type="checkbox"
            className="bg-white border border-neutral-500 rounded-sm shrink-0 size-4"
          />
        )}
        <div className="flex flex-1 gap-2 items-center min-h-px min-w-px shrink-0">
          {leftIcon === true && (
            <div className="overflow-clip relative shrink-0 size-4">
              <GlobeAltIcon className="size-4 text-neutral-900" />
            </div>
          )}
          {children ? (
            children
          ) : (
            <div className="flex flex-1 flex-col gap-1 items-start leading-4 text-sm whitespace-pre-wrap">
              <p className="font-medium relative shrink-0 text-supreme-blue-700 w-full">
                Company Name Here
              </p>
              {descriptionText && (
                <p className="font-normal relative shrink-0 text-neutral-500 w-full">
                  {descriptionText}
                </p>
              )}
            </div>
          )}
          {rightIcon === true && (
            <div className="overflow-clip relative shrink-0 size-4">
              <LinkIcon className="size-4 text-supreme-blue-700" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TableCellBenchmark.displayName = "TableCellBenchmark";

// AuditScoreColor component for score ranges with color coding
export interface RangeProps {
  range?: string;
  lvl?: "1" | "2";
}

const Range = React.forwardRef<
  HTMLDivElement,
  RangeProps & React.HTMLAttributes<HTMLDivElement>
>(({ className, range = "0-10", lvl = "1", ...props }, ref) => {
  const baseClasses = "flex gap-[10px] h-14 items-center justify-center w-[120px]";

  const element = (
    <p className="font-normal leading-[18px] relative shrink-0 text-[#4e4c6c] text-sm text-center">
      {range}
    </p>
  );

  if (range === "0-10" && lvl === "1") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ff8f8f]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "0-10" && lvl === "2") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ff8f8f]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "11-20" && lvl === "1") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ffb28e]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "11-20" && lvl === "2") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ffb28e]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "21-30" && lvl === "1") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ffe15d]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "21-30" && lvl === "2") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#ffe15d]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "31-50" && lvl === "1") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#6cffa5]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.5)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

  if (range === "31-50" && lvl === "2") {
    return (
      <div
        ref={ref}
        className={cn("bg-[#6cffa5]", baseClasses, className)}
        {...props}
      >
        <div className="bg-[rgba(255,255,255,0.8)] flex flex-1 gap-[10px] h-full items-center justify-center min-h-px min-w-px relative shrink-0">
          {element}
        </div>
      </div>
    );
  }

});

Range.displayName = "Range";

// Simple Score component without opacity layers
export interface ScoreProps {
  score?: number;
}

const Score = React.forwardRef<
  HTMLDivElement,
  ScoreProps & React.HTMLAttributes<HTMLDivElement>
>(({ className, score = 40, ...props }, ref) => {
  const element = (
    <p className={cn("font-normal leading-4 relative shrink-0 text-xs whitespace-pre-wrap w-9 px-2.5 py-0 rounded-[2px]", getScoreColor(score))}>
      {score}
    </p>
  );

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      {element}
    </div>
  );
});
Score.displayName = "Score";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableHeaderCell,
  TableCellGeneric,
  TableCellBenchmark,
  Range,
  Score,
};
