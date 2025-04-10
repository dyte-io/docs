---
sidebar_position: 5
web_core_version: 2.4.1
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
    - [.customParticipantId](#module_DyteParticipant--this.+customParticipantId)
    - ~~[.clientSpecificId](#module_DyteParticipant--this.+clientSpecificId)~~
    - [.device](#module_DyteParticipant--this.+device)
    - [.videoTrack](#module_DyteParticipant--this.+videoTrack)
    - [.audioTrack](#module_DyteParticipant--this.+audioTrack)
    - [.screenShareTracks](#module_DyteParticipant--this.+screenShareTracks)
    - [.videoEnabled](#module_DyteParticipant--this.+videoEnabled)
    - [.audioEnabled](#module_DyteParticipant--this.+audioEnabled)
    - [.screenShareEnabled](#module_DyteParticipant--this.+screenShareEnabled)
    - [.producers](#module_DyteParticipant--this.+producers)
    - [.manualProducerConfig](#module_DyteParticipant--this.+manualProducerConfig)
    - [.supportsRemoteControl](#module_DyteParticipant--this.+supportsRemoteControl)
    - [.presetName](#module_DyteParticipant--this.+presetName)
    - [.stageStatus](#module_DyteParticipant--this.+stageStatus)
    - [.mediaJoined](#module_DyteParticipant--this.+mediaJoined)
    - [.socketJoined](#module_DyteParticipant--this.+socketJoined)
    - [.isPinned](#module_DyteParticipant--this.+isPinned)
    - [.pin()](#module_DyteParticipant--this.+pin)
    - [.unpin()](#module_DyteParticipant--this.+unpin)
    - [.setIsPinned()](#module_DyteParticipant--this.+setIsPinned)
    - [.disableAudio()](#module_DyteParticipant--this.+disableAudio)
    - [.kick()](#module_DyteParticipant--this.+kick)
    - [.disableVideo()](#module_DyteParticipant--this.+disableVideo)
    - [.updateVideo()](#module_DyteParticipant--this.+updateVideo)

<a name="exp_module_DyteParticipant--this."></a>

### this. ⏏

NOTE(ishita1805): Added a fallback value to support hive group-call
till stage support is not completed for hive.

**Kind**: Exported member  
<a name="module_DyteParticipant--this.+id"></a>

#### participant.id

The peer ID of the participant.
The participants are indexed by this ID in the participant map.

<a name="module_DyteParticipant--this.+userId"></a>

#### participant.userId

The user ID of the participant.

<a name="module_DyteParticipant--this.+name"></a>

#### participant.name

The name of the participant.

<a name="module_DyteParticipant--this.+picture"></a>

#### participant.picture

The picture of the participant.

<a name="module_DyteParticipant--this.+customParticipantId"></a>

#### participant.customParticipantId

The custom id of the participant set during Add Participant REST API

<a name="module_DyteParticipant--this.+clientSpecificId"></a>

#### ~~participant.clientSpecificId~~

**_Deprecated_**

<a name="module_DyteParticipant--this.+device"></a>

#### participant.device

The device configuration of the participant.

<a name="module_DyteParticipant--this.+videoTrack"></a>

#### participant.videoTrack

The participant's video track.

<a name="module_DyteParticipant--this.+audioTrack"></a>

#### participant.audioTrack

The participant's audio track.

<a name="module_DyteParticipant--this.+screenShareTracks"></a>

#### participant.screenShareTracks

The participant's screenshare video and audio track.

<a name="module_DyteParticipant--this.+videoEnabled"></a>

#### participant.videoEnabled

This is true if the participant's video is enabled.

<a name="module_DyteParticipant--this.+audioEnabled"></a>

#### participant.audioEnabled

This is true if the participant's audio is enabled.

<a name="module_DyteParticipant--this.+screenShareEnabled"></a>

#### participant.screenShareEnabled

This is true if the participant is screensharing.

<a name="module_DyteParticipant--this.+producers"></a>

#### participant.producers

producers created by participant

<a name="module_DyteParticipant--this.+manualProducerConfig"></a>

#### participant.manualProducerConfig

producer config passed during manual subscription

<a name="module_DyteParticipant--this.+supportsRemoteControl"></a>

#### participant.supportsRemoteControl

This is true if the dyte participant supports remote control.

<a name="module_DyteParticipant--this.+presetName"></a>

#### participant.presetName

The preset of the participant.

<a name="module_DyteParticipant--this.+stageStatus"></a>

#### participant.stageStatus

Denotes the participants's current stage status.

<a name="module_DyteParticipant--this.+mediaJoined"></a>

#### participant.mediaJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteParticipant--this.+socketJoined"></a>

#### participant.socketJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteParticipant--this.+isPinned"></a>

#### participant.isPinned

Returns true if the participant is pinned.

<a name="module_DyteParticipant--this.+pin"></a>

#### participant.pin()

Returns `participant.id` if user has permission
to pin participants.

<a name="module_DyteParticipant--this.+unpin"></a>

#### participant.unpin()

Returns `participant.id` if user has permission
to unpin participants.

<a name="module_DyteParticipant--this.+setIsPinned"></a>

#### participant.setIsPinned()

<a name="module_DyteParticipant--this.+disableAudio"></a>

#### participant.disableAudio()

Disables audio for this participant.
Requires the permission to disable participant audio.

<a name="module_DyteParticipant--this.+kick"></a>

#### participant.kick()

Kicks this participant from the meeting.
Requires the permission to kick a participant.

<a name="module_DyteParticipant--this.+disableVideo"></a>

#### participant.disableVideo()

Disables video for this participant.
Requires the permission to disable video for a participant.

<a name="module_DyteParticipant--this.+updateVideo"></a>

#### participant.updateVideo()

Internal method, do not use
