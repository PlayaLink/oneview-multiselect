import * as React from "react";
import { Plus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Tag } from "./tag";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { MultiSelectDropdown } from "./multi-select-dropdown";

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
  availableOptions?: MultiSelectItem[];
  onRemove?: (item: MultiSelectItem) => void;
  onAdd?: (item: MultiSelectItem) => void;
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
      availableOptions = [],
      onRemove,
      onAdd,
      addButtonText = "Add Tags",
      maxWidth = "568px",
      placeholder,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const handleSelectionChange = React.useCallback(
      (item: MultiSelectItem, isSelected: boolean) => {
        if (isSelected) {
          // Remove item
          onRemove?.(item);
        } else {
          // Add item
          onAdd?.(item);
        }
      },
      [onAdd, onRemove],
    );

    const handleOpenChange = React.useCallback((newOpen: boolean) => {
      setOpen(newOpen);
      if (!newOpen) {
        setSearchValue("");
      }
    }, []);

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
            <span className="text-xs font-semibold text-[#545454] font-poppins tracking-[0.429px]">
              {label}
            </span>
          </div>
        )}

        {/* Value Container */}
        <div className="flex flex-1 min-h-[32px] flex-wrap items-center gap-2 pt-1">
          {/* Selected Items */}
          {items.map((item) => (
            <Tag
              key={item.id}
              label={item.label}
              onRemove={onRemove ? () => onRemove(item) : undefined}
              removable={!!onRemove}
              variant="default"
            />
          ))}

          {/* Add Button with Dropdown */}
          {(onAdd || availableOptions.length > 0) && (
            <Popover open={open} onOpenChange={handleOpenChange}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-6 bg-[#FFF] px-2 py-0.5 text-xs font-semibold text-[#006CAB] hover:bg-blue-50 hover:text-blue-800 border-0 shadow-none rounded font-poppins tracking-[0.429px]"
                >
                  {addButtonText}
                  <Plus className="h-3 w-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 border-0 bg-transparent shadow-none"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <MultiSelectDropdown
                  options={availableOptions}
                  selectedItems={items}
                  onSelectionChange={handleSelectionChange}
                  searchValue={searchValue}
                  onSearchChange={setSearchValue}
                />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    );
  },
);

MultiSelect.displayName = "MultiSelect";

export { MultiSelect, multiSelectVariants };
export type { MultiSelectItem };
