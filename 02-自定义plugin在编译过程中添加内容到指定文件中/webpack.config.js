/*
 * @Author: wangzhiyu
 * @Date: 2023-07-23 15:40:51
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-23 15:51:09
 */
const path = require('path');

// 获取自定义的插件
const myPlugin = require('./myPlugin.js');

module.exports = {
  // 自定义入口文件
  entry: './src/main.js',
  // 指定打包的路径与文件名
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new myPlugin('我是webpack.config.js中自定义的plugin中携带的参数')],
};
