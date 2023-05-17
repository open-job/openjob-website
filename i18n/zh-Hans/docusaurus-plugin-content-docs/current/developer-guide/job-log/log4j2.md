---
sidebar_position: 2
---

# Log4j2

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

Spring boot

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

## 日志配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration packages="io.openjob.worker.appender">
    <Appenders>
        <!-- Openjob appender -->
        <OpenjobLog4j2Appender name="openjobLog"
                               timeFormat="yyyy-MM-dd'T'HH:mmZ"
                               timeZone="UTC"
                               ignoreExceptions="true">
            <PatternLayout pattern="%d %-5level [%thread] %logger{0}: %msg"/>
        </OpenjobLog4j2Appender>

        <!-- 其它配置 -->
    </Appenders>

    <Loggers>
        <!-- 其它配置 -->
        <Root level="all">
        </Root>
        <!--- Openjob logger -->
        <Logger name="openjob" level="info" additivity="false">
            <AppenderRef ref="openjobLog"/>
        </Logger>
    </Loggers>
</Configuration>
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