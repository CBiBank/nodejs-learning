const fs = require('fs')

/**
 *  1、读取你要复制的文件
    2、将读取到的文件写入到一个新的文件当中
 */

const fn1 = () => {
  const data = fs.readFileSync('./vue/1.js')  
  fs.writeFileSync('./vue/test/1.js', data) 
}
// fn1()

const fn2 = () => {
  const data = fs.readFileSync('./vue/1.js')  
  const ws = fs.createWriteStream('./vue/test/3.js')
  ws.write(data)
}
// fn2()

const fn3 = () => {
  fs.copyFile('./vue/1.js', './vue/test/4.js', (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('success')
  });
}
// fn3()

// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传 递到另外一个流中。
const fn4 = () => {
  // 创建一个可读流 
  var readerStream = fs.createReadStream('./vue/1.js'); 
  // 创建一个可写流 
  var writerStream = fs.createWriteStream('./vue/test/5.js'); 
  // 管道读写操作 
  // 读取 文件内容，并将内容写入到 目标 文件中 
  readerStream.pipe(writerStream); 
  console.log("程序执行完毕");
}
fn4()