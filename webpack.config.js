'use strict';

var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./main",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
}