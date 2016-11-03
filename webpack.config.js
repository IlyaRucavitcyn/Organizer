'use strict';

var path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: "./main",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
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
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        hot:true
    },
    plugins: [
        new ExtractTextPlugin({filename:'main.css', disable: process.env.NODE_ENV != 'production'})
    ]
}