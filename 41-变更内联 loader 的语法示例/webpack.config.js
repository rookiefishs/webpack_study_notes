/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-14 22:26:25
 * @Descripttion: webpack配置文件
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'title',
    }),
  ],
  // 设置模块加载处理器
  module: {
    rules: [
      {
        // 配置将row替换为asset/source加载
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
};
