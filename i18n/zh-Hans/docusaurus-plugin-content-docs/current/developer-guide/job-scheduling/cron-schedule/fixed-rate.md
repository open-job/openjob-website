---
sidebar_position: 3
---

# Fixed Rate

由于Crontab必须被60整除，如果需要每隔50分钟执行一次调度，则Cron无法支持。

![img.png](assets/fixed-rate/img.png)

:::info
Fixed rate 一般同于定期轮询，且表达式简单，但不支持秒级别(大于 60s)。
:::