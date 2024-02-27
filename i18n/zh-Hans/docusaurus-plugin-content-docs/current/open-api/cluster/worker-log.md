---
sidebar_position: 4
---

# 上传任务日志

任务在客户端执行过程，周期性实时批量上报任务日志

### URL

`/openapi/task-log/batch-add`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|fieldList|Array| Y |[] | 任务日志 |
|->name|String| Y |- | 日志选项名称 |
|->value|String| Y |SZ2C7FNQRkktQdv | 值 |

日志选项列表:
- `time` 格式化时间 `yyyy-MM-dd HH:mm:ss.SSS`
- `time_stamp` 毫秒时间戳
- `message` 日志内容
- `level` 日志级别(INFO/WARN/ERROR)
- `location` 日志产生位置(org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943))
- `throwable` 错误日志堆栈信息，可为空
- `jobId` 日志任务ID
- `job_instance_id` 日志任务实例ID
- `job_dispatch_version` 任务实例调度执行版本号
- `job_instance_taskId` 任务实例执行唯一标识(实例执行任务ID)
### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
  "fieldList": [
    [
      {"name": "FieldName1", "value": "FieldValue1"},
      {"name": "FieldName2", "value": "FieldValue2"}
    ]
  ]
}' "http://127.0.0.1:8080/openapi/task-log/batch-add"

```

##### Response

```json
{
  "data": {},
  "status": 200,
  "code": 0,
  "message": "",
  "serverTime": 1708948462594
}
```