---
sidebar_position: 1
---

# 执行任务实例

当定时任务触发时，Server 会实时通知客户端。

### URL

`/job-instance/submit`

### Method

`POST`

### Content-Type

`application/json`

### Body

|参数名称|类型| 是否必传 | 示例|描述 |
| ----- | ----- |-----|--|--|
|jobId| Long| Y |1 | 任务ID|
|jobInstanceId|Long| Y |2 | 任务实例ID |
|dispatchVersion| Long| Y | 1694004657166 | 任务调度版本|
|jobParamType|String| Y | json| 参数类型 |
|jobParams|String| Y | {}| 任务参数 |
|jobExtendParamsType|String| Y | json | 任务扩展参数类型 |
|jobExtendParams|String| Y | {}| 任务扩展参数 |
|processorType|String| Y | processor| 执行器类型 |
|processorInfo|String| Y | test| 执行器名称|
|executeType|String| Y | standalone | 执行类型|
|failRetryTimes|Int| Y | 3| 失败重试次数|
|failRetryInterval|Int| Y |3 | 失败重试间隔(s) |
|executeTimeout|Int| Y |60 | 执行超时时间(s)，0=无超时 |
|concurrency|Int| Y |1 | 并发(同一个任务最大执行并发) |
|timeExpressionType|String| Y |cron | 时间表达式类型 |
|timeExpression|String| Y | 0 0 * * * *| 时间表达式|
|executeOnce|Int| Y |2 |是否一次性任务 1=是 2=否 |

##### jobParamType

- `plaintext`：文本
- `json`：`JSON` 格式

> `jobExtendParamsType` 参数一样

##### processorType

- `processor`：默认普通执行器

##### executeType

- `standalone`： 默认单机执行

##### timeExpressionType

- `cron`： 默认时间表达式

### Response

无

### Example

##### Request

```shell

curl -H "Content-Type: application/json" -d '{
  "jobId": 12345,
  "jobInstanceId": 67890,
  "dispatchVersion": 1694004657166,
  "jobParamType": "json",
  "jobParams": "{...}",
  "jobExtendParamsType": "json",
  "jobExtendParams": "{...}",
  "processorType": "processor",
  "processorInfo": "testName",
  "executeType": "standalone",
  "failRetryTimes": 3,
  "failRetryInterval": 60,
  "executeTimeout": 300,
  "concurrency": 5,
  "timeExpressionType": "cron",
  "timeExpression": "0 0 * * *",
  "executeOnce": 2
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