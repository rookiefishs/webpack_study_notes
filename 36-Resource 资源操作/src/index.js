/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:27:40
 * @LastEditTime: 2023-12-14 10:18:14
 * @Descripttion: 项目主入口
 */

// 这里在webpack.config.js中配置的.png的资源模块类型为assets/resource,所以可以直接导入.png格式的文件,如果没有配置,直接导入将会报错
import myPng from './assets/docs.png';

console.log(myPng, 'myPng');
