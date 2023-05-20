---
sidebar_position: 1
---

# Standalone

Standalone execution means that a task instance will only be randomly distributed to a single working node, and the task instance will complete its execution on this working node. Defining a standalone task usually involves implementing the `io.openjob.worker.processor.JavaProcessor` interface, and integration varies depending on the framework used. For more information, please refer to the [Ordinary Processor](/docs/developer-guide/processor-type/ordinary).


