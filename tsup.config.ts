import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    background: "src/background/index.ts",
    content_script: "src/content_script/index.tsx",
  },
  noExternal: ["react", "react-dom"],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
