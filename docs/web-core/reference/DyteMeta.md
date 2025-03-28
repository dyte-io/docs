---
sidebar_position: 7
web_core_version: 2.4.1
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
  - [.setBroadcastTabChanges(broadcastTabChanges)](#module_DyteMeta+setBroadcastTabChanges)
  - [.setSelfActiveTab(spotlightTab)](#module_DyteMeta+setSelfActiveTab)

<a name="module_DyteMeta+selfActiveTab"></a>

### meeting.meta.selfActiveTab

Represents the current active tab

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+broadcastTabChanges"></a>

### meeting.meta.broadcastTabChanges

Represents whether current user is spotlighted

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+viewType"></a>

### meeting.meta.viewType

The `viewType` tells the type of the meeting
possible values are: GROUP_CALL| LIVESTREAM | CHAT | AUDIO_ROOM

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+meetingStartedTimestamp"></a>

### meeting.meta.meetingStartedTimestamp

The timestamp of the time when the meeting started.

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+meetingTitle"></a>

### meeting.meta.meetingTitle

The title of the meeting.

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+sessionId"></a>

### meeting.meta.sessionId

(Experimental) The sessionId this meeting object is part of.

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
<a name="module_DyteMeta+meetingId"></a>

### meeting.meta.meetingId

The room name of the meeting.

**Kind**: instance property of [<code>DyteMeta</code>](#module_DyteMeta)  
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
