import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  // Set base to repo name for GitHub Pages
  // e.g. if repo is github.com/PrathamHapani01/pratham-s-cyber-canvas
  // the base should be "/pratham-s-cyber-canvas/"
  base: "/pratham-s-cyber-canvas/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
