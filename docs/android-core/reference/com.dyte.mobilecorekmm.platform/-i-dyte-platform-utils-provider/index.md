[io.dyte.core.platform](../index.md)/[IDytePlatformUtilsProvider](index.md)

# IDytePlatformUtilsProvider


interface [IDytePlatformUtilsProvider](index.md)

I dependency provider

needs to be implemented by android & iOS separately.

## Functions

| Name | Summary |
|---|---|
| [getLogger](get-logger.md) | <br/>abstract fun [getLogger](get-logger.md)(): [IDyteLoggerUtils](../-i-dyte-logger-utils/index.md) |
| [getMediaSoupUtils](get-media-soup-utils.md) | <br/>abstract fun [getMediaSoupUtils](get-media-soup-utils.md)(): [IDyteMediaSoupUtils](../-i-dyte-media-soup-utils/index.md) |
| [getMediaUtils](get-media-utils.md) | <br/>abstract fun [getMediaUtils](get-media-utils.md)(): [IDyteMediaUtils](../-i-dyte-media-utils/index.md) |
| [getPeerConnectionUtils](get-peer-connection-utils.md) | <br/>abstract fun [getPeerConnectionUtils](get-peer-connection-utils.md)(): [IDytePeerConnectionUtils](../-i-dyte-peer-connection-utils/index.md) |
| [getPlatformUtils](get-platform-utils.md) | <br/>abstract fun [getPlatformUtils](get-platform-utils.md)(): [IDytePlatformUtils](../-i-dyte-platform-utils/index.md) |
| [init](init.md) | <br/>abstract fun [init](init.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md), mediaSoupClientCallback: &lt;Error class: unknown class&gt;) |

## Inheritors

| Name |
|---|
| [DyteAndroidPlatformProvider](../-dyte-android-platform-provider/index.md) |
