/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-21 13:12:45
 * @LastEditTime: 2023-11-21 13:44:46
 * @Descripttion: web worker处理文件(新线程)
 */

// 监听主线程发送过来的消息
self.onmessage = data => {
  // 给主线程发送数据消息
  self.postMessage('我收到了发送的数据:' + JSON.stringify(data.data));
};
