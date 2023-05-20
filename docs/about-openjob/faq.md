---
sidebar_position: 2
---

# FAQ

## How to use Openjob in other programming languages?
- If you want to use `Openjob` in Java or its derivative frameworks, it has native support, and you can install it directly.
- If you want to use `Openjob` in Go, you can use the go mod method provided by Go to install the Openjob go agent client dependency provided by Openjob. For details, please refer to [the multi-language client documentation](/docs/category/other-language/).
- If you want to use `Openjob` in PHP, you can use the Golang agent component provided by Openjob, and then execute the PHP tasks through `shell` methods. For Swoole and its derivative frameworks, `Openjob` also supports installing the agent component with `Composer`. Please refer to [the multi-language client documentation](/docs/category/other-language/) for details.
- If you want to use `Openjob` in Python, you can use the Golang agent component provided by Openjob, and then execute the Python tasks through `shell` methods.

:::caution
Warning For languages other than Java, scheduled tasks only support single-machine mode, but delayed tasks
are supported for all languages.
:::

## h2 Driver Issue