---
sidebar_position: 1
---

# 框架安装

## Docker 安装

### 拉取镜像

```shell
docker pull openjob/openjob-server:latest
```

### 运行容器

新增一个配置文件 `.env`，配置正确可用的数据库地址。更多配置参数，请参见[配置参考](/docs/developer-guide/config-reference/server)

```shell
AKKA_REMOTE_HOSTNAME=LocalIP
OJ_DS_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
```

:::tip
1. 数据库必须手动创建
2. 容器运行涉及多项参数配置，使用配置文件更方便，其次也可以启动时通过命令传递参数(环境变量)。
3. 配置 `AKKA_REMOTE_HOSTNAME` 为当前机器 IP，不能是 `127.0.0.1`，否则会导致网络不通，客户端通过 IP 连接 Server。
:::

运行容器

```shell
docker run --env-file .env -it -d -p 8080:8080 -p 25520:25520 openjob/openjob-server:latest /bin/bash
```

运行成功，访问 http://127.0.0.1:8080/
- 账号: openjob
- 密码: openjob.io

## Docker compose 安装

新建文件 `docker-compose.yml`
，文件里配置正确可用的数据库地址。更多配置参数，请参见[配置参考](/docs/developer-guide/config-reference/server)

```yaml
version: '3'
services:
  openjob-server:
    image: openjob/openjob-server:latest
    restart: always
    container_name: openjob-server
    environment:
      - AKKA_REMOTE_HOSTNAME=LocalIP
      - OJ_DS_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
      - OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    ports:
      - "8080:8080"
      - "25520:25520"
```
:::tip
1. 数据库必须手动创建
2. 配置 `AKKA_REMOTE_HOSTNAME` 为当前机器 IP，不能是 `127.0.0.1`，否则会导致网络不通，客户端通过 IP 连接 Server。
:::


运行容器

```shell
# 普通运行
docker-compose up

# 后台运行
docker-compose up -d
```

运行成功，访问 http://127.0.0.1:8080/
- 账号: openjob
- 密码: openjob.io

:::info
`docker-compose.yml` 文件同目录执行命令运行容器
:::

## 常见问题

- 容器方式运行，数据库 和 Redis 连接不能是 `127.0.0.1`(不属于同一个网络)
- 数据库是否支持远程访问
- Redis 是否支持远程访问

## 容器日志

```shell
docker logs -f containerId
```

## 进入容器

```shell
docker exec -it containerId /bin/bash
```

## 项目结构

框架部署在 `/home/openjob` 目录

```shell
|-- bin
|   |-- docker-startup.sh  # Docker 启动脚本
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