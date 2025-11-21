import * as React from "react";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export interface DragDropProps extends React.HTMLAttributes<HTMLDivElement> {
  onFiles?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  sublabel?: string;
}

export const DragDrop = React.forwardRef<HTMLDivElement, DragDropProps>(
  (
    {
      className,
      onFiles,
      accept = ".pdf,.doc,.docx,.txt",
      multiple = true,
      disabled = false,
      label = "Click to upload or drag and drop",
      sublabel = `PDF, DOC, DOCX, TXT up to 10MB${multiple ? " (Multiple files allowed)" : ""}`,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const openFilePicker = () => {
      if (disabled) return;
      inputRef.current?.click();
    };

    const handleFiles = (fileList: FileList | null) => {
      if (!fileList) return;
      const files = Array.from(fileList);
      onFiles?.(files);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      setIsDragging(true);
    };

    const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (disabled) return;
      setIsDragging(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      // allow re-selecting same file
      e.target.value = "";
    };

    return (
      <div
        ref={ref}
        role="button"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={openFilePicker}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={cn(
          "flex flex-col items-center justify-center gap-[10px] p-8 rounded-lg",
          "border border-dashed",
          disabled
            ? "border-neutral-300 cursor-not-allowed opacity-60"
            : isDragging
            ? "border-supreme-blue-700 bg-supreme-blue-50"
            : "border-supreme-blue-600",
          className
        )}
        {...props}
      >
        <CloudArrowUpIcon className="w-[74px] h-[74px] text-supreme-blue-600" />
        <div className="w-[336px] text-center">
          <p className="text-base leading-6 text-neutral-600">{label}</p>
          <p className="text-xs leading-4 text-neutral-600">
            {sublabel}
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={onInputChange}
          disabled={disabled}
          aria-hidden
        />
      </div>
    );
  }
);

DragDrop.displayName = "DragDrop";

export default DragDrop;


