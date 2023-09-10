---
sidebar_position: 4
---

# Map Reduce

MapReduce 模型是轻量级分布式跑批任务。通过 MapProcessor 或 MapReduceProcessor 接口实现。相对于传统的大数据跑批（例如Hadoop、Spark等），MapReduce无需将数据导入大数据平台，且无额外存储及计算成本，即可实现秒级别海量数据处理，具有成本低、速度快、编程简单等特性。

:::tip
- 如果使用 reduce，所有子任务结果会缓存在Master节点，该情况对Master节点内存压力较大，建议子任务个数和result返回值不要太大。如果没有reduce需求，使用 MapProcessor 接口。
- Openjob 不保证子任务绝对执行一次。在特殊条件下会重试，可能导致子任务重复执行，需要业务方自行实现幂等。
:::

## 示例

如下使用注解方式定义执行器

```java
/**
 * @author stelin swoft@qq.com
 * @since 1.0.7
 */
@Component("mapReduceTestProcessor")
public class MapReduceTestProcessor implements MapReduceProcessor {
    private static final Logger logger = LoggerFactory.getLogger("openjob");

    private static final String TWO_NAME = "TASK_TWO";

    private static final String THREE_NAME = "TASK_THREE";

    @Override
    public ProcessResult process(JobContext context) {
        if (context.isRoot()) {
            List<MapChildTaskTest> tasks = new ArrayList<>();
            for (int i = 1; i < 5; i++) {
                tasks.add(new MapChildTaskTest(i));
            }

            logger.info("Map Reduce root task mapList={}", tasks);
            return this.map(tasks, TWO_NAME);
        }

        if (context.isTask(TWO_NAME)) {
            MapChildTaskTest task = (MapChildTaskTest) context.getTask();
            List<MapChildTaskTest> tasks = new ArrayList<>();
            for (int i = 1; i < task.getId()*2; i++) {
                tasks.add(new MapChildTaskTest(i));
            }

            logger.info("Map Reduce task two mapList={}", tasks);
            return this.map(tasks, THREE_NAME);
        }

        if (context.isTask(THREE_NAME)) {
            MapChildTaskTest task = (MapChildTaskTest) context.getTask();
            logger.info("Map Reduce task three mapTask={}", task);
            return new ProcessResult(true, String.valueOf(task.getId() * 2));
        }

        return ProcessResult.success();
    }

    @Override
    public ProcessResult reduce(JobContext jobContext) {
        List<String> resultList = jobContext.getTaskResultList().stream().map(TaskResult::getResult)
                .collect(Collectors.toList());
        logger.info("Map Reduce resultList={}", resultList);
        return ProcessResult.success();
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class MapChildTaskTest {
        private Integer id;
    }
}
```

### 任务详情

![img.png](assets/map-reduce/img.png)