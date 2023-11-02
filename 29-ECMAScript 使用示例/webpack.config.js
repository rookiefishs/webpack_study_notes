/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-11-02 13:24:31
 * @LastEditTime: 2023-11-02 13:27:33
 * @Descripttion: webpack配置
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  entry: './src/index.js',
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ title: 'ECMAScript' })],
};
