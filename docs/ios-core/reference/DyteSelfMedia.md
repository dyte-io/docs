---
sidebar_position: 13
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteSelfMedia"></a>

This module allows users to initialize media before initializing the root DyteClient.init object

- [DyteSelfMedia](#module_DyteSelfMedia)
  - [.audioTrack](#module_DyteSelfMedia+audioTrack)
  - [.rawAudioTrack](#module_DyteSelfMedia+rawAudioTrack)
  - [.mediaPermissions](#module_DyteSelfMedia+mediaPermissions)
  - [.videoTrack](#module_DyteSelfMedia+videoTrack)
  - [.rawVideoTrack](#module_DyteSelfMedia+rawVideoTrack)
  - [.screenShareTracks](#module_DyteSelfMedia+screenShareTracks)
  - [.audioEnabled](#module_DyteSelfMedia+audioEnabled)
  - [.videoEnabled](#module_DyteSelfMedia+videoEnabled)
  - [.screenShareEnabled](#module_DyteSelfMedia+screenShareEnabled)
  - [.addAudioMiddleware()](#module_DyteSelfMedia+addAudioMiddleware)
  - [.removeAudioMiddleware()](#module_DyteSelfMedia+removeAudioMiddleware)
  - [.addVideoMiddleware()](#module_DyteSelfMedia+addVideoMiddleware)
  - [.removeVideoMiddleware()](#module_DyteSelfMedia+removeVideoMiddleware)
  - [.getCurrentDevices()](#module_DyteSelfMedia+getCurrentDevices)
  - [.getAudioDevices()](#module_DyteSelfMedia+getAudioDevices)
  - [.getVideoDevices()](#module_DyteSelfMedia+getVideoDevices)
  - [.getSpeakerDevices()](#module_DyteSelfMedia+getSpeakerDevices)
  - [.getDeviceById(deviceId, kind)](#module_DyteSelfMedia+getDeviceById)
  - [.setDevice(device)](#module_DyteSelfMedia+setDevice)

<a name="module_DyteSelfMedia+audioTrack"></a>

### dyteSelfMedia.audioTrack

Returns the `audioTrack`.

<a name="module_DyteSelfMedia+rawAudioTrack"></a>

### dyteSelfMedia.rawAudioTrack

Returns the `rawAudioTrack` having no middleware executed on it.

<a name="module_DyteSelfMedia+mediaPermissions"></a>

### dyteSelfMedia.mediaPermissions

Returns the current audio and video permissions given by the user.
'ACCEPTED' if the user has given permission to use the media.
'CANCELED' if the user has canceled the screenshare.
'DENIED' if the user has denied permission to use the media.
'SYS_DENIED' if the user's system has denied permission to use the media.
'UNAVAILABLE' if the media is not available (or being used by a different application).

<a name="module_DyteSelfMedia+videoTrack"></a>

### dyteSelfMedia.videoTrack

Returns the `videoTrack`.

<a name="module_DyteSelfMedia+rawVideoTrack"></a>

### dyteSelfMedia.rawVideoTrack

Returns the `videoTrack` having no middleware executed on it.

<a name="module_DyteSelfMedia+screenShareTracks"></a>

### dyteSelfMedia.screenShareTracks

Returns the screen share tracks.

<a name="module_DyteSelfMedia+audioEnabled"></a>

### dyteSelfMedia.audioEnabled

Returns true if audio is enabled.

<a name="module_DyteSelfMedia+videoEnabled"></a>

### dyteSelfMedia.videoEnabled

Returns true if video is enabled.

<a name="module_DyteSelfMedia+screenShareEnabled"></a>

### dyteSelfMedia.screenShareEnabled

Returns true if screen share is enabled.

<a name="module_DyteSelfMedia+addAudioMiddleware"></a>

### dyteSelfMedia.addAudioMiddleware()

Adds the audio middleware to be executed on the raw audio stream.
If there are more than 1 audio middlewares,
they will be executed in the sequence they were added in.
If you want the sequence to be altered, please remove all previous middlewares and re-add.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+removeAudioMiddleware"></a>

### dyteSelfMedia.removeAudioMiddleware()

Removes the audio middleware, if it is there.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+addVideoMiddleware"></a>

### dyteSelfMedia.addVideoMiddleware()

Adds the video middleware to be executed on the raw video stream.
If there are more than 1 video middlewares,
they will be executed in the sequence they were added in.
If you want the sequence to be altered, please remove all previous middlewares and re-add.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+removeVideoMiddleware"></a>

### dyteSelfMedia.removeVideoMiddleware()

Removes the video middleware, if it is there.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+getCurrentDevices"></a>

### dyteSelfMedia.getCurrentDevices()

Returns the media devices currently being used.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+getAudioDevices"></a>

### dyteSelfMedia.getAudioDevices()

Returns the local participant's audio devices.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+getVideoDevices"></a>

### dyteSelfMedia.getVideoDevices()

Returns the local participant's video devices.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+getSpeakerDevices"></a>

### dyteSelfMedia.getSpeakerDevices()

Returns the local participant's speaker devices.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)  
<a name="module_DyteSelfMedia+getDeviceById"></a>

### dyteSelfMedia.getDeviceById(deviceId, kind)

Returns the local participant's device, indexed by ID and kind.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)

| Param    | Description                                       |
| -------- | ------------------------------------------------- |
| deviceId | The ID of the device.                             |
| kind     | The kind of the device: audio, video, or speaker. |

<a name="module_DyteSelfMedia+setDevice"></a>

### dyteSelfMedia.setDevice(device)

Change the current media device that is being used by the local participant.

**Kind**: instance method of [<code>DyteSelfMedia</code>](#module_DyteSelfMedia)

| Param  | Description                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------ |
| device | The device that is to be used. A device of the same `kind` will be replaced. the primary stream. |
