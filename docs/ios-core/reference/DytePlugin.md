---
sidebar_position: 14
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DytePlugin"></a>

The DytePlugin class represents a single plugin in the meeting.
A plugin can be obtained from one of the plugin arrays in `meeting.plugins`.
For example,

```swift
let plugin1 = meeting.plugins.active[0];
let plugin2 = meeting.plugins.all[0]];
```

- [DytePlugin](#module_DytePlugin)
  - [.name](#module_DytePlugin+getName)
  - [.picture](#module_DytePlugin+getthumbnail)
  - [.isActive](#module_DytePlugin+isActive)
  - [.getPluginView()](#module_DytePlugin+getPluginView)
  - [.activate()](#module_DytePlugin+activate)
  - [.deactivate()](#module_DytePlugin+deactivate)
  - [.sendData(eventName: String, data: Any?)()](#module_DytePlugin+sendData)

<a name="module_DytePlugin+getName"></a>

### get Plugin Name

```swift
let name: String
```

This property tells the name of plugin.
<a name="module_DytePlugin+getthumbnail"></a>

### get plugin thumbnail

```swift
let picture: String
```

This property stores the string url of the thumbnail of the plugin.

<a name="module_DytePlugin+isActive"></a>

### check plugin is active or not

```swift
let isActive: Bool
```

This property tells that this plugin is active or not. All active plugins would be part of active array of [DytePlugins](/ios-core-new/reference/DytePlugins).

<a name="module_DytePlugin+getPluginView"></a>

### get plugin view

```swift
func getPluginView(): WKWebView
```

Returns instance of WKWebView. Which is used to show plugin current state and behavior

<a name="module_DytePlugin+activate"></a>

### activate

```swift
 func activate()
```

Activate this plugin for all participants.

<a name="module_DytePlugin+deactivate"></a>

### deactivate

```swift
 func deactivate()
```

Deactivate this plugin for all participants.

<a name="module_DytePlugin+sendData"></a>

### plugin.sendData(payload)

```siwft
func sendData(eventName: String, data: Any?)
```

This method is used to send arbitrary data to the plugin corresponding to eventName.
