---
sidebar_position: 2
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteSelf"></a>

The DyteSelf module represents the current user, and allows to modify the state
of the user in the meeting. The audio and video streams of the user can be retrieved from
this module.

- [DyteSelf](#module_DyteSelf)
  - [.roomState](#module_DyteSelf+roomState)
  - [.permissions](#module_DyteSelf+permissions)
  - ~~[.suggestedTheme](#module_DyteSelf+suggestedTheme)~~
  - [.config](#module_DyteSelf+config)
  - [.roomJoined](#module_DyteSelf+roomJoined)
  - [.isPinned](#module_DyteSelf+isPinned)
  - ~~[.webinarStageStatus](#module_DyteSelf+webinarStageStatus)~~
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
  - [.setDevice(device)](#module_DyteSelf+setDevice)
  - ~~[.requestToJoinStage()](#module_DyteSelf+requestToJoinStage)~~
  - ~~[.withdrawRequestToJoinStage()](#module_DyteSelf+withdrawRequestToJoinStage)~~
  - ~~[.leaveStage()](#module_DyteSelf+leaveStage)~~
  - ~~[.joinStage()](#module_DyteSelf+joinStage)~~
  - ~~[.setWebinarStageStatus()](#module_DyteSelf+setWebinarStageStatus)~~
  - ~~[.disablePreview()](#module_DyteSelf+disablePreview)~~

<a name="module_DyteSelf+roomState"></a>

### meeting.self.roomState

Returns the current state of room
init - Inital State
joined - User is in the meeting
waitlisted - User is in the waitlist state
rejected - User's was in the waiting room, but the entry was rejected
kicked - A priveleged user removed the user from the meeting
left - User left the meeting
ended - The meeting was ended

<a name="module_DyteSelf+permissions"></a>

### meeting.self.permissions

Returns the current permission given to the user for the meeting.

<a name="module_DyteSelf+suggestedTheme"></a>

### ~~meeting.self.suggestedTheme~~

**_Deprecated_**

<a name="module_DyteSelf+config"></a>

### meeting.self.config

Returns configuration for the meeting.

<a name="module_DyteSelf+roomJoined"></a>

### meeting.self.roomJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteSelf+isPinned"></a>

### meeting.self.isPinned

Returns true if the current user is pinned.

<a name="module_DyteSelf+webinarStageStatus"></a>

### ~~meeting.self.webinarStageStatus~~

**_Deprecated_**

<a name="module_DyteSelf+setName"></a>

### meeting.self.setName(name)

The name of the user can be set by calling this method.
This will get reflected to other participants ONLY if
this method is called before the room is joined.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)

| Param | Description       |
| ----- | ----------------- |
| name  | Name of the user. |

<a name="module_DyteSelf+setupTracks"></a>

### meeting.self.setupTracks(options)

Sets up the local media tracks.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)

| Param         | Description                           |
| ------------- | ------------------------------------- |
| options       | The audio and video options.          |
| options.video | If true, the video stream is fetched. |
| options.audio | If true, the audio stream is fetched. |

<a name="module_DyteSelf+enableAudio"></a>

### meeting.self.enableAudio()

This method is used to unmute the local participant's audio.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+enableVideo"></a>

### meeting.self.enableVideo()

This method is used to start streaming the local participant's video
to the meeting.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+updateVideoConstraints"></a>

### meeting.self.updateVideoConstraints()

This method is used to apply constraints to the current video
stream.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+enableScreenShare"></a>

### meeting.self.enableScreenShare()

This method is used to start sharing the local participant's screen
to the meeting.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+updateScreenshareConstraints"></a>

### meeting.self.updateScreenshareConstraints()

This method is used to apply constraints to the current screenshare
stream.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+disableAudio"></a>

### meeting.self.disableAudio()

This method is used to mute the local participant's audio.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+disableVideo"></a>

### meeting.self.disableVideo()

This participant is used to disable the local participant's video.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+disableScreenShare"></a>

### meeting.self.disableScreenShare()

This method is used to stop sharing the local participant's screen.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getAllDevices"></a>

### meeting.self.getAllDevices()

Returns all media devices accessible by the local participant.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+setIsPinned"></a>

### meeting.self.setIsPinned()

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+pin"></a>

### meeting.self.pin()

Returns `self.id` if user has permission
to pin participants.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+unpin"></a>

### meeting.self.unpin()

Returns `self.id` if user has permission
to unpin participants.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+setDevice"></a>

### meeting.self.setDevice(device)

Change the current media device that is being used by the local participant.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)

| Param  | Description                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------ |
| device | The device that is to be used. A device of the same `kind` will be replaced. the primary stream. |

<a name="module_DyteSelf+requestToJoinStage"></a>

### ~~meeting.self.requestToJoinStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+withdrawRequestToJoinStage"></a>

### ~~meeting.self.withdrawRequestToJoinStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+leaveStage"></a>

### ~~meeting.self.leaveStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+joinStage"></a>

### ~~meeting.self.joinStage()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+setWebinarStageStatus"></a>

### ~~meeting.self.setWebinarStageStatus()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+disablePreview"></a>

### ~~meeting.self.disablePreview()~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)
