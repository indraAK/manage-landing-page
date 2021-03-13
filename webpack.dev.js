const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
   mode: 'development',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'public'),
      assetModuleFilename: 'images/[name][ext]'
   },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/template.html' })
   ],
   module: {
      rules: [
         {
            test: /\.s?css$/i,
            use: [
               "style-loader", // 3. Inject styles into DOM
               "css-loader", // 2. Translates CSS into CommonJS
               "sass-loader" // 1. Loads a Sass/SCSS file and compiles it to CSS
            ],
         },
      ]
   },
   devServer: {
      contentBase: './public',
   }
});