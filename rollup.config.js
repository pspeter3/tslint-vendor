import commonjs from "rollup-plugin-commonjs"
import json from "rollup-plugin-json"
import nodeResolve from "rollup-plugin-node-resolve"

const extensions = [
    ".js",
    ".json",
]

export default {
    entry: "node_modules/tslint/lib/tslint-cli.js",
    dest: "tslint.js",
    sourceMap: true,
    format: "cjs",
    external: [
        // Node
        "assert",
        "child_process",
        "events",
        "fs",
        "path",
        "util",
        // Node Modules
        "typescript",
    ],
    plugins: [
        nodeResolve({
            extensions: extensions,
            skip: [
                "typescript",
            ],
        }),
        json(),
        commonjs({
            extensions: extensions,
        }),
    ],
}