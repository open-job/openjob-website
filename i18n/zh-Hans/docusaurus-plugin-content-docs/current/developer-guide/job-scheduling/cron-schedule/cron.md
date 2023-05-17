---
sidebar_position: 1
---

# Cron

cron 定时任务类似 Linux 系统 crontab 任务，crontab 只是单机节点不能分布式调度，且管理运维比较麻烦。

## 表达式

Cron 定时任务与 crontab 时间表达式略有区别，crontab 最小粒度是分，Cron 定时任务最粒度是秒。cron 时间表达式默认与 Java(Quartz) 完全一致。

Cron 时间表达式格式:
```
说明：
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
示例：
```shell
# 每小时
0 0 */1 * * ?

# 每分钟
0 */1 * * * ?

# 每月最后一天
0 0 18 L * ?  
```

:::danger
Cron 定时任务间隔时间小于 60s，请使用秒级任务，否则有严重性能问题。
:::