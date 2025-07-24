import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Only import if running in dev mode
const isDev = process.env.NODE_ENV === "development";
let componentTagger;

if (isDev) {
  try {
    componentTagger = require("lovable-tagger").componentTagger;
  } catch (e) {
    console.warn("lovable-tagger not found, skipping");
  }
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    isDev && componentTagger && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
