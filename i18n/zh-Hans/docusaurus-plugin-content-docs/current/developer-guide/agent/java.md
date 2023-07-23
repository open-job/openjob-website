---
sidebar_position: 1
---

# Java 代理

Java 代理内置 shell/kettle/http 执行器，无需任何代码集成，方便简单使用任务调度。

## 安装

Github [下载](https://github.com/open-job/openjob/releases) 最新版本 `openjob-agent-java-xxx.jar`

## 使用

```shell
# 查看帮助信息
[root@openjob ~]$ java -jar openjob-agent-java-xxx.jar -h
Usage: Openjob-agent-java [-hV] [-s=<serverAddress>]
                          [--worker-app-name=<workerAppName>]
                          [--worker-heartbeat-fail-times=<heartbeatFailTimes>]
                          [--worker-heartbeat-interval=<heartbeatInterval>]
                          [--worker-host=<workerHost>]
                          [--worker-port=<workerPort>]
  -h, --help      Show this help message and exit.
  -s, --server-address=<serverAddress>
                  Server address, default is `http://localhost:8080`
  -V, --version   Print version information and exit.
      --worker-app-name=<workerAppName>
                  Application name, default is `openjob`
      --worker-heartbeat-fail-times=<heartbeatFailTimes>
                  Worker heartbeat fail times, default is `2`
      --worker-heartbeat-interval=<heartbeatInterval>
                  Worker heartbeat interval, default is `5`
      --worker-host=<workerHost>
                  Worker host, default is local IP
      --worker-port=<workerPort>
                  Worker port, default is `25588`
```

- `-h` 或 `--help` 查看帮助信息
- `-V` 或 `--version` 客户端代理版本
- `-s` 或 `--server-address` 服务端地址，默认 `http://localhost:8080`
- `--worker-app-name` 应用名称
- `--worker-heartbeat-fail-times` 最大失败次数(用于刷新服务端地址)，默认 2s
- `--worker-heartbeat-interval` 心跳间隔，最大支持 5s, 默认5s
- `--worker-host` 客户端地址，默认机器 IP
- `--worker-port` 客户端端口，默认 `25588`

:::tip
Java 代理需要运行机器安装 jdk1.8+
:::