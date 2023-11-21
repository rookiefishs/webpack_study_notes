/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-21 13:12:22
 * @LastEditTime: 2023-11-21 13:46:54
 * @Descripttion: web worker示例主文件
 */
// 创建worker线程
const worker = new Worker('./worker.js');

setInterval(() => {
  // 通过postMessage方法传递数据给worker
  worker.postMessage({ data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100] });
}, 1000);

// 通过onmessage事件监听worker返回的消息
worker.onmessage = data => {
  console.log(data, 'data');
};
