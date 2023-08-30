/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:34:36
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-16 18:06:47
 */
// 导入各个加载器
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

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
  // 设置模块应用的加载器
  module: {
    rules: [
      // 设置css文件的loader处理器
      {
        // 设置css文件应用下面use的loader
        test: /.css$/i,
        // 设置文件所使用的loader
        use: ['style-loader', 'css-loader'],
      },
      // 设置图片的loader处理器
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/i,
        // 使用webpack的内置加载器处理器
        type: 'asset/resource',
      },
      // 设置字体的loader处理器
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // 使用webpack的内置加载器处理器
        type: 'asset/resource',
      },
      // 设置CSV文件的处理器
      {
        test: /\.csv$/i,
        // 下载csv-loader加载器
        use: ['csv-loader'],
      },
      // 设置XML文件的处理器
      {
        test: /\.xml$/i,
        // 下载xml-loader加载器
        use: ['xml-loader'],
      },
      // 对toml文件的解析
      {
        test: /\.toml$/i,
        // 指定解析为json类型
        type: 'json',
        // 自定义解析器(使用toml库的parse方法来解析toml文件为json)
        parser: {
          parse: toml.parse,
        },
      },
      // 对yaml文件的解析
      {
        test: /\.yaml$/i,
        // 指定解析为json类型
        type: 'json',
        // 自定义解析器(使用yaml库的parse方法来解析yaml文件为json)
        parser: {
          parse: yaml.parse,
        },
      },
      // 对json5文件的解析
      {
        test: /\.json5$/i,
        // 指定解析为json类型
        type: 'json',
        // 自定义解析器(使用json5库的parse方法来解析json5文件为json)
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
