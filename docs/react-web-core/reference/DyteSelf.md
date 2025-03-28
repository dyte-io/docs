---
sidebar_position: 2
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteSelf"></a>

The DyteSelf module represents the current user, and allows to modify the state
of the user in the meeting. The audio and video streams of the user can be retrieved from
this module.

:::tip Note
DyteSelf extends [DyteSelfMedia](./DyteSelfMedia) therefore all the methods & variables exposed by DyteSelfMedia are also available on DyteSelf.

Few examples:

```tsx
meeting.self.rawAudioTrack;
meeting.self.rawVideoTrack;
meeting.self.audioEnabled;
meeting.self.videoEnabled;
await meeting.self.getAudioDevices();
await meeting.self.getVideoDevices();
```

:::

- [DyteSelf](#module_DyteSelf)
  - [.roomState](#module_DyteSelf+roomState)
  - [.permissions](#module_DyteSelf+permissions)
  - [.config](#module_DyteSelf+config)
  - [.roomJoined](#module_DyteSelf+roomJoined)
  - [.isPinned](#module_DyteSelf+isPinned)
  - [.setName(name)](#module_DyteSelf+setName)
  - [.setupTracks(options)](#module_DyteSelf+setupTracks)
  - [.enableAudio()](#module_DyteSelf+enableAudio)
  - [.enableVideo()](#module_DyteSelf+enableVideo)
  - [.updateVideoConstraints()](#module_DyteSelf+updateVideoConstraints)
  - [.enableScreenShare()](#module_DyteSelf+enableScreenShare)
  - [.updateScreenshareConstraints()](#module_DyteSelf+updateScreenshareConstraints)
  - [.disableAudio()](#module_DyteSelf+disableAudio)
  - [.disableVideo()](#module_DyteSelf+disableVideo)
  - [.disableScreenShare()](#module_DyteSelf+disableScreenShare)
  - [.getAllDevices()](#module_DyteSelf+getAllDevices)
  - [.setIsPinned()](#module_DyteSelf+setIsPinned)
  - [.pin()](#module_DyteSelf+pin)
  - [.unpin()](#module_DyteSelf+unpin)

<a name="module_DyteSelf+roomState"></a>

### self.roomState

Returns the current state of room

- init - Inital State
- joined - User is in the meeting
- waitlisted - User is in the waitlist state
- rejected - User's was in the waiting room, but the entry was rejected
- kicked - A priveleged user removed the user from the meeting
- left - User left the meeting
- ended - The meeting was ended

```mermaid
stateDiagram-v2
    direction LR
    classDef END fill:#ef4444,color:#fff,stroke:#ef4444;

    [*] --> init
    init --> joined
    init --> waitlisted
    waitlisted --> joined
    waitlisted --> rejected
    joined --> kicked
    joined --> left
    joined --> ended

    class kicked,left,ended,rejected END
```

<a name="module_DyteSelf+permissions"></a>

### self.permissions

Returns the current permission given to the user for the meeting.

<a name="module_DyteSelf+config"></a>

### self.config

Returns configuration for the meeting.

<a name="module_DyteSelf+roomJoined"></a>

### self.roomJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteSelf+isPinned"></a>

### self.isPinned

Returns true if the current user is pinned.

<a name="module_DyteSelf+setName"></a>

### self.setName(name)

The name of the user can be set by calling this method.
This will get reflected to other participants ONLY if
this method is called before the room is joined.

| Param | Description       |
| ----- | ----------------- |
| name  | Name of the user. |

<a name="module_DyteSelf+setupTracks"></a>

### self.setupTracks(options)

Sets up the local media tracks.

| Param         | Description                           |
| ------------- | ------------------------------------- |
| options       | The audio and video options.          |
| options.video | If true, the video stream is fetched. |
| options.audio | If true, the audio stream is fetched. |

<a name="module_DyteSelf+enableAudio"></a>

### self.enableAudio()

This method is used to unmute the local participant's audio.

<a name="module_DyteSelf+enableVideo"></a>

### self.enableVideo()

This method is used to start streaming the local participant's video
to the meeting.

<a name="module_DyteSelf+updateVideoConstraints"></a>

### self.updateVideoConstraints()

This method is used to apply constraints to the current video
stream.

<a name="module_DyteSelf+enableScreenShare"></a>

### self.enableScreenShare()

This method is used to start sharing the local participant's screen
to the meeting.

<a name="module_DyteSelf+updateScreenshareConstraints"></a>

### self.updateScreenshareConstraints()

This method is used to apply constraints to the current screenshare
stream.

<a name="module_DyteSelf+disableAudio"></a>

### self.disableAudio()

This method is used to mute the local participant's audio.

<a name="module_DyteSelf+disableVideo"></a>

### self.disableVideo()

This participant is used to disable the local participant's video.

<a name="module_DyteSelf+disableScreenShare"></a>

### self.disableScreenShare()

This method is used to stop sharing the local participant's screen.

<a name="module_DyteSelf+getAllDevices"></a>

### self.getAllDevices()

Returns all media devices accessible by the local participant.

<a name="module_DyteSelf+setIsPinned"></a>

### self.setIsPinned()

<a name="module_DyteSelf+pin"></a>

### self.pin()

Returns `self.id` if user has permission
to pin participants.

<a name="module_DyteSelf+unpin"></a>

### self.unpin()

Returns `self.id` if user has permission
to unpin participants.

<a name="module_DyteSelf+setDevice"></a>

### self.setDevice(device)

Change the current media device that is being used by the local participant.

| Param  | Description                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------ |
| device | The device that is to be used. A device of the same `kind` will be replaced. the primary stream. |
