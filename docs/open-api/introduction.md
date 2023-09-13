---
sidebar_position: 1
---

# Introduction

```kroki imgType="plantuml" imgTitle="Collaborating containers"
skinparam ranksep 20
skinparam dpi 125
skinparam packageTitleAlignment left

rectangle "Main" {
  (main.view)
  (singleton)
}
rectangle "Base" {
  (base.component)
  (component)
  (model)
}
rectangle "<b>main.ts</b>" as main_ts
```