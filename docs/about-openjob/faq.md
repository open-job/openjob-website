---
sidebar_position: 2
---

# FAQ

## How to support other languages?
- Java and its frameworks, with native support.
- Golang support use `go mod` install，see [Go](/docs/other-language/golang/go)。
- PHP support use Golang agent to execute task by shell mode 。Swoole frameworks support composer install，see [PHP](/docs/other-language/php/)。
- Python support use Golang agent to execute task by shell mode。

:::caution
Other languages only supported cronjob(standalone mode), but delay job supported all languages.
:::

## H2 driver conflict

Error message:
```shell
Caused by: java.lang.RuntimeException: Failed to load driver class org.h2.Driver in either of HikariConfig class loader or Thread context classloader
	at com.zaxxer.hikari.HikariConfig.setDriverClassName(HikariConfig.java:491)
	at io.openjob.worker.persistence.H2ConnectionPool.<init>(H2ConnectionPool.java:28)
	at io.openjob.worker.persistence.H2DelayMemoryPersistence.<init>(H2DelayMemoryPersistence.java:30)
	at io.openjob.worker.dao.DelayDAO.<init>(DelayDAO.java:24)
	at io.openjob.worker.dao.DelayDAO.<clinit>(DelayDAO.java:19)
```
or
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
One of above error occurs on the worker client, to check whether dependent on H2 database driver. If H2 database driver exists, there are two solutions:
1. Remove H2 database driver
2. Remove scope(`<scope>test</scope>`)

Like this:
```xml
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
</dependency>
```
:::tip
Openjob must dependent one H2 database driver
:::

## Task execution log not showing
If the log configuration is correct, the management task execution log is not displayed, and there is no error log on the client and server. You need to check whether the client has enabled asynchronous log, please configure the Openjob Log Appender as synchronous.

:::caution
Openjob client log only supports synchronous, and asynchronous will cause the task context to be lost.
:::

## Server can not be connected
Server start normally without error logs, but client cannot be connected. Check whether the IP by the server startup is the real IP of the system, 
if not the real IP, please specify the server binding IP. The general reasons are:
- Docker deployment on the Server system, and the correct IP cannot be goted
- Multiple network on the Server system, and the correct IP cannot be goted

- Like this configure server, Container environment can configure `AKKA_BIND_HOSTNAME` environment variable, server get the local IP by default
```properties
akka.bind.hostname=${AKKA_BIND_HOSTNAME:}
```

:::danger
Server must get the real IP of the system, Otherwise the cluster communication is abnormal.
:::
