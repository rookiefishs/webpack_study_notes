/*
 * @Author: wangzhiyu
 * @Date: 2023-08-11 21:35:46
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-11 21:54:54
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: '/src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 开发环境
  mode: 'development',
  plugins: [
    // 配置开发服务器中使用的html路径
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  // 开发服务器配置
  // hot: 控制热更新的开关
  // liveReload: 控制实时重新加载的开关
  devServer: { static: path.join(__dirname, ''), compress: true, port: 5050, hot: false, liveReload: false },
};
