const fs = require('fs')
/**
 * 该方法可以用于创建一个或多级目录文件夹
 * options可以包含两个属性：recursive（是否递归创建不存在的目录，默认false不递归创建）、mode（设置目录权限）
 */
fs.mkdir(
  __dirname + '/vue/test/111/222',
  {
    recursive: true
  },
  (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('成功')
})