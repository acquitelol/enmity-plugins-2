import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";

import { defineConfig } from "rollup";

const plugins = ["MessageSpoofer", "NoDelete"];

export default plugins.map((name) => {
    return defineConfig({
        input: `${name}/src/index.tsx`,
        output: [
            {
                file: `dist/${name}.js`,
                format: "cjs",
                strict: false,
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            json(),
            esbuild({ minify: true, target: "ES2019" }),
        ],
    });
});