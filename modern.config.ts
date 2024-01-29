import { appTools, defineConfig } from "@modern-js/app-tools";
import { bundleRequire } from "bundle-require";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  plugins: [appTools()],
  source: {
    entriesDir: "src/pages",
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
    },
  },
  dev: {
    assetPrefix: true,
  },
  output: {
    polyfill: "off",
    overrideBrowserslist: ["last 2 Chrome versions"],
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
  },
  tools: {
    webpackChain: (chain, {}) => {
      chain.entry("content_script").add("src/content_script/index.tsx");
      chain.entry("background").add("src/background/index.ts");

      chain.optimization.runtimeChunk(false);
      chain.optimization.splitChunks({
        chunks(chunk) {
          return !["background", "content_script"].includes(
            chunk.getEntryOptions()?.name || ""
          );
        },
      });
    },
    devServer: {
      client: {
        host: "localhost",
        protocol: "ws",
      },
    },
  },
});
