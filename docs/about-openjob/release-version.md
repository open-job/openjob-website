---
sidebar_position: 1
---

# Changelog
## Version Description
The naming rule for `Openjob` version numbers is: `(v major version).(minor version).(bug fix version)`.
:::tip 
for example v1.0.1 is the bug fix version after v1.0.0, and v1.1.0 is the functional version after v1.0.0. 
:::

Openjob will release functional versions monthly and major versions annually.

## V1.0.1
May 19, 2023

**Feature**

- [[#87](https://github.com/open-job/openjob/pull/87)] Add one-time job
- [[#88](https://github.com/open-job/openjob/pull/88)] Job add or modify to recalculate execution time
- [[#88](https://github.com/open-job/openjob/pull/88)] Add validation for namepace, application, job, and delay

**Bugfix**

- [[#87](https://github.com/open-job/openjob/pull/87)] Log4j2 log appender
- [[#87](https://github.com/open-job/openjob/pull/87)] Execute time not updated
- [[#88](https://github.com/open-job/openjob/pull/88)] Delayed task total count
- [[#88](https://github.com/open-job/openjob/pull/88)] Delayed task status by terminated
- [[#88](https://github.com/open-job/openjob/pull/88)] Cluster node startup not to initialize application worker list

**Optimize**

- [[#87](https://github.com/open-job/openjob/pull/87)] Autowire for `openjob-worker-spring-boot-starter`
- [[#87](https://github.com/open-job/openjob/pull/87)] Worker node heartbeat
- [[#88](https://github.com/open-job/openjob/pull/88)] Client async to initialize and add retry
- [[#88](https://github.com/open-job/openjob/pull/88)] Client support server hostname


## V1.0.0

May 13, 2023

:::info
Features
:::
- High reliability
- High performance
- Scheduled tasks
- Distributed computing
- Workflow
- Delayed tasks