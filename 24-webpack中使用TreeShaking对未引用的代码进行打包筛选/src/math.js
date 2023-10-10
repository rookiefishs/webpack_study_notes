/*
 * @Author: wangzhiyu
 * @Date: 2023-10-10 21:44:22
 * @LastEditors: wangzhiyu
 * @LastEditTime: 2023-10-10 21:44:22
 */

// 这里导出两个函数,两个函数之间互不影响

// 如果不进行配置, 在最终打包时无论是否引用了math.js这个模块, 都会将这个js打包到最终文件里

// 如果webpack.config.js中进行了配置optimization.usedExports为true,表示开启Tree Shaking,那么如果math.js没有被任何模块引用一次,那么math.js就不会被打包到最终的代码中

// 如果在package.json中配置了"sideEffects": false,或者为sideEffects的value为一些正则,表示选中了该文件,并且webpack.config.js中设置了mode为production和设置了optimization.usedExports为true,那么将会在sideEffects的value的范围内标志这些文件都没有副作用,表示这些文件中没有被应用的代码可以不参与打包

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
