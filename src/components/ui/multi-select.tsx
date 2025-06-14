import * as React from "react";
import { Plus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Tag } from "./tag";
import { Button } from "./button";

const multiSelectVariants = cva("flex w-full gap-1", {
  variants: {
    orientation: {
      horizontal: "flex-row items-start",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface MultiSelectItem {
  id: string | number;
  label: string;
}

export interface MultiSelectProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof multiSelectVariants> {
  label?: string;
  items: MultiSelectItem[];
  onRemove?: (item: MultiSelectItem) => void;
  onAdd?: () => void;
  addButtonText?: string;
  maxWidth?: string;
  placeholder?: string;
}

const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  (
    {
      className,
      orientation,
      label = "Tags",
      items = [],
      onRemove,
      onAdd,
      addButtonText = "Add Tags",
      maxWidth = "568px",
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(multiSelectVariants({ orientation }), className)}
        style={{ maxWidth }}
        ref={ref}
        {...props}
      >
        {/* Label Section */}
        {label && (
          <div className="flex min-w-[153px] items-start px-2 py-1.5">
            <span className="text-xs font-semibold text-gray-500 tracking-wide">
              {label.toUpperCase()}
            </span>
          </div>
        )}

        {/* Value Container */}
        <div className="flex flex-1 min-h-[32px] flex-col justify-center pt-1.5">
          <div className="flex min-h-[32px] flex-wrap items-center gap-2">
            {/* Selected Items */}
            {items.length > 0 ? (
              items.map((item) => (
                <Tag
                  key={item.id}
                  label={item.label}
                  onRemove={onRemove ? () => onRemove(item) : undefined}
                  removable={!!onRemove}
                  className="bg-blue-50 text-gray-800"
                />
              ))
            ) : placeholder ? (
              <span className="text-sm text-gray-400 py-1">{placeholder}</span>
            ) : null}

            {/* Add Button */}
            {onAdd && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onAdd}
                className="h-6 bg-white px-2 py-0.5 text-xs font-semibold text-blue-700 hover:bg-blue-50 hover:text-blue-800 border-0 shadow-none"
              >
                {addButtonText}
                <Plus className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  },
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect, multiSelectVariants };
export type { MultiSelectItem };
