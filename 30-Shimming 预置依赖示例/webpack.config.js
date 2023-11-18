/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-17 15:10:54
 * @LastEditTime: 2023-11-18 15:38:02
 * @Descripttion: webpack配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    polyfills: './src/polyfills.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // 配置/src/index.js中的this为指定的内容
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper="我是通过imports-loader自定义的this"',
      },
      {
        test: require.resolve('./src/globals.js'),
        // type=commonjs: 指定模块的导出方式为commonjs
        // exports=file,multiple|helpers.parse|parse: 指定导出一个对象,对象包含file,multiple两个参数,其中multiple表示导出多个参数,这里表示导出helpers.parse中的parse参数
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'shimming预置全局变量实例' }),
    // 配置全局变量
    new webpack.ProvidePlugin({
      // 配置_后,会添加一个_全局变量,后面无论在项目的任何地方使用_,都会引用到lodash
      _: 'lodash',
      // 添加join为全局变量,来自于lodash.join方法
      join: ['lodash', 'join'],
    }),
  ],
  mode: 'development',
};
