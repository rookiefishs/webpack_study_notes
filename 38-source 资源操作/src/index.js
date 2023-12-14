/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:27:40
 * @LastEditTime: 2023-12-14 15:15:52
 * @Descripttion: 项目主入口
 */

// 这里在webpack.config.js中配置的.txt的资源模块类型为assets/source,所以可以直接导入.txt格式的文件,如果没有配置,直接导入将会报错
import myTxT from './assets/source.txt';

// 获取导入的txt,因为使用的是source,所以这里的格式直接为文件的内容
console.log(myTxT, 'myTxT');

// 设置body背景样式
document.body.innerText = myTxT;
