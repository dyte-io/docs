[io.dyte.core.meeting.socket](../index.md)/[SocketEvent](index.md)

# SocketEvent


expect sealed class [SocketEvent](index.md)&lt;[T](index.md)&gt;


actual sealed class [SocketEvent](index.md)&lt;[T](index.md)&gt; : [Mapper](../-mapper/index.md)&lt;[T](index.md)&gt;

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | <br/>object [Companion](-companion/index.md) |
| [Connect](-connect/index.md) | [common, android]<br/><br/>expect object [Connect](-connect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Connect](-connect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [Connecting](-connecting/index.md) | [common, android]<br/><br/>expect object [Connecting](-connecting/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Connecting](-connecting/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [Disconnect](-disconnect/index.md) | [common, android]<br/><br/>expect object [Disconnect](-disconnect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Disconnect](-disconnect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [Error](-error/index.md) | [common, android]<br/><br/>expect object [Error](-error/index.md) : [SocketEvent](index.md)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; <br/><br/>actual object [Error](-error/index.md) : [SocketEvent](index.md)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; |
| [Message](-message/index.md) | [common, android]<br/><br/>expect object [Message](-message/index.md) : [SocketEvent](index.md)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; <br/><br/>actual object [Message](-message/index.md) : [SocketEvent](index.md)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; |
| [Ping](-ping/index.md) | [common, android]<br/><br/>expect object [Ping](-ping/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Ping](-ping/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [Pong](-pong/index.md) | [common, android]<br/><br/>expect object [Pong](-pong/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Pong](-pong/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [Reconnect](-reconnect/index.md) | [common, android]<br/><br/>expect object [Reconnect](-reconnect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; <br/><br/>actual object [Reconnect](-reconnect/index.md) : [SocketEvent](index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; , [Mapper](../-mapper/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt; |
| [ReconnectAttempt](-reconnect-attempt/index.md) | [common, android]<br/><br/>expect object [ReconnectAttempt](-reconnect-attempt/index.md) : [SocketEvent](index.md)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt; <br/><br/>actual object [ReconnectAttempt](-reconnect-attempt/index.md) : [SocketEvent](index.md)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt; |

## Functions

| Name | Summary |
|---|---|
| [mapper](../-mapper/mapper.md) | <br/>abstract fun [mapper](../-mapper/mapper.md)(array: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;out [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;): [T](index.md) |

## Properties

| Name | Summary |
|---|---|
| [socketIoEvents](socket-io-events.md) | <br/>abstract val [socketIoEvents](socket-io-events.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |

## Inheritors

| Name |
|---|
| [Connect](-connect/index.md) |
| [Connecting](-connecting/index.md) |
| [Disconnect](-disconnect/index.md) |
| [Error](-error/index.md) |
| [Message](-message/index.md) |
| [Reconnect](-reconnect/index.md) |
| [ReconnectAttempt](-reconnect-attempt/index.md) |
| [Ping](-ping/index.md) |
| [Pong](-pong/index.md) |
