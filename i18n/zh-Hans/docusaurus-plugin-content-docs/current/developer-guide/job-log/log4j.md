---
sidebar_position: 1
---

# Log4j

## 接入配置

普通 Java

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
  <groupId>io.openjob.worker</groupId>
  <artifactId>openjob-worker-core</artifactId>
  <version>${openjob.worker.version}</version>
</dependency>
```

Spring Boot

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
    <groupId>io.openjob.worker</groupId>
    <artifactId>openjob-worker-spring-boot-starter</artifactId>
    <version>${openjob.worker.version}</version>
</dependency>
```

:::tip
`latest` 替换为对应的版本
:::

## 配置 Appender

```properties
log4j.rootLogger = INFO,console
log4j.logger.openjob=openjobLog
log4j.appender.openjobLog=io.openjob.worker.appender.OpenjobLog4jAppender
```

## 日志采集

```java
package io.openjob.samples.spring.boot.processor;

import io.openjob.worker.context.JobContext;
import io.openjob.worker.processor.JavaProcessor;
import io.openjob.worker.processor.ProcessResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
@Component
public class StandaloneProcessor implements JavaProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    @Override
    public ProcessResult process(JobContext context) throws Exception {
        String logMessage = "Standalone processor execute success! jobParamsType={} jobParams={} jobExtendParamsType={} jobExtendParams={}";
        logger.info(logMessage, context.getJobParamType(), context.getJobParams(), context.getJobExtendParamsType(), context.getJobExtendParams());
        return ProcessResult.success();
    }
}
```