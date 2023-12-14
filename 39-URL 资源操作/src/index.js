/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:27:40
 * @LastEditTime: 2023-12-14 21:54:29
 * @Descripttion: 项目主入口
 */

// 当使用 new URL('./path', import.meta.url)，webpack 也会创建资源模块。
const logo = new URL('./assets/webpack.svg', import.meta.url);
console.log(logo);
