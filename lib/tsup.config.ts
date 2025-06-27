import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  bundle: true,
  minify: true,
  external: [
    "react",
    "react-dom",
    "@radix-ui/react-popover",
    "@radix-ui/react-slot",
    "lucide-react",
    "clsx",
    "tailwind-merge",
    "class-variance-authority",
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
