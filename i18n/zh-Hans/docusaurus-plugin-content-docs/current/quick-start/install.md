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

新增一个配置文件 `.env`
```shell
OJ_DS_URL=jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
```

:::tip
容器运行涉及多项参数配置，使用配置文件更方便，其次也可以启动时通过命名传递参数(环境变量)。
:::

运行容器

```shell
docker run --env-file .env -it -d -p 8080:8080 -p 25520:25520 openjob/openjob-server:latest /bin/bash
```



## Docker compose 安装

新建文件 `docker-compose.yml`
```yaml
version: '3'
services:
  openjob-server:
    image: openjob/openjob-server:latest
    restart: always
    container_name: openjob-server
    environment:
      - OJ_DS_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
      - OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    ports:
      - "8080:8080"
      - "25520:25520"
```

运行容器

```shell
# 普通运行
docker-compose up

# 后台运行
docker-compose up -d
```
:::info
`docker-compose.yml` 文件目录执行命令运行容器
:::

## 通用操作

### 容器日志

```shell
docker logs -f containerId
```

### 部署结构
进入容器
```shell
docker exec -it containerId /bin/bash
```

框架部署在 `/home/openjob` 目录
```shell
|-- bin
|   |-- docker-startup.sh  # Docker 启动脚本
|   `-- startup.sh # 普通启动脚本
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

### 配置参数

| 参数名称    |                                                                                                      默认值 | 描述  |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| OJ_ADMIN_USER_PWD_SALT | ... | 加密盐 |
| OJ_DS_DRIVER_CLASS | `com.mysql.cj.jdbc.Driver`| 数据库驱动，默认MYSQL |
| OJ_DS_URL | `jdbc:mysql://127.0.0.1:3306/openjob?...` | 数据库 URL 地址 |
| OJ_DS_USERNAME | root | 数据库账号 |
| OJ_DS_PASSWORD | 123456 | 数据库密码 |
| OJ_DS_HK_MINI_IDLE | 1 | 连接池最小空闲数 |
| OJ_DS_HK_MAX_POOL_SIZE | 10| 连接池最大数 |
| OJ_DS_HK_IDLE_TIMEOUT | 60000 | 连接池空闲超时 |
| OJ_DS_HK_POOL_NAME | openjob | 连接池名称 |
| OJ_FW_LOCATIONS | `classpath:db/migration/mysql` | 表结构迁移文件，默认MYSQL |
| OJ_FW_TABLE | `migration_version` | 表结构迁移历史记录表名 |
| OJ_LOG_STORAGE_SELECTOR | mysql | 日志存储类型，默认 MYSQL |
| OJ_LOG_STORAGE_H2_USER | root| H2 日志存储，数据库账号  |
| OJ_LOG_STORAGE_H2_PASSWORD | 123456 | H2 日志存储，数据库密码 |
| OJ_LOG_STORAGE_H2_URL | `jdbc:h2:mem:openjob;AUTO_RECONNECT=TRUE...`| H2 日志存储，数据库 URL |
| OJ_LOG_STORAGE_MYSQL_USER | root| Mysql 日志存储，数据库账号 |
| OJ_LOG_STORAGE_MYSQL_PASSWORD | 123456 | Mysql 日志存储，数据库密码 |
| OJ_LOG_STORAGE_MYSQL_URL | jdbc:mysql://127.0.0.1:3306/openjob?... | Mysql 日志存储，数据库 URL |
| OJ_SCHEDULER_DELAY_ENABLE | false | 延时任务，开启状态，默认 false |
| OJ_REDIS_HOST | `127.0.0.1` | Redis 地址 |
| OJ_REDIS_PASSWORD | - | Redis 密码，默认空 |
| OJ_REDIS_DB  | 0 | Redis db |
| SPRING_JPA_SHOW_SQL  | false | SQL 打印状态，默认关闭 |

:::tip
1. 容器启动参数是通过环境变量方式配置
2. 数据库驱动暂时只支持 Mysql，后续会支持 PostgreSQL/Oracle
3. 日志存储暂时支持H2/MYSQL，后续会支持 elasticsearch/tidb/MongoDB
4. 延时任务是可选项，但是开启延时任务时，必须配置 Redis 否则无法使用。
5. 还有部分其它参数未通过环境变量方式，如有场景需要修改，可以通过文件挂载方式实现。
:::