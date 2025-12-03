import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/vertier/", // viktigt för GitHub Pages med egen domän
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
