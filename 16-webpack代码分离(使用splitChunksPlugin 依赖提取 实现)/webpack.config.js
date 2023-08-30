/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-25 21:41:19
 */
const path = require('path');
module.exports = {
  // 项目入口文件
  // entry: '/src/index.js',

  // 项目环境(开发环境dev)
  mode: 'development',

  // 配置项目入口
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },

  // 项目出口配置
  output: {
    // 项目出口的文件名称
    // filename: 'main.js',

    // 项目出口文件,将打包的出口文件命名为文件名.bundele.js,这里因为配置了两个项目的入口,所以最终会生成两个.bundle.js
    filename: '[name].bundle.js',

    // 项目出口的文件路径
    path: path.resolve(__dirname, 'dist'),
  },

  // optimization配置用于对打包后的代码进行优化与分隔,这里是因为项目有多入口,所以需要配置optimization.runtimeChunk
  optimization: {
    // 此配置会将webpack的运行时代码提取到一个单独的文件中(运行时代码是指webpack在打包过程中生成的一些额外代码,通过使用single,webpack会为每个构建创建一个单独的运行时文件)
    runtimeChunk: 'single',

    // 配置splitChunksPlugin来对依赖文件进行提取,以便实现代码的复用与减少重复加载,这样可以优化网页的性能,特别是在多入口的情况下
    splitChunks: {
      // chunks可以配置那些块(依赖\模块)可以被分隔,这里设置为all,表示所有的模块都会被分隔,并其通过这个配置,webpack将会根据公共的依赖关系自动设别与提取共享的模块,并将其打包进一个单独的文件中,这样,应用程序就不需要在每个文件里面重复的加载这些模块
      chunks: 'all',
    },
  },
};
