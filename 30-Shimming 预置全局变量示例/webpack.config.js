/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-17 15:10:54
 * @LastEditTime: 2023-11-17 15:23:28
 * @Descripttion: webpack配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'shimming预置全局变量实例' }),
    // 配置全局变量
    new webpack.ProvidePlugin({
      // 配置_后,会添加一个_全局变量,后面无论在项目的任何地方使用_,都会引用到lodash
      _: 'lodash',
      // 添加join为全局变量,来自于lodash.join方法
      join: ['lodash','join']
    }),
  ],
  mode: 'development',
};
