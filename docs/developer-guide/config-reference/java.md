---
sidebar_position: 2
---

# Java

Java 集成，`application.properties` 配置参数列表：

| 参数名称    |                                                                                                      默认值 | 描述  |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| `openjob.server.host` | localhost | Server Host |
| `openjob.server.port` | `25520` | Server Port |
| `openjob.worker.host` | localhost | Worker Host |
| `openjob.worker.port` | `25588` | Worker port |
| `openjob.worker.app.name` | - | 应用名称，必须配置 |
| `openjob.worker.delay.enable` | `false` | 是否开启延时任务 |
| `openjob.worker.heartbeat.actor.num` | `1` | 心跳 actor  最大数量 |
| `openjob.worker.task.master.actor.num` | `32` | 任务 Master actor  最大数量 |
| `openjob.worker.task.container.actor.num` | `32` | 任务 Container actor  最大数量 |
| `openjob.worker.persistent.actor.num` | `2` | 持久化 actor  最大数量 |
| `openjob.worker.heartbeat.interval` | `20` | 心跳时间，单位秒 |
| `openjob.worker.delay.master.actor.num` | `1` | 延时任务 Master actor  最大数量 |
| `openjob.worker.delay.pull.size` | `8` | 延时任务拉取数量 |
| `openjob.worker.delay.pull.sleep` | `500L` | 延时任务拉取空闲休眠时间，单位毫秒 |
| `openjob.worker.delay.pull.step` | `500L` | 延时任务主题空闲休眠步长时间，单位毫秒 |
| `openjob.worker.delay.timeout` | `3000L` | 延时任务发送超时时间，单位毫秒 |

:::danger
`openjob.worker.heartbeat.interval` 最大支持 20s，如果设置超过最大值会导致工作节点状态异常
:::