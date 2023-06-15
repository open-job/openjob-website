---
sidebar_position: 2
---

# Delay Job

Cronjob can support most application scenarios, but cannot be supported in some scenarios, such as execution task after some time.

## Server configuration

Delay job is disable by default, If needed, you must enable delay job and configure Redis cache.

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
Delay job is based on Redis, which must be configured when using it, more configuration see [configuration-reference](/docs/developer-guide/config-reference/server)
:::

## 客户端
Delay job is disable on worker client by default，must be configured enable when using，more configuration see [configuration-reference/Java](/docs/developer-guide/config-reference/java) or [configuration-reference/Spring Boot](/docs/developer-guide/config-reference/spring-boot)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```properties
openjob.worker.delay.enable=true
openjob.worker.delay.timeout=200
```
  </TabItem>
  <TabItem value="spring-boot" label="Spring Boot">

```properties
spring.openjob.delay.enable=true
spring.openjob.delay.timeout=200
```
  </TabItem>
</Tabs>

## 发送延时消息

核心参数：
- `topic` Delay job topic and must be global unique.
- `executeTime` Execute time(second) in the future.
- `params` Job params(Like HTTP body).
- `extra` Job extra params(Like HTTP header).

<Tabs>
  <TabItem value="java" label="Java" default>

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
`OpenjobDelayTemplate` is best to singleton.
:::
</TabItem>
<TabItem value="spring-boot" label="Spring Boot">

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
  </TabItem>
</Tabs>

## Delay processor

Delay processor is exactly the same as the cron processor (stand-alone)

:::caution
You can use `context.getDelayTaskId()` to implement idempotent.
:::

<Tabs>
  <TabItem value="java" label="Java" default>

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
  </TabItem>
  <TabItem value="spring-boot" label="Spring Boot">

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
Spring Boot also support  `@Component` to define processor.
:::
</TabItem>
</Tabs>