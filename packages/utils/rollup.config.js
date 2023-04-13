import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";

const env = process.env.NODE_ENV;

const config = {
  input: "src/index.ts",
  output: {
    format: "umd",
    name: "LightUtils",
  },
  external: { svelte: "^3.0.0" },
  plugins: [
    commonjs(),
    nodeResolve({
      mainFields: ["jsnext"],
    }),
    typescript({
      tsconfig: "./tsconfig.esm.rollup.json",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
  ],
};

if (env === "production") {
  config.plugins.push(terser());
}

export default config;
