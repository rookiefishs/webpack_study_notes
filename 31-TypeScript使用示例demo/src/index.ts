/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:47:35
 * @LastEditTime: 2023-11-20 13:58:28
 * @Descripttion: 项目主入口
 */
import * as _ from 'lodash';

/// <reference types="webpack/module" />
console.log(import.meta.webpack, 'webpack');

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'TypeScript'], ' ');

  return element;
}
console.log('123');

document.body.appendChild(component());
