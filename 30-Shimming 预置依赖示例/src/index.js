/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-17 15:10:41
 * @LastEditTime: 2023-11-18 15:31:18
 * @Descripttion: 项目主入口
 */
const { file, parse } = require('./globals.js');

console.log(file, 'file');
console.log(parse, 'parse');
console.log(this, 'this');

function component() {
  const element = document.createElement('div');
  // 这里使用的_为全局变量,因此本文件不需要导入,也不需要声明_变量
  element.innerHTML = _.join(['Hello', 'webpack1', 'use _', '<br>'], ' ');

  // 设置拓展的全局变量,直接应用join方法即可
  element.innerHTML += join(['Hello', 'webpack', 'use join'], ' ');

  // 这里的this为imports-loader所指定的内容
  this.alert("Hmmm, this probably isn't a great idea...");
  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log("We retrieved some data! AND we're confident it will work on a variety of browser distributions.");
    console.log(json, 'data');
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error));
