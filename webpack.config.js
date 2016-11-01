'use strict'

module.exports = {
    context: __dirname + "/src",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
}