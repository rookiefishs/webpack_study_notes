/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 09:27:40
 * @LastEditTime: 2023-12-14 22:14:36
 * @Descripttion: 项目主入口
 */

// 这里myTxt的资源小于8kb,默认使用inline资源加载方式(默认情况下,没有配置webpack通用资源的parser.dataUrlCondition.maxSize时)
import myTxt from './assets/myTxt.txt';

// 这里myTxt的资源大于8kb,默认使用resource资源加载方式(默认情况下,没有配置webpack通用资源的parser.dataUrlCondition.maxSize时)
import myTxt2 from './assets/myTxt2.txt';

// 这里myTxt的资源大于40kb,默认使用inline资源加载方式(配置了webpack通用资源的parser.dataUrlCondition.maxSize时)
import myTxt3 from './assets/myTxt3.txt';

console.log(myTxt, 'myTxt');
console.log(myTxt2, 'myTxt2');
console.log(myTxt3, 'myTxt3');
