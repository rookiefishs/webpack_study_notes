/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-11-20 13:18:46
 * @Descripttion: webpack配置文件
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // 设置所有的.tsx后缀的文件执行此处理
        test: /.tsx?$/,
        // 满足条件的文件都是用rs-loader进行加载与处理
        use: 'ts-loader',
        // 筛选掉node_modules包
        exclude: '/node_modules/',
      },
    ],
  },
  // 配置在使用import 或 require导入以下后缀的文件时,可以省略后缀名称
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'ts使用示例',
    }),
  ],
  // 开启suuece-map
  devtool: 'inline-source-map',
};
