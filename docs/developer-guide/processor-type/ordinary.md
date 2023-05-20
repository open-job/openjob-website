---
sidebar_position: 1
---

# Ordinary

Ordinary executors are the carriers of task execution, implementing task functions through code integration, with slight differences in different programming languages.

## Integrating in Java

### Maven

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
  <groupId>io.openjob.worker</groupId>
  <artifactId>openjob-worker-core</artifactId>
  <version>${openjob.worker.version}</version>
</dependency>
```

:::tip
Simply replace the string `latest` with the corresponding version.
:::

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

The executor name `io.openjob.samples.java.processor.JavaProcessorSample`

:::tip
The ordinary executor name in Java is the fully qualified class name
:::

## Integrating in Spring Boot

There are two ways to define executors for integration in Spring Boot, and the two definitions have different use cases.

### Maven

```shell
<openjob.worker.version>latest</openjob.worker.version>
<dependency>
    <groupId>io.openjob.worker</groupId>
    <artifactId>openjob-worker-spring-boot-starter</artifactId>
    <version>${openjob.worker.version}</version>
</dependency>
```

:::tip
Simply replace the string `latest` with the corresponding version.
:::

### @Openjob Example

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

The `@Openjob` approach is a simplified way of defining executors, using annotations to define the executor name. The example above defines an executor named annotationProcessor.

:::caution
The `@Openjob` annotation-based approach for defining executors only supports standalone mode usage and is not supported in other distributed models.
:::

### @Component Example

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

The executor name is the same as the bean name: `io.openjob.samples.java.processor.JavaProcessorSample`.

:::tip
This approach requires implementing the corresponding interface, and different distributed models have different implementations.
:::