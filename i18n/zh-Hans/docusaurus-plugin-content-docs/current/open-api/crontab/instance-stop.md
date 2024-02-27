---
sidebar_position: 4
---

# 终止任务实例
Server 通知客户端终止任务

### URL

`/job-instance/stop`

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

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
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