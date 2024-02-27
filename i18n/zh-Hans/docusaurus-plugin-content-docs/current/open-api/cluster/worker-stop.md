---
sidebar_position: 3
---

# 下线客户端
客户端下线时，每次都需要通知 Server。

### URL

`/openapi/worker/stop`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|address|String| Y |127.0.0.2:8088 | 客户端HTTP地址 |
|appName|String| Y |openjob | 应用名称 |
|workerKey|String| Y |SZ2C7FNQRkktQdv | 客户端唯一标识 |

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
  "address": "127.0.0.2:8088",
  "appName": "openjob",
  "workerKey": "SZ2C7FNQRkktQdv"
}' "http://127.0.0.1:8080/openapi/worker/stop"

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