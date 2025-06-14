import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-sm text-xs font-normal transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-50 text-gray-800 border-blue-200/60",
        secondary: "bg-gray-100 text-gray-800",
        destructive: "bg-red-50 text-red-800",
      },
      size: {
        default: "h-auto",
        sm: "h-6",
        lg: "h-8",
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
  label: string;
  onRemove?: () => void;
  removable?: boolean;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    { className, variant, size, label, onRemove, removable = true, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(tagVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="px-2 py-1 leading-none">{label}</span>
        {removable && onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="ml-0 flex h-[18px] w-[18px] items-center justify-center border-l border-blue-300/60 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
            aria-label={`Remove ${label}`}
          >
            <X className="h-2 w-2" />
          </button>
        )}
      </div>
    );
  },
);

Tag.displayName = "Tag";

export { Tag, tagVariants };
