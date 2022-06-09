---
sidebar_position: 5
web_core_version: 0.18.1
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipant"></a>

This module represents a single participant in the meeting.


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

### meeting.participants.joined.get(participantId).id
The peer ID of the participant.
The participants are indexed by this ID in the participant map.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+userId"></a>

### meeting.participants.joined.get(participantId).userId
The user ID of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+name"></a>

### meeting.participants.joined.get(participantId).name
The name of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+picture"></a>

### meeting.participants.joined.get(participantId).picture
The picture of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+clientSpecificId"></a>

### meeting.participants.joined.get(participantId).clientSpecificId
The clientSpecificId of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+device"></a>

### meeting.participants.joined.get(participantId).device
The device configuration of the participant.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+videoTrack"></a>

### meeting.participants.joined.get(participantId).videoTrack
The participant's video track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+audioTrack"></a>

### meeting.participants.joined.get(participantId).audioTrack
The participant's audio track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+screenShareTracks"></a>

### meeting.participants.joined.get(participantId).screenShareTracks
The participant's screenshare video and audio track.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+videoEnabled"></a>

### meeting.participants.joined.get(participantId).videoEnabled
This is true if the participant's video is enabled.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+audioEnabled"></a>

### meeting.participants.joined.get(participantId).audioEnabled
This is true if the participant's audio is enabled.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
<a name="module_DyteParticipant+screenShareEnabled"></a>

### meeting.participants.joined.get(participantId).screenShareEnabled
This is true if the participant is screensharing.

**Kind**: instance property of [<code>DyteParticipant</code>](#module_DyteParticipant)  
