---
sidebar_position: 4
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipant"></a>
**Subclass** of [DyteMeetingParticipant](/ios-core-new/reference/DyteMeetingParticipant)  
This class represents a single participant in the meeting.
The participant object can be accessed from one of the participant lists
present in the `meeting.participants` object. For example,

```swift
let participant1 = meeting.participants.active[0];
let participant2 = meeting.participants.joined[0];
```

- [DyteParticipant](#module_DyteParticipant)
  - [.isPinned](#module_DyteParticipant--this.+isPinned)
  - [.pin()](#module_DyteParticipant--this.+pin)
  - [.unpin()](#module_DyteParticipant--this.+unpin)
  - [.kick()](#module_DyteParticipant--this.+kick)
  - [.disableAudio()](#module_DyteParticipant--this.+disableAudio)
  - [.disableVideo()](#module_DyteParticipant--this.+disableVideo)
  - [.getVideoView()](#module_DyteParticipant--this.+getVideoView)
  - [.getScreenShareVideoView()](#module_DyteParticipant--this.+getScreenShareVideoView)

<a name="module_DyteParticipant--this.+isPinned"></a>

#### Check is pinned

```swift
let isPinned: Bool
```

Returns true if the participant is pinned.

<a name="module_DyteParticipant--this.+pin"></a>

#### Pinned participant

```swift
func pin()
```

Returns `participant.id` if user has permission
to pin participants.

<a name="module_DyteParticipant--this.+unpin"></a>

#### Unpinned participant

```swift
func unpin()
```

Returns `participant.id` if user has permission
to unpin participants.

<a name="module_DyteParticipant--this.+kick"></a>

#### Kick participant

```swift
func kick()
```

Kicks this participant from the meeting.
Requires the permission to kick a participant.

<a name="module_DyteParticipant--this.+disableAudio"></a>

#### Disable Audio

```swift
func disableAudio()
```

Disables audio for this participant.
Requires the permission to disable participant audio.

<a name="module_DyteParticipant--this.+disableVideo"></a>

#### Disable Video

```swift
func disableVideo()
```

Disables video for this participant.
Requires the permission to disable video for a participant.

<a name="module_DyteParticipant--this.+getVideoView"></a>

#### Get video view

```swift
fun getVideoView(): VideoView?
```

Return a view which is used to render participant camera streams.

<a name="module_DyteParticipant--this.+getScreenShareVideoView"></a>

#### Get ScreenShare video view

```swift
fun getScreenShareVideoView(): VideoView
```

Return a view which is used to render participant screen streams.
