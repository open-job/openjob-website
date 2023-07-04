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

## V1.0.4

2023年7月4日

**新增**
- [[#114](https://github.com/open-job/openjob/pull/114)] 支持 Oracle
- [[#114](https://github.com/open-job/openjob/pull/114)] 支持 Postgres
- [[#114](https://github.com/open-job/openjob/pull/114)] 日志存储支持 Oracle
- [[#114](https://github.com/open-job/openjob/pull/114)] 日志存储支持 Postgres
- [[#114](https://github.com/open-job/openjob/pull/114)] Shell 调度
- [[#114](https://github.com/open-job/openjob/pull/114)] Kettle 调度

**修复**
- [[#114](https://github.com/open-job/openjob/pull/114)] 修复登录首页错误
- [[#114](https://github.com/open-job/openjob/pull/114)] 修复 favicon.ico
- [[#114](https://github.com/open-job/openjob/pull/114)] 修复 Worker 注册问题
- [[#114](https://github.com/open-job/openjob/pull/114)] 修复终止任务问题

**优化**
- [[#114](https://github.com/open-job/openjob/pull/114)] 屏蔽延时任务系统参数修改
- [[#114](https://github.com/open-job/openjob/pull/114)] 优化登录错误提示
- [[#114](https://github.com/open-job/openjob/pull/114)] 优化 H2 依赖
- [[#114](https://github.com/open-job/openjob/pull/114)] 优化数据库索引

## V1.0.3

2023年6月12日

**修复**
- [[#109](https://github.com/open-job/openjob/pull/109)] 修复时间轮计算不正确问题
- [[#109](https://github.com/open-job/openjob/pull/109)] 修复集群无法连接问题
- [[#109](https://github.com/open-job/openjob/pull/109)] 修复集群延时任务分片不正确问题
- [[#109](https://github.com/open-job/openjob/pull/109)] 修复集群任务分片不正确问题

**优化**
- [[#109](https://github.com/open-job/openjob/pull/109)] 优化集群连接方式
- [[#109](https://github.com/open-job/openjob/pull/109)] 优化工作节点心跳
- [[#109](https://github.com/open-job/openjob/pull/109)] 优化执行器日志上报

## V1.0.2

2023年6月6日

**新增**
- [[#95](https://github.com/open-job/openjob/pull/95)] 新增 Elasticsearch7 日志存储
- [[#98](https://github.com/open-job/openjob/pull/98)] 首页新增任务和系统数据
- [[#99](https://github.com/open-job/openjob/pull/99)] 新增任务实例、延时实例、集群节点、Server 节点以及日志清理

**修复**
- [[#95](https://github.com/open-job/openjob/pull/95)] 修复管理后台接口请求域名
- [[#96](https://github.com/open-job/openjob/pull/96)] 修复分片算法
- [[#99](https://github.com/open-job/openjob/pull/99)] 修复延时任务缓存
- [[#99](https://github.com/open-job/openjob/pull/99)] 修复延时任务执行时间问题
- [[#101](https://github.com/open-job/openjob/pull/101)] 修复同一个机器多个客户端 Akka 持久化冲突问题

**优化**
- [[#97](https://github.com/open-job/openjob/pull/97)] Bean Mapper
- [[#99](https://github.com/open-job/openjob/pull/99)] 优化应用注册

## V1.0.1

2023年5月19日

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
- [[#90](https://github.com/open-job/openjob/pull/90)] 修复域名访问 server 集群

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