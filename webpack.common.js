module.exports = {
   entry: './src/index.js',
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            test: /\.(svg|png|jpe?g|gif)$/i,
            type: 'asset/resource',
         }
      ],
   },
};