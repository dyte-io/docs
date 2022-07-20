[io.dyte.core.platform](../index.md)/[DyteAndroidPlatformProvider](index.md)

# DyteAndroidPlatformProvider


class [DyteAndroidPlatformProvider](index.md)(application: [Application](https://developer.android.com/reference/kotlin/android/app/Application.html)) : IDytePlatformUtilsProvider

Dyte android platform provider

creates and maintains platform specific code required by core sdk

## Constructors

| | |
|---|---|
| [DyteAndroidPlatformProvider](-dyte-android-platform-provider.md) | <br/>fun [DyteAndroidPlatformProvider](-dyte-android-platform-provider.md)(application: [Application](https://developer.android.com/reference/kotlin/android/app/Application.html))<br/>Create empty Dyte android platform provider |

## Functions

| Name | Summary |
|---|---|
| [getLogger](get-logger.md) | <br/>open override fun [getLogger](get-logger.md)(): IDyteLoggerUtils |
| [getMediaSoupUtils](get-media-soup-utils.md) | <br/>open override fun [getMediaSoupUtils](get-media-soup-utils.md)(): IDyteMediaSoupUtils |
| [getMediaUtils](get-media-utils.md) | <br/>open override fun [getMediaUtils](get-media-utils.md)(): IDyteMediaUtils |
| [getPeerConnectionUtils](get-peer-connection-utils.md) | <br/>open override fun [getPeerConnectionUtils](get-peer-connection-utils.md)(): IDytePeerConnectionUtils |
| [getPlatformUtils](get-platform-utils.md) | <br/>open override fun [getPlatformUtils](get-platform-utils.md)(): IDytePlatformUtils |
| [init](init.md) | <br/>open override fun [init](init.md)(controllerContainer: IControllerContainer, mediaSoupClientCallback: [MediaSoupClientCallback](../-media-soup-client-callback/index.md)) |
