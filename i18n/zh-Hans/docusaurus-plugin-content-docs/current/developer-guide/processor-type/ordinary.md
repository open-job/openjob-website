---
sidebar_position: 1
---

# 普通执行器

普通执行器是任务执行的载体，不同语言集成方式略有差异。

## Java 集成

### Maven

```xml
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
  <groupId>io.openjob.worker</groupId>
  <artifactId>openjob-worker-core</artifactId>
  <version>${openjob.worker.version}</version>
</dependency>
```

:::tip
`latest` 替换为对应的版本
:::

### 配置

请参见[配置参考](/docs/developer-guide/config-reference/java)

### 示例

```java
package io.openjob.samples.java.processor;

import io.openjob.worker.context.JobContext;
import io.openjob.worker.processor.JavaProcessor;
import io.openjob.worker.processor.ProcessResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
public class JavaProcessorSample implements JavaProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    @Override
    public ProcessResult process(JobContext context) throws Exception {
        logger.info("JavaProcessorTest execute success! instanceId=" + context.getJobInstanceId());
        return ProcessResult.success();
    }
}
```

执行器名称 `io.openjob.samples.java.processor.JavaProcessorSample`

:::tip
Java 普通执行器名称即是完整类名
:::

## Spring Boot 集成

Spring Boot 集成有两种方式定义执行器，两种定义方式有不同的使用场景。

### Maven

```xml
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

### 配置

请参见[配置参考](/docs/developer-guide/config-reference/spring-boot)

### @Openjob 示例

```java
package io.openjob.samples.spring.boot.processor;

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
public class StandaloneAnnotationProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    /**
     * Annotation processor
     *
     * @param context context
     * @return ProcessResult
     */
    @Openjob("annotationProcessor")
    public ProcessResult annotationProcessor(JobContext context) {
        logger.info("Annotation processor! context=" + context.toString());
        return new ProcessResult(true);
    }
}
```

`@Openjob` 方式是一种简化方式定义执行器，通过注解定义执行器名称，如上定义了一个名称为 `annotationProcessor` 执行器。

:::caution
`@Openjob` 注解方式定义执行器，只支持单机模型(Standalone)，其它分布式模型不支持。
:::

### @Component 示例

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
        logger.info("Annotation processor! context=" + context.toString());
        return ProcessResult.success();
    }
}
```

执行器名称即为 `bean` 名称 `io.openjob.samples.java.processor.JavaProcessorSample`，也支持 `@Component("xxx")` 方式自定义执行器名称

:::tip
此方式必须实现对应的接口，不同的分布式模型有不同的实现。
:::