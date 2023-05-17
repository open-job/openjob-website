---
sidebar_position: 1
---

# 单机

单机执行表示一个任务实例只会随机分发到一个工作节点，在一个工作节点完成任务执行，支持所有的任务类型。定义一个单机任务通常是实现 `io.openjob.worker.processor.JavaProcessor`
接口，其次不同框架集成中有不同的差异，请参见[普通执行器](/docs/developer-guide/processor-type/ordinary)。



