/*
 * @Author: wangzhiyu
 * @Date: 2023-08-13 21:20:27
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-16 18:11:06
 */
// 导入lodash
import _ from 'lodash';

// 导入css
import './assets/index.css';

// 导入图片
import loaderImage from './assets/loaderImage.png';

// 导入xml文件和csv文件
import XML from './assets/test.xml';
import CSV from './assets/test.csv';

// 导入yaml toml json5 文件
import Yaml from './assets/test.yaml';
import Toml from './assets/test.toml';
import Json5 from './assets/test.json5';

// 创建一个div,填充内容为hello world ,并添加到body标签中
function component() {
  const element = document.createElement('div');

  // 创建一个图片标签
  const img = document.createElement('img');

  // 将导入的图片添加到img的src中
  img.src = loaderImage;

  // 给元素绑定id
  element.id = 'root';

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'world<br>', '我使用了阿里巴巴普惠体<br>', `这是XML文件的内容${JSON.stringify(XML)}<br><br>`, `这是CSV文件的内容${CSV}<br>`], `这是Yaml文件的内容${JSON.stringify(Yaml)}<br><br>`, `这是Toml文件的内容${JSON.stringify(Toml)}<br><br>`, `这是Json5文件的内容${JSON.stringify(Json5)}<br><br>`);

  document.body.appendChild(element);
  document.body.appendChild(img);
}

component();
