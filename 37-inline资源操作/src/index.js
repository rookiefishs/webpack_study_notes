/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:27:40
 * @LastEditTime: 2023-12-14 14:40:20
 * @Descripttion: 项目主入口
 */

// 这里在webpack.config.js中配置的.png的资源模块类型为assets/inline,所以可以直接导入.png格式的文件,如果没有配置,直接导入将会报错
import mySvg from './assets/webpack.svg';

// 获取导入的svg,因为使用的是inline,所以这里的格式为内联的格式(默认为base64)
console.log(mySvg, 'mySvg');

// 设置body背景样式
document.body.style.background = `url(${mySvg})`;
