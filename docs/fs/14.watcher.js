const express = require("express");
const app = express();
const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 6000;
//绑定并监听指定主机和端口上的连接。此方法与 Node 的http.Server.listen()相同。
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello World!</h1>');
  res.end();
}).listen(port);
//使用指定的回调函数将HTTP GET 请求路由到指定路径。
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get('/checkFileChange', (req, res) => {
  res.send("hello world!");
});

fs.watch(__dirname + '/vue', {
  recursive: true
}, (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);

    // fs.stat(
    //   __dirname + '/vue/' + filename, 
    //   (error, status) => {
    //   if (error) {
    //     console.log(1234, error)
    //   } else {
    //     console.log(5678, status);
    //   }
    // })
  } else {
    console.log('filename not provided');
  }
});