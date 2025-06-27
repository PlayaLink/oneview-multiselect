// Import the main component first
import { MultiSelect } from "./components/MultiSelect";

// Main MultiSelect component exports
export { MultiSelect } from "./components/MultiSelect";
export { Tag } from "./components/Tag";
export { MultiSelectDropdown } from "./components/MultiSelectDropdown";

// Type exports
export type {
  MultiSelectItem,
  MultiSelectOrientation,
  MultiSelectSize,
  SelectedItemUIContext,
} from "./types";

// Component-specific prop types
export type {
  SelectedItemUIProps,
  MultiSelectProps,
} from "./components/MultiSelect";
export type { TagProps } from "./components/Tag";

// Utility exports
export { cn } from "./lib/utils";
export { tagVariants } from "./components/Tag";

// Default export for Figma Make compatibility
export default MultiSelect;
