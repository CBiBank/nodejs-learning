const fs = require('fs')
/**
 * 方法用于读取指定文件当中的内容，path参数为该文件的绝对物理路径，其中options参数可选，可以传入编码格式，如读取文本文件时，可传入'utf8',若不指定编码格式，则默认输出读取的文件内容为Buffer形式，故一般都会传入该参数。
 */
const readFile = () => {
  fs.readFile(__dirname + '/vue/1.js', 'utf-8', (error, data) => {
    if(error) {
      console.log(error)
    } else {
      console.log(data);
    }
  })
}
// readFile()

const createReadStream = () => {
  const fs = require('fs')
  //创建读取流对象
  const re = fs.createReadStream('./vue/1.js', 'utf-8')
  //每次取出 64k 数据后执行一次 chunk 回调
  re.on('data', chunk => {console.log(chunk);console.log(chunk.length);})
  //读取完毕后, 执行 end 回调
  re.on('end', () => {console.log('读取完成');})
}
createReadStream()

/**
 * 读取文件应用场景
    电脑开机
    程序运行
    编辑器打开文件
    查看图片
    播放视频
    播放音乐
    Git 查看日志
    上传文件
    查看聊天记录
 */