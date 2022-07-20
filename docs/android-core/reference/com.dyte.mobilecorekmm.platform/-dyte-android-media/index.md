[io.dyte.core.platform](../index.md)/[DyteAndroidMedia](index.md)

# DyteAndroidMedia


class [DyteAndroidMedia](index.md)(utilsProvider: IDytePlatformUtilsProvider) : IDyteMediaUtils

## Constructors

| | |
|---|---|
| [DyteAndroidMedia](-dyte-android-media.md) | <br/>fun [DyteAndroidMedia](-dyte-android-media.md)(utilsProvider: IDytePlatformUtilsProvider) |

## Functions

| Name | Summary |
|---|---|
| [getAudioDevices](get-audio-devices.md) | <br/>open override fun [getAudioDevices](get-audio-devices.md)(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;DyteAudioDevice&gt; |
| [getDeviceType](get-device-type.md) | <br/>open override fun [getDeviceType](get-device-type.md)(deviceType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): AudioDeviceType |
| [init](init.md) | <br/>open override fun [init](init.md)() |
| [isBluetoothDeviceConnected](is-bluetooth-device-connected.md) | <br/>open override fun [isBluetoothDeviceConnected](is-bluetooth-device-connected.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [setDevice](set-device.md) | <br/>open override fun [setDevice](set-device.md)(device: DyteAudioDevice) |
