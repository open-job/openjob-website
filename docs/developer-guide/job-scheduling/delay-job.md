---
sidebar_position: 2
---

# Delay Job

The regular scheduled tasks can meet the needs of most application scenarios, but in certain situations, they may not be sufficient. For example, if there is a need to trigger a fixed task after a certain delay (such as automatically closing an order if payment is not made within 5 minutes, or automatically giving a positive review for an order that has not been evaluated after 3 days).

## Server

The default state of the enabled status for server's delayed tasks is closed. If you need to use it, you must configure it to be enabled and configure a usable Redis cache.

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
- The delayed task is implemented based on Redis, and must be configured when in use.
- The configuration method for parameter settings may differ slightly depending on the server deployment, but the parameter names are exactly the same.
:::

## Worker Client

The delayed task of the Worker client is closed by default. You must set it to open when you need to use the delayed task.

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

## Send Delayed Messages


## Executor

The executor for delayed tasks is exactly the same as the executor for normal tasks (single machine), and defining an executor for delayed tasks is also the same as defining an executor for normal tasks (single machine).
