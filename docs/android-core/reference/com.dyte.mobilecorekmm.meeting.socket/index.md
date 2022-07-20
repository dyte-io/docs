[io.dyte.core.meeting.socket](index.md)

# Package com.dyte.mobilecorekmm.meeting.socket

## Types

| Name | Summary |
|---|---|
| [Mapper](-mapper/index.md) | <br/>interface [Mapper](-mapper/index.md)&lt;[T](-mapper/index.md)&gt; |
| [Socket](-socket/index.md) | [common, android]<br/><br/>expect class [Socket](-socket/index.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: [SocketOptions](-socket-options/index.md)? = null, build: [SocketBuilder](-socket-builder/index.md).() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))<br/><br/>actual class [Socket](-socket/index.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: SocketOptions?, build: SocketBuilder.() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [SocketAckCallback](-socket-ack-callback/index.md) | <br/>interface [SocketAckCallback](-socket-ack-callback/index.md) |
| [SocketBuilder](-socket-builder/index.md) | <br/>interface [SocketBuilder](-socket-builder/index.md) |
| [SocketEvent](-socket-event/index.md) | [common, android]<br/><br/>expect sealed class [SocketEvent](-socket-event/index.md)&lt;[T](-socket-event/index.md)&gt;<br/><br/>actual sealed class [SocketEvent](-socket-event/index.md)&lt;[T](-socket-event/index.md)&gt; : [Mapper](-mapper/index.md)&lt;[T](-socket-event/index.md)&gt; |
| [SocketOptions](-socket-options/index.md) | <br/>data class [SocketOptions](-socket-options/index.md)(val queryParams: [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;?, val transport: [SocketOptions.Transport](-socket-options/-transport/index.md) = Transport.DEFAULT) |
