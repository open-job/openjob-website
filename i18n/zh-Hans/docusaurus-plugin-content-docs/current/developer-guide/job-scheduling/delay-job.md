---
sidebar_position: 2
---

# 延时调度

普通定时任务能满足绝大多数应用场景，但是在某些场景下无法满足，比如延迟一定时间触发固定的任务(下单 5 分钟未支付自动关闭、订单超过
3 天未评价自动好评)。

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

核心参数：
- `topic` 延时消息主题，一类延时任务一个主题且必须全局唯一。
- `executeTime` 延时任务执行时间
- `params` 延时任务参数
- `extra` 延时任务扩展参数

Java

```java
package io.openjob.samples.java.service.impl;

import io.openjob.common.util.DateUtil;
import io.openjob.samples.java.service.DelayService;
import io.openjob.worker.delay.DelayMessage;
import io.openjob.worker.delay.OpenjobDelayTemplate;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.1
 */
public class DelayServiceImpl implements DelayService {

    @Override
    public String send() {
        OpenjobDelayTemplate openjobDelayTemplate = new OpenjobDelayTemplate();
        DelayMessage delayMessage = new DelayMessage();
        delayMessage.setTopic("openjob.test");
        delayMessage.setParams("params");
        delayMessage.setExtra("extra params");
        delayMessage.setExecuteTime(DateUtil.timestamp());
        return openjobDelayTemplate.send(delayMessage);
    }
}
```

:::tip
`OpenjobDelayTemplate` 建议封装成单例使用
:::

Spring Boot

```java
package io.openjob.samples.spring.boot.service.impl;

import io.openjob.common.util.DateUtil;
import io.openjob.samples.spring.boot.service.DelayService;
import io.openjob.worker.delay.DelayMessage;
import io.openjob.worker.delay.OpenjobDelayTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.1
 */
@Service
public class DelayServiceImpl implements DelayService {
    private final OpenjobDelayTemplate openjobDelayTemplate;

    @Autowired
    public DelayServiceImpl(OpenjobDelayTemplate openjobDelayTemplate) {
        this.openjobDelayTemplate = openjobDelayTemplate;
    }

    @Override
    public String send() {
        DelayMessage delayMessage = new DelayMessage();
        delayMessage.setTopic("openjob.test");
        delayMessage.setParams("params");
        delayMessage.setExtra("extra params");
        delayMessage.setExecuteTime(DateUtil.timestamp());
        return this.openjobDelayTemplate.send(delayMessage);
    }
}
```

## 延时执行器

延时任务执行器与普通执行器(单机)完全一样，定义延时执行器与普通执行器(单机)也是一样。

:::caution
延时执行器建，建议根据 `context.getDelayTaskId()` 实现幂等，否则会重复执行。
:::


Java

```java
package io.openjob.samples.java.processor;

import io.openjob.worker.context.JobContext;
import io.openjob.worker.processor.JavaProcessor;
import io.openjob.worker.processor.ProcessResult;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
@Slf4j
public class DelayProcessorSample implements JavaProcessor {

    private static final Logger logger = LoggerFactory.getLogger("openjob");

    @Override
    public ProcessResult process(JobContext context) throws InterruptedException {
        logger.info("Delay run {} {} {}", context.getDelayTaskId(), context.getDelayParams(), context.getDelayExtra());
        return new ProcessResult(true);
    }
}
```

Spring Boot

```java
package io.openjob.samples.spring.boot.delay;

import io.openjob.worker.context.JobContext;
import io.openjob.worker.processor.ProcessResult;
import io.openjob.worker.spring.boot.annotation.Openjob;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
@Component
public class DelayAnnotationProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    @Openjob("annotationDelay")
    public ProcessResult annotationDelay(JobContext context) {
        logger.info("Delay annotation processor execute success!");
        return ProcessResult.success();
    }
}
```

:::tip
Spring Boot 集成时，也支持通过 `@Component` 注解方式定义执行器
:::
