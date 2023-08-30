/*
 * @Author: wangzhiyu
 * @Date: 2023-08-07 22:01:16
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-07 22:25:57
 */

// 远程调用配置好的app1中开放出来的Button模块,并进行加载
const loadButton = () => {
  import('app1/Button').then(({ default: Button }) => {
    const button = new Button();
    button.render(document.getElementById('root'));
  });
};

loadButton();
