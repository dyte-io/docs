---
sidebar_position: 12
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DytePlugin"></a>

The DytePlugin module represents a single plugin in the meeting. A plugin can be
obtained from one of the plugin arrays in `meeting.plugins`. For example,

```ts
const plugin1 = meeting.plugins.active.get(pluginId);
const plugin2 = meeting.plugins.all.get(pluginId);
```

- [DytePlugin](#module_DytePlugin)
  - [.sendIframeEvent(message)](#module_DytePlugin+sendIframeEvent)
  - [.sendData(payload)](#module_DytePlugin+sendData)
  - [.removePluginView(viewId)](#module_DytePlugin+removePluginView)
  - [.addPluginView(iframe, viewId)](#module_DytePlugin+addPluginView)
  - [.activateForSelf()](#module_DytePlugin+activateForSelf)
  - [.deactivateForSelf()](#module_DytePlugin+deactivateForSelf)
  - ~~[.enable()](#module_DytePlugin+enable)~~
  - ~~[.disable()](#module_DytePlugin+disable)~~
  - [.activate()](#module_DytePlugin+activate)
  - [.deactivate()](#module_DytePlugin+deactivate)

<a name="module_DytePlugin+sendIframeEvent"></a>

### plugin.sendIframeEvent(message)

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)

| Param   | Description                              |
| ------- | ---------------------------------------- |
| message | Socket message forwarded to this plugin. |

<a name="module_DytePlugin+sendData"></a>

### plugin.sendData(payload)

This method is used to send arbitrary data to the plugin.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)

| Param             | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| payload           | The payload that you want to send inside the plugin.                   |
| payload.eventName | Name of the event. This is used to listen for the event in plugin SDK. |
| payload.data      | Data you wish to emit. It can assume any data type.                    |

<a name="module_DytePlugin+removePluginView"></a>

### plugin.removePluginView(viewId)

This method is used for cleaning up event listeners attached to an iframe. It
must be used before the iframe is removed from the DOM.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)

| Param  | Default              | Description                                                        |
| ------ | -------------------- | ------------------------------------------------------------------ |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_DytePlugin+addPluginView"></a>

### plugin.addPluginView(iframe, viewId)

This method adds the communication layer between the plugin inside the iframe and
the core application (meeting object) in the main window.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)

| Param  | Default              | Description                                                        |
| ------ | -------------------- | ------------------------------------------------------------------ |
| iframe |                      | Iframe element to display this plugin.                             |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_DytePlugin+activateForSelf"></a>

### plugin.activateForSelf()

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+deactivateForSelf"></a>

### plugin.deactivateForSelf()

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+enable"></a>

### ~~plugin.enable()~~

**_Deprecated_**

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+disable"></a>

### ~~plugin.disable()~~

**_Deprecated_**

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+activate"></a>

### plugin.activate()

Activate this plugin for all participants.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+deactivate"></a>

### plugin.deactivate()

Deactivate this plugin for all participants.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)
