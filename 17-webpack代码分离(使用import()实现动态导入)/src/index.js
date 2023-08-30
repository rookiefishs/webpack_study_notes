/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:20:27
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-27 21:20:53
 */
// 创建一个div,填充内容为hello world ,并添加到body标签中
const element = document.createElement('div');

// 使用import函数来动态的导入lodash库,这里将会返回一个promise,因此需要使用.then来获取proimise的结果(lodash库)
import('lodash').then(({ default: _ }) => {
  element.innerHTML = _.join(['Hello', 'world'], ' ');
  document.body.appendChild(element);
});
