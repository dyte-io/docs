[io.dyte.core.meeting.events.payloadmodel.inbound](../index.md)/[WebSocketPollsModel](index.md)

# WebSocketPollsModel


data class [WebSocketPollsModel](index.md)(val polls: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [WebSocketPoll](../-web-socket-poll/index.md)&gt;? = null) : [BasePayloadModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel/-base-payload-model/index.md)

response for event [InboundMeetingEventType.WEB_SOCKET_CONNECT_TRANSPORT](../../com.dyte.mobilecorekmm.meeting.events/-inbound-meeting-event-type/-w-e-b_-s-o-c-k-e-t_-c-o-n-n-e-c-t_-t-r-a-n-s-p-o-r-t/index.md)

## Constructors

| | |
|---|---|
| [WebSocketPollsModel](-web-socket-polls-model.md) | <br/>fun [WebSocketPollsModel](-web-socket-polls-model.md)(polls: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [WebSocketPoll](../-web-socket-poll/index.md)&gt;? = null) |

## Properties

| Name | Summary |
|---|---|
| [polls](polls.md) | <br/>val [polls](polls.md): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [WebSocketPoll](../-web-socket-poll/index.md)&gt;? = null |
