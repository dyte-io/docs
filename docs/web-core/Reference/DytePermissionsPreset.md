---
sidebar_position: 6
web_core_version: 0.26.0
---

<!-- Auto Generated Below -->

<a name="module_DytePermissionsPreset"></a>

The DytePermissionsPreset class represents the meeting permissions for the current participant

- [DytePermissionsPreset](#module_DytePermissionsPreset)
  - [.viewType](#module_DytePermissionsPreset+viewType)
  - [.acceptWaitingRequests](#module_DytePermissionsPreset+acceptWaitingRequests)
  - [.requestProduce](#module_DytePermissionsPreset+requestProduce)
  - [.canAllowParticipantAudio](#module_DytePermissionsPreset+canAllowParticipantAudio)
  - [.canAllowParticipantScreensharing](#module_DytePermissionsPreset+canAllowParticipantScreensharing)
  - [.canAllowParticipantVideo](#module_DytePermissionsPreset+canAllowParticipantVideo)
  - [.requestKickParticipant](#module_DytePermissionsPreset+requestKickParticipant)
  - [.kickParticipant](#module_DytePermissionsPreset+kickParticipant)
  - [.pinParticipant](#module_DytePermissionsPreset+pinParticipant)
  - [.canRecord](#module_DytePermissionsPreset+canRecord)
  - [.waitingRoomType](#module_DytePermissionsPreset+waitingRoomType)
  - [.plugins](#module_DytePermissionsPreset+plugins)
  - [.polls](#module_DytePermissionsPreset+polls)
  - [.produceVideo](#module_DytePermissionsPreset+produceVideo)
  - [.produceScreenshare](#module_DytePermissionsPreset+produceScreenshare)
  - [.produceAudio](#module_DytePermissionsPreset+produceAudio)
  - [.chatPublic](#module_DytePermissionsPreset+chatPublic)
  - [.chatPrivate](#module_DytePermissionsPreset+chatPrivate)
  - [.reactions](#module_DytePermissionsPreset+reactions)
  - [.hiddenParticipant](#module_DytePermissionsPreset+hiddenParticipant)
  - [.showParticipantList](#module_DytePermissionsPreset+showParticipantList)
  - [.canChangeParticipantRole](#module_DytePermissionsPreset+canChangeParticipantRole)
  - [.canChangeTheme](#module_DytePermissionsPreset+canChangeTheme)
  - [.canPresent](#module_DytePermissionsPreset+canPresent)

<a name="module_DytePermissionsPreset+viewType"></a>

### meeting.self.permissions.viewType

The `viewType` tells the type of the meeting
possible values are WEBINAR, GROUPCALL

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+acceptWaitingRequests"></a>

### meeting.self.permissions.acceptWaitingRequests

The `acceptWaitingRequests` returns boolean value.
If `true`, participant can accept the request of waiting participant.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestProduce"></a>

### meeting.self.permissions.requestProduce

The `requestProduce` returns boolean value.
If `true`, participant can send request to participants
about producing audio, video or screenshare.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantAudio"></a>

### meeting.self.permissions.canAllowParticipantAudio

The `canAllowParticipantAudio` returns boolean value.
If `true`, participant can enable other participants` audio.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantScreensharing"></a>

### meeting.self.permissions.canAllowParticipantScreensharing

The `canAllowParticipantScreensharing` returns boolean value.
If `true`, participant can enable other participants` screen share.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canAllowParticipantVideo"></a>

### meeting.self.permissions.canAllowParticipantVideo

The `canAllowParticipantVideo` returns boolean value.
If `true`, participant can enable other participants` video.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+requestKickParticipant"></a>

### meeting.self.permissions.requestKickParticipant

The `requestKickParticipant` returns boolean value.
If `true`, participant can request to remove another participant from the meeting.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+kickParticipant"></a>

### meeting.self.permissions.kickParticipant

The `kickParticipant` returns boolean value.
If `true`, participant can remove other participants from the meeting.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+pinParticipant"></a>

### meeting.self.permissions.pinParticipant

The `pinParticipant` returns boolean value.
If `true`, participant can pin a participant in the meeting.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canRecord"></a>

### meeting.self.permissions.canRecord

The `canRecord` returns boolean value.
If `true`, participant can record the meeting.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+waitingRoomType"></a>

### meeting.self.permissions.waitingRoomType

The `waitingRoomType` returns string value.
type of waiting room behavior
possible values are `SKIP_ON_ACCEPT`, `ON_ACCEPT`, `SKIP_ON_PRIVILEGED_USER_ENTRY`

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+plugins"></a>

### meeting.self.permissions.plugins

The `plugins` tells if the participant can act on plugins
there are 2 permissions with boolean values, `canStart` and `canClose`.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+polls"></a>

### meeting.self.permissions.polls

The `polls` tells if the participant can use polls.
There are 3 permissions with boolean values, `canCreate`, `canVote`, `canView`

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceVideo"></a>

### meeting.self.permissions.produceVideo

The `produceVideo` shows permissions for enabling video for the participant.
There are 3 permissions
`allow` - if video is allowed
`quality` - quality of the video
`frameRate` - frame rate of the video

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceScreenshare"></a>

### meeting.self.permissions.produceScreenshare

The `produceScreenshare` shows permissions for enabling screen share for the participant.
There are 3 permissions
`allow` - if sharing screen is allowed
`quality` - quality of the video
`frameRate` - frame rate of the video

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+produceAudio"></a>

### meeting.self.permissions.produceAudio

The `produceAudio` shows permissions for enabling audio for the participant.
If true, participant can enable audio.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+chatPublic"></a>

### meeting.self.permissions.chatPublic

The `chatPublic` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send chat
`text` - if true, the participant can send text
`files` - if true, the participant can send files

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+chatPrivate"></a>

### meeting.self.permissions.chatPrivate

The `chatPrivate` shows permissions for public chat
there are 4 permissions
`canSend` - if true, the participant can send private chat
`text` - if true, the participant can send text as private chat
`files` - if true, the participant can send files as private chat
`canReceive` - (optional) if true, the participant can receive private chat

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+reactions"></a>

### meeting.self.permissions.reactions

The `reactions` returns boolean value.
If `true`, reactions are enabled for the participant

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+hiddenParticipant"></a>

### meeting.self.permissions.hiddenParticipant

The `hiddenParticipant` returns boolean value.
If `true`, participant is hidden.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+showParticipantList"></a>

### meeting.self.permissions.showParticipantList

The `showParticipantList` returns boolean value.
If `true`, participant list can be shown to the participant.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canChangeParticipantRole"></a>

### meeting.self.permissions.canChangeParticipantRole

The `canChangeParticipantRole` returns boolean value.
If `true`, allow changing the participants' role.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canChangeTheme"></a>

### meeting.self.permissions.canChangeTheme

The `canChangeTheme` returns boolean value.
If `true`, the participant can change the meeting theme.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)  
<a name="module_DytePermissionsPreset+canPresent"></a>

### meeting.self.permissions.canPresent

The `canPresent` returns boolean value.
If `true`, the participant can become a presentor.

**Kind**: instance property of [<code>DytePermissionsPreset</code>](#module_DytePermissionsPreset)
