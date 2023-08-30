/**
 * @Author:WangZhiYu
 * @Date: 2023/08/22 21:45:44
 * @LastEditors: WangZhiYu
 * @LastEditTime: 2023/08/22 21:45:44
 */
// 导入lodash
import _ from 'lodash';

// 导入print函数
import printMe from './print';

// 创建一个div,填充内容为hello world ,并添加到body标签中
function component() {
  // 创建一个div
  const element = document.createElement('div');

  // 创建一个button
  const btn = document.createElement('button');

  // 设置btn文本内容
  btn.innerHTML = '点击我并查看控制台';

  // 设置btn点击事件
  btn.onclick = printMe;

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'world123<br>']);

  // btn添加到div中
  element.appendChild(btn);

  // 给元素绑定id
  element.id = 'root';

  document.body.appendChild(element);
}

component();
