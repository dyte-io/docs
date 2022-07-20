[io.dyte.core.models](../index.md)/[DyteRoomParticipants](index.md)

# DyteRoomParticipants


data class [DyteRoomParticipants](index.md)(val waitlisted: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, val joined: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, val active: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, val pinned: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md))

Dyte room participants

## Constructors

| | |
|---|---|
| [DyteRoomParticipants](-dyte-room-participants.md) | <br/>fun [DyteRoomParticipants](-dyte-room-participants.md)(waitlisted: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, joined: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, active: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, pinned: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;, controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md))<br/>Create empty Dyte room participants |

## Functions

| Name | Summary |
|---|---|
| [kick](kick.md) | <br/>fun [kick](kick.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../-dyte-meeting-participant/index.md)) |
| [kickAll](kick-all.md) | <br/>fun [kickAll](kick-all.md)()<br/>remove all participants from the meeting |
| [muteAllAudio](mute-all-audio.md) | <br/>fun [muteAllAudio](mute-all-audio.md)(allowUnmute: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [muteAllVideo](mute-all-video.md) | <br/>fun [muteAllVideo](mute-all-video.md)() |
| [muteAudio](mute-audio.md) | <br/>fun [muteAudio](mute-audio.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../-dyte-meeting-participant/index.md)) |
| [muteVideo](mute-video.md) | <br/>fun [muteVideo](mute-video.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../-dyte-meeting-participant/index.md)) |
| [nextPage](next-page.md) | <br/>fun [nextPage](next-page.md)() |
| [previousPage](previous-page.md) | <br/>fun [previousPage](previous-page.md)() |

## Properties

| Name | Summary |
|---|---|
| [active](active.md) | <br/>val [active](active.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;<br/>A map that contains all the participants except the local user who are supposed to be on the screen at the moment |
| [joined](joined.md) | <br/>val [joined](joined.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;<br/>A list that contains all the participants who have joined the meeting. |
| [pinned](pinned.md) | <br/>val [pinned](pinned.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;<br/>A map that contains all the pinned participants of the meeting |
| [waitlisted](waitlisted.md) | <br/>val [waitlisted](waitlisted.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteMeetingParticipant](../-dyte-meeting-participant/index.md)&gt;<br/>A map that contains all the participants waiting to join the meeting. |
