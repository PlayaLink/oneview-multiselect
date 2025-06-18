export interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}

export type MultiSelectOrientation = "horizontal" | "vertical";
export type MultiSelectSize = "sm" | "default" | "lg";

export interface SelectedItemUIContext {
  item: MultiSelectItem;
  removable: boolean;
  onRemove: () => void;
}
