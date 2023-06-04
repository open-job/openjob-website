---
sidebar_position: 1
---

# Server

## Environment variables

Environment variables generally used for Docker and Kubernetes.

| Name    |                                                                                                      Default | Description  |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| OJ_ADMIN_USER_PWD_SALT | ... | encrypt salt |
| OJ_DS_DRIVER_CLASS | `com.mysql.cj.jdbc.Driver`| database driver, default `MYSQL` |
| OJ_DS_URL | `jdbc:mysql:....` | database url |
| OJ_DS_USERNAME | root | database username |
| OJ_DS_PASSWORD | 123456 | database password |
| OJ_DS_HK_MINI_IDLE | 1 | mini idle connections |
| OJ_DS_HK_MAX_POOL_SIZE | 10| max size  |
| OJ_DS_HK_IDLE_TIMEOUT | 60000 | idle timeout |
| OJ_DS_HK_POOL_NAME | openjob | pool name |
| OJ_FW_LOCATIONS | `classpath:db/migration/mysql` | database migration file，default `MYSQL` |
| OJ_FW_TABLE | `migration_version` | database table name |
| OJ_LOG_STORAGE_SELECTOR | mysql | log storage，default `MYSQL` |
| OJ_LOG_STORAGE_H2_USER | root| H2 username  |
| OJ_LOG_STORAGE_H2_PASSWORD | 123456 | H2 password |
| OJ_LOG_STORAGE_H2_URL | `jdbc:h2:...`| H2 url |
| OJ_LOG_STORAGE_MYSQL_USER | root| `MYSQL` username |1
| OJ_LOG_STORAGE_MYSQL_PASSWORD | 123456 | `MYSQL` password |
| OJ_LOG_STORAGE_MYSQL_URL | jdbc:mysql:... | `MYSQL` database url |
| OJ_LOG_STORAGE_ES7_USERNAME | - | elasticsearch username |
| OJ_LOG_STORAGE_ES7_PASSWORD | - | elasticsearch passowrd |
| OJ_LOG_STORAGE_ES7_CLUSTER_NODES | `127.0.0.1：9200` | Elasticsearch cluster address. |
| OJ_LOG_STORAGE_ES7_SOCKET_TIMEOUT | 3000 | elasticsearch timeout(ms)|
| OJ_SCHEDULER_DELAY_ENABLE | false | delay status，default false |
| OJ_REDIS_HOST | `127.0.0.1` | redis address |
| OJ_REDIS_PASSWORD | - | redis password,default empty |
| OJ_REDIS_DB  | 0 | redis db |
| OJ_REDIS_PORT | 6379 | redis port |
| SPRING_JPA_SHOW_SQL  | false | SQL show status，default `false` |
| AKKA_REMOTE_HOSTNAME  | openjob-server | remote address |
| AKKA_REMOTE_PORT  | 25520 | remote port |
| AKKA_BIND_HOSTNAME  | 本机IP | server address |
| AKKA_BIND_PORT  | 25520 | server port |

:::tip
1. 容器启动参数是通过环境变量方式配置
2. 数据库驱动暂时只支持 Mysql，后续会支持 PostgreSQL/Oracle
3. 日志存储支持H2/MYSQL/Elasticsearch
4. 延时任务是可选项，但是开启延时任务时，必须配置 Redis 否则无法使用。
5. `AKKA_REMOTE_HOSTNAME` 建议根据场景配置(一般配置负载域名或IP)，否则会导致网络不通。
6. 还有部分其它参数未通过环境变量方式，如有场景需要修改，可以通过文件挂载方式实现。
:::

## 配置文件

通过 `application.properties` 方式配置参数，一般用于直接部署或容器挂载配置文件。

