import { Buffer } from 'node:buffer';
/**
 * Buffer.from(array)
 */
// 创建一个包含字符串“buffer”的UTF-8字节的新Buffer。
const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log('buf1', buf1)
// <Buffer 62 75 66 66 65 72>


/**
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 */
const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;

// 共享内存地址
const buf2 = Buffer.from(arr.buffer);

console.log('buf2', buf2);
// <Buffer 88 13 a0 0f>

// 更改arr，也会更改buf2
arr[1] = 6000;

console.log('buf2', buf2);
// <Buffer 88 13 70 17>


// 可选的 byteOffset 和 length 参数指定了 arrayBuffer 中将由 Buffer 共享的内存范围。
const ab = new ArrayBuffer(10);
const buf3 = Buffer.from(ab, 0, 2);

console.log('buf3', buf3.length);
// 2


/**
 * Buffer.from(buffer)
 */
const buf4 = Buffer.from('buffer');
const buf5 = Buffer.from(buf4);

buf4[0] = 0x61;

console.log('buf4', buf4.toString());
// auffer
console.log('buf5', buf5.toString());
// buffer

/**
 * Buffer.from(object[, offsetOrEncoding[, length]])
 */
const buf7 = Buffer.from(new String('this is a test'));
// <Buffer 74 68 69 73 20 69 73 20 61 20 74 65 73 74>
console.log('buf7', buf7)
class Foo {
  [Symbol.toPrimitive]() {
    return 'this is a test';
  }
}
const buf8 = Buffer.from(new Foo(), 'utf8');
console.log('buf8', buf8)
// <Buffer 74 68 69 73 20 69 73 20 61 20 74 65 73 74>

/**
 * Buffer.from(string[, encoding])
 */
const buf9 = Buffer.from('this is a tést');
const buf10 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log('buf9', buf9.toString());
// Prints: this is a tést
console.log('buf10', buf10.toString());
// Prints: this is a tést
console.log('buf9', buf9.toString('latin1'));
// Prints: this is a tÃ©st

/**
 * Buffer.isBuffer(obj)
 */
console.log(Buffer.isBuffer(Buffer.alloc(10))); // true
console.log(Buffer.isBuffer(Buffer.from('foo'))); // true
console.log(Buffer.isBuffer('a string')); // false
console.log(Buffer.isBuffer([])); // false
console.log(Buffer.isBuffer(new Uint8Array(1024))); // false

/**
 * Buffer.isEncoding(encoding)
 */
console.log(Buffer.isEncoding('utf8'));// true
console.log(Buffer.isEncoding('hex'));// true
console.log(Buffer.isEncoding('utf/8'));// false
console.log(Buffer.isEncoding(''));// false
