// Test file to verify exports work for Figma Make compatibility
// This simulates how Figma Make would import the package

console.log("Testing exports...");

// Test 1: Default import (most important for Figma Make)
try {
  const pkg = require("./dist/index.cjs");
  console.log("✅ Default export available:", !!pkg.default);
  console.log("✅ Named MultiSelect export available:", !!pkg.MultiSelect);
  console.log("✅ Named Tag export available:", !!pkg.Tag);
  console.log(
    "✅ Named MultiSelectDropdown export available:",
    !!pkg.MultiSelectDropdown,
  );
} catch (error) {
  console.log("❌ CommonJS import failed:", error.message);
}

// Test 2: ES Module import pattern (what esm.sh would use)
console.log("\nAll exports from package:");
const pkg = require("./dist/index.cjs");
console.log("Available exports:", Object.keys(pkg));

console.log("\nPackage structure test complete!");
