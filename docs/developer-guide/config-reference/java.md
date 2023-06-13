---
sidebar_position: 2
---

# Java

Java client configuration list：

| Name | Default | Description |
|:----------|---------------------------------------------------------------------------------------------------------:|:--:|
| `openjob.server.address` | `http://localhost:8080` | Server address |
| `openjob.worker.host` | localhost | Worker Host |
| `openjob.worker.port` | `25588` | Worker port |
| `openjob.worker.app.name` | - | Application name |
| `openjob.worker.delay.enable` | `false` | Delay enable status |
| `openjob.worker.heartbeat.actor.num` | `1` | Heartbeat actor num |
| `openjob.worker.task.master.actor.num` | `32` | Task master actor num |
| `openjob.worker.task.container.actor.num` | `32` | Task container actor num |
| `openjob.worker.persistent.actor.num` | `2` | Persistent actor num|
| `openjob.worker.heartbeat.interval` | `5` | Heartbeat interval(second) |
| `openjob.worker.delay.master.actor.num` | `1` | Delay master actor num |
| `openjob.worker.delay.pull.size` | `8` | Delay pull size |
| `openjob.worker.delay.pull.sleep` | `500L` | Delay pull sleep(milliseconds) |
| `openjob.worker.delay.pull.step` | `500L` | Delay pull step(milliseconds) |
| `openjob.worker.delay.timeout` | `3000L` | Delay send timeout(milliseconds) |

:::danger
`openjob.worker.heartbeat.interval` if greater than 5s，worker client will be offline.
:::