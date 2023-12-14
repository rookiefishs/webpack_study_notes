/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-14 22:09:53
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
        // 设置应用此模块加载器的文件格式为.txt
        test: /\.txt/,
        // 设置模块加载资源类型为通用(自动根据文件大小使用不同的文件资源加载方式)
        type: 'asset',
        // 默认8k以下使用inline,8kb以上使用resource,但是这个8kb是可配置的
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024, // 配置40kb为默认值
          },
        },
      },
    ],
  },
};
