/*
 * @Author: wangzhiyu
 * @Date: 2023-08-01 21:52:15
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-01 22:06:53
 */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(HtmlWebpackPlugin, 'HtmlWebpackPlugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
console.log(ModuleFederationPlugin, 'ModuleFederationPlugin');

module.exports = {
  entry: '/src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  // 开发服务器配置
  devServer: { static: path.join(__dirname, ''), compress: true, port: 8080 },
};
