/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require('./pages');

module.exports = {
  entry: {
    index: './src/index/index.js',
    news: './src/news/news.js',
  },
  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin(page)),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
