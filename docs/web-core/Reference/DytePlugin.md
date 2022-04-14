---
sidebar_position: 11
web_core_version: 0.17.0-staging.4
---

<!-- Auto Generated Below -->

<a name="module_DytePlugin"></a>

## DytePlugin
The DytePlugin module represents a single plugin in the meeting.


* [DytePlugin](#module_DytePlugin)
    * [.sendIframeEvent(message)](#module_DytePlugin+sendIframeEvent)
    * [.removePluginView(viewId)](#module_DytePlugin+removePluginView)
    * [.addPluginView(iframe, viewId)](#module_DytePlugin+addPluginView)
    * [.enable()](#module_DytePlugin+enable)
    * [.disable()](#module_DytePlugin+disable)
    * [.activate()](#module_DytePlugin+activate)
    * [.deactivate()](#module_DytePlugin+deactivate)

<a name="module_DytePlugin+sendIframeEvent"></a>

### meeting.plugins.all.get(pluginId).sendIframeEvent(message)
**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  

| Param | Description |
| --- | --- |
| message | Socket message forwarded to this plugin. |

<a name="module_DytePlugin+removePluginView"></a>

### meeting.plugins.all.get(pluginId).removePluginView(viewId)
This method is used for cleaning up event listeners attached to an iframe. It must
be used before the iframe is removed from the DOM.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  

| Param | Default | Description |
| --- | --- | --- |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_DytePlugin+addPluginView"></a>

### meeting.plugins.all.get(pluginId).addPluginView(iframe, viewId)
This method adds the communcation layer between the plugin inside the iframe
and the core application (meeting object) in the main window.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  

| Param | Default | Description |
| --- | --- | --- |
| iframe |  | Iframe element to display this plugin. |
| viewId | <code>default</code> | ID of the view corresponding to this iframe. Default is 'default'. |

<a name="module_DytePlugin+enable"></a>

### meeting.plugins.all.get(pluginId).enable()
Enable this plugin for the current user.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+disable"></a>

### meeting.plugins.all.get(pluginId).disable()
Disable this plugin for the current user.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+activate"></a>

### meeting.plugins.all.get(pluginId).activate()
Activate this plugin for all participants.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
<a name="module_DytePlugin+deactivate"></a>

### meeting.plugins.all.get(pluginId).deactivate()
Deactivate this plugin for all participants.

**Kind**: instance method of [<code>DytePlugin</code>](#module_DytePlugin)  
