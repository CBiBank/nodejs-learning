const fs = require('fs')
/**
 * 该方法可用于移动或重命名指定文件。oldPath参数为该文件原来的路径，newPath参数为该文件移动或重命名之后的路径，这两个参数都必须能传入文件完整的绝对物理路径。
 */
fs.rename(
  __dirname + '/vue/test/4.js', 
  __dirname + '/vue/4.js', 
  (error) => {
  if (error) {
    console.log(error)
    return
  }
  console.log('rename成功')
})