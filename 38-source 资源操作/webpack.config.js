/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:28:31
 * @LastEditTime: 2023-12-14 15:14:32
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
  // 配置webpack导入.txt使用的资源模块为assets/source
  module: {
    rules: [
      {
        // 配置这里的资源模块配置对.txt文件生效
        test: /\.txt/,
        // 配置资源模块类型为source,这样就对应的文件将会原样被注入到模块中
        type: 'asset/source',
      },
    ],
  },
};
