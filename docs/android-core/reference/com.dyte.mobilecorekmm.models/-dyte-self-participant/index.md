[io.dyte.core.models](../index.md)/[DyteSelfParticipant](index.md)

# DyteSelfParticipant


data class [DyteSelfParticipant](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), var name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val flags: [ParticipantFlags](../-participant-flags/index.md), var audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), var videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md)) : [DyteMeetingParticipant](../-dyte-meeting-participant/index.md)

## Constructors

| | |
|---|---|
| [DyteSelfParticipant](-dyte-self-participant.md) | <br/>fun [DyteSelfParticipant](-dyte-self-participant.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, flags: [ParticipantFlags](../-participant-flags/index.md), audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [disableAudio](disable-audio.md) | <br/>fun [disableAudio](disable-audio.md)()<br/>This method is used to mute the local participant's audio. |
| [disableVideo](disable-video.md) | <br/>fun [disableVideo](disable-video.md)()<br/>This participant is used to disable the local participant's video. |
| [enableAudio](enable-audio.md) | <br/>fun [enableAudio](enable-audio.md)()<br/>This method is used to unmute the local participant's audio. |
| [enableVideo](enable-video.md) | <br/>fun [enableVideo](enable-video.md)()<br/>This method is used to start streaming the local participant's video to the meeting. |
| [getAudioDevices](get-audio-devices.md) | <br/>fun [getAudioDevices](get-audio-devices.md)(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteAudioDevice](../-dyte-audio-device/index.md)&gt; |
| [getEglContext](get-egl-context.md) | <br/>fun [getEglContext](get-egl-context.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [getSelfPreviewTrack](get-self-preview-track.md) | <br/>fun [getSelfPreviewTrack](get-self-preview-track.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [setDevice](set-device.md) | <br/>fun [setDevice](set-device.md)(dyteAndroidDevice: [DyteAudioDevice](../-dyte-audio-device/index.md)) |
| [setDisplayName](set-display-name.md) | <br/>fun [setDisplayName](set-display-name.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [switchCamera](switch-camera.md) | <br/>fun [switchCamera](switch-camera.md)() |

## Properties

| Name | Summary |
|---|---|
| [audioEnabled](audio-enabled.md) | <br/>open override var [audioEnabled](audio-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the audio currently enabled. |
| [audioTrack](../-dyte-meeting-participant/audio-track.md) | <br/>var [audioTrack](../-dyte-meeting-participant/audio-track.md): &lt;Error class: unknown class&gt;? = null<br/>The audio track for the local user. |
| [clientSpecificId](client-specific-id.md) | <br/>open override val [clientSpecificId](client-specific-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br/>Identifier provided by the developer while adding the participant. |
| [flags](flags.md) | <br/>open override val [flags](flags.md): [ParticipantFlags](../-participant-flags/index.md) |
| [id](id.md) | <br/>open override val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The ID of the participant pertaining to local user |
| [isHost](is-host.md) | <br/>open override val [isHost](is-host.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [name](name.md) | <br/>open override var [name](name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Contains Name of the local user. |
| [picture](picture.md) | <br/>open override val [picture](picture.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br/>The participant's picture (if any). |
| [screenShareTrack](../-dyte-meeting-participant/screen-share-track.md) | <br/>var [screenShareTrack](../-dyte-meeting-participant/screen-share-track.md): &lt;Error class: unknown class&gt;? = null |
| [userId](user-id.md) | <br/>open override val [userId](user-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The userId of the participant. |
| [videoEnabled](video-enabled.md) | <br/>open override var [videoEnabled](video-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the video currently enabled. |
| [videoTrack](../-dyte-meeting-participant/video-track.md) | <br/>var [videoTrack](../-dyte-meeting-participant/video-track.md): &lt;Error class: unknown class&gt;? = null<br/>The video track for the local user. |
