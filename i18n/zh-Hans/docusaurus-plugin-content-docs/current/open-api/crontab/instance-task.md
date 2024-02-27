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

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -d '{
  "jobId": 12345,
  "jobInstanceId": 67890
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