---
sidebar_position: 4
---

# Map Reduce

MapReduce 模型是轻量级分布式跑批任务。通过 MapProcessor 或 MapReduceProcessor 接口实现。相对于传统的大数据跑批（例如Hadoop、Spark等），MapReduce无需将数据导入大数据平台，且无额外存储及计算成本，即可实现秒级别海量数据处理，具有成本低、速度快、编程简单等特性。


![img.png](assets/map-reduce/img.png)

:::tip
- 如果使用 reduce，所有子任务结果会缓存在Master节点，该情况对Master节点内存压力较大，建议子任务个数和result返回值不要太大。如果没有reduce需求，使用 MapProcessor 接口。
- Openjob 不保证子任务绝对执行一次。在特殊条件下会重试，可能导致子任务重复执行，需要业务方自行实现幂等。
:::