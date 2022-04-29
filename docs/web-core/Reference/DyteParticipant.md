---
sidebar_position: 5
web_core_version: 0.18.2
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
const participant4 = meeting.participants.active.toArray().filter((p) => p.name === 'John');
```


* [DyteParticipant](#module_DyteParticipant)
    * [.id](#module_DyteParticipant+id)
    * [.userId](#module_DyteParticipant+userId)
    * [.name](#module_DyteParticipant+name)
    * [.picture](#module_DyteParticipant+picture)
    * [.clientSpecificId](#module_DyteParticipant+clientSpecificId)
    * [.device](#module_DyteParticipant+device)
    * [.videoTrack](#module_DyteParticipant+videoTrack)
    * [.audioTrack](#module_DyteParticipant+audioTrack)
    * [.screenShareTracks](#module_DyteParticipant+screenShareTracks)
    * [.videoEnabled](#module_DyteParticipant+videoEnabled)
    * [.audioEnabled](#module_DyteParticipant+audioEnabled)
    * [.screenShareEnabled](#module_DyteParticipant+screenShareEnabled)

<a name="module_DyteParticipant+id"></a>

### participant.id
The peer ID of the participant.
The participants are indexed by this ID in the participant map.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+userId"></a>

### participant.userId
The user ID of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+name"></a>

### participant.name
The name of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+picture"></a>

### participant.picture
The picture of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+clientSpecificId"></a>

### participant.clientSpecificId
The clientSpecificId of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+device"></a>

### participant.device
The device configuration of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+videoTrack"></a>

### participant.videoTrack
The participant's video track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+audioTrack"></a>

### participant.audioTrack
The participant's audio track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+screenShareTracks"></a>

### participant.screenShareTracks
The participant's screenshare video and audio track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+videoEnabled"></a>

### participant.videoEnabled
This is true if the participant's video is enabled.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+audioEnabled"></a>

### participant.audioEnabled
This is true if the participant's audio is enabled.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+screenShareEnabled"></a>

### participant.screenShareEnabled
This is true if the participant is screensharing.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
