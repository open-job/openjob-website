---
sidebar_position: 1
---

# 直接部署

## 下载安装包

在 [RELEASE](https://github.com/open-job/openjob/releases/) 页面下载相应版本并解压。

## 目录结构

```shell
|-- bin
|   |-- startup.bat  # 普通启动脚本(windows)
|   `-- startup.sh # 普通启动脚本(Linux)
|-- conf
|   |-- application.properties # 配置文件
|   `-- logback.xml # 日志配置
|-- logs
|   |-- error.log # 错误和警告日志
|   |-- notice.log # 运行日志
|   `-- openjob_gc.log.0.current # GC 日志
`-- target
    `-- openjob-server.jar # 启动 jar
```

## 启动服务

