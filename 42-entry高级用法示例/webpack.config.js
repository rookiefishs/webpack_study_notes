/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-16 09:52:24
 * @Descripttion: webpack配置文件
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

// 下载MiniCssExtractPlugin插件,此插件的主要作用就是将每个包含css的js文件创建一个文件,并且支持css和sourceMaps的按需加载
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: ['./src/home.js', './src/assets/styles/home.scss'],
    account: ['./src/account.js', './src/assets/styles/account.scss'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'title',
    }),
    // 使用MiniCssExtractPlugin配置创建的文件名称
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 根据当前环境来使用不同的插件
        use: [process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
      },
    ],
  },
};
