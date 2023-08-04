import { Buffer } from 'node:buffer';

const buf = Buffer.allocUnsafe(10);

console.log(buf);
// Prints (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>

// buf.fill(0);

// console.log(buf);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
