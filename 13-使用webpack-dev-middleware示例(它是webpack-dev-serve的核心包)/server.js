/*
 * @Author: wangzhiyu
 * @Date: 2023-08-23 21:44:52
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-23 22:01:28
 */
// 导入express,webpack,webpack-dev-midderware框架
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// 导入opn包,用于打开浏览器加载指定的url
const opn = require('opn');

// 创建app(express框架实例)
const app = express();

// 导入webpack配置文件
const config = require('./webpack.config.js');

// webpack的实例对象,通过compiler,可以使用webpack的一些方法来处理代码
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  // 开发服务器成功后给出提示
  console.log('place open url http://localhost:3000 \n');

  // 打开浏览器加载此url
  opn('http://localhost:3000');
});
