/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-10-30 19:05:06
 * @LastEditTime: 2023-10-30 19:11:12
 * @Descripttion: 通过webpack.common.js
 */
// 导入nodejs环境的path
const path = require('path');

// 导入htmlwebpackplugin,自动创建html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 配置webpack.config.js
module.exports = {
  // 设置webpack入口
  entry: {
    app: './src/index.js',
  },
  // 设置插件
  plugins: [
    // 设置htmlwebpackplugin配置,这里title指控制html的title为production
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  // 应用打包配置
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
