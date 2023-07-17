const chokidar = require('chokidar');
const express = require("express");
const app = express();
// 初始化
const watcher = chokidar.watch('./control-admin/dist/', {
  // ignored: /(^|[\/\\])\../, // 忽略点文件
  persistent: true
});

// 收到事件时使用
const log = console.log.bind(console);
let readyFlag = false
let changeTimestamp = ''
const fileChangeFn = () => {
  changeTimestamp = new Date().getTime()
}
// 添加事件监听
watcher
  .on('add', path => {
    if (!readyFlag) return
    fileChangeFn()
    log(`File ${path} has been added`)
  })
  .on('change', path => {
    if (!readyFlag) return
    fileChangeFn()
    log(`File ${path} has been changed`)
  })
  .on('unlink', path => {
    if (!readyFlag) return
    fileChangeFn()
    log(`File ${path} has been removed`)
  });

// 更多其他事件
watcher
  .on('addDir', path => {
    if (!readyFlag) return
    log(`Directory ${path} has been added`)
  })
  .on('unlinkDir', path => {
    if (!readyFlag) return
    log(`Directory ${path} has been removed`)
  })
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => {
    readyFlag = true
    changeTimestamp = new Date().getTime()
    log('Initial scan complete. Ready for changes')
  })
  .on('raw', (event, path, details) => { // 内部
    log('Raw event info:', event, path, details);
  });

watcher.on('change', (path, stats) => {
  if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});


app.get('/checkFileChange', (req, res) => {
  console.log(1111, req)
  res.send({
    code: 'SUCCESS',
    data: changeTimestamp
  })
});

app.listen(6000);


