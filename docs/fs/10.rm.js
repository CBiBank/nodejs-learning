const fs = require('fs')
/**
 * 异步地删除文件和目录
 * options包含三个属性：recursive(是否递归删除整个目录，默认false，新版本已弃用，在新版本中使用改属性会报警告并且不执行递归删除操作)、后面两个参数也都是基于recursive实现其功能。
 */

fs.rm(
  __dirname + '/vue/test/1111',
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