/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-28 21:41:37
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 项目入口文件
  entry: '/src/index.js',
  // 项目出口配置
  output: {
    // 配置项目出口的文件名称
    filename: '[name].[contenthash].js',
    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },
  // 配置插件
  plugins: [
    // 设置htmlwebpackplugin参数
    new HtmlWebpackPlugin({
      title: '配置输出文件的文件名',
    }),
  ],
  optimization: {
    // 配置webpack的运行时代码runtime单独抽离出来,因为默认情况下,webpack会将每个入口点的运行时代码内联到生成的bundle中,这也就也意味着每个bundle都包含了webpack的运行时代码,导致了代码的冗余,这里配置runtimeChunk:'single' 可以将运行时代码抽离为一个单独的chunk,最大程度实现代码的复用
    runtimeChunk: 'single',

    // 默认情况下，webpack 会为每个模块生成一个数字标识符作为其唯一标识。这样做的问题是，当我们向项目中添加或删除模块时，整个应用程序的打包结果会发生变化，即使实际上只有少量的更改。这可能导致浏览器缓存失效并重新加载所有资源，增加了用户的等待时间。

    // 配置deterministic将会使webpack使用确定性的模块标识符,这样可以确保模块在不同的构建上下文中有相同module.id(其他文件修改不会影响到该文件的module.id),这样可以获取最稳定的构建结果以及有利于项目的长期缓存
    moduleIds: 'deterministic',
  },
};
