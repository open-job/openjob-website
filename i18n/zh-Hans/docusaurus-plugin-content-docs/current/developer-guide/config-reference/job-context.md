---
sidebar_position: 4
---

# JobContext

| 参数 | 类型 | 描述 |
|:----------|:----------|:--:|
| `delayId` |`long`| 延时任务ID |
| `delayTopic`| `string`| 延时任务主题 |
| `delayTaskId`| `string`| 延时任务唯一标识 |
| `delayParams` |`string`| 延时任务参数 |
| `delayExtra` |`string` |延时任务扩展参数 |
| `jobId` |`long` |定时任务ID |
| `jobInstanceId`|`long` | 定时任务实例ID |
| `taskId` |`long`| 定时任务编号 |
| `jobParamType`| `string`| 定时任务参数类型 |
| `jobParams` |`string` |定时任务参数 |
| `jobExtendParamsType` |`string`| 定时任务扩展参数类型 |
| `jobExtendParams` |`string`| 定时任务扩展参数 |
| `taskName` |`string`| 定时任务任务名称 |
| `executeType` | `string`|定时任务执行类型 |
| `processorType` |`string`| 定时任务执行器类型 |
| `processorInfo` | `string`|定时任务执行器 |
| `masterActorPath` |`string`| 定时任务，Master 地址 |
| `circleId` |`long` |秒级任务循环次数 |
| `shardingId` |`long` |静态分配ID |
| `shardingParam` | `string`|静态分片参数 |
| `shardingNum` | `int`|静态分片总数 |
| `concurrency` |`int`| 并发 |
| `timeExpressionType` | `string`|定时任务时间表达式类型 |
| `timeExpression` | `string`|定时任务时间表达式 |