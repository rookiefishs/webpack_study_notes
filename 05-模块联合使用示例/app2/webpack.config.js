/*
 * @Author: wangzhiyu
 * @Date: 2023-08-07 22:00:20
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-07 22:24:16
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    publicPath: 'http://localhost:3002/',
  },
  // 开发环境
  mode: 'development',
  plugins: [
    // 配置开发服务器中使用的html路径
    new HtmlWebpackPlugin({
      template: './index.html',
    }),

    // 配置模块联合所以导入的对应的应用名称与联合摸的地址
    new ModuleFederationPlugin({
      name: 'app2',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],

  // 开发服务器配置
  devServer: { static: path.join(__dirname, ''), compress: true, port: 3002 },
};
