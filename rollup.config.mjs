import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import compiler from "@ampproject/rollup-plugin-closure-compiler";

export default {
  input: "index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [typescript(), nodeResolve(), commonjs(), json(), compiler()],
};
