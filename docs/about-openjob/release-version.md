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
**New features**
- [#87] Added one-time task.

**Bug fixes**
- [#87] Fixed log4j2 log appender.
- [#87] Fixed scheduling time not updated issue.
- [#87] Fixed initialization execution time issue for scheduled tasks.

**Optimizations**
- [#87] Optimized openjob-worker-start automatic configuration
- [#87] Optimized work node heartbeat


## V1.0.0
May 13, 2023
:::info
Feature list
:::
- Java access
- Spring Boot access
- Management backend
  - Namespace management
  - Application management
  - Scheduled tasks
  - Delayed tasks
  - Cluster management
  - System management