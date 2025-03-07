---
sidebar_position: 7
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteMeta"></a>

This consists of the metadata of the meeting, such as the room name and the title.

- [DyteMeta](#module_DyteMeta)
  - [.selfActiveTab](#module_DyteMeta+selfActiveTab)
  - [.broadcastTabChanges](#module_DyteMeta+broadcastTabChanges)
  - [.viewType](#module_DyteMeta+viewType)
  - [.meetingStartedTimestamp](#module_DyteMeta+meetingStartedTimestamp)
  - [.meetingTitle](#module_DyteMeta+meetingTitle)
  - [.sessionId](#module_DyteMeta+sessionId)
  - [.meetingId](#module_DyteMeta+meetingId)
  - [.mediaConnected](#module_DyteMeta+mediaConnected)
  - [.socketConnected](#module_DyteMeta+socketConnected)
  - [.setBroadcastTabChanges(broadcastTabChanges)](#module_DyteMeta+setBroadcastTabChanges)
  - [.setSelfActiveTab(spotlightTab)](#module_DyteMeta+setSelfActiveTab)

<a name="module_DyteMeta+selfActiveTab"></a>

### meta.selfActiveTab

Represents the current active tab

<a name="module_DyteMeta+broadcastTabChanges"></a>

### meta.broadcastTabChanges

Represents whether current user is spotlighted

<a name="module_DyteMeta+viewType"></a>

### meta.viewType

The `viewType` tells the type of the meeting
possible values are: GROUP_CALL| LIVESTREAM | CHAT | AUDIO_ROOM

<a name="module_DyteMeta+meetingStartedTimestamp"></a>

### meta.meetingStartedTimestamp

The timestamp of the time when the meeting started.

<a name="module_DyteMeta+meetingTitle"></a>

### meta.meetingTitle

The title of the meeting.

<a name="module_DyteMeta+sessionId"></a>

### meta.sessionId

(Experimental) The sessionId this meeting object is part of.

<a name="module_DyteMeta+meetingId"></a>

### meta.meetingId

The room name of the meeting.

<a name="module_DyteMeta+mediaConnected"></a>

### meta.mediaConnected

Has room-node connection been made.

<a name="module_DyteMeta+socketConnected"></a>

### meta.socketConnected

This is set to true if user has succesfully connected to the socket.

<a name="module_DyteMeta+setBroadcastTabChanges"></a>

### meta.setBroadcastTabChanges(broadcastTabChanges)

Sets current user as broadcasting tab changes

| Param               |
| ------------------- |
| broadcastTabChanges |

<a name="module_DyteMeta+setSelfActiveTab"></a>

### meta.setSelfActiveTab(spotlightTab)

Sets current active tab for user

| Param        |
| ------------ |
| spotlightTab |

<a name="module_DyteMeta+joined"></a>

### ~~meta.joined~~

**_Deprecated_**

<a name="module_DyteMeta+roomName"></a>

### ~~meta.roomName~~

**_Deprecated_**
