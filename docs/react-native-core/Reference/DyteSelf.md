---
sidebar_position: 2
web_core_version: 0.18.0
---

<!-- Auto Generated Below -->

<a name="module_DyteSelf"></a>

The DyteSelf module represents the current user, and allows to modify the state
of the user in the meeting. The audio and video streams of the user can be retrieved from
this module.


* [DyteSelf](#module_DyteSelf)
    * [.audioTrack](#module_DyteSelf+audioTrack)
    * [.videoTrack](#module_DyteSelf+videoTrack)
    * [.screenShareTracks](#module_DyteSelf+screenShareTracks)
    * [.audioEnabled](#module_DyteSelf+audioEnabled)
    * [.videoEnabled](#module_DyteSelf+videoEnabled)
    * [.screenShareEnabled](#module_DyteSelf+screenShareEnabled)
    * [.mediaPermissions](#module_DyteSelf+mediaPermissions)
    * [.permissions](#module_DyteSelf+permissions)
    * [.suggestedTheme](#module_DyteSelf+suggestedTheme)
    * [.roomJoined](#module_DyteSelf+roomJoined)
    * [.setName(name)](#module_DyteSelf+setName)
    * [.setupTracks(options)](#module_DyteSelf+setupTracks)
    * [.enableAudio()](#module_DyteSelf+enableAudio)
    * [.enableVideo()](#module_DyteSelf+enableVideo)
    * [.enableScreenShare()](#module_DyteSelf+enableScreenShare)
    * [.disableAudio()](#module_DyteSelf+disableAudio)
    * [.disableVideo()](#module_DyteSelf+disableVideo)
    * [.disableScreenShare()](#module_DyteSelf+disableScreenShare)
    * [.enablePreview(options)](#module_DyteSelf+enablePreview)
    * [.disablePreview()](#module_DyteSelf+disablePreview)
    * [.getCurrentDevices()](#module_DyteSelf+getCurrentDevices)
    * [.getAudioDevices()](#module_DyteSelf+getAudioDevices)
    * [.getVideoDevices()](#module_DyteSelf+getVideoDevices)
    * [.getSpeakerDevices()](#module_DyteSelf+getSpeakerDevices)
    * [.getDeviceById(deviceId, kind)](#module_DyteSelf+getDeviceById)
    * [.getAllDevices()](#module_DyteSelf+getAllDevices)
    * [.setDevice(device, preview)](#module_DyteSelf+setDevice)

<a name="module_DyteSelf+audioTrack"></a>

### meeting.self.audioTrack
Returns the `audioTrack`.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+videoTrack"></a>

### meeting.self.videoTrack
Returns the `videoTrack`.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+screenShareTracks"></a>

### meeting.self.screenShareTracks
Returns the screen share tracks.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+audioEnabled"></a>

### meeting.self.audioEnabled
Returns true if audio is enabled.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+videoEnabled"></a>

### meeting.self.videoEnabled
Returns true if video is enabled.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+screenShareEnabled"></a>

### meeting.self.screenShareEnabled
Returns true if screen share is enabled.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+mediaPermissions"></a>

### meeting.self.mediaPermissions
Returns the current audio and video permissions given by the user.
'ACCEPTED' if the user has given permission to use the media.
'DENIED' if the user has denied permission to use the media.
'SYS_DENIED' if the user's system has denied permission to use the media.
'UNAVAILABLE' if the media is not available (or being used by a different application).

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+permissions"></a>

### meeting.self.permissions
Returns the current permission given to the user for the meeting.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+suggestedTheme"></a>

### meeting.self.suggestedTheme
Returns suggested theme for the meeting.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+roomJoined"></a>

### meeting.self.roomJoined
Returns true if the local participant has joined the meeting.

**Kind**: instance property of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+setName"></a>

### meeting.self.setName(name)
The name of the user can be set by calling this method.
This will get reflected to other participants ONLY if
this method is called before the room is joined.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  

| Param | Description |
| --- | --- |
| name | Name of the user. |

<a name="module_DyteSelf+setupTracks"></a>

### meeting.self.setupTracks(options)
Sets up the local media tracks.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  

| Param | Description |
| --- | --- |
| options | The audio and video options. |
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
<a name="module_DyteSelf+enableScreenShare"></a>

### meeting.self.enableScreenShare()
This method is used to start sharing the local participant's screen
to the meeting.

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
<a name="module_DyteSelf+enablePreview"></a>

### meeting.self.enablePreview(options)
Enable a preview for audio and video. This will populate preview.audioTrack
and preview.videoTrack. You can check if the streams are enabled in the preview
using preview.audioEnabled and preview.videoEnabled.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  

| Param | Description |
| --- | --- |
| options | The audio and video options. |
| options.video | If true, the video stream is fetched. |
| options.audio | If true, the audio stream is fetched. |

<a name="module_DyteSelf+disablePreview"></a>

### meeting.self.disablePreview()
Disable the audio and/or video tracks of the preview.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getCurrentDevices"></a>

### meeting.self.getCurrentDevices()
Returns the media devices currently being used.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getAudioDevices"></a>

### meeting.self.getAudioDevices()
Returns the local participant's audio devices.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getVideoDevices"></a>

### meeting.self.getVideoDevices()
Returns the local participant's video devices.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getSpeakerDevices"></a>

### meeting.self.getSpeakerDevices()
Returns the local participant's speaker devices.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+getDeviceById"></a>

### meeting.self.getDeviceById(deviceId, kind)
Returns the local participant's device, indexed by ID and kind.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  

| Param | Description |
| --- | --- |
| deviceId | The ID of the device. |
| kind | The kind of the device: audio, video, or speaker. |

<a name="module_DyteSelf+getAllDevices"></a>

### meeting.self.getAllDevices()
Returns all media devices accessible by the local participant.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  
<a name="module_DyteSelf+setDevice"></a>

### meeting.self.setDevice(device, preview)
Change the current media device that is being used by the local participant.

**Kind**: instance method of [<code>DyteSelf</code>](#module_DyteSelf)  

| Param | Default | Description |
| --- | --- | --- |
| device |  | The device that is to be used. A device of the same `kind` will be replaced. |
| preview | <code>false</code> | If true, the device will be changed for the preview, otherwise it will affect the primary stream. |

