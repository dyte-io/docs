---
sidebar_position: 1
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DyteClient"></a>

The DyteClient class is the main class of the web core library. An object of the
DyteClient class can be created using `await DyteClient.init({ ... })`.
Typically, an object of `DyteClient` is named `meeting`.

- [DyteClient](#module_DyteClient)
  - _instance_
    - [.participants](#module_DyteClient+participants)
    - [.self](#module_DyteClient+self)
    - [.meta](#module_DyteClient+meta)
    - [.plugins](#module_DyteClient+plugins)
    - [.chat](#module_DyteClient+chat)
    - [.polls](#module_DyteClient+polls)
    - [.remote](#module_DyteClient+remote)
    - [.connectedMeetings](#module_DyteClient+connectedMeetings)
    - [.**internals**](#module_DyteClient+__internals__)
    - [.joinRoom()](#module_DyteClient+joinRoom)
    - [.leaveRoom()](#module_DyteClient+leaveRoom)
  - _static_
    - [.init(options)](#module_DyteClient.init)

<a name="module_DyteClient+participants"></a>

### meeting.participants

The `participants` object consists of 4 maps of participants, `waitlisted`,
`joined`, `active`, `pinned`. The maps are indexed by `peerId`s, and the values
are the corresponding participant objects.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+self"></a>

### meeting.self

The `self` object can be used to manipulate audio and video settings, and other
configurations for the local participant. This exposes methods to enable and
disable media tracks, share the user's screen, etc.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+meta"></a>

### meeting.meta

The `room` object stores information about the current meeting, such as chat
messages, polls, room name, etc.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+plugins"></a>

### meeting.plugins

The `plugins` object stores information about the plugins available in the
current meeting. It exposes methods to activate and deactivate them.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+chat"></a>

### meeting.chat

The chat object stores the chat messages that were sent in the meeting. This
includes text messages, images, and files.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+polls"></a>

### meeting.polls

The polls object stores the polls that were initiated in the meeting. It exposes
methods to create and vote on polls.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+remote"></a>

### meeting.remote

The remote object stores the remote control requests for the meeting. It exposes
methods to request, accept and end the remote control.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+connectedMeetings"></a>

### meeting.connectedMeetings

The connectedMeetings object stores the connected meetings states. It exposes
methods to create/read/update/delete methods for connected meetings.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+__internals__"></a>

### meeting.\_\_internals\_\_

The **internals** object exposes the internal tools & utilities such as features
and logger so that client can utilise the same to build their own feature based
UI. DyteLogger (**internals**.logger) can be used to send logs to Dyte's servers
to inform Dyte of issues, if any, proactively.

**Kind**: instance property of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+joinRoom"></a>

### meeting.joinRoom()

The `joinRoom()` method can be used to join the meeting. A `roomJoined` event is
emitted on `self` when the room is joined successfully.

**Kind**: instance method of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient+leaveRoom"></a>

### meeting.leaveRoom()

The `leaveRoom()` method can be used to leave a meeting.

**Kind**: instance method of [<code>DyteClient</code>](#module_DyteClient)  
<a name="module_DyteClient.init"></a>

### meeting.init(options)

The `init` method can be used to instantiate the DyteClient class. This returns
an instance of DyteClient, which can be used to perform actions on the meeting.

**Kind**: static method of [<code>DyteClient</code>](#module_DyteClient)

| Param             | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| options           | The options object.                                                           |
| options.roomName  | The name of the room. (If you are using V2 Api's you don't need to send this) |
| options.authToken | The authorization token received using the API.                               |
| options.apiBase   | The base URL of the API.                                                      |
| options.defaults  | The default audio and video settings.                                         |
