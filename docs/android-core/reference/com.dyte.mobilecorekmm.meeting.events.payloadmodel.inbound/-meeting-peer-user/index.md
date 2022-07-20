[io.dyte.core.meeting.events.payloadmodel.inbound](../index.md)/[MeetingPeerUser](index.md)

# MeetingPeerUser


data class [MeetingPeerUser](index.md)(var id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var device: [Device](../-device/index.md)? = null, var picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, var webinarHiddenParticipant: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, var flags: [MeetingPeerFlags](../-meeting-peer-flags/index.md)? = null, var metadata: [MeetingPeerMetadata](../-meeting-peer-metadata/index.md)? = null, var clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var audioMuted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, var hiddenParticipant: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) : [BasePayloadModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel/-base-payload-model/index.md)

response for event [InboundMeetingEventType.WEB_SOCKET_PEER_JOINED](../../com.dyte.mobilecorekmm.meeting.events/-inbound-meeting-event-type/-w-e-b_-s-o-c-k-e-t_-p-e-e-r_-j-o-i-n-e-d/index.md)

## Constructors

| | |
|---|---|
| [MeetingPeerUser](-meeting-peer-user.md) | <br/>fun [MeetingPeerUser](-meeting-peer-user.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, device: [Device](../-device/index.md)? = null, picture: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, isHost: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, webinarHiddenParticipant: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, flags: [MeetingPeerFlags](../-meeting-peer-flags/index.md)? = null, metadata: [MeetingPeerMetadata](../-meeting-peer-metadata/index.md)? = null, clientSpecificId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, audioMuted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, hiddenParticipant: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [audioMuted](audio-muted.md) | <br/>var [audioMuted](audio-muted.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [clientSpecificId](client-specific-id.md) | <br/>var [clientSpecificId](client-specific-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [device](device.md) | <br/>var [device](device.md): [Device](../-device/index.md)? = null |
| [displayName](display-name.md) | <br/>var [displayName](display-name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [flags](flags.md) | <br/>var [flags](flags.md): [MeetingPeerFlags](../-meeting-peer-flags/index.md)? = null |
| [hiddenParticipant](hidden-participant.md) | <br/>var [hiddenParticipant](hidden-participant.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [id](id.md) | <br/>var [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [isHost](is-host.md) | <br/>var [isHost](is-host.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [metadata](metadata.md) | <br/>var [metadata](metadata.md): [MeetingPeerMetadata](../-meeting-peer-metadata/index.md)? = null |
| [picture](picture.md) | <br/>var [picture](picture.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [userId](user-id.md) | <br/>var [userId](user-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [webinarHiddenParticipant](webinar-hidden-participant.md) | <br/>var [webinarHiddenParticipant](webinar-hidden-participant.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
