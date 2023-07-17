const fs = require('fs')
const zlib = require("zlib")

// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

// fs.createReadStream("./vue/1.js")
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('./vue/1.js.gz'))

//     console.log("压缩完成！")


// 解压文件
fs.createReadStream("./vue/1.js.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("./vue/1-1.js"))

console.log("解压成功！")

