---
sidebar_position: 16
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteRemote"></a>

This module provides the ability to control a remotely shared screen using mouse and keyboard.
Methods are available to request, accept and end control of shared screen.

- [DyteRemote](#module_DyteRemote)
  - [.requestControl(peerId)](#module_DyteRemote+requestControl) ⇒
  - [.acceptControl(requestId)](#module_DyteRemote+acceptControl)
  - [.endControl()](#module_DyteRemote+endControl)

<a name="module_DyteRemote+requestControl"></a>

### meeting.remote.requestControl(peerId) ⇒

Sends a request to a peer for remote control.

**Kind**: instance method of [<code>DyteRemote</code>](#module_DyteRemote)  
**Returns**: request identifier for the control request.

| Param  | Description                                               |
| ------ | --------------------------------------------------------- |
| peerId | The peer that needs to receive the remote control request |

<a name="module_DyteRemote+acceptControl"></a>

### meeting.remote.acceptControl(requestId)

Accepts a remote control request from a peer.

**Kind**: instance method of [<code>DyteRemote</code>](#module_DyteRemote)

| Param     | Description                                      |
| --------- | ------------------------------------------------ |
| requestId | The request identifier that needs to be accepted |

<a name="module_DyteRemote+endControl"></a>

### meeting.remote.endControl()

End an active remote control.

**Kind**: instance method of [<code>DyteRemote</code>](#module_DyteRemote)
