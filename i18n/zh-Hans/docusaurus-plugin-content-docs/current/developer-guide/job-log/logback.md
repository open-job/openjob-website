---
sidebar_position: 3
---

# Logback

## 接入配置

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
  <groupId>io.openjob.worker</groupId>
  <artifactId>openjob-worker-core</artifactId>
  <version>${openjob.worker.version}</version>
</dependency>
```
  </TabItem>
  <TabItem value="spring-boot" label="Spring Boot">

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
    <groupId>io.openjob.worker</groupId>
    <artifactId>openjob-worker-spring-boot-starter</artifactId>
    <version>${openjob.worker.version}</version>
</dependency>
```
  </TabItem>
</Tabs>

:::tip
`latest` 替换为对应的版本
:::

## 日志配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration scan="true" debug="false">
    <!-- Openjob appender -->
    <appender name="OpenjobAppender" class="io.openjob.worker.appender.LogbackAppender">
        <timeFormat>yyyy-MM-dd'T'HH:mmZ</timeFormat>
        <timeZone>UTC</timeZone>
    </appender>

    <!-- Openjob logger -->
    <logger name="openjob" level="INFO">
        <appender-ref ref="OpenjobAppender"/>
    </logger>

    <!-- 其它日志配置 -->
</configuration>
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