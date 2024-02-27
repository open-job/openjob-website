---
sidebar_position: 5
---

# 任务实例检查

Server 特殊场景需要检查客户端任务实例是否存活。

### URL

`/job-instance/check`

### Method

`POST`

### Content-Type

`application/json`

### Body

无

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
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