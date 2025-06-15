export interface MultiSelectItem {
  id: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectedItemUIContext {
  item: MultiSelectItem;
  removable: boolean;
  onRemove: () => void;
}

export type MultiSelectOrientation = "horizontal" | "vertical";
export type MultiSelectSize = "sm" | "default" | "lg";
export type TagVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "success"
  | "warning"
  | "info";
