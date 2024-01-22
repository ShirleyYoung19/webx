import { appTools, defineConfig } from "@modern-js/app-tools";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools()],
  source: {
    entriesDir: "src/pages",
  },
  output: {
    copy: [
      {
        from: "./src/manifest.json",
        to: "",
        //@ts-ignore
        transform(content) {
          const manifest = JSON.parse(content.toString("utf8"));
          delete manifest["$schema"];
          return JSON.stringify(manifest);
        },
      },
    ],
    disableInlineRuntimeChunk: true,
  },
});
