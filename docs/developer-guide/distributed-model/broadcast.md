---
sidebar_position: 2
---

# Broadcast

Broadcast task instance will be broadcast to all workers to the application for execution. Task will be completed when all workers have completed execution. If any worker execute fail, the task will fail.

### Application scenarios

##### Batch operation
- Broadcast to all workers to run a script.
- Broadcast to all workers to cleaning data regularly.
- Dynamically start a service on each worker

##### Data aggregation
- Initialize using JavaProcessor->preProcess
- When each worker executes the process, it returns the result according to the business.
- Execute postProcess to obtain the execution results of all workers.


### Feature
There are many types of broadcast tasks, such as script or Java Processor. If Java processor, it can supports preProcess and postProcess advanced features.

- preProcess will be executed before each worker execute process, and will only be executed once.
- process is the actual task execution.
- postProcess will be executed once after the process execution on each worker is completed and successfully executed, and the results can be returned as data transmission.


## Example
Define executor by annotation as follows:

```java
/**
 * @author stelin swoft@qq.com
 * @since 1.0.7
 */
@Component("broadcastPostProcessor")
public class BroadcastProcessor implements JavaProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    @Override
    public void preProcess(JobContext context) {
        logger.info("Broadcast pre process!");
    }

    @Override
    public ProcessResult process(JobContext context) throws Exception {
        logger.info("Broadcast process!");
        return new ProcessResult(true, "{\"data\":\"result data\"}");
    }

    @Override
    public ProcessResult postProcess(JobContext context) {
        logger.info("Broadcast post process taskList={}", context.getTaskResultList());
        System.out.println(context.getTaskResultList());
        return ProcessResult.success();
    }
}
```

### Task Detail

![img.png](assets/broadcast/img.png)