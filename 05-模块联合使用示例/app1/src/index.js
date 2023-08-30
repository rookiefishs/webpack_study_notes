/*
 * @Author: wangzhiyu
 * @Date: 2023-08-07 22:00:45
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-07 22:26:12
 */

// 导入button模块并渲染到页面上
import Button from './Button';
const button = document.createElement('button');
button.textContent = 'Click me!';
document.getElementById('root').appendChild(button);

const btn = new Button();
btn.render(document.getElementById('root'));
