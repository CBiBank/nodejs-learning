# Buffer 缓冲区

Buffer 对象用于表示固定长度的字节序列。 许多 Node.js API 都支持 Buffer。
Buffer 类是 JavaScript Uint8Array 类的子类，并使用涵盖额外用例的方法对其进行扩展
Node.js 目前支持的字符编码如下：

- utf8 多字节编码的 Unicode 字符。
- utf16le 多字节编码的 Unicode 字符。
- latin1 Latin-1 代表 ISO-8859-1，此字符编码仅支持 U+0000 至 U+00FF 的 Unicode 字符
- base64
- base64url

以下为旧版字符编码

- hex 将每个字节编码为两个十六进制字符
- ascii 仅适用于 7 位 ASCII 数据。
- binary latin1 的别名。
- ucs2，ucs-2 utf16le 的别名

## Buffer 类

进到 repl 模式输入 Buffer

```js
[Function: Buffer] {
  // 分配缓冲区内存的容量
  poolSize: 8192,
  // 根据传入的数据内容创建 buffer
  from: [Function: from],
  of: [Function: of],
  // 正常创建 buffer
  alloc: [Function: alloc],
  // 两种不安全的创建 buffer 方法
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  // 判断是否是 Buffer 实例对象
  isBuffer: [Function: isBuffer],
  // 比较两个 Buffer 对象的相对位置
  compare: [Function: compare],
  // 判断 Nodejs 是否支持某种编码
  isEncoding: [Function: isEncoding],
  // 拼接几个 Buffer 对象，创建出一个新 Buffer 对象
  concat: [Function: concat],
  // 跟进特定编码统计 buffer 字节数
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
}
```

### 缓冲内存的大小

虽然 Node 的代码运行底层是 V8，实际分配给缓冲的内存是在 C++ 层申请，也就是在 v8 之外的堆内存，所以 Buffer 类更像是一个混合体，底层细节都在 C++ 里面，调度策略这些在 JS 的接口里面，其中一个原因就是 v8 引擎一开始也并不是为服务端设计的，所以它内部的最大可用堆内存只有 1.4G，可以通过传入 --max-old-space-size 新老生代参数来解除限制，但面对大内存管理有时候还是不够用，所以有时候我们运行代码抛出 RangeError 错误的时候，有可能就是内存实例爆池了。

在 Node 里面，要想突破 v8 的内存限制，还有一种手段就是通过 Buffer，Buffer 是通过 C++ 层面申请的，它不走 V8 的内存机制，单个 Buffer 实例在 64 位系统上是 2GB，这个限制在 C++ 层面就已经约束了。

### 内存分配策略 - 8KB

## TypedArray

Buffer 实例也是 JavaScript Uint8Array 和 TypedArray 实例

## 迭代

```js
import { Buffer } from "node:buffer";

const buf = Buffer.from([1, 2, 3]);

for (const b of buf) { console.log(b);}
// Prints:
//   1
//   2
//   3
```

buf.values()、buf.keys() 和 buf.entries() 方法可用于创建迭代器。

## Blob

new buffer.Blob([sources[, options]])

创建新的 Blob 对象，其中包含给定源的串接。

`<ArrayBuffer>`、`<TypedArray>`、`<DataView>` 和 `<Buffer>` 源被复制到 'Blob' 中，因此可以在创建 'Blob' 后安全地进行修改。

字符串源被编码为 UTF-8 字节序列并复制到 Blob 中。 每个字符串部分中不匹配的代理对将被替换为 Unicode U+FFFD 替换字符。

### blob.arrayBuffer()

新增于: v15.7.0, v14.18.0
返回： Promise
返回使用包含 Blob 数据副本的 `<ArrayBuffer>` 履行的 promise。

blob.size
新增于: v15.7.0, v14.18.0
Blob 的总大小（以字节为单位）。

blob.slice([start[, end[, type]]])
新增于: v15.7.0, v14.18.0
start `<number>` 起始索引。
end `<number>` 结束索引。
type `<string>` 新 Blob 的内容类型
创建并返回包含此 Blob 对象数据子集的新 Blob。 原来的 Blob 没有改动。

blob.stream()
新增于: v16.7.0
返回： `<ReadableStream>`
返回允许读取 Blob 内容的新 ReadableStream。

blob.text()
新增于: v15.7.0, v14.18.0
返回： `<Promise>`
返回使用解码为 UTF-8 字符串的 Blob 的内容履行的 promise。

blob.type
新增于: v15.7.0, v14.18.0
类型： `<string>`
Blob 的内容类型。

一旦创建了 `<Blob>` 对象，就可以通过 MessagePort 将其发送到多个目的地，而无需传输或立即复制数据。 只有在调用 arrayBuffer() 或 text() 方法时，才会复制 Blob 包含的数据。

## 方法

### 静态方法：Buffer.alloc(size[, fill[, encoding]])

- size `<integer>` 新的 Buffer 所需的长度。
- fill `<string>` | `<Buffer>` | `<Uint8Array>` | `<integer>` 用于预填充新 Buffer 的值。 默认值： 0。
- encoding `<string>` 如果 fill 是字符串，则这就是它的编码。 默认值： 'utf8'。

分配 size 个字节的新 Buffer。 如果 fill 为 undefined，则 Buffer 将被填零。

如果 size 大于 buffer.constants.MAX_LENGTH 或小于 0，则抛出 ERR_OUT_OF_RANGE。

