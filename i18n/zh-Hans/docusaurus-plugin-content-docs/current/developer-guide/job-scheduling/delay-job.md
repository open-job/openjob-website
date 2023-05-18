---
sidebar_position: 2
---

# 延时调度

普通定时任务能满足绝大多数应用场景，但是在某些场景下无法满足，比如延迟一定时间触发固定的任务(下单 5 分钟未支付自动关闭、订单超过 3 天未评价自动好评)。

## Server

Server 延时任务默认关闭，若需使用必须开启延时任务且配置可用的 Redis 缓存。

```properties
openjob.scheduler.delay.enable=${OJ_SCHEDULER_DELAY_ENABLE:false}
spring.redis.host=${OJ_REDIS_HOST:127.0.0.1}
spring.redis.password=${OJ_REDIS_PASSWORD:}
spring.redis.database=${OJ_REDIS_DB:0}
spring.redis.client-type=lettuce
spring.redis.lettuce.pool.max-active=32
spring.redis.lettuce.pool.max-idle=8
spring.redis.lettuce.pool.max-wait=1000
spring.redis.lettuce.pool.time-between-eviction-runs=60s
```

:::tip
- 延时任务基于 Redis 实现，使用时必须配置
- 参数配置配置方式，根据 Server 部署略有不同，但是参数名字完全一致。
:::

## 客户端

Worker 客户端默认关闭延时任务，使用时必须开启。

Java

```properties
openjob.worker.delay.enable=true
openjob.worker.delay.timeout
```

Spring Boot
```properties
spring.openjob.delay.enable=true
spring.openjob.delay.timeout=200
```

## 发送延时消息


## 执行器

延时任务执行器与普通执行器(单机)完全一样，定义延时执行器与普通执行器(单机)也是一样。
