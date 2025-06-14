import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center text-xs font-normal transition-colors font-poppins",
  {
    variants: {
      variant: {
        default: "bg-[#E8F3FF] text-[#212529] rounded-sm",
        secondary: "bg-gray-100 text-gray-800 rounded-sm",
        destructive: "bg-red-50 text-red-800 rounded-sm",
        success: "bg-green-50 text-green-800 rounded-sm",
      },
      size: {
        sm: "text-xs px-1.5 py-0.5",
        default: "text-xs px-2 py-1",
        lg: "text-sm px-2.5 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  /**
   * The text content of the tag
   */
  label: string;
  /**
   * Callback when the remove button is clicked
   */
  onRemove?: () => void;
  /**
   * Whether the tag can be removed
   */
  removable?: boolean;
  /**
   * Custom icon to display instead of the default X
   */
  removeIcon?: React.ReactNode;
}

/**
 * Tag Component
 *
 * A reusable tag component for displaying selected items with optional remove functionality.
 *
 * @example
 * ```tsx
 * <Tag
 *   label="Selected Item"
 *   onRemove={() => console.log('remove')}
 *   removable={true}
 * />
 * ```
 */
export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      className,
      variant,
      size,
      label,
      onRemove,
      removable = true,
      removeIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(tagVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="leading-none" style={{ padding: "4px 8px" }}>
          {label}
        </span>
        {removable && onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-0 flex h-[18px] w-[18px] items-center justify-center border-l border-[#AFD6FF] text-[#212529] hover:text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
            aria-label={`Remove ${label}`}
          >
            {removeIcon || <X className="h-2 w-2" />}
          </button>
        )}
      </div>
    );
  },
);

Tag.displayName = "Tag";
