const fs = require('fs')

// 图片文件的交互

/**
 * 该方法可用于往指定文件当中写入内容，该内容会覆盖文件当中原有的内容。
 * 若传入的文件路径当中的文件不存在，则先完成该文件的创建，再往里面写入指定内容。
 * path参数为该文件的绝对物理路径，data为需要写入该文件当中的数据内容。
 */
const writeFile = () => {
  fs.writeFile(__dirname + '/vue/1.js', '您好~\n', error => {
    if (error) {
      console.log(error)
    } else {
      console.log('成功写入文件');
    }
  })
}
// writeFile()

/**
 * createWriteStream 流式写入
 * 
 * 以下标志在 flag 选项接受字符串的任何地方可用。
  'a': 打开文件进行追加。 如果文件不存在，则创建该文件。
  'ax': 类似于 'a' 但如果路径存在则失败。
  'a+': 打开文件进行读取和追加。 如果文件不存在，则创建该文件。
  'ax+': 类似于 'a+' 但如果路径存在则失败。
  'as': 以同步模式打开文件进行追加。 如果文件不存在，则创建该文件。
  'as+': 以同步模式打开文件进行读取和追加。 如果文件不存在，则创建该文件。
  'r': 打开文件进行读取。 如果文件不存在，则会发生异常。
  'r+': 打开文件进行读写。 如果文件不存在，则会发生异常。
  'rs+': 以同步模式打开文件进行读写。 指示操作系统绕过本地文件系统缓存。
  'w': 打开文件进行写入。 创建（如果它不存在）或截断（如果它存在）该文件。
  'wx': 类似于 'w' 但如果路径存在则失败。
  'w+': 打开文件进行读写。 创建（如果它不存在）或截断（如果它存在）该文件。
  'wx+': 类似于 'w+' 但如果路径存在则失败。
 */
const createWriteStream = () => {
  const ws = fs.createWriteStream('./vue/1.js', {
    flags: 'a'
  });
  // write写入
  ws.write('君不见，黄河之水天上来，奔流到海不复回\r\n')
  ws.write('君不见，高堂明镜悲白发，朝如青丝暮成雪\r\n')
  // 关闭通道
  ws.close()
}
createWriteStream()

// 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数。
// 流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于 写入频率较低的场景

// 写入文件的场景
// 文件写入 在计算机中是一个非常常见的操作，下面的场景都用到了文件写入
// 安装软件
// 保存程序日志，如 Git
// 编辑器保存文件
// 视频录制

