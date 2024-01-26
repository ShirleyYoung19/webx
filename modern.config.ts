import { appTools, defineConfig } from "@modern-js/app-tools";
import { bundleRequire } from "bundle-require";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools()],
  source: {
    entriesDir: "src/pages",
  },
  output: {
    polyfill: "off",
    copy: [
      {
        from: "./src/manifest.ts",
        to: "./manifest.json",
        //@ts-ignore
        async transform(content, filepath) {
          const {
            mod: { default: manifest },
          } = await bundleRequire({ filepath });
          return JSON.stringify(manifest, null, 2);
        },
      },
    ],
    disableInlineRuntimeChunk: true,
    disableFilenameHash: true,
    disableMinimize: true,
    cleanDistPath: false,
  },
  tools: {
    webpackChain: (chain, {}) => {
      chain.entry("content_script").add("src/content_script/index.tsx");
      chain.entry("background").add("src/background/index.ts");
    },
  },
  performance: {
    chunkSplit: {
      strategy: "all-in-one",
    },
  },
});
