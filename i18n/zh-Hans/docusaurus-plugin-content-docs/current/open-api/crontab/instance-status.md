---
sidebar_position: 2
---

# 上报任务状态

客户端执行任务完成时，批量上报上报任务状态

### URL

`/openapi/job-instance/handle-status`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|jobId| Long| Y |1 | 任务ID|
|jobInstanceId|Long| Y |2 | 任务实例ID |
|status|Long| Y |2 | 任务状态 |
|failStatus|Long| Y |2 | 失败状态 |
|result|String| Y |2 | 成功或失败信息 |

##### status
- 5: 执行中
- 10：执行成功
- 15：执行失败
- 20：任务停止
- 25：任务取消

##### failStatus
- 0：默认状态(成功)
- 1：执行失败
- 2：执行超时

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -d '{
  "jobId": 12345,
  "jobInstanceId": 67890,
  "status": 1,
  "failStatus": 2,
  "result": "Success"
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