/*
 * @Author: wangzhiyu <w19165802736@163.com>
 * @version: 1.0.0
 * @Date: 2023-11-20 13:34:25
 * @LastEditTime: 2023-11-20 13:51:40
 * @Descripttion: webpack类型声明文件
 */
interface ImportMeta {
  readonly webpack: {
    readonly mode: 'development' | 'production';
    readonly publicPath: string;
    // 更多 webpack 特定属性...
  };
}

declare module '*.svg' {
  const content: any;
  export default content;
}
