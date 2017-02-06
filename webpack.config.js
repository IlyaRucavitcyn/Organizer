'use strict';

const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      clean = new CleanWebpackPlugin(['dist'], {
        verbose: false,
        dry: false
      }),
      extractCSS = new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      }),
      webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
      main: [
        './main',
        './css/style'
      ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
      extensions: ['*', '.js', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader'
                })
            },
            {
                test: /\index.html$/,
                loaders: [
                  'file-loader?name=[name].[ext]',
                  'extract-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader?name=[path][name].[ext]?[hash]'
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [
        clean,
        extractCSS
    ]
}
