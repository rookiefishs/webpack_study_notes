/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-10-30 19:06:34
 * @LastEditTime: 2023-10-30 19:07:03
 * @Descripttion:
 */

// 导入cube方法并使用
import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');

  return element;
}

document.body.appendChild(component());
