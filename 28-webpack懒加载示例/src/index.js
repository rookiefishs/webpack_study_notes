/*
 * @Author: wangzhiyu
 * @version: 1.0.0
 * @Date: 2023-11-02 10:36:44
 * @LastEditTime: 2023-11-02 10:47:35
 * @Descripttion:
 */

// 导入lodash包
import _ from 'lodash';

const element = document.createElement('div');
const button = document.createElement('button');
const br = document.createElement('br');

button.innerHTML = 'Click me and look at the console!';
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.appendChild(br);
element.appendChild(button);

// 创建button点击事件,在btn触发点击时才开始导入print模块,通过.then获取导入print的promise的回执,并执行print模块中的代码
button.onclick = e =>
  import('./print').then(module => {
    // module.default为print模块默认导出的内容
    const print = module.default;
    console.log(module, 'module');

    print();
  });

document.body.appendChild(element);
