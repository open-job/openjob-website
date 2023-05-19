---
sidebar_position: 1
---

# 更新日志
## 版本说明
Openjob 版本号命名规则为：v大版本.功能版本.修复版本。
:::tip 例如
v1.0.1 是 v1.0.0 之后的Bug修复版本 v1.1.0 是 v1.0.0 之后的功能版本
:::

Openjob 将按月发布功能版本、按年度发布大版本。

## V1.0.1

**新增**
- [[#87](https://github.com/open-job/openjob/pull/87)] 新增一次性任务
- [[#88](https://github.com/open-job/openjob/pull/88)] 定时任务新增、修改重新计算执行时间
- [[#88](https://github.com/open-job/openjob/pull/88)] 命名空间、应用、任务、延时任务删除数据校验
 
**修复**
- [[#87](https://github.com/open-job/openjob/pull/87)] 修复 log4j2 日志 appender
- [[#87](https://github.com/open-job/openjob/pull/87)] 修复调度时间未更新问题
- [[#87](https://github.com/open-job/openjob/pull/87)] 修复定时任务初始化执行时间问题
- [[#88](https://github.com/open-job/openjob/pull/88)] 修复延时任务总数计算错误
- [[#88](https://github.com/open-job/openjob/pull/88)] 修复终止延时任务状态错误
- [[#88](https://github.com/open-job/openjob/pull/88)] 修复集群节点启动未初始化工作节点列表

**优化**
- [[#87](https://github.com/open-job/openjob/pull/87)] 优化 openjob-worker-start 自动装配
- [[#87](https://github.com/open-job/openjob/pull/87)] 优化工作节点心跳
- [[#88](https://github.com/open-job/openjob/pull/88)] 优化客户端初始化逻辑，支持异步初始化以及新增重试机制
- [[#88](https://github.com/open-job/openjob/pull/88)] 优化客户端注册地址，支持 `host 域名配置


## V1.0.0
2023年5月13日
:::info
**功能列表**
:::
- Java 接入
- Spring Boot 接入
- 管理后台
  - 命名空间
  - 应用管理
  - 定时任务
  - 延时任务
  - 集群管理
  - 系统管理