- 在 32 位架构上，该值当前为 230 - 1（约 1 GiB）。
- 在 64 位架构上，该值当前为 232 （大约 4 GiB）。
- 它反映了引擎盖下的 v8::TypedArray::kMaxLength。
- 此值也可用作 buffer.kMaxLength。

### Buffer.allocUnsafe(size)

size <integer> 新的 Buffer 所需的长度。
分配 size 个字节的新 Buffer。 如果 size 大于 buffer.constants.MAX_LENGTH 或小于 0，则抛出 ERR_OUT_OF_RANGE。

如果 size 不是数值，则会抛出 TypeError。

Buffer 模块预分配了一个内部 Buffer 实例，大小为 Buffer.poolSize，仅当 size 小于或等于 Buffer.poolSize >> 1（Buffer.poolSize 的地板划分 两个）。

使用此预先分配的内部内存池是调用 Buffer.alloc(size, fill) 与调用 Buffer.alloc(size, fill) 之间的关键区别。 具体来说，Buffer.alloc(size, fill) 永远不会使用内部 Buffer 池，而如果 size 小于或等于 Buffer.poolSize 的一半，Buffer.allocUnsafe(size).fill(fill) 将使用内部 Buffer 池。 当应用需要 Buffer.allocUnsafe() 提供的额外性能时，差异很细微，但可能很重要。

### Buffer.from(array)

新增于: v5.10.0
array `<integer[]>`
使用 0 范围内的 array 字节分配一个新的 Buffer – 255。 该范围之外的数组条目将被截断以符合它。

如果 array 是类似 Array 的对象（即具有 number 类型的 length 属性的对象），则将其视为数组，除非它是 Buffer 或 Uint8Array。 这意味着所有其他 TypedArray 变体都被视为 Array。 要从支持 TypedArray 的字节创建 Buffer，请使用 Buffer.copyBytesFrom()。

如果 array 不是 Array 或其他适用于 Buffer.from() 变体的类型，则将抛出 TypeError。

Buffer.from(array) 和 Buffer.from(string) 也像 Buffer.allocUnsafe() 一样使用内部 Buffer 池。

### Buffer.from(arrayBuffer[, byteOffset[, length]])

arrayBuffer `<ArrayBuffer>` | `<SharedArrayBuffer>` ArrayBuffer、SharedArrayBuffer，例如 TypedArray 的 .buffer 属性。
byteOffset `<integer>` 要暴露的第一个字节的索引。 默认值： 0。
length `<integer>` 要暴露的字节数。 默认值： arrayBuffer.byteLength - byteOffset。
这将创建 ArrayBuffer 的视图，而无需复制底层内存。 例如，当传入对 TypedArray 实例的 .buffer 属性的引用时，新创建的 Buffer 将与 TypedArray 的底层 ArrayBuffer 共享相同的分配内存。

### Buffer.from(buffer)

将传入的 buffer 数据复制到新的 Buffer 实例上。

### Buffer.from(object[, offsetOrEncoding[, length]])

- object `<Object>` 支持 Symbol.toPrimitive 或 valueOf() 的对象。
- offsetOrEncoding `<integer>` | `<string>` 字节偏移量或编码。
- length `<integer>` 长度。

对于 valueOf() 函数返回的值不严格等于 object 的对象，则返回 Buffer.from(object.valueOf(), offsetOrEncoding, length)。

对于支持 Symbol.toPrimitive 的对象，则返回 Buffer.from(object[Symbol.toPrimitive]('string'), offsetOrEncoding)。

### Buffer.from(string[, encoding])

- string `<string>` 要编码的字符串。
- encoding `<string>` string 的编码。 默认值： 'utf8'。

创建包含 string 的新 Buffer。 encoding 参数标识将 string 转换为字节时要使用的字符编码。

### Buffer.isBuffer(obj)

如果 obj 是 Buffer，则返回 true，否则返回 false。

### Buffer.isEncoding(encoding)

如果 encoding 是支持的字符编码的名称，则返回 true，否则返回 false。

## Buffer.from()、Buffer.alloc() 和 Buffer.allocUnsafe()

为了使 Buffer 实例的创建更可靠且更不容易出错，new Buffer() 构造函数的各种形式已被 deprecated 替换为单独的 Buffer.from()、Buffer.alloc() 和 Buffer.allocUnsafe() 方法。

开发者应将 new Buffer() 构造函数的所有现有用途迁移到这些新 API 之一。

- Buffer.from(array) 返回一个新的 Buffer，其中包含提供的八位字节的副本。
- Buffer.from(arrayBuffer[, byteOffset[, length]]) 返回一个新的 Buffer，它与给定的 ArrayBuffer 共享相同的分配内存。
- Buffer.from(buffer) 返回一个新的 Buffer，其中包含给定 Buffer 的内容的副本。
- Buffer.from(string[, encoding]) 返回一个新的 Buffer，其中包含所提供字符串的副本。
- Buffer.alloc(size[, fill[, encoding]]) 返回指定大小的新初始化 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢，但保证新创建的 Buffer 实例永远不会包含可能敏感的旧数据。 如果 size 不是数值，则会抛出 TypeError。
- Buffer.allocUnsafe(size) 和 Buffer.allocUnsafeSlow(size) 分别返回指定 size 的新的未初始化的 Buffer。 由于 Buffer 未初始化，分配的内存段可能包含可能敏感的旧数据。
