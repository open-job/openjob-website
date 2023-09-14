---
sidebar_position: 1
---

# Worker Start

Worker Start

### URL

`/openapi/worker/start`

### Method

`POST`

###  Content-Type

`application/json`

### Body
|Name|Type| Require  | Description |
| ----- | ----- |-----|--|
|appName|String| Y   | Application Name |

### Response
| Name | Type | Description |
|------|------|-------------|
| ss   | ss   | ss          |

### Example

##### Request

```shell
curl -d 'dataId=aaa' \
  -d 'content=contentTest' \
  -X POST 'http://127.0.0.1:8080/openpai/worker/start'

```
##### Response

```json
{
      "code": 0,
      "message": "success",
      "data": true
}
```
