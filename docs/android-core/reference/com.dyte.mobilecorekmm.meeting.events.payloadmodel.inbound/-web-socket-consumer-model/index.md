[io.dyte.core.meeting.events.payloadmodel.inbound](../index.md)/[WebSocketConsumerModel](index.md)

# WebSocketConsumerModel


data class [WebSocketConsumerModel](index.md)(var peerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var producerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var kind: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var rtpParameters: [ConsumerRtpParameters](../-consumer-rtp-parameters/index.md)? = null, var type: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var appData: [ConsumerAppData](../-consumer-app-data/index.md)? = null, val remotelyPaused: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, val producerPaused: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) : [BasePayloadModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel/-base-payload-model/index.md)

response for event [InboundMeetingEventType.WEB_SOCKET_NEW_CONSUMER](../../com.dyte.mobilecorekmm.meeting.events/-inbound-meeting-event-type/-w-e-b_-s-o-c-k-e-t_-n-e-w_-c-o-n-s-u-m-e-r/index.md)

## Constructors

| | |
|---|---|
| [WebSocketConsumerModel](-web-socket-consumer-model.md) | <br/>fun [WebSocketConsumerModel](-web-socket-consumer-model.md)(peerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, producerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, kind: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, rtpParameters: [ConsumerRtpParameters](../-consumer-rtp-parameters/index.md)? = null, type: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, appData: [ConsumerAppData](../-consumer-app-data/index.md)? = null, remotelyPaused: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null, producerPaused: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [appData](app-data.md) | <br/>var [appData](app-data.md): [ConsumerAppData](../-consumer-app-data/index.md)? = null |
| [id](id.md) | <br/>var [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [kind](kind.md) | <br/>var [kind](kind.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [peerId](peer-id.md) | <br/>var [peerId](peer-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [producerId](producer-id.md) | <br/>var [producerId](producer-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [producerPaused](producer-paused.md) | <br/>val [producerPaused](producer-paused.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [remotelyPaused](remotely-paused.md) | <br/>val [remotelyPaused](remotely-paused.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
| [rtpParameters](rtp-parameters.md) | <br/>var [rtpParameters](rtp-parameters.md): [ConsumerRtpParameters](../-consumer-rtp-parameters/index.md)? = null |
| [type](type.md) | <br/>var [type](type.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
