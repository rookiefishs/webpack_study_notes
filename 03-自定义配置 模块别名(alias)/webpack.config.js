/*
 * @Author: wangzhiyu
 * @Date: 2023-07-28 21:51:57
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-28 21:57:20
 */
const path = require('path');

module.exports = {
  entry: '/src/main.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
};
