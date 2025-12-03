import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Dev (npm run dev / Lovable) → "/"
  // Build (npm run build / GitHub Pages) → "/vertier/"
  base: command === "build" ? "/vertier/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
