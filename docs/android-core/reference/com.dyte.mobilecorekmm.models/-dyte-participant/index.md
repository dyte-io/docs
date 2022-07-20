[io.dyte.core.models](../index.md)/[DyteParticipant](index.md)

# DyteParticipant


class [DyteParticipant](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val flags: [ParticipantFlags](../-participant-flags/index.md), var audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), var videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) : [DyteMeetingParticipant](../-dyte-meeting-participant/index.md)

## Constructors

| | |
|---|---|
| [DyteParticipant](-dyte-participant.md) | <br/>fun [DyteParticipant](-dyte-participant.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), flags: [ParticipantFlags](../-participant-flags/index.md), audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |

## Properties

| Name | Summary |
|---|---|
| [audioEnabled](audio-enabled.md) | <br/>open override var [audioEnabled](audio-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the audio currently enabled. |
| [audioTrack](../-dyte-meeting-participant/audio-track.md) | <br/>var [audioTrack](../-dyte-meeting-participant/audio-track.md): &lt;Error class: unknown class&gt;? = null<br/>The audio track for the local user. |
| [clientSpecificId](client-specific-id.md) | <br/>open override val [clientSpecificId](client-specific-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Identifier provided by the developer while adding the participant. |
| [flags](flags.md) | <br/>open override val [flags](flags.md): [ParticipantFlags](../-participant-flags/index.md) |
| [id](id.md) | <br/>open override val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The ID of the participant pertaining to local user |
| [isHost](is-host.md) | <br/>open override val [isHost](is-host.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [name](name.md) | <br/>open override val [name](name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Contains Name of the local user. |
| [picture](picture.md) | <br/>open override val [picture](picture.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br/>The participant's picture (if any). |
| [screenShareTrack](../-dyte-meeting-participant/screen-share-track.md) | <br/>var [screenShareTrack](../-dyte-meeting-participant/screen-share-track.md): &lt;Error class: unknown class&gt;? = null |
| [userId](user-id.md) | <br/>open override val [userId](user-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The userId of the participant. |
| [videoEnabled](video-enabled.md) | <br/>open override var [videoEnabled](video-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the video currently enabled. |
| [videoTrack](../-dyte-meeting-participant/video-track.md) | <br/>var [videoTrack](../-dyte-meeting-participant/video-track.md): &lt;Error class: unknown class&gt;? = null<br/>The video track for the local user. |
