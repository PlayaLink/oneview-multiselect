// Quick test to verify the built library exports work correctly
import { MultiSelect, Tag, MultiSelectDropdown } from "./dist/index.mjs";

console.log("✅ Library imports successful!");
console.log("MultiSelect:", typeof MultiSelect === "function" ? "✅" : "❌");
console.log("Tag:", typeof Tag === "function" ? "✅" : "❌");
console.log(
  "MultiSelectDropdown:",
  typeof MultiSelectDropdown === "function" ? "✅" : "❌",
);
