---
sidebar_position: 9
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DytePlugins"></a>

The DytePlugins class consists of all the plugins in the meeting. It uses instances of [DytePlugin](/ios-core-new/reference/DytePlugin) class to represent plugins

- `all`: Consists of all the plugins in the meeting.
- `active`: Consists of the plugins that are currently in use.

* [DytePlugins](#module_DytePlugins)
  - [.all](#module_DytePlugins+all)
  - [.active](#module_DytePlugins+active)

<a name="module_DytePlugins+all"></a>

### Get all plugins

```swift
let all: [DytePlugin]
```

All plugins of type [DytePlugin](/ios/components/dyte-active-tab-selector-view) accessible by the current user.

<a name="module_DytePlugins+active"></a>

### Get all active plugins

```swift
let active: [DytePlugin]
```

All plugins of type [DytePlugin](/ios/components/dyte-active-tab-selector-view) that are currently enabled in the room.
