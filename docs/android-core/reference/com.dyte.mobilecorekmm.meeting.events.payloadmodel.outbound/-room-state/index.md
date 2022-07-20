[io.dyte.core.meeting.events.payloadmodel.outbound](../index.md)/[RoomState](index.md)

# RoomState


data class [RoomState](index.md)(val displayTitle: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, val peers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, val lockedMode: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, val roomUUID: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, val config: [RoomStateConfig](../-room-state-config/index.md)? = null, val plugins: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null, val roomName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null)

## Constructors

| | |
|---|---|
| [RoomState](-room-state.md) | <br/>fun [RoomState](-room-state.md)(displayTitle: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, peers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null, lockedMode: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, roomUUID: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, config: [RoomStateConfig](../-room-state-config/index.md)? = null, plugins: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null, roomName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [config](config.md) | <br/>val [config](config.md): [RoomStateConfig](../-room-state-config/index.md)? = null |
| [displayTitle](display-title.md) | <br/>val [displayTitle](display-title.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [lockedMode](locked-mode.md) | <br/>val [lockedMode](locked-mode.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [peers](peers.md) | <br/>val [peers](peers.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)&gt;? = null |
| [plugins](plugins.md) | <br/>val [plugins](plugins.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null |
| [roomName](room-name.md) | <br/>val [roomName](room-name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [roomUUID](room-u-u-i-d.md) | <br/>val [roomUUID](room-u-u-i-d.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
