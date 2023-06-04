---
sidebar_position: 1
---

# 直接部署

## 下载安装包

在 [RELEASE](https://github.com/open-job/openjob/releases/) 页面下载相应版本并解压。

```shell
tar -zxvf openjob-server-x.x.x.tar.gz
```

## 目录结构

```shell
|-- bin
|   |-- startup.bat  # 普通启动脚本(windows)
|   `-- startup.sh # 普通启动脚本(Linux)
|-- conf
|   |-- application.properties # 配置文件
|   `-- logback.xml # 日志配置
|-- logs
|   |-- error.log # 错误和警告日志(启动创建)
|   |-- notice.log # 运行日志(启动创建)
|   `-- openjob_gc.log.0.current # GC 日志
`-- target
    `-- openjob-server.jar # 启动 jar
```

## 启动服务
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>

```shell
.../bin/starup.sh
```
  </TabItem>
  <TabItem value="windows" label="Windows">

```shell
.../bin/starup.bat
```
  </TabItem>
</Tabs>

:::tip
- 数据库必须手动创建
- 启动服务前，必须配置可用的数据库
- 运行机器必须安装 Java(8+)
:::

运行成功，访问 http://127.0.0.1:8080/
- 账号: openjob
- 密码: openjob.io

