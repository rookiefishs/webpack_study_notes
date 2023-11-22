/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @Date: 2023-08-13 21:20:27
 * @LastEditors: flash
 * @LastEditTime: 2023-11-22 14:08:04
 */
import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  btn.innerHTML = '点击我并查看控制台';
  btn.onclick = printMe;
  element.innerHTML = _.join(['Hello', 'world123<br>']);
  element.appendChild(btn);
  element.id = 'root';
  document.body.appendChild(element);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

component();
