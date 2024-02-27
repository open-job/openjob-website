---
sidebar_position: 1
---

# 上线客户端

客户端启动时，每次都需要上报客户端信息。

### URL

`/openapi/worker/start`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|address|String| Y |127.0.0.2:8088 | 客户端HTTP地址 |
|appName|String| Y |openjob | 应用名称 |
|version|String| Y |1.0.1 | 当前客户端版本 |
|workerKey|String| Y |SZ2C7FNQRkktQdv | 客户端唯一标识 |

### Response

| 参数名称 | 类型 | 描述 |
|------|--|-----|
| appId | Long | 应用编号ID |
| appName | String | 应用名称 |
| workerAddressList | Array | 应用所有在线客户端 |

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -H "Token: 8uJfew****" -d '{
  "address": "127.0.0.2:8088",
  "appName": "openjob",
  "metric": {},
  "version": "1.0.6",
  "workerKey": "SZ2C7FNQRkktQdv"
}' "http://127.0.0.1:8080/openapi/worker/start"

```

##### Response

```json
{
  "data": {
    "appId": 1,
    "appName": "openjob",
    "workerAddressList": [
      "127.0.0.2:8088"
    ]
  },
  "status": 200,
  "code": 0,
  "message": "",
  "serverTime": 1708947322608
}
```
