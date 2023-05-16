---
sidebar_position: 2
---

# 常见问题

## 如何支持多语言？
- Java 及其衍生框架，原生支持。
- Go 官方支持 go mod 方式安装依赖，具体参考多语言文档。
- PHP 使用官方提供的 Golang agent，通过 shell 方法执行 PHP 任务。基于 Swoole 衍生框架，官方支持 Composer 依赖，具体参考多语言文档。
- Python 使用官方提供的 Golang agent，通过 shell 方法执行 Pythone 任务。

:::caution
除 Java 以外其它语言，定时任务只支持单机模式，但是延时任务所有语言都支持。
:::

## h2 驱动问题



