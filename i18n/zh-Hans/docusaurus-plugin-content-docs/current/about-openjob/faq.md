---
sidebar_position: 2
---

# 常见问题

## 如何支持多语言？
- Java 及其衍生框架，原生支持。
- Go 官方支持 go mod 方式安装依赖，请参见 [Go](/docs/other-language/golang/go)。
- PHP 使用官方提供的 Golang agent，通过 shell 方法执行 PHP 任务。基于 Swoole 衍生框架，官方支持 Composer 依赖，请参见 [PHP](/docs/other-language/php/)。
- Python 使用官方提供的 Golang agent，通过 shell 方法执行 Python 任务。

:::caution
除 Java 以外其它语言，定时任务只支持单机模式，但是延时任务所有语言都支持。
:::

## H2 驱动依赖冲突

错误 1
```shell
Caused by: java.lang.RuntimeException: Failed to load driver class org.h2.Driver in either of HikariConfig class loader or Thread context classloader
	at com.zaxxer.hikari.HikariConfig.setDriverClassName(HikariConfig.java:491)
	at io.openjob.worker.persistence.H2ConnectionPool.<init>(H2ConnectionPool.java:28)
	at io.openjob.worker.persistence.H2DelayMemoryPersistence.<init>(H2DelayMemoryPersistence.java:30)
	at io.openjob.worker.dao.DelayDAO.<init>(DelayDAO.java:24)
	at io.openjob.worker.dao.DelayDAO.<clinit>(DelayDAO.java:19)
```

错误 2
```shell
java.lang.NoClassDefFoundError: Could not initialize class io.openjob.worker.dao.DelayDAO
	at io.openjob.worker.delay.DelayTaskMasterExecutor.start(DelayTaskMasterExecutor.java:62)
	at io.openjob.worker.delay.DelayTaskMasterExecutor.run(DelayTaskMasterExecutor.java:47)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
	at java.util.concurrent.FutureTask.run$$$capture(FutureTask.java:266)
	at java.util.concurrent.FutureTask.run(FutureTask.java)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
```

Worker 客户端出现上面其中一种错误时，排查项目否是存在 H2 数据库驱动依赖。如果存在 H2 依赖，有两种解决方案： 
1. 移除项目 H2 依赖
2. 移除 H2 依赖 scope(`<scope>test</scope>`)

```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
```
:::tip
Openjob 客户端强依赖 H2 数据库驱动。
:::

## 任务日志未显示
如果日志配置正确，管理后台任务执行日志未显示，客户端与 Server 端都无异常错误日志。此时需要排查客户端是否开启了异步日志，请将 Openjob 日志 Appender 配置为同步

:::caution
Openjob 客户端支持同步方式，异步会导致任务上下文丢失。
:::

## Server 服务无法连接

Server 服务正常启动，无异常日志，但是客户端无法连接。此时检查 Server 启动获取的 IP 是否是本机真实 IP，如果不是请手动指定 Server 绑定 IP。一般出现这类情况主要原因：
- Server 机器上存在 Docker 部署，导致获取本机 IP 错误
- Server 机器上存在多网卡，未能获取正确的 IP

如下方式配置 Server 启动 IP，容器环境可以通过 `AKKA_BIND_HOSTNAME` 环境变量指定，默认自动获取本机 IP
```properties
akka.bind.hostname=${AKKA_BIND_HOSTNAME:}
```

:::danger
Server 端必须保证启动获取到真实的 IP，否则集群通信异常。
:::



