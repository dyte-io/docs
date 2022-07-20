[io.dyte.core.meeting.events.payloadmodel.outbound](../index.md)/[WebSocketJoinRoomModel](index.md)

# WebSocketJoinRoomModel


data class [WebSocketJoinRoomModel](index.md)(val waitlisted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, val peers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, val legacyMode: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, val waitlistedPeers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, val startedAt: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) : [BasePayloadModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel/-base-payload-model/index.md)

response for [OutboundMeetingEventType.JOIN_ROOM](../../com.dyte.mobilecorekmm.meeting.events/-outbound-meeting-event-type/-j-o-i-n_-r-o-o-m/index.md)

## Constructors

| | |
|---|---|
| [WebSocketJoinRoomModel](-web-socket-join-room-model.md) | <br/>fun [WebSocketJoinRoomModel](-web-socket-join-room-model.md)(waitlisted: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, peers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, legacyMode: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, waitlistedPeers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, startedAt: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [legacyMode](legacy-mode.md) | <br/>val [legacyMode](legacy-mode.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null |
| [peers](peers.md) | <br/>val [peers](peers.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null |
| [startedAt](started-at.md) | <br/>val [startedAt](started-at.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [waitlisted](waitlisted.md) | <br/>val [waitlisted](waitlisted.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [waitlistedPeers](waitlisted-peers.md) | <br/>val [waitlistedPeers](waitlisted-peers.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null |
