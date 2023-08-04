import { Buffer } from 'node:buffer';

// 将 Buffer 传递给 TypedArray 构造函数将复制 Buffer 内容，解释为整数数组，而不是目标类型的字节序列。
const buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buf);

console.log(uint32array);

// Uint32Array(4) [ 1, 2, 3, 4 ]


// 传递 ArrayBuffer 底层的 Buffer 将创建一个与 Buffer 共享其内存的 TypedArray。
const buf2 = Buffer.from('hello', 'utf16le');
const uint16array = new Uint16Array(
  buf2.buffer,
  buf2.byteOffset,
  buf2.length / Uint16Array.BYTES_PER_ELEMENT
);

console.log(uint16array);
// Uint16Array(5) [ 104, 101, 108, 108, 111 ]
