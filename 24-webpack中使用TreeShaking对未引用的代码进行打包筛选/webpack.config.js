/*
 * @Author: wangzhiyu
 * @Date: 2023-10-10 21:35:14
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-10-10 21:35:15
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: '/src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 配置开发服务器的html文件
  plugins: [new HtmlWebpackPlugin({ title: 'Tree Shaking学习测试使用' })],

  // 配置开发服务器
  devServer: {
    static: './dist',
    port: 5050,
  },

  // 配置optimization.usedExports,表示开启Tree Shaking
  optimization: {
    usedExports: true,
  },
};