```shell
server.port=${SERVER_PORT:8080}
### admin config
# user passwd hash salt
openjob.admin.user.passwd-salt=${OJ_ADMIN_USER_PWD_SALT:...}
### spring config
spring.jackson.serialization.FAIL_ON_EMPTY_BEANS=false
spring.datasource.driver-class-name=${OJ_DS_DRIVER_CLASS:com.mysql.cj.jdbc.Driver}
spring.datasource.url=${OJ_DS_URL:jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai}
spring.datasource.username=${OJ_DS_USERNAME:root}
spring.datasource.password=${OJ_DS_PASSWORD:123456}
spring.datasource.type=com.zaxxer.hikari.HikariDataSource
spring.datasource.hikari.minimum-idle=${OJ_DS_HK_MINI_IDLE:1}
spring.datasource.hikari.maximum-pool-size=${OJ_DS_HK_MAX_POOL_SIZE:10}
spring.datasource.hikari.idle-timeout=${OJ_DS_HK_IDLE_TIMEOUT:60000}
spring.datasource.hikari.pool-name=${OJ_DS_HK_POOL_NAME:openjob}
# fixed warn for "spring.jpa.open-in-view is enabled by default"
spring.jpa.open-in-view=false
spring.flyway.enabled=true
spring.flyway.clean-disabled=true
spring.flyway.locations=${OJ_FW_LOCATIONS:classpath:db/migration/mysql}
spring.flyway.baseline-on-migrate=true
spring.flyway.table=${OJ_FW_TABLE:migration_version}
spring.flyway.baseline-version=0
spring.flyway.encoding=UTF-8
spring.flyway.validate-on-migrate=false
openjob.log.storage.selector=${OJ_LOG_STORAGE_SELECTOR:mysql}
openjob.log.storage.h2.properties.user=${OJ_LOG_STORAGE_H2_USER:root}
openjob.log.storage.h2.properties.password=${OJ_LOG_STORAGE_H2_PASSWORD:123456}
openjob.log.storage.h2.properties.url=${OJ_LOG_STORAGE_H2_URL:jdbc:h2:mem:openjob;AUTO_RECONNECT=TRUE;MODE=MySQL;DB_CLOSE_DELAY=-1;DATABASE_TO_UPPER=false;WRITE_DELAY=0;}
openjob.log.storage.mysql.properties.user=${OJ_LOG_STORAGE_MYSQL_USER:root}
openjob.log.storage.mysql.properties.password=${OJ_LOG_STORAGE_MYSQL_PASSWORD:123456}
openjob.log.storage.mysql.properties.url=${OJ_LOG_STORAGE_MYSQL_URL:jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai}
openjob.log.storage.elasticsearch7.username=${OJ_LOG_STORAGE_ES7_USERNAME:}
openjob.log.storage.elasticsearch7.password=${OJ_LOG_STORAGE_ES7_PASSWORD:}
openjob.log.storage.elasticsearch7.cluster-nodes=${OJ_LOG_STORAGE_ES7_CLUSTER_NODES:localhost:9200}
openjob.log.storage.elasticsearch7.socket-timeout=${OJ_LOG_STORAGE_ES7_SOCKET_TIMEOUT:3000}
openjob.scheduler.delay.enable=${OJ_SCHEDULER_DELAY_ENABLE:false}
spring.redis.host=${OJ_REDIS_HOST:127.0.0.1}
spring.redis.password=${OJ_REDIS_PASSWORD:}
spring.redis.database=${OJ_REDIS_DB:0}
spring.redis.port=${OJ_REDIS_PORT:6379}
spring.redis.client-type=lettuce
spring.redis.lettuce.pool.max-active=32
spring.redis.lettuce.pool.max-idle=8
spring.redis.lettuce.pool.max-wait=1000
spring.redis.lettuce.pool.time-between-eviction-runs=60s
spring.jpa.show-sql=${SPRING_JPA_SHOW_SQL:false}
akka.remote.hostname=${AKKA_REMOTE_HOSTNAME:openjob-server}
akka.remote.port=${AKKA_REMOTE_PORT:25520}
akka.bind.hostname=${AKKA_BIND_HOSTNAME:}
akka.bind.port=${AKKA_BIND_PORT:25520}
```