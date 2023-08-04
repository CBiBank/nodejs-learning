import { Buffer } from 'node:buffer';

const buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>

// // 报错
// const buf2 = Buffer.alloc(-1);
// console.log(buf2);

// 如果指定了 fill，则分配的 Buffer 将通过调用 buf.fill(fill) 进行初始化。
const buf3 = Buffer.alloc(5, 'a');
console.log(buf3);
// Prints: <Buffer 61 61 61 61 61>

// hello word base64编码
const buf4 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf4);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

// 调用 Buffer.alloc() 可能比替代 Buffer.allocUnsafe() 慢得多，但确保新创建的 Buffer 实例内容永远不会包含以前分配的敏感数据，包括可能没有为 Buffer 分配的数据。

// 如果 size 不是数值，则会抛出 TypeError。
