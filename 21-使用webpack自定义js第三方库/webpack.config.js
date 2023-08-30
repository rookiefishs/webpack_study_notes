/*
 * @Author: wangzhiyu
 * @Date: 2023-08-29 21:33:53
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-29 22:10:43
 */
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-formatTime.js',
    path: path.resolve(__dirname, 'dist'),
    // 这里的library如果不设置,默认就只能使用script导入,无法使用require和import进行导入---->对应dist1(script格式引入自定义第三方库)
    // library: 'webpackFormatTime',

    // 打包require导入
    // library: {
    //   name: 'webpackFormatTime',
    //   // umd可以使用requrire导入
    //   type: 'umd',
    // },

    // 打包import导入---->dist2(import格式引入自定义第三方库)
    library: {
      // module可以使用import导入(设置type为module需要配置下方的experiments.outputModule为true)
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};
