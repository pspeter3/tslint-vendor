const path = require("path")

module.exports = {
    entry: path.join.apply(path, [
        process.cwd(),
        "node_modules",
        "tslint",
        "lib",
        "tslint-cli.js",
    ]),
    output: {
        filename: "tslint.js",
    },
    target: "node",
    externals: {
        typescript: {
            commonjs: "typescript",
        },
    },
}
