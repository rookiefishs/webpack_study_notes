/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-30 21:49:55
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * 设置module.exports以函数形式调用
 * @param {object} env 环境变量
 * @returns webpack.config webpack配置
 */
module.exports = env => {
  let envData = env;
  console.log(envData, 'envData');

  console.log(
    {
      entry: envData.entryPath,
      output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, envData.outputPathName),
      },
      // 配置插件
      plugins: [
        // 设置htmlwebpackplugin参数
        new HtmlWebpackPlugin({
          title: envData.title,
        }),
      ],
    },
    'config'
  );

  // 通过环境数据动态设置webpack配置
  return {
    entry: envData.entryPath,
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, envData.outputPathName),
    },
    // 配置插件
    plugins: [
      // 设置htmlwebpackplugin参数
      new HtmlWebpackPlugin({
        title: envData.title,
      }),
    ],
  };
};
