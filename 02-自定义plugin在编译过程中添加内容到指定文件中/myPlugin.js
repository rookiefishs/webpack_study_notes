/*
 * @Author: wangzhiyu
 * @Date: 2023-07-23 15:44:01
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-23 16:08:15
 */

// 插件名称
const pluginName = 'myPlugin';
const fs = require('fs');
// 创建一个插件的实例
class myPlugin {
  constructor(txt) {
    this.txt = txt;
  }
  // 插件中需要有一个apply方法,它会接受一个参数compiler,它是webpack compiler的一个实例,通过compiler,可以监听编译过程中个各个hooks
  apply(compiler) {
    let _that = this;
    // 这里将会在开始打包的时候触发
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建正在启动！');
    });

    // 注册一个编译完成后的钩子函数
    compiler.hooks.done.tap(pluginName, compilation => {
      console.log('webpack 构建完成！');

      // 获取打包的文件路径
      const outputPath = compilation.compilation.outputOptions.path;

      // 获取打包的main.js文件
      const main = compilation.compilation.assets['main.js'];

      // 获取打包的main.js的文件路径
      const mainPath = `${outputPath}\\main.js`;

      // 修改打包的main.js中的文件内容
      const mainContent = fs.readFileSync(mainPath);

      console.log(mainContent.toString(), 'main.js文件修改之前的内容');

      // 写入指定内容到指定路径下
      fs.writeFileSync(mainPath, `${mainContent}\nconsole.log('${_that.txt}')`, 'utf8');
    });
  }
}

module.exports = myPlugin;
