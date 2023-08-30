/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-28 21:31:20
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 项目入口文件
  entry: '/src/index.js',
  // 项目出口配置
  output: {
    // 配置项目出口的文件名称
    filename: '[name].[contenthash].js',
    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },
  // 配置插件
  plugins: [
    // 设置htmlwebpackplugin参数
    new HtmlWebpackPlugin({
      title: '配置输出文件的文件名',
    }),
  ],
  optimization: {
    // 配置webpack的运行时代码runtime单独抽离出来,因为默认情况下,webpack会将每个入口点的运行时代码内联到生成的bundle中,这也就也意味着每个bundle都包含了webpack的运行时代码,导致了代码的冗余,这里配置runtimeChunk:'single' 可以将运行时代码抽离为一个单独的chunk,最大程度实现代码的复用
    runtimeChunk: 'single',
  },
};
