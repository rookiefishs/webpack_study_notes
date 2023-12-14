/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-14 10:22:23
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
  // 配置webpack导入.png使用的资源模块为assets/resource
  module: {
    rules: [
      // 所有.png文件都将被发送到输出目录,并且路径将被注入到bundle中,除此之外,也可以为这些png自定义outputPath与publicPath属性
      {
        // 配置这里的资源模块配置对.png文件生效
        test: /\.png/,
        // 资源模块类型
        type: 'asset/resource',
      },
    ],
  },
};
