import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

const isGitHubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  base: isGitHubPages ? "/aquabrand-studio/" : "/",
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({ server: { entry: "server" } }),
    react(),
    ...(!isGitHubPages ? [cloudflare()] : []),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
});
