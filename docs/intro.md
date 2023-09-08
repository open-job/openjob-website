---
sidebar_position: 1
---

# Introduction
Openjob is a distributed and high-performance task scheduling framework that supports multiple cronjob, delay task, workflow, lightweight distributed computing, unlimited horizontal scaling, with high scalability and fault tolerance. Also has permission management, powerful alarm monitoring, and support multiple languages.

## Feature
### High reliability
Distributed with stateless design, using the Master/Worker architecture, supports multiple databases (H2/MySQL/PostgreSQL/Oracle/TiDB).
### High performance
System uses a consistency sharding algorithm, lock-free design, task scheduling is accurate down to the second, supporting lightweight distributed computing and unlimited horizontal scaling.
### Cronjob
Supports distributed cronjob, fixed rate tasks, high-performance second tasks, and onetime tasks.
### Distributed computing
Supports multiple distributed programming models such as standalone, broadcast, Map, MapReduce, and sharding, easy to complete distributed computing for big data.
### Delay task
High performance delay task based on Redis , support multi-level storage, and provides rich statistics and reports.
### Workflow
Supports workflow scheduling engine, visual DAG design, and easy to complete complex task scheduling.
### Permission management
 User management, supports menu, button, and data permission settings, flexible management of user permissions.
### Alarm monitoring
Overall monitoring metrics, rich and alarm in time, easy to locate and resolve online problem.
### Multiple languages
Support multiple languages such as Java, Go, PHP, and Python, as well as build with frameworks such as Spring Boot, Gin, and Swoft.

## Open source
| **Item**              |**Quartz**| **Elastic-Job**                      | **XXL-JOB**                                                         | **Openjob**                                                                                                                              |
|-----------------------| ----- |--------------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Cronjob               |Cron| Cron                                 | Cron                                                                | Cronjob, second, Onetime, Fixed rate                                                                                                     |
| Delay task            |No| No                                   | No                                                                  | Distributed high-performancedelay task  based on Redis                                                                                   |
| Workflow              |No| No                                   | No                                                                  | Workflow design with UI                                                                                                                  |
| Distributed Computing |No| Sharding                             | Sharding                                                            | Broadcast, Map/MapReduce, Sharding                                                                                                       |
| Multiple languages    |Java| Java, Shell                          | Java, Shell                                                         | Java(Spring Boot), Go(Gin、beego), PHP(Swoft), Python(Agent), Shell, HTTP                                                                 |
| Visualization         |No| Weak                                 | Task history, Task log（Not support storage）, Dashboard              | Task history, Task log（support H2/Mysql/Elasticsearch）, Dashboard, permissions, Task log stack                                    |
| Manageable            |No| enable,disable task                  | enable、disable task, execute once,  stop                            | enable、disable task, execute once, kill, stop                                                                                            |
| Alarms                |No| email                                | email                                                               | custom event, email, webhook                                                                                                             |
| Performance           |Every task scheduling try to acquire a lock through the database, causes a high pressure on the database| ZooKeeper  is performance bottleneck | Task scheduling is only by master, causes a high pressure on master | Uses sharding algorithm, each node can be scheduled without lock, supports unlimited horizontal scaling, and supports big task scheduling |

## Documentation

- [Github](https://github.com/open-job/openjob)
- [Official website](https://openjob.io)
- [Official documentation](https://openjob.io/docs/intro/)
- [Live demo ](https://demo.openjob.io)
    - username: openjob
    - password: openjob.io

## Contact

- Github: https://github.com/open-job/openjob
- Gitter: https://gitter.im/openjob/openjob
- Discord: https://discord.gg/ZUmX57fKa5
- Mail: swoft@qq.com