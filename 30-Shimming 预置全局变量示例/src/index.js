/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-17 15:10:41
 * @LastEditTime: 2023-11-17 15:21:43
 * @Descripttion: 项目主入口
 */

function component() {
  const element = document.createElement('div');

  // 这里使用的_为全局变量,因此本文件不需要导入,也不需要声明_变量
  element.innerHTML = _.join(['Hello', 'webpack1', 'use _', '<br>'], ' ');

  // 设置拓展的全局变量,直接应用join方法即可
  element.innerHTML += join(['Hello', 'webpack', 'use join'], ' ');

  return element;
}

document.body.appendChild(component());
