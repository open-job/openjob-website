---
sidebar_position: 3
---

# 实例任务状态

批量上报实例任务状态。

### URL

`/openapi/job-instance/handle-tasks`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|jobId| Long| Y |1 | 任务ID|
|jobInstanceId|Long| Y |2 | 任务实例ID |
|dispatchVersion|Long| Y |1694003198285 | 任务调度版本 |
|taskId|String| Y |1_7_1694003198285_1_1 | 实例任务唯一标识 |
|parentTaskId|String| Y |0_0_0_0_0 | 父任务，默认传 0_0_0_0_0 |
|taskName|String| Y |MyTask | 自定义任务名称，可为空 |
|status|Long| Y |1 | 实例任务状态 |
|result|String| Y | success | 任务成功或失败信息，可为空 |
|workerAddress|String| Y |127.0.0.1:25588 | 客户端地址 |
|createTime|Long| Y |1634851200 | 任务创建时间,时间戳 |
|updateTime|Long| Y |1634851300 | 任务更新时间,时间戳 |

##### taskId
实例执行任务ID，固定格式生成。格式为：`{jobId}_{jobInstanceId}_{dispatchVersion}_1_{id}`
- id: 定时任务默认为 1

##### parentTaskId
定时任务默认 `0_0_0_0_0`

##### status
- `5`: 初始化
- `15`: 运行中
- `20`: 执行失败
- `25`: 执行成功
- `30`: 终止

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
  "taskRequestList": [
    {
      "jobId": 1,
      "jobInstanceId": 7,
      "dispatchVersion": 1694003198285,
      "taskId": "1_7_1694003198285_1_1",
      "parentTaskId": "0_0_0_0_0",
      "taskName": "Task One",
      "status": 1,
      "result": "Success",
      "workerAddress": "169.254.27.234:25588",
      "createTime": 1634851200,
      "updateTime": 1634851300
    }
  ]
}

' "http://127.0.0.1:8080/job-instance/submit"

```

##### Response

```json
{
  "data": {
  },
  "status": 200,
  "code": 0,
  "message": "",
  "serverTime": 1708948128288
}
```