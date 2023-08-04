import { Buffer } from 'node:buffer';

// 创建长度为10的值为0的缓冲区
const buf1 = Buffer.alloc(10);
console.log(buf1)
// <Buffer 00 00 00 00 00 00 00 00 00 00>


// 创建长度为10的值为1的缓冲区
const buf2 = Buffer.alloc(20, 1);
console.log(buf2)
// <Buffer 01 01 01 01 01 01 01 01 01 01>

/**
 * 创建长度为10，但是未初始化的缓冲区，速度比alloc快，需要用fill、white等其他函数来进行缓冲区内容的重写
 */
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3)
// <Buffer 00 00 00 00 00 00 00 00 00 00>

// 创建一个包含字节[1，2，3]的缓冲区。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)
// <Buffer 01 02 03>

// 创建一个包含字节 [1, 1, 1, 1]的缓冲区
// 所有的值使用`(value & 255)` 阶段

const buf5 = Buffer.from([257, 257.5, -255, '1']);
console.log(buf5)
// <Buffer 01 01 01 01>

// 使用字符串test, 创建UTF-8类型的缓冲区
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (十六进制表示法)
// [116, 195, 169, 115, 116] (10进制)
const buf6 = Buffer.from('test');
console.log('buf6',buf6)
// <Buffer 74 c3 a9 73 74>

// 使用字符串test, 创建Latin-1类型的缓冲区 [0x74, 0xe9, 0x73, 0x74].
const buf7 = Buffer.from('test', 'latin1');
const buf8 = Buffer.from('test', 'utf8');
console.log(buf7)
// <Buffer 74 e9 73 74>
console.log('buf8',buf8)
