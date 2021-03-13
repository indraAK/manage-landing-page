const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
   mode: 'production',
   output: {
      filename: 'main.[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[name][ext]'
   },
   module: {
      rules: [
         {
            test: /\.s?css$/i,
            use: [
               MiniCssExtractPlugin.loader, // 3. Extract css into files
               "css-loader", // 2. Translates CSS into CommonJS
               "sass-loader" // 1. Loads a Sass/SCSS file and compiles it to CSS
            ],
         },
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new CleanWebpackPlugin()
   ],
   optimization: {
      minimize: true,
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserPlugin(),
         new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
               removeAttributeQuotes: true,
               collapseWhitespace: true,
               removeComments: true
            }
         })
      ],
   },
})

// https://webpack.js.org/guides/production/#setup