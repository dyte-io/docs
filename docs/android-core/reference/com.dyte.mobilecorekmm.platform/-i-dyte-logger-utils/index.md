[io.dyte.core.platform](../index.md)/[IDyteLoggerUtils](index.md)

# IDyteLoggerUtils


interface [IDyteLoggerUtils](index.md)

I dyte logger

Needs to be implemented by both android and iOS platforms

can be enabled or disabled globally

## Functions

| Name | Summary |
|---|---|
| [enableLogger](enable-logger.md) | <br/>abstract fun [enableLogger](enable-logger.md)(enable: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [isLoggerEnabled](is-logger-enabled.md) | <br/>abstract fun [isLoggerEnabled](is-logger-enabled.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [logD](log-d.md) | <br/>abstract fun [logD](log-d.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [logE](log-e.md) | <br/>abstract fun [logE](log-e.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>abstract fun [logE](log-e.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), throwable: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html))<br/>abstract fun [logE](log-e.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), throwable: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)) |
| [logI](log-i.md) | <br/>abstract fun [logI](log-i.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [logW](log-w.md) | <br/>abstract fun [logW](log-w.md)(tag: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Inheritors

| Name |
|---|
| [DyteAndroidLogger](../-dyte-android-logger/index.md) |
