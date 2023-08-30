/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-27 21:21:31
 */
const path = require('path');
module.exports = {
  // 项目环境(开发环境dev)
  mode: 'development',

  // 配置项目入口
  entry: {
    index: './src/index.js',
  },

  // 项目出口配置
  output: {
    // 项目出口文件,将打包的出口文件命名为文件名.bundele.js,这里因为配置了两个项目的入口,所以最终会生成两个.bundle.js
    filename: '[name].bundle.js',

    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },
};
