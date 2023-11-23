/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-23 10:18:13
 * @LastEditTime: 2023-11-23 10:47:48
 * @Descripttion: 项目入口文件
 */

console.log('webpack默认公共路径:' + __webpack_public_path__);

__webpack_public_path__ = process.env.ASSET_PATH;

console.log('修改后的公共路径:' + __webpack_public_path__);
