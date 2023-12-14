/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-14 14:39:17
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
  // 配置webpack导入.svg使用的资源模块为assets/inline
  module: {
    rules: [
      {
        // 配置这里的资源模块配置对.svg文件生效
        test: /\.svg/,
        // 配置资源模块类型为inline,这样就可以将对应的文件类型转换为base64等其他内联格式
        type: 'asset/inline',
      },
    ],
  },
};
