/**
 *  fs 全称为 file system ，称之为 文件系统 ，是 Node.js 中的 内置模块 ，可以对计算机中的磁盘进行操作。
    在Node中，与文件系统的交互是非常重要的，服务器的本质就将本地的文件发送给远程的客户端。
    Node通过fs模块来和文件系统进行交互
    该模块提供了一些标准文件访问API来打开、 读取、写入文件，以及与其交互。

    fs模块中所有的操作都有两种形式可供选择 同步和异步。
    同步文件系统会阻塞程序的执行，也就是 除非操作完毕，否则不会向下执行代码。
    异步文件系统不会阻塞程序的执行，而是 在操作完成时，通过回调函数将结果返回。
 */