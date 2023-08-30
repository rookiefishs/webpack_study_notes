/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:20:27
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-28 21:22:41
 */
// 导入lodash
import _ from 'lodash';

// 创建一个div,填充内容为hello world ,并添加到body标签中
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'world '], ' test ');

  return element;
}

document.body.appendChild(component());
