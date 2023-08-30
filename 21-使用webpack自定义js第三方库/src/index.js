/*
 * @Author: wangzhiyu
 * @Date: 2023-08-29 21:34:19
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-08-29 21:39:32
 */

/**
 * 格式化时间函数
 * @param {string} format 时间格式化的格式
 * @param {date} date 需要格式化的时间,默认为当前时间
 * @returns 完成格式化之后的时间
 */
export function formatTime(format, date = new Date()) {
  const map = {
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分钟
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  format = format.replace(/([yMdhmsqS])+/g, (all, t) => {
    let v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });

  return format;
}
