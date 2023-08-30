/*
 * @Author: wangzhiyu
 * @Date: 2023-08-07 22:01:00
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-07 22:25:36
 */

// 在指定的container下面添加一个click me的按钮
export default class Button {
  constructor() {
    this.buttonElement = document.createElement('button');
    this.buttonElement.textContent = 'Click me!';
  }

  render(container) {
    container.appendChild(this.buttonElement);
    console.log('render');
  }
}
