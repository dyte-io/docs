[io.dyte.core.platform](../index.md)/[IDytePlatformUtils](index.md)

# IDytePlatformUtils


interface [IDytePlatformUtils](index.md)

## Functions

| Name | Summary |
|---|---|
| [getAndroidApplicationContext](get-android-application-context.md) | <br/>abstract fun [getAndroidApplicationContext](get-android-application-context.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [getCurrentTime](get-current-time.md) | <br/>abstract fun [getCurrentTime](get-current-time.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [getUuid](get-uuid.md) | <br/>abstract fun [getUuid](get-uuid.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [runOnIoThread](run-on-io-thread.md) | <br/>abstract fun [runOnIoThread](run-on-io-thread.md)(block: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [runOnMainThread](run-on-main-thread.md) | <br/>abstract fun [runOnMainThread](run-on-main-thread.md)(block: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [setAndroidApplicationContext](set-android-application-context.md) | <br/>abstract fun [setAndroidApplicationContext](set-android-application-context.md)(ctx: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)) |
| [uploadFile](upload-file.md) | <br/>abstract fun [uploadFile](upload-file.md)(presignedUrl: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), fileUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md)) |

## Inheritors

| Name |
|---|
| [DyteAndroidPlatform](../-dyte-android-platform/index.md) |
