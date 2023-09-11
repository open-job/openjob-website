---
sidebar_position: 1
---

# Install

## Docker

### Pull image

```shell
docker pull openjob/openjob-server:latest
```

### Run

Add a configuration file `.env`
```shell
AKKA_REMOTE_HOSTNAME=LocalIP
```

:::caution 
Configure `AKKA_REMOTE_HOSTNAME` as local IP, and not `127.0.0.1`
:::

Docker run

```shell
docker run --env-file .env -it -d -p 8080:8080 -p 25520:25520 openjob/openjob-server:latest /bin/bash
```

Run complete，click http://127.0.0.1:8080/
- user: openjob
- password: openjob.io

:::info
1.0.7 supports H2 database by default for test
:::

### Other database
Add a configuration file `.env`, more [configuration-reference](/docs/developer-guide/config-reference/server)
```shell
AKKA_REMOTE_HOSTNAME=LocalIP
OJ_DS_URL=jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://127.0.0.1:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
```

:::info
1. Database(`openjob`) must be created.
2. Configuration file(`.env`) is best, because many configuration parameters.
3. Configure `AKKA_REMOTE_HOSTNAME` as local IP, and not `127.0.0.1`
:::

## Docker compose

### H2 database

Create a new file `docker-compose.yml`
```yaml
version: '3'
services:
  openjob-server:
    image: openjob/openjob-server:latest
    restart: always
    container_name: openjob-server
    environment:
      - AKKA_REMOTE_HOSTNAME=LocalIP
    ports:
      - "8080:8080"
      - "25520:25520"
```

:::tip
1. Database(`openjob`) must be created.
2. Configure `AKKA_REMOTE_HOSTNAME` as local IP, and not `127.0.0.1`
:::

Run container

```shell
# normal
docker-compose up

# daemon
docker-compose up -d
```

Run complete，click http://127.0.0.1:8080/
- user: openjob
- password: openjob.io

:::info
1. Execute command(`docker-compose up ...`) to run container in the same directory as `docker-compose.yml`.
2. 1.0.7 supports H2 database by default for test
:::


### Other database
Create a new file `docker-compose.yml`
```yaml
version: '3'
services:
  openjob-server:
    image: openjob/openjob-server:latest
    restart: always
    container_name: openjob-server
    environment:
      - AKKA_REMOTE_HOSTNAME=LocalIP
      - OJ_DS_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
      - OJ_LOG_STORAGE_MYSQL_URL=jdbc:mysql://172.20.0.235:3306/openjob?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
    ports:
      - "8080:8080"
      - "25520:25520"
```

:::tip
1. Database(`openjob`) must be created.
2. Configure `AKKA_REMOTE_HOSTNAME` as local IP, and not `127.0.0.1`
:::

## Container logs

```shell
docker logs -f containerId
```

## Enter container

```shell
docker exec -it containerId /bin/bash
```
## Deployment structure

Openjob is deployed in the `/home/openjob` directory
```shell
|-- bin
|   |-- docker-startup.sh  # Docker startup script
|   |-- startup.bat  # Normal startup script (Windows)
|   |-- startup.sh # Normal startup script (Linux)
|-- conf
|   |-- application.properties # Configuration file
|       |-- logback.xml # Log configuration
|-- logs
|   |-- error.log # Error and warning logs
|   |-- notice.log # Info logs
|       |-- openjob_gc.log.0.current # GC logs
|-- target
        |-- openjob-server.jar # Startup jar
```