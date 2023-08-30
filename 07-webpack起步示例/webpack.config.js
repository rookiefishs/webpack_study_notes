/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-13 21:35:31
 */
const path = require('path');
module.exports = {
  // 项目入口文件
  entry: '/src/index.js',
  // 项目出口配置
  output: {
    // 项目出口的文件名称
    filename: 'main.js',
    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },
};
