/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-30 22:05:24
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 通过dotenv库获取到.env.development环境下的配置
const envData = require('dotenv').config({ path: '.env.development' }).parsed;

module.exports = {
  entry: envData.entryPath,
  mode: 'development',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, envData.outputPathName),
  },
  // 配置插件
  plugins: [
    // 设置htmlwebpackplugin参数
    new HtmlWebpackPlugin({
      title: envData.title,
    }),
  ],
};
