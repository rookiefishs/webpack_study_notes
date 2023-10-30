/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-10-30 19:05:26
 * @LastEditTime: 2023-10-30 19:11:29
 * @Descripttion: 开发环境webpack配置
 */

// 导入webpack-merge的merge函数
const { merge } = require('webpack-merge');

// 获取common配置
const common = require('./webpack.common.js');

// 创建webpack.config.js配置,这里使用merge将通用的common配置与自定义的开发环境的配置合并
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
});
