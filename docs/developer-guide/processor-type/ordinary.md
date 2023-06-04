---
sidebar_position: 1
---

# Processor

Processor is used to run job, different languages have different implemented

## Java

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
`latest` replace with the latest version
:::

### Configuration

Complete configuration see [configuration-reference](/docs/developer-guide/config-reference/java)

### Example

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

Processor name is `io.openjob.samples.java.processor.JavaProcessorSample`

:::tip
Processor name is complete class name.
:::

## Spring Boot 集成

Spring Boot have two method to define processor.

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
`latest` replace with the latest version
:::

### Configuration

Complete configuration see [configuration-reference](/docs/developer-guide/config-reference/spring-boot)

### @Openjob example

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

`@Openjob` is simple method to define processor by annotation.

:::caution
`@Openjob` only support standalone to define processor.
:::

### @Component example

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

Processor name is bean name of `io.openjob.samples.java.processor.JavaProcessorSample`, and support `@Component("xxx")` method.

:::tip
`@Component` method must implement the interface, and different distributed mode have different implementations.
:::