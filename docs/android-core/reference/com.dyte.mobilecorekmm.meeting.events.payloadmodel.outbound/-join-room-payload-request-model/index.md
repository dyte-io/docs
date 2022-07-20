[io.dyte.core.meeting.events.payloadmodel.outbound](../index.md)/[JoinRoomPayloadRequestModel](index.md)

# JoinRoomPayloadRequestModel


data class [JoinRoomPayloadRequestModel](index.md)(var device: [Device](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-device/index.md)? = null, var displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var rtpCapabilities: [RouterCapabilitiesModel](../-router-capabilities-model/index.md)? = null, var isLegacy: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false, var audioMuted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false)

request for [OutboundMeetingEventType.JOIN_ROOM](../../com.dyte.mobilecorekmm.meeting.events/-outbound-meeting-event-type/-j-o-i-n_-r-o-o-m/index.md)

## Constructors

| | |
|---|---|
| [JoinRoomPayloadRequestModel](-join-room-payload-request-model.md) | <br/>fun [JoinRoomPayloadRequestModel](-join-room-payload-request-model.md)(device: [Device](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-device/index.md)? = null, displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, rtpCapabilities: [RouterCapabilitiesModel](../-router-capabilities-model/index.md)? = null, isLegacy: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false, audioMuted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false) |

## Properties

| Name | Summary |
|---|---|
| [audioMuted](audio-muted.md) | <br/>var [audioMuted](audio-muted.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false |
| [device](device.md) | <br/>var [device](device.md): [Device](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-device/index.md)? = null |
| [displayName](display-name.md) | <br/>var [displayName](display-name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [isLegacy](is-legacy.md) | <br/>var [isLegacy](is-legacy.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false |
| [rtpCapabilities](rtp-capabilities.md) | <br/>var [rtpCapabilities](rtp-capabilities.md): [RouterCapabilitiesModel](../-router-capabilities-model/index.md)? = null |
