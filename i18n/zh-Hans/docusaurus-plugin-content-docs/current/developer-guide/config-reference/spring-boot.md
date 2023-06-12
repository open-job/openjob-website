---
sidebar_position: 3
---

# Spring Boot

Spring Boot 集成配置参数列表：

| 参数名称    |                                                                                                      默认值 | 描述  |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| `spring.openjob.enable` | `true` | 是否开启 |
| `spring.openjob.server.address` | `http://localhost:8080` | Server 集群地址 |
| `spring.openjob.worker.heartbeat-interval` | `20` | 心跳时间，单位秒 |
| `spring.openjob.worker.host` | localhost | Worker host  |
| `spring.openjob.worker.port` | `25588` | Worker prot |
| `spring.openjob.worker.app-name` | - | 应用名称，必须配置 |
| `spring.openjob.actor.heartbeat-num` | `1` | 心跳 actor  最大数量 |
| `spring.openjob.actor.task-master-num` | `32` | 任务 Master actor  最大数量 |
| `spring.openjob.actor.task-container-num` | `32` | 任务 Container actor  最大数量 |
| `spring.openjob.actor.persistent-num` | `2` | 持久化 actor  最大数量 |
| `spring.openjob.actor.delay-master-num` | `1` | 延时任务 Master actor  最大数量 |
| `spring.openjob.delay.enable` | `false` | 是否开启延时任务 |
| `spring.openjob.delay.pull-size` | `8` | 延时任务拉取数量 |
| `spring.openjob.delay.pull-sleep` | `500L` | 延时任务拉取空闲休眠时间，单位毫秒 |
| `spring.openjob.delay.pull-step` | `500L` | 延时任务主题空闲休眠步长时间，单位毫秒 |
| `spring.openjob.delay.timeout` | `3000L` | 延时任务发送超时时间，单位毫秒 |

:::danger
`spring.openjob.actor.heartbeat-num` 最大支持 20s，如果设置超过最大值会导致工作节点状态异常
:::