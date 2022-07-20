[io.dyte.core.models](../index.md)/[DyteMeetingParticipant](index.md)

# DyteMeetingParticipant


abstract class [DyteMeetingParticipant](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val flags: [ParticipantFlags](../-participant-flags/index.md), var audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), var videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Dyte meeting participant

## Constructors

| | |
|---|---|
| [DyteMeetingParticipant](-dyte-meeting-participant.md) | <br/>fun [DyteMeetingParticipant](-dyte-meeting-participant.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, flags: [ParticipantFlags](../-participant-flags/index.md), audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br/>Create empty Dyte meeting participant |

## Properties

| Name | Summary |
|---|---|
| [audioEnabled](audio-enabled.md) | <br/>open var [audioEnabled](audio-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the audio currently enabled. |
| [audioTrack](audio-track.md) | <br/>var [audioTrack](audio-track.md): &lt;Error class: unknown class&gt;? = null<br/>The audio track for the local user. |
| [clientSpecificId](client-specific-id.md) | <br/>open val [clientSpecificId](client-specific-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br/>Identifier provided by the developer while adding the participant. |
| [flags](flags.md) | <br/>open val [flags](flags.md): [ParticipantFlags](../-participant-flags/index.md) |
| [id](id.md) | <br/>open val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The ID of the participant pertaining to local user |
| [isHost](is-host.md) | <br/>open val [isHost](is-host.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [name](name.md) | <br/>open val [name](name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Contains Name of the local user. |
| [picture](picture.md) | <br/>open val [picture](picture.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br/>The participant's picture (if any). |
| [screenShareTrack](screen-share-track.md) | <br/>var [screenShareTrack](screen-share-track.md): &lt;Error class: unknown class&gt;? = null |
| [userId](user-id.md) | <br/>open val [userId](user-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>The userId of the participant. |
| [videoEnabled](video-enabled.md) | <br/>open var [videoEnabled](video-enabled.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>A boolean value indicating if the video currently enabled. |
| [videoTrack](video-track.md) | <br/>var [videoTrack](video-track.md): &lt;Error class: unknown class&gt;? = null<br/>The video track for the local user. |

## Inheritors

| Name |
|---|
| [DyteParticipant](../-dyte-participant/index.md) |
| [DyteSelfParticipant](../-dyte-self-participant/index.md) |
