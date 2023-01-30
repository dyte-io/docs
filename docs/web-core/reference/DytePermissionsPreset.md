---
sidebar_position: 6
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DytePermissionsPreset"></a>

The DytePermissionsPreset class represents the meeting permissions for the
current participant

- [DytePermissionsPreset](#module_DytePermissionsPreset)
  - [.acceptWaitingRequests](#module_DytePermissionsPreset+acceptWaitingRequests)
  - [.requestProduceVideo](#module_DytePermissionsPreset+requestProduceVideo)
  - [.requestProduceAudio](#module_DytePermissionsPreset+requestProduceAudio)
  - [.requestProduceScreenshare](#module_DytePermissionsPreset+requestProduceScreenshare)
  - [.canAllowParticipantAudio](#module_DytePermissionsPreset+canAllowParticipantAudio)
  - [.canAllowParticipantScreensharing](#module_DytePermissionsPreset+canAllowParticipantScreensharing)
  - [.canAllowParticipantVideo](#module_DytePermissionsPreset+canAllowParticipantVideo)
  - [.kickParticipant](#module_DytePermissionsPreset+kickParticipant)
  - [.pinParticipant](#module_DytePermissionsPreset+pinParticipant)
  - [.canRecord](#module_DytePermissionsPreset+canRecord)
  - ~~[.waitingRoomType](#module_DytePermissionsPreset+waitingRoomType)~~
  - [.waitingRoomBehaviour](#module_DytePermissionsPreset+waitingRoomBehaviour)
  - [.plugins](#module_DytePermissionsPreset+plugins)
  - [.polls](#module_DytePermissionsPreset+polls)
  - ~~[.produceVideo](#module_DytePermissionsPreset+produceVideo)~~
  - ~~[.requestProduce](#module_DytePermissionsPreset+requestProduce)~~
  - [.canProduceVideo](#module_DytePermissionsPreset+canProduceVideo)
  - ~~[.produceScreenshare](#module_DytePermissionsPreset+produceScreenshare)~~
  - [.canProduceScreenshare](#module_DytePermissionsPreset+canProduceScreenshare)
  - ~~[.produceAudio](#module_DytePermissionsPreset+produceAudio)~~
  - [.canProduceAudio](#module_DytePermissionsPreset+canProduceAudio)
  - [.chatPublic](#module_DytePermissionsPreset+chatPublic)
  - [.chatPrivate](#module_DytePermissionsPreset+chatPrivate)
  - [.hiddenParticipant](#module_DytePermissionsPreset+hiddenParticipant)
  - [.showParticipantList](#module_DytePermissionsPreset+showParticipantList)
  - ~~[.canChangeParticipantRole](#module_DytePermissionsPreset+canChangeParticipantRole)~~
  - [.canChangeParticipantPermissions](#module_DytePermissionsPreset+canChangeParticipantPermissions)
  - ~~[.canChangeTheme](#module_DytePermissionsPreset+canChangeTheme)~~
  - ~~[.canPresent](#module_DytePermissionsPreset+canPresent)~~
  - ~~[.maxScreenShareCount](#module_DytePermissionsPreset+maxScreenShareCount)~~

<a name="module_DytePermissionsPreset+acceptWaitingRequests"></a>

### meeting.self.permissions.acceptWaitingRequests

The `acceptWaitingRequests` returns boolean value. If `true`, participant can
accept the request of waiting participant.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestProduceVideo"></a>

### meeting.self.permissions.requestProduceVideo

The `requestProduceVideo` returns boolean value. If `true`, participant can send
request to participants about producing video.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestProduceAudio"></a>

### meeting.self.permissions.requestProduceAudio

The `requestProduceAudio` returns boolean value. If `true`, participant can send
request to participants about producing audio.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestProduceScreenshare"></a>

### meeting.self.permissions.requestProduceScreenshare

The `requestProduceScreenshare` returns boolean value. If `true`, participant
can send request to participants about sharing screen.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantAudio"></a>

### meeting.self.permissions.canAllowParticipantAudio

The `canAllowParticipantAudio` returns boolean value. If `true`, participant can
enable other participants` audio.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantScreensharing"></a>

### meeting.self.permissions.canAllowParticipantScreensharing

The `canAllowParticipantScreensharing` returns boolean value. If `true`,
participant can enable other participants` screen share.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantVideo"></a>

### meeting.self.permissions.canAllowParticipantVideo

The `canAllowParticipantVideo` returns boolean value. If `true`, participant can
enable other participants` video.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+kickParticipant"></a>

### meeting.self.permissions.kickParticipant

The `kickParticipant` returns boolean value. If `true`, participant can remove
other participants from the meeting.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+pinParticipant"></a>

### meeting.self.permissions.pinParticipant

The `pinParticipant` returns boolean value. If `true`, participant can pin a
participant in the meeting.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canRecord"></a>

### meeting.self.permissions.canRecord

The `canRecord` returns boolean value. If `true`, participant can record the
meeting.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+waitingRoomType"></a>

### ~~meeting.self.permissions.waitingRoomType~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+waitingRoomBehaviour"></a>

### meeting.self.permissions.waitingRoomBehaviour

The `waitingRoomType` returns string value. type of waiting room behavior
possible values are `SKIP`, `ON_PRIVILEGED_USER_ENTRY`, `SKIP_ON_ACCEPT`

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+plugins"></a>

### meeting.self.permissions.plugins

The `plugins` tells if the participant can act on plugins there are 2
permissions with boolean values, `canStart` and `canClose`.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+polls"></a>

### meeting.self.permissions.polls

The `polls` tells if the participant can use polls. There are 3 permissions with
boolean values, `canCreate`, `canVote`, `canViewResults`

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceVideo"></a>

### ~~meeting.self.permissions.produceVideo~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestProduce"></a>

### ~~meeting.self.permissions.requestProduce~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canProduceVideo"></a>

### meeting.self.permissions.canProduceVideo

The `canProduceVideo` shows permissions for enabling video. There possible
values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceScreenshare"></a>

### ~~meeting.self.permissions.produceScreenshare~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canProduceScreenshare"></a>

### meeting.self.permissions.canProduceScreenshare

The `canProduceScreenshare` shows permissions for sharing screen. There possible
values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceAudio"></a>

### ~~meeting.self.permissions.produceAudio~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canProduceAudio"></a>

### meeting.self.permissions.canProduceAudio

The `canProduceAudio` shows permissions for enabling audio. There possible
values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+chatPublic"></a>

### meeting.self.permissions.chatPublic

The `chatPublic` shows permissions for public chat there are 4 permissions
`canSend` - if true, the participant can send chat `text` - if true, the
participant can send text `files` - if true, the participant can send files

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+chatPrivate"></a>

### meeting.self.permissions.chatPrivate

The `chatPrivate` shows permissions for public chat there are 4 permissions
`canSend` - if true, the participant can send private chat `text` - if true, the
participant can send text as private chat `files` - if true, the participant can
send files as private chat `canReceive` - (optional) if true, the participant
can receive private chat

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+hiddenParticipant"></a>

### meeting.self.permissions.hiddenParticipant

The `hiddenParticipant` returns boolean value. If `true`, participant is hidden.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+showParticipantList"></a>

### meeting.self.permissions.showParticipantList

The `showParticipantList` returns boolean value. If `true`, participant list can
be shown to the participant.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canChangeParticipantRole"></a>

### ~~meeting.self.permissions.canChangeParticipantRole~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canChangeParticipantPermissions"></a>

### meeting.self.permissions.canChangeParticipantPermissions

The `canChangeParticipantPermissions` returns boolean value. If `true`, allow
changing the participants' permissions.

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canChangeTheme"></a>

### ~~meeting.self.permissions.canChangeTheme~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canPresent"></a>

### ~~meeting.self.permissions.canPresent~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+maxScreenShareCount"></a>

### ~~meeting.self.permissions.maxScreenShareCount~~

**_Deprecated_**

**Kind**: instance property of
[<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)
