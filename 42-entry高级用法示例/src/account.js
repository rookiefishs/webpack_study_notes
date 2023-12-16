/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-12-16 09:33:50
 * @LastEditTime: 2023-12-16 09:35:08
 * @Descripttion: 页面2
 */
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'account'], ' ');

  return element;
}

document.body.appendChild(component());
