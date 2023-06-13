---
sidebar_position: 1
---

# Directly

## Download

[RELEASE](https://github.com/open-job/openjob/releases/) download packages。

```shell
tar -zxvf openjob-server-x.x.x.tar.gz
```

## Structure

```shell
|-- bin
|   |-- startup.bat  # Normal startup script (Windows)
|   `-- startup.sh # Normal startup script (Linux)
|-- conf
|   |-- application.properties # Configuration file
|   `-- logback.xml # Log configuration
|-- logs
|   |-- error.log # Error and warning logs
|   |-- notice.log # Info logs
|   `-- openjob_gc.log.0.current # GC logs
`-- target
    `-- openjob-server.jar # Startup jar
```

## Start
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>

```shell
.../bin/starup.sh
```
  </TabItem>
  <TabItem value="windows" label="Windows">

```shell
.../bin/starup.bat
```
  </TabItem>
</Tabs>

:::tip
- Database(`openjob`) must be created.
- Java(8+)
:::

Run complete，click http://127.0.0.1:8080/
- user: openjob
- password: openjob.io