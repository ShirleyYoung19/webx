import { appTools, defineConfig } from "@modern-js/app-tools";
import { bundleRequire } from "bundle-require";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools()],
  source: {
    entriesDir: "src/pages",
  },
  output: {
    copy: [
      {
        from: "./src/manifest.ts",
        to: "./manifest.json",
        //@ts-ignore
        async transform(content, filepath) {
          const {
            mod: { default: manifest },
          } = await bundleRequire({ filepath });
          return JSON.stringify(manifest);
        },
      },
    ],
    disableInlineRuntimeChunk: true,
  },
});
