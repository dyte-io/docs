---
sidebar_position: 6
web_core_version: 1.20.0
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
  - ~~[.joined](#module_DyteMeta+joined)~~
  - [.roomName](#module_DyteMeta+roomName)
  - [.mediaConnected](#module_DyteMeta+mediaConnected)
  - [.socketConnected](#module_DyteMeta+socketConnected)
  - [.setBroadcastTabChanges(broadcastTabChanges)](#module_DyteMeta+setBroadcastTabChanges)
  - [.setSelfActiveTab(spotlightTab)](#module_DyteMeta+setSelfActiveTab)

<a name="module_DyteMeta+selfActiveTab"></a>

### meeting.meta.selfActiveTab

Represents the current active tab

<a name="module_DyteMeta+broadcastTabChanges"></a>

### meeting.meta.broadcastTabChanges

Represents whether current user is spotlighted

<a name="module_DyteMeta+viewType"></a>

### meeting.meta.viewType

The `viewType` tells the type of the meeting
possible values are WEBINAR, GROUP_CALL

<a name="module_DyteMeta+meetingStartedTimestamp"></a>

### meeting.meta.meetingStartedTimestamp

The timestamp of the time when the meeting started.

<a name="module_DyteMeta+meetingTitle"></a>

### meeting.meta.meetingTitle

The title of the meeting.

<a name="module_DyteMeta+joined"></a>

### ~~meeting.meta.joined~~

**_Deprecated_**

<a name="module_DyteMeta+roomName"></a>

### meeting.meta.roomName

The room name of the meeting.

<a name="module_DyteMeta+mediaConnected"></a>

### meeting.meta.mediaConnected

Has room-node connection been made.

<a name="module_DyteMeta+socketConnected"></a>

### meeting.meta.socketConnected

This is set to true if user has successfully connected to the socket.

<a name="module_DyteMeta+setBroadcastTabChanges"></a>

### meeting.meta.setBroadcastTabChanges(broadcastTabChanges)

Sets current user as broadcasting tab changes

**Kind**: instance method of [<code>DyteMeta</code>](#module_DyteMeta)

| Param               |
| ------------------- |
| broadcastTabChanges |

<a name="module_DyteMeta+setSelfActiveTab"></a>

### meeting.meta.setSelfActiveTab(spotlightTab)

Sets current active tab for user

**Kind**: instance method of [<code>DyteMeta</code>](#module_DyteMeta)

| Param        |
| ------------ |
| spotlightTab |
