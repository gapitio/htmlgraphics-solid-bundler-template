import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";

const OUT_DIR = "dist";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: "src/onInit.tsx",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: false,
      name: "onInit",
    },
    plugins: [
      nodeResolve({
        browser: true,
        extensions,
      }),
      commonjs(),
      babel({
        babelHelpers: "bundled",
        presets: ["solid", "@babel/preset-typescript", "@babel/preset-env"],

        plugins: [
          "@babel/proposal-class-properties",
          "@babel/proposal-object-rest-spread",
        ],
        extensions,
      }),
      terser(),
      postcss({
        extract: "style.css",
      }),
    ],
  },
  {
    input: "src/onRender.ts",
    output: {
      dir: OUT_DIR,
      format: "iife",
      sourcemap: false,
    },
    plugins: [
      typescript({
        sourceMap: false,
      }),
      terser(),
      nodeResolve({
        browser: true,
      }),
      commonjs(),
    ],
  },
];
