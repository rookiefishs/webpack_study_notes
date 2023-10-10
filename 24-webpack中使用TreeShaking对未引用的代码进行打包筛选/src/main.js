/*
 * @Author: wangzhiyu
 * @Date: 2023-10-10 21:38:07
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-10-10 21:38:08
 */

// 导入cube方法并使用
import { cube } from './math.js';

function component() {
  const element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');

  return element;
}

document.body.appendChild(component());
