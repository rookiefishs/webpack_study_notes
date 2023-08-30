/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-28 21:22:29
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 项目入口文件
  entry: '/src/index.js',
  // 项目出口配置
  output: {
    // 配置项目出口的文件名称
    // name:表示文件的初始名称,也就是在src中的命名
    // contenthash:表示文件的hash值,它会根据文件的内容来进行生成,如果文件的内容进行了修改,那么打包时,文件名称的hash值也会随之修改
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
};
