const fs = require('fs')
/**
 * 该方法可用于往指定文件当中追加写入内容，该内容不会覆盖文件当中原有的内容，只会在原有内容的基础上进行追加。
 * 若传入的文件路径当中的文件不存在，则先完成该文件的创建，再往里面写入指定内容。path参数为该文件的绝对物理路径，data为需要写入该文件当中的数据内容
 */
fs.appendFile(
  __dirname + '/vue/1.js', 
  'hello~\n', 
  error => {
  if (error) {
    console.log(error)
  } else {
    console.log('成功写入文件');
  }
})