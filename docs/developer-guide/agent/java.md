---
sidebar_position: 1
---

# Java Agent

Java agent supports shell/kettle/http built-in executor,  making it easy to use task scheduling.

## 安装

GitHub [Download](https://github.com/open-job/openjob/releases) latest version `openjob-agent-java-xxx.jar`

## 使用

```shell
# help info
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

- `-h` or `--help` show help
- `-V` or `--version` agent version
- `-s` or `--server-address` server address，default `http://localhost:8080`
- `--worker-app-name` application name
- `--worker-heartbeat-fail-times` Worker heartbeat fail times，default 2s
- `--worker-heartbeat-interval` Worker heartbeat interval，Supported max 5s, default 5s
- `--worker-host` Client host，default IP
- `--worker-port` Client port，default `25588`

:::tip
Java agent require jdk1.8+.
:::