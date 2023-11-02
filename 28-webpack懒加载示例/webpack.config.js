/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-11-02 10:36:33
 * @LastEditTime: 2023-11-02 10:46:49
 * @Descripttion:
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  entry: './src/index.js',
  // 设置插件
  plugins: [
    // 设置htmlwebpackplugin配置
    new HtmlWebpackPlugin({
      title: 'lazyload',
    }),
  ],
};
