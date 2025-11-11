---
sidebar_position: 4
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipant"></a>

This class is a parent class of [DyteMeetingJoinedParticipant](/ios-core-new/reference/DyteMeetingJoinedParticipant).

```swift
let participant1 = meeting.participants.active[0];
let participant2 = meeting.participants.joined[0];
```

open val id: String,
open val userId: String,
open val name: String,
open val picture: String?,
open val isHost: Boolean,
open val clientSpecificId: String?,
open val flags: ParticipantFlags,
open val presetName: String,

- [DyteParticipant](#module_DyteParticipant)
  - [.id](#module_DyteParticipant--this.+id)
  - [.userId](#module_DyteParticipant--this.+userId)
  - [.name](#module_DyteParticipant--this.+name)
  - [.picture](#module_DyteParticipant--this.+picture)
  - [.clientSpecificId](#module_DyteParticipant--this.+clientSpecificId)
  - [.videoEnabled](#module_DyteParticipant--this.+videoEnabled)
  - [.audioEnabled](#module_DyteParticipant--this.+audioEnabled)
  - [.presetName](#module_DyteParticipant--this.+presetName)
  - [.stageStatus](#module_DyteParticipant--this.+stageStatus)

### self.id

```swift
let id: String
```

The peer ID of the participant.
The participants are indexed by this ID in the participant class.

<a name="module_DyteParticipant--this.+userId"></a>

### self.userId

```swift
let userId: String
```

The user ID of the participant.

<a name="module_DyteParticipant--this.+name"></a>

### self.name

```swift
let name: String
```

The name of the participant.

<a name="module_DyteParticipant--this.+picture"></a>

### self.picture

```swift
let picture: String?
```

The picture of the participant and is optional.

<a name="module_DyteParticipant--this.+clientSpecificId"></a>

### self.clientSpecificId

```swift
let clientSpecificId: String?
```

The clientSpecificId of the participant. Which is optional.

### self.videoEnabled

```swift
let videoEnabled: Bool
```

This is true if the participant's video is enabled.

<a name="module_DyteParticipant--this.+audioEnabled"></a>

### self.audioEnabled

```swift
let audioEnabled: Bool
```

This is true if the participant's audio is enabled.

<a name="module_DyteParticipant--this.+presetName"></a>

### self.presetName

```swift
let presetName: String
```

The preset of the participant.

<a name="module_DyteParticipant--this.+stageStatus"></a>

### self.stageStatus

```swift
let stageStatus: StageStatus?
```

Denotes the participant's current stage status. For different states please check [StageStatus](/ios-core-new/reference/StageStatus)
