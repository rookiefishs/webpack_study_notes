/**
 * @Author:WangZhiYu
 * @Date: 2023/08/22 21:45:40
 * @LastEditors: WangZhiYu
 * @LastEditTime: 2023/08/22 21:45:40
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  // 添加soure-map映射,当打包之后的代码发生错误时,会通过映射自动执行到对应的文件以及行和列中
  devtool: 'inline-source-map',
  // 设置打包自动生成对应的html文件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  // 配置将dist文件夹作为开发服务器所使用的文件
  devServer: {
    static: './dist',
    // 配置开发服务器端口
    port: 5050,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
