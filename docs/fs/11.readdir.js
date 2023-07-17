const fs = require('fs')
/**
 * 读取文件夹
 */
fs.readdir(
  __dirname + '/vue',
  (error, data) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(data)
})