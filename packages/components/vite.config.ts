import { defineConfig, splitVendorChunkPlugin } from "vite";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import terser from "@rollup/plugin-terser";
import sveltePreprocess from "svelte-preprocess";

const resolve = (str: string) => {
  return path.resolve(__dirname, str);
};

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    splitVendorChunkPlugin(),
    typescript({
      compilerOptions: {
        target: "es5",
        rootDir: resolve("."),
        declaration: false,
        allowSyntheticDefaultImports: true,
      },
    }),
  ],
  build: {
    outDir: "dist",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("./index.ts"),
      fileName: "index",
    },
    rollupOptions: {
      external: ["svelte"],
      output: [
        {
          globals: {
            svelte: "Svelte",
          },
        },
        {
          dir: "dist/es",
          format: "es",
        },
        {
          dir: "dist/lib",
          format: "cjs",
        },
      ],
      plugins: [terser()],
    },
  },
});
