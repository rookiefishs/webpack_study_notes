/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: flash
 * @LastEditTime: 2023-11-22 14:07:18
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  // 项目入口文件
  entry: '/src/index.js',
  // 项目出口配置
  output: {
    // 项目出口的文件名称
    filename: 'main.js',
    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },
  // 配置插件
  plugins: [
    // 设置htmlwebpackplugin参数
    new HtmlWebpackPlugin({
      title: 'PWA',
    }),
    // 配置渐进式网络应用程序
    new WorkWebpackPlugin.GenerateSW({
      clientsClaim: true, // 确保新的service worke控制着客户端的时候,立即激活它,以便更快的更新缓存和响应请求
      skipWaiting: true, // 用于跳过等待阶段,直接激活新的service workder
    }),
  ],
};
