---
sidebar_position: 1
---

# Cron

Cron scheduled tasks are similar to the crontab tasks that come with Linux systems. However, crontab can only be scheduled on a single machine and cannot be distributed, management and operations more difficult.

## Expression

There is a slight difference between Cron scheduled tasks and crontab time expressions. The smallest granularity of crontab is minute, while the smallest granularity of Cron scheduled tasks is second. Cron time expressions are by default identical to Java (Quartz).

The format of Cron time expressions is as follows:
```
Explanation:
Java(Quartz)
*    *    *    *    *    *    *
-    -    -    -    -    -    -
|    |    |    |    |    |    |
|    |    |    |    |    |    + year [optional]
|    |    |    |    |    +----- day of week (1 - 7) sun,mon,tue,wed,thu,fri,sat
|    |    |    |    +---------- month (1 - 12) OR jan,feb,mar,apr ...
|    |    |    +--------------- day of month (1 - 31)
|    |    +-------------------- hour (0 - 23)
|    +------------------------- min (0 - 59)
+------------------------------ second (0 - 59)
```
Examples:
```shell
# Every hour
0 0 */1 * * ?

# Every minute
0 */1 * * * ?

# The last day of every month
0 0 18 L * ?  
```

:::danger
For Cron scheduled tasks with an interval less than 60 seconds, please use second-level tasks; otherwise, there will be serious performance issues.
:::