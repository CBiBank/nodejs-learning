const fs = require('fs')
/**
 * 该方法用于检测文件的状态，可以借此来判断某个文件是否存在。
 * path参数传入该文件的绝对物理路径，该callback回调函数有两个参数err和stats。其中err为错误信息参数，stats为一个文件状态对象。
 * 
 *  stats.size  //文件大小（单位字节）
    stats.atime //最后一次访问次文件的时间戳
    stats.mtime //最后一次修改次文件的时间戳
    stats.ctime //最后一次更改文件信息状态的时间戳
    stats.birthtime //此文件创建的时间戳
    stats.isDirectory() //是否是目录
    stats.isFile()      //是否是文件
    stats.isFIFO()      //是否是fifo管道
    stats.isSocket()    //是否是套字节
 */
fs.stat(
  __dirname + '/vue/1.js', 
  (error, status) => {
  if (error) {
    console.log(error)
  } else {
    console.log(status);
  }
})