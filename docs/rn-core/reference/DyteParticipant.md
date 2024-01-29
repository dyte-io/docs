---
sidebar_position: 4
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipant"></a>

This module represents a single participant in the meeting.
The participant object can be accessed from one of the participant lists
present in the `meeting.participants` object. For example,

```ts
const participant1 = meeting.participants.active.get(participantId);
const participant2 = meeting.participants.joined.get(participantId);
const participant3 = meeting.participants.active.toArray()[0];
const participant4 = meeting.participants.active
  .toArray()
  .filter((p) => p.name === 'John');
```

- [DyteParticipant](#module_DyteParticipant)
  - [this.](#exp_module_DyteParticipant--this.) ⏏
    - [.id](#module_DyteParticipant--this.+id)
    - [.userId](#module_DyteParticipant--this.+userId)
    - [.name](#module_DyteParticipant--this.+name)
    - [.picture](#module_DyteParticipant--this.+picture)
    - [.clientSpecificId](#module_DyteParticipant--this.+clientSpecificId)
    - [.device](#module_DyteParticipant--this.+device)
    - [.videoTrack](#module_DyteParticipant--this.+videoTrack)
    - [.audioTrack](#module_DyteParticipant--this.+audioTrack)
    - [.screenShareTracks](#module_DyteParticipant--this.+screenShareTracks)
    - [.videoEnabled](#module_DyteParticipant--this.+videoEnabled)
    - [.audioEnabled](#module_DyteParticipant--this.+audioEnabled)
    - [.screenShareEnabled](#module_DyteParticipant--this.+screenShareEnabled)
    - [.producers](#module_DyteParticipant--this.+producers)
    - [.supportsRemoteControl](#module_DyteParticipant--this.+supportsRemoteControl)
    - [.presetName](#module_DyteParticipant--this.+presetName)
    - ~~[.webinarStageStatus](#module_DyteParticipant--this.+webinarStageStatus)~~
    - [.stageStatus](#module_DyteParticipant--this.+stageStatus)
    - [.roomJoined](#module_DyteParticipant--this.+roomJoined)
    - [.isPinned](#module_DyteParticipant--this.+isPinned)
    - [.pin()](#module_DyteParticipant--this.+pin)
    - [.unpin()](#module_DyteParticipant--this.+unpin)
    - [.setIsPinned()](#module_DyteParticipant--this.+setIsPinned)
    - [.disableAudio()](#module_DyteParticipant--this.+disableAudio)
    - [.kick()](#module_DyteParticipant--this.+kick)
    - [.disableVideo()](#module_DyteParticipant--this.+disableVideo)
    - ~~[.acceptJoinStageRequest()](#module_DyteParticipant--this.+acceptJoinStageRequest)~~
    - ~~[.rejectRequestToJoinStage()](#module_DyteParticipant--this.+rejectRequestToJoinStage)~~
    - ~~[.removeFromStage()](#module_DyteParticipant--this.+removeFromStage)~~
    - ~~[.setWebinarStageStatus()](#module_DyteParticipant--this.+setWebinarStageStatus)~~

<a name="exp_module_DyteParticipant--this."></a>

### this. ⏏

**Kind**: Exported member  
<a name="module_DyteParticipant--this.+id"></a>

#### this..id

The peer ID of the participant.
The participants are indexed by this ID in the participant map.

<a name="module_DyteParticipant--this.+userId"></a>

#### this..userId

The user ID of the participant.

<a name="module_DyteParticipant--this.+name"></a>

#### this..name

The name of the participant.

<a name="module_DyteParticipant--this.+picture"></a>

#### this..picture

The picture of the participant.

<a name="module_DyteParticipant--this.+clientSpecificId"></a>

#### this..clientSpecificId

The clientSpecificId of the participant.

<a name="module_DyteParticipant--this.+device"></a>

#### this..device

The device configuration of the participant.

<a name="module_DyteParticipant--this.+videoTrack"></a>

#### this..videoTrack

The participant's video track.

<a name="module_DyteParticipant--this.+audioTrack"></a>

#### this..audioTrack

The participant's audio track.

<a name="module_DyteParticipant--this.+screenShareTracks"></a>

#### this..screenShareTracks

The participant's screenshare video and audio track.

<a name="module_DyteParticipant--this.+videoEnabled"></a>

#### this..videoEnabled

This is true if the participant's video is enabled.

<a name="module_DyteParticipant--this.+audioEnabled"></a>

#### this..audioEnabled

This is true if the participant's audio is enabled.

<a name="module_DyteParticipant--this.+screenShareEnabled"></a>

#### this..screenShareEnabled

This is true if the participant is screensharing.

<a name="module_DyteParticipant--this.+producers"></a>

#### this..producers

producers created by participant

<a name="module_DyteParticipant--this.+supportsRemoteControl"></a>

#### this..supportsRemoteControl

This is true if the dyte participant supports remote control.

<a name="module_DyteParticipant--this.+presetName"></a>

#### this..presetName

The preset of the participant.

<a name="module_DyteParticipant--this.+webinarStageStatus"></a>

#### ~~this..webinarStageStatus~~

**_Deprecated_**

<a name="module_DyteParticipant--this.+stageStatus"></a>

#### this..stageStatus

Denotes the participant's current stage status.

<a name="module_DyteParticipant--this.+roomJoined"></a>

#### this..roomJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteParticipant--this.+isPinned"></a>

#### this..isPinned

Returns true if the participant is pinned.

<a name="module_DyteParticipant--this.+pin"></a>

#### this..pin()

Returns `participant.id` if user has permission
to pin participants.

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+unpin"></a>

#### this..unpin()

Returns `participant.id` if user has permission
to unpin participants.

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+setIsPinned"></a>

#### this..setIsPinned()

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+disableAudio"></a>

#### this..disableAudio()

Disables audio for this participant.
Requires the permission to disable participant audio.

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+kick"></a>

#### this..kick()

Kicks this participant from the meeting.
Requires the permission to kick a participant.

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+disableVideo"></a>

#### this..disableVideo()

Disables video for this participant.
Requires the permission to disable video for a participant.

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+acceptJoinStageRequest"></a>

#### ~~this..acceptJoinStageRequest()~~

**_Deprecated_**

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+rejectRequestToJoinStage"></a>

#### ~~this..rejectRequestToJoinStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+removeFromStage"></a>

#### ~~this..removeFromStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)  
<a name="module_DyteParticipant--this.+setWebinarStageStatus"></a>

#### ~~this..setWebinarStageStatus()~~

**_Deprecated_**

**Kind**: instance method of [<code>this.</code>](#exp_module_DyteParticipant--this.)
