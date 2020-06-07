高德地图底图下载工具

## 使用方式

```
npm i
npx http-server
```

访问`http://localhost:8080?key=高德地图key&styleId=自定义地图id`

## 合并图片

把下载下来的图片拷贝到 `downloads` 目录。
运行的时候会log出一系列数字，记录出第一个数字。

1. 系统需要安装 imageMagic
2. 执行命令 `node mergeImage 第一个log出来的数字`