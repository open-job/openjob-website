---
sidebar_position: 3
---

# Spring Boot

Spring Boot client configuration list：

| Name | Default | Description |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| `spring.openjob.enable` | `true` |  |
| `spring.openjob.server.address` | `http://localhost:8080` | Server address |
| `spring.openjob.worker.heartbeat-interval` | `5` | Heartbeat interval(second) |
| `spring.openjob.worker.host` | localhost | Worker host  |
| `spring.openjob.worker.port` | `25588` | Worker port |
| `spring.openjob.worker.app-name` | - | Application name |
| `spring.openjob.actor.heartbeat-num` | `1` | Heartbeat actor num |
| `spring.openjob.actor.task-master-num` | `32` | Task master actor num |
| `spring.openjob.actor.task-container-num` | `32` | Task container actor num |
| `spring.openjob.actor.persistent-num` | `2` | Persistent actor num |
| `spring.openjob.actor.delay-master-num` | `1` | Delay master actor num |
| `spring.openjob.delay.enable` | `false` | Delay enable status |
| `spring.openjob.delay.pull-size` | `8` | Delay pull size |
| `spring.openjob.delay.pull-sleep` | `500L` | Delay pull sleep(milliseconds) |
| `spring.openjob.delay.pull-step` | `500L` | Delay pull step(milliseconds) |
| `spring.openjob.delay.timeout` | `3000L` | Delay send timeout(milliseconds) |

:::danger
`spring.openjob.worker.heartbeat-interval` if greater than 5s，worker client will be offline.
:::