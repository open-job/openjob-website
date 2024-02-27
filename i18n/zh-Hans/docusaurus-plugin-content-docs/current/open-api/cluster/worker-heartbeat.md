---
sidebar_position: 2
---

# 客户端心跳

客户端周期上报基本信息和正在运行中的定时任务实例，同时服务端会返回当前应用对应的所有客户端列表和系统信息(
集群通信版本和延时任务版本)。

- 客户端实时批量收集正在运行的定时任务实例
- 返回延迟任务版本发生变化时，客户端需要重新拉取任务主题

### URL

`/openapi/worker/heartbeat`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|address|String| Y |127.0.0.2:8088 | 客户端HTTP地址 |
|appId|Long| Y |1 | 应用编号ID |
|appName|String| Y |openjob | 应用名称 |
|runningJobInstanceIds|Array| Y |[1,2] | 所有正在运行的任务实例ID |
|version|String| Y |1.0.1 | 当前客户端版本 |

### Response

| 参数名称 | 类型 | 描述 |
|------|--|-----|
| clusterVersion | Long | 集群通信版本号 |
| clusterDelayVersion | Long | 集群延时任务版本号 |
| workerAddressList | Array | 应用所有在线客户端(包含当前客户端) |

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
  "address": "127.0.0.2:8088",
  "appId": 1,
  "appName": "openjob",
  "runningJobInstanceIds": [
    1,
    2
  ],
  "version": "1.0.6"
}' "http://127.0.0.1:8080/openapi/worker/heartbeat"

```

##### Response

```json
{
  "data": {
    "workerAddressList": [
      "127.0.0.2:8088"
    ],
    "clusterVersion": 547,
    "clusterDelayVersion": 8
  },
  "status": 200,
  "code": 0,
  "message": "",
  "serverTime": 1708948128288
}
```