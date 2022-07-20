[io.dyte.core.platform](../index.md)/[DyteAndroidPlatform](index.md)

# DyteAndroidPlatform


class [DyteAndroidPlatform](index.md)(utilsProvider: IDytePlatformUtilsProvider) : IDytePlatformUtils

Dyte android platform

Place to put misc platform specific code

## Constructors

| | |
|---|---|
| [DyteAndroidPlatform](-dyte-android-platform.md) | <br/>fun [DyteAndroidPlatform](-dyte-android-platform.md)(utilsProvider: IDytePlatformUtilsProvider)<br/>Create empty Dyte android platform |

## Functions

| Name | Summary |
|---|---|
| [getAndroidApplicationContext](get-android-application-context.md) | <br/>open override fun [getAndroidApplicationContext](get-android-application-context.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html) |
| [getCurrentTime](get-current-time.md) | <br/>open override fun [getCurrentTime](get-current-time.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br/>Get current time |
| [getUuid](get-uuid.md) | <br/>open override fun [getUuid](get-uuid.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Get uuid |
| [runOnIoThread](run-on-io-thread.md) | <br/>open override fun [runOnIoThread](run-on-io-thread.md)(block: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))<br/>Run on io thread |
| [runOnMainThread](run-on-main-thread.md) | <br/>open override fun [runOnMainThread](run-on-main-thread.md)(block: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))<br/>Run on main thread |
| [setAndroidApplicationContext](set-android-application-context.md) | <br/>open override fun [setAndroidApplicationContext](set-android-application-context.md)(ctx: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)) |
| [uploadFile](upload-file.md) | <br/>open override fun [uploadFile](upload-file.md)(presignedUrl: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), fileUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, controllerContainer: IControllerContainer) |
