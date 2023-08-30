/*
 * @Author: wangzhiyu
 * @Date: 2023-07-20 21:41:59
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-07-20 21:46:47
 */
module.exports = function (source) {
  console.log(source, 'source');
  const { search, replace } = this.query; // 从options中获取参数
  return source.replaceAll(search, replace);
};