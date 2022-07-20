[io.dyte.core.platform](../index.md)/[IDyteMediaUtils](index.md)

# IDyteMediaUtils


interface [IDyteMediaUtils](index.md)

I dyte media utils

Needs to be implemented by each platform.

## Functions

| Name | Summary |
|---|---|
| [getAudioDevices](get-audio-devices.md) | <br/>abstract fun [getAudioDevices](get-audio-devices.md)(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteAudioDevice](../../com.dyte.mobilecorekmm.models/-dyte-audio-device/index.md)&gt; |
| [getDeviceType](get-device-type.md) | <br/>abstract fun [getDeviceType](get-device-type.md)(deviceType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [AudioDeviceType](../../com.dyte.mobilecorekmm.models/-audio-device-type/index.md) |
| [init](init.md) | <br/>abstract fun [init](init.md)() |
| [isBluetoothDeviceConnected](is-bluetooth-device-connected.md) | <br/>abstract fun [isBluetoothDeviceConnected](is-bluetooth-device-connected.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [setDevice](set-device.md) | <br/>abstract fun [setDevice](set-device.md)(device: [DyteAudioDevice](../../com.dyte.mobilecorekmm.models/-dyte-audio-device/index.md)) |

## Inheritors

| Name |
|---|
| [DyteAndroidMedia](../-dyte-android-media/index.md) |
