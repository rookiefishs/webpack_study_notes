/*
 * @Author: wangzhiyu
 * @Date: 2023-07-28 21:55:09
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-28 22:04:33
 */
// 使用模块别名引入ab模块
import a from '@/a.js';
import b from '@/b.js';

function sum(a, b) {
  return a + b;
}
sum(a, b);

console.log(a);
console.log(b);
