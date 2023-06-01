## Windows vs. POSIX

首先，需要明确的一点是，`Node.js` 是**跨平台**的，它可以运行在 `Windows`、`Linux`、`macOS` 等操作系统上。

也就是说 **`Node.js` 源码会兼容不同的操作系统**。

`Window` 代指我们熟知的 `Windows` 操作系统。

`POSIX` 代指 `Portable Operating System Interface`，即可移植操作系统接口，它是一种标准，定义了操作系统应该为应用程序提供的接口标准。

而 `UNIX` 和 `macOS`（前身是 `Mac OS X`）是基于 `POSIX` 标准的操作系统。

我们本节中介绍的 `node:path` 模块，本身是跨平台的。譬如：

**当在 `Windows` 系统上**，`path.basename` 会自动识别 `Windows` 风格的路径分隔符 `\`，并且返回正确的结果。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'myfile.html'

path.basename('/temp/myfile.html')
// Returns: '/temp/myfile.html'
```

**当在 `POSIX` 系统上**，`path.basename` 会自动识别 `POSIX` 风格的路径分隔符 `/`，并且返回正确的结果。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'C:\temp\myfile.html'

path.basename('/temp/myfile.html')
// Returns: 'myfile.html'
```

但是，`Windows` 和 `POSIX` 系统在路径表示和分隔符上存在差异，因此 `Node.js` 提供了 `path.win32` 和 `path.posix` 子模块，用于处理 `Windows` 风格的路径和 `POSIX` 风格的路径。

## path.win32

**当在 `POSIX` 系统上操作 `Windows` 格式的文件时，可以利用 `path.win32` 以使用 `Windows` 文件规范来解析目标。**

`path.win32` 是 `Node.js` 中的 `path` 模块下的一个子模块，它提供了特定于 `Windows` 操作系统的路径处理功能。

在跨平台的 `Node.js` 应用程序中，可以使用 `path` 模块来进行路径操作，无论是运行在类 `UNIX` 操作系统还是 `Windows` 操作系统上。

然而，由于 `Windows` 操作系统与类 `UNIX` 操作系统在路径表示和分隔符上存在差异，因此 `Node.js` 提供了 `path.win32` 子模块，用于处理 `Windows` 风格的路径。

通过使用 `path.win32` 模块，你可以确保在 `Windows` 操作系统上正确处理和操作文件路径，而不会受到类 `UNIX` 操作系统路径约定的影响。它提供了与 `Windows` 操作系统相关的路径处理功能，使你能够编写跨平台的代码，同时确保与 `Windows` 操作系统的兼容性。

## path.posix

**当在 `Windows` 系统上操作 `POSIX` 格式的文件时，可以利用 `path.posix` 以使用 `POSIX` 文件规范来解析目标。**

该方式与 `path.win32` 的目的一致。

## path.basename(path[, suffix])

`path.basename()` 方法返回路径的最后一部分，类似于 `Unix` 的 `basename` 命令。它会忽略末尾的目录分隔符。

简单来说，`path.basename()` 方法用于从一个给定的路径中提取文件名或目录名的最后一部分。

它可以用于获取路径中的文件名，而忽略路径的其他部分。

如果路径以目录分隔符结尾（例如 `/path/to/directory/`），`path.basename()` 方法会忽略末尾的目录分隔符，仅返回目录名。

```js
path.basename('/foo/bar/baz/asdf/quux.html')
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html')
// Returns: 'quux'

path.basename('/foo/bar/baz/asdf/')
// Returns: 'asdf'

path.basename('C:\\foo\\bar\\baz\\asdf\\quux.html')
// Returns: 'C:\foo\bar\baz\asdf\quux.html'
```

另外，`Windows` 系统中是不区分大小写的，但 `path.basename()` 方法区分大小写。

```js
path.basename('C:\\temp\\myfile.html')
// Returns: 'C:\temp\myfile.html'

path.win32.basename('C:\\temp\\myfile.html', '.html')
// Returns: 'myfile'

path.win32.basename('C:\\temp\\myfile.HTML', '.html')
// Returns: 'myfile.HTML'
```

## path.delimiter

`path.delimiter` 属性提供了平台特定的**路径分隔符**。

当访问 `path.delimiter` 时：

- `Windows` 上是 `;`。
- `POSIX` 上是 `:`。

也可以借助特定 `API` 访问目标平台的路径分隔符：

```js
path.posix.delimiter
// Returns: ':'

path.win32.delimiter
// Returns: ';'
```
