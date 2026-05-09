/**
 * Vite config for GitHub Pages static SPA build.
 * This bypasses TanStack Start (SSR) entirely and builds a plain
 * client-side React app using the same components.
 */
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/aquabrand-studio/",
  plugins: [tsConfigPaths(), tailwindcss(), react()],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  build: {
    outDir: "dist/static",
  },
});
