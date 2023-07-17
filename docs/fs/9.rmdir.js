const fs = require('fs')
// 此方法也会把目录下的文件删除, 也可直接删除文件
/**
 * 该方法可以用于删除一个或多级目录。其中path为该目录的绝对物理路径，callback回调函数当中也只有一个错误信息参数，一般在该目录不存在或者删除操作失败时触发调用。
 * options包含三个属性：recursive(是否递归删除整个目录，默认false，新版本已弃用，在新版本中使用改属性会报警告并且不执行递归删除操作)、后面两个参数也都是基于recursive实现其功能。
 */
fs.rmdir(
  __dirname + '/vue/test/111/111.js',
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