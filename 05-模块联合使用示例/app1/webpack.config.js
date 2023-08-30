/*
 * @Author: wangzhiyu
 * @Date: 2023-08-07 22:00:24
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-07 22:27:44
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3001/',
  },
  mode: 'development',
  plugins: [
    // 配置开发服务器所使用的html的地址
    new HtmlWebpackPlugin({
      template: './index.html',
    }),

    // 配置开放button模块,文件名称为filename,对应的文件路径为./src/Button,在别的应用中使用的文件别名应为Button,这样就可以模块共享,别的应用只需要对moduleFederationPlugin中进行配置即可使用Button模块
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
      },
    }),
  ],
  // 开发服务器配置
  devServer: { static: path.join(__dirname, ''), compress: true, port: 3001 },
};
