/*
 * @Author: wangzhiyu
 * @Date: 2023-07-20 21:35:17
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-20 21:44:38
 */
const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: './replace-loader.js',
          options: {
            search: 'Hello',
            replace: 'Hi'
          }
        }
      }
    ]
  }
}