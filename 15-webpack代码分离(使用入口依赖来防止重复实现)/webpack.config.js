/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-25 21:33:39
 */
const path = require('path');
module.exports = {
  // 项目入口文件
  // entry: '/src/index.js',

  // 项目环境(开发环境dev)
  mode: 'development',

  // 配置项目入口(指定入口文件与依赖关系)
  entry: {
    // 入口文件1
    index: {
      // 入口文件路径
      import: './src/index.js',
      // 指定模块的依赖关系与加载顺序
      dependOn: 'shared',
    },
    // 入口文件2
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },

    // 共享依赖->指向lodash,表示入口文件之间共享lodash依赖,通过这样的配置,webpack将会按照指定的依赖关系进行打包,这种方式可以更方便的管理多个入口文件,并共享一些公共的依赖模块
    shared: 'lodash',
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
  },
};
