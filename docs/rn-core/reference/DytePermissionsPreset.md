---
sidebar_position: 6
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DytePermissionsPreset"></a>

The DytePermissionsPreset class represents the meeting permissions for the current participant

- [DytePermissionsPreset](#module_DytePermissionsPreset)
  - [.stageEnabled](#module_DytePermissionsPreset+stageEnabled)
  - [.stageAccess](#module_DytePermissionsPreset+stageAccess)
  - [.acceptWaitingRequests](#module_DytePermissionsPreset+acceptWaitingRequests)
  - [.requestProduceVideo](#module_DytePermissionsPreset+requestProduceVideo)
  - [.requestProduceAudio](#module_DytePermissionsPreset+requestProduceAudio)
  - [.requestProduceScreenshare](#module_DytePermissionsPreset+requestProduceScreenshare)
  - [.canAllowParticipantAudio](#module_DytePermissionsPreset+canAllowParticipantAudio)
  - [.canAllowParticipantScreensharing](#module_DytePermissionsPreset+canAllowParticipantScreensharing)
  - [.canAllowParticipantVideo](#module_DytePermissionsPreset+canAllowParticipantVideo)
  - [.canDisableParticipantAudio](#module_DytePermissionsPreset+canDisableParticipantAudio)
  - [.canDisableParticipantVideo](#module_DytePermissionsPreset+canDisableParticipantVideo)
  - [.kickParticipant](#module_DytePermissionsPreset+kickParticipant)
  - [.pinParticipant](#module_DytePermissionsPreset+pinParticipant)
  - [.canRecord](#module_DytePermissionsPreset+canRecord)
  - [.waitingRoomBehaviour](#module_DytePermissionsPreset+waitingRoomBehaviour)
  - [.plugins](#module_DytePermissionsPreset+plugins)
  - [.polls](#module_DytePermissionsPreset+polls)
  - [.canProduceVideo](#module_DytePermissionsPreset+canProduceVideo)
  - [.canProduceScreenshare](#module_DytePermissionsPreset+canProduceScreenshare)
  - [.canProduceAudio](#module_DytePermissionsPreset+canProduceAudio)
  - [.chatPublic](#module_DytePermissionsPreset+chatPublic)
  - [.chatPrivate](#module_DytePermissionsPreset+chatPrivate)
  - [.hiddenParticipant](#module_DytePermissionsPreset+hiddenParticipant)
  - [.showParticipantList](#module_DytePermissionsPreset+showParticipantList)
  - [.canChangeParticipantPermissions](#module_DytePermissionsPreset+canChangeParticipantPermissions)
  - [.canLivestream](#module_DytePermissionsPreset+canLivestream)

<a name="module_DytePermissionsPreset+stageEnabled"></a>

### permissions.stageEnabled

The `stageEnabled` property returns a boolean value.
If `true`, stage management is available for the participant.

<a name="module_DytePermissionsPreset+stageAccess"></a>

### permissions.stageAccess

The `stageAccess` property dictactes how a user interacts with the stage.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`;

<a name="module_DytePermissionsPreset+acceptWaitingRequests"></a>

### permissions.acceptWaitingRequests

The `acceptWaitingRequests` returns boolean value.
If `true`, participant can accept the request of waiting participant.

<a name="module_DytePermissionsPreset+requestProduceVideo"></a>

### permissions.requestProduceVideo

The `requestProduceVideo` returns boolean value.
If `true`, participant can send request to participants
about producing video.

<a name="module_DytePermissionsPreset+requestProduceAudio"></a>

### permissions.requestProduceAudio

The `requestProduceAudio` returns boolean value.
If `true`, participant can send request to participants
about producing audio.

<a name="module_DytePermissionsPreset+requestProduceScreenshare"></a>

### permissions.requestProduceScreenshare

The `requestProduceScreenshare` returns boolean value.
If `true`, participant can send request to participants
about sharing screen.

<a name="module_DytePermissionsPreset+canAllowParticipantAudio"></a>

### permissions.canAllowParticipantAudio

The `canAllowParticipantAudio` returns boolean value.
If `true`, participant can enable other participants` audio.

<a name="module_DytePermissionsPreset+canAllowParticipantScreensharing"></a>

### permissions.canAllowParticipantScreensharing

The `canAllowParticipantScreensharing` returns boolean value.
If `true`, participant can enable other participants` screen share.

<a name="module_DytePermissionsPreset+canAllowParticipantVideo"></a>

### permissions.canAllowParticipantVideo

The `canAllowParticipantVideo` returns boolean value.
If `true`, participant can enable other participants` video.

<a name="module_DytePermissionsPreset+canDisableParticipantAudio"></a>

### permissions.canDisableParticipantAudio

If `true`, a participant can disable other participants` audio.

<a name="module_DytePermissionsPreset+canDisableParticipantVideo"></a>

### permissions.canDisableParticipantVideo

If `true`, a participant can disable other participants` video.

<a name="module_DytePermissionsPreset+kickParticipant"></a>

### permissions.kickParticipant

The `kickParticipant` returns boolean value.
If `true`, participant can remove other participants from the meeting.

<a name="module_DytePermissionsPreset+pinParticipant"></a>

### permissions.pinParticipant

The `pinParticipant` returns boolean value.
If `true`, participant can pin a participant in the meeting.

<a name="module_DytePermissionsPreset+canRecord"></a>

### permissions.canRecord

The `canRecord` returns boolean value.
If `true`, participant can record the meeting.

<a name="module_DytePermissionsPreset+waitingRoomBehaviour"></a>

### permissions.waitingRoomBehaviour

The `waitingRoomType` returns string value.
type of waiting room behavior
possible values are `SKIP`, `ON_PRIVILEGED_USER_ENTRY`, `SKIP_ON_ACCEPT`

<a name="module_DytePermissionsPreset+plugins"></a>

### permissions.plugins

The `plugins` tells if the participant can act on plugins
there are 2 permissions with boolean values, `canStart` and `canClose`.

<a name="module_DytePermissionsPreset+polls"></a>

### permissions.polls

The `polls` tells if the participant can use polls.
There are 3 permissions with boolean values, `canCreate`, `canVote`, `canViewResults`

<a name="module_DytePermissionsPreset+canProduceVideo"></a>

### permissions.canProduceVideo

The `canProduceVideo` shows permissions for enabling video.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

<a name="module_DytePermissionsPreset+canProduceScreenshare"></a>

### permissions.canProduceScreenshare

The `canProduceScreenshare` shows permissions for sharing screen.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

<a name="module_DytePermissionsPreset+canProduceAudio"></a>

### permissions.canProduceAudio

The `canProduceAudio` shows permissions for enabling audio.
There possible values are `ALLOWED`, `NOT_ALLOWED`, `CAN_REQUEST`

<a name="module_DytePermissionsPreset+chatPublic"></a>

### permissions.chatPublic

The `chatPublic` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send chat
`text` - if true, the participant can send text
`files` - if true, the participant can send files

<a name="module_DytePermissionsPreset+chatPrivate"></a>

### permissions.chatPrivate

The `chatPrivate` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send private chat
`text` - if true, the participant can send text as private chat
`files` - if true, the participant can send files as private chat
`canReceive` - (optional) if true, the participant can receive private chat

<a name="module_DytePermissionsPreset+hiddenParticipant"></a>

### permissions.hiddenParticipant

The `hiddenParticipant` returns boolean value.
If `true`, participant is hidden.

<a name="module_DytePermissionsPreset+showParticipantList"></a>

### permissions.showParticipantList

The `showParticipantList` returns boolean value.
If `true`, participant list can be shown to the participant.

<a name="module_DytePermissionsPreset+canChangeParticipantPermissions"></a>

### permissions.canChangeParticipantPermissions

The `canChangeParticipantPermissions` returns boolean value.
If `true`, allow changing the participants' permissions.

<a name="module_DytePermissionsPreset+canLivestream"></a>

### permissions.canLivestream

Livestream

<a name="module_DytePermissionsPreset+canChangeTheme"></a>

### ~~permissions.canChangeTheme~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+canPresent"></a>

### ~~permissions.canPresent~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+acceptPresentRequests"></a>

### ~~permissions.acceptPresentRequests~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+maxScreenShareCount"></a>

### ~~permissions.maxScreenShareCount~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+produceAudio"></a>

### ~~permissions.produceAudio~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+produceScreenshare"></a>

### ~~permissions.produceScreenshare~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+waitingRoomType"></a>

### ~~permissions.waitingRoomType~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+produceVideo"></a>

### ~~permissions.produceVideo~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+requestProduce"></a>

### ~~permissions.requestProduce~~

**_Deprecated_**

<a name="module_DytePermissionsPreset+canChangeParticipantRole"></a>

### ~~permissions.canChangeParticipantRole~~

**_Deprecated_**
