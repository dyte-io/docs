[io.dyte.core.meeting.socket](../index.md)/[Socket](index.md)

# Socket


expect class [Socket](index.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: [SocketOptions](../-socket-options/index.md)? = null, build: [SocketBuilder](../-socket-builder/index.md).() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))


actual class [Socket](index.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: SocketOptions?, build: SocketBuilder.() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))

## Constructors

| | |
|---|---|
| [Socket](-socket.md) | <br/>expect fun [Socket](-socket.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: [SocketOptions](../-socket-options/index.md)? = null, build: [SocketBuilder](../-socket-builder/index.md).() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))<br/><br/>actual fun [Socket](-socket.md)(endpoint: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), config: SocketOptions?, build: SocketBuilder.() -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [connect](connect.md) | [common, android]<br/><br/>expect fun [connect](connect.md)()<br/><br/>actual fun [connect](connect.md)() |
| [disconnect](disconnect.md) | [common, android]<br/><br/>expect fun [disconnect](disconnect.md)()<br/><br/>actual fun [disconnect](disconnect.md)() |
| [emit](emit.md) | [common, android]<br/><br/>expect fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/><br/>actual fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/><br/>expect fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: JsonArray)<br/><br/>actual fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: JsonArray)<br/><br/>expect fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: JsonObject)<br/><br/>actual fun [emit](emit.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: JsonObject) |
| [emitAck](emit-ack.md) | [common, android]<br/><br/>expect fun [emitAck](emit-ack.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), callback: [SocketAckCallback](../-socket-ack-callback/index.md))<br/><br/>actual fun [emitAck](emit-ack.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), callback: SocketAckCallback) |
| [isConnected](is-connected.md) | [common, android]<br/><br/>expect fun [isConnected](is-connected.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/><br/>actual fun [isConnected](is-connected.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
