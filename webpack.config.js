const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'js', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
};
