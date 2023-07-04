---
sidebar_position: 1
---

# Changelog
## Release introduction
Release version like this: `v(main version).(feature version).(fix version)`.
:::tip 
v1.0.1 is bug fix for v1.0.0, and v1.1.0 is the feature release after v1.0.0. 
:::

Openjob release feature on a monthly and main release on an annual.

## V1.0.4

July 4, 2023

**Feature**
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Oracle
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Postgres
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Oracle log storage
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Postgres log storage
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Shell scheduling
- [[#114](https://github.com/open-job/openjob/pull/114)] Add Kettle scheduling

**Bugfix**
- [[#114](https://github.com/open-job/openjob/pull/114)] Fix home error
- [[#114](https://github.com/open-job/openjob/pull/114)] Fix favicon.ico
- [[#114](https://github.com/open-job/openjob/pull/114)] Fix Worker register
- [[#114](https://github.com/open-job/openjob/pull/114)] Fix stop job instance

**Optimize**
- [[#114](https://github.com/open-job/openjob/pull/114)] Disable delay task system configuration
- [[#114](https://github.com/open-job/openjob/pull/114)] Login fail message
- [[#114](https://github.com/open-job/openjob/pull/114)] H2 dependence
- [[#114](https://github.com/open-job/openjob/pull/114)] Database index

## V1.0.3
Jun 12, 2023

**Bugfix**
- [[#109](https://github.com/open-job/openjob/pull/109)] Fix timing wheel
- [[#109](https://github.com/open-job/openjob/pull/109)] Fix cluster connect
- [[#109](https://github.com/open-job/openjob/pull/109)] Fix delay slots with cluster
- [[#109](https://github.com/open-job/openjob/pull/109)] Fix job slots with cluster

**Optimize**
- [[#109](https://github.com/open-job/openjob/pull/109)] Cluster connect mode
- [[#109](https://github.com/open-job/openjob/pull/109)] Worker heartbeat
- [[#109](https://github.com/open-job/openjob/pull/109)] Task log

## V1.0.2
Jun 6, 2023

**Feature**
- [[#95](https://github.com/open-job/openjob/pull/95)] Add Elasticsearch7 log storage
- [[#98](https://github.com/open-job/openjob/pull/98)] Add job dashboard
- [[#99](https://github.com/open-job/openjob/pull/99)] Add auto clean for instance, server node, worker node and Logs

**Bugfix**

- [[#95](https://github.com/open-job/openjob/pull/95)] Fix domain for management
- [[#96](https://github.com/open-job/openjob/pull/96)] Fix slots
- [[#99](https://github.com/open-job/openjob/pull/99)] Fix cache of delay task
- [[#99](https://github.com/open-job/openjob/pull/99)] Fix delay task execution time
- [[#101](https://github.com/open-job/openjob/pull/101)] Fix many client on a system

**Optimize**
- [[#97](https://github.com/open-job/openjob/pull/97)] Bean Mapper
- [[#99](https://github.com/open-job/openjob/pull/99)] Register application

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