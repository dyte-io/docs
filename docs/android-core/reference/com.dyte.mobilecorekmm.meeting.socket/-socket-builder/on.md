[io.dyte.core.meeting.socket](../index.md)/[SocketBuilder](index.md)/[on](on.md)

# on


abstract fun [on](on.md)(event: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), action: [Socket](../-socket/index.md).(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), onDone: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))

abstract fun &lt;[T](on.md)&gt; [on](on.md)(socketEvent: [SocketEvent](../-socket-event/index.md)&lt;[T](on.md)&gt;, action: [Socket](../-socket/index.md).(array: [T](on.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))
