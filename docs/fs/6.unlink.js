const fs = require('fs')
/**
 * 该方法可用于完成指定文件的删除。path参数为该文件的绝对物理路径，callback回调参数当中只有一个错误信息参数err，一般在该文件不存在或者删除文件失败时触发调用。
 */
fs.unlink(
  __dirname + '/vue/test/3.js', 
  (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('删除成功')
})