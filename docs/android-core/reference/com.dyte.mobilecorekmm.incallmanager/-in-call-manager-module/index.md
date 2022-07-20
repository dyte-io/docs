[io.dyte.core.incallmanager](../index.md)/[InCallManagerModule](index.md)

# InCallManagerModule


class [InCallManagerModule](index.md)(activity: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), inCallManagerEventCallbacks: [InCallManagerEventCallbacks](../-in-call-manager-event-callbacks/index.md)) : [AudioManager.OnAudioFocusChangeListener](https://developer.android.com/reference/kotlin/android/media/AudioManager.OnAudioFocusChangeListener.html)

## Constructors

| | |
|---|---|
| [InCallManagerModule](-in-call-manager-module.md) | <br/>fun [InCallManagerModule](-in-call-manager-module.md)(activity: [Activity](https://developer.android.com/reference/kotlin/android/app/Activity.html), inCallManagerEventCallbacks: [InCallManagerEventCallbacks](../-in-call-manager-event-callbacks/index.md)) |

## Types

| Name | Summary |
|---|---|
| [AudioDevice](-audio-device/index.md) | <br/>enum [AudioDevice](-audio-device/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[InCallManagerModule.AudioDevice](-audio-device/index.md)&gt; <br/>AudioDevice is the names of possible audio devices that we currently support. |
| [AudioManagerState](-audio-manager-state/index.md) | <br/>enum [AudioManagerState](-audio-manager-state/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[InCallManagerModule.AudioManagerState](-audio-manager-state/index.md)&gt; <br/>AudioManager state. |
| [Companion](-companion/index.md) | <br/>object [Companion](-companion/index.md) |

## Functions

| Name | Summary |
|---|---|
| [chooseAudioRoute](choose-audio-route.md) | <br/>fun [chooseAudioRoute](choose-audio-route.md)(audioRoute: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [getAudioDevices](get-audio-devices.md) | <br/>fun [getAudioDevices](get-audio-devices.md)(): [Set](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)&lt;[InCallManagerModule.AudioDevice](-audio-device/index.md)&gt;<br/>Returns current set of available/selectable audio devices. |
| [getMicrophoneDevices](get-microphone-devices.md) | <br/>fun [getMicrophoneDevices](get-microphone-devices.md)(): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[MicrophoneInfo](https://developer.android.com/reference/kotlin/android/media/MicrophoneInfo.html)&gt; |
| [onAudioFocusChange](on-audio-focus-change.md) | <br/>open override fun [onAudioFocusChange](on-audio-focus-change.md)(focusChange: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) |
| [onHostDestroy](on-host-destroy.md) | <br/>fun [onHostDestroy](on-host-destroy.md)() |
| [onHostPause](on-host-pause.md) | <br/>fun [onHostPause](on-host-pause.md)() |
| [onHostResume](on-host-resume.md) | <br/>fun [onHostResume](on-host-resume.md)() |
| [onProximitySensorChangedState](on-proximity-sensor-changed-state.md) | <br/>fun [onProximitySensorChangedState](on-proximity-sensor-changed-state.md)(isNear: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [pokeScreen](poke-screen.md) | <br/>fun [pokeScreen](poke-screen.md)(timeout: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) |
| [selectAudioDevice](select-audio-device.md) | <br/>fun [selectAudioDevice](select-audio-device.md)(device: [InCallManagerModule.AudioDevice](-audio-device/index.md))<br/>Changes selection of the currently active audio device. |
| [setDefaultAudioDevice](set-default-audio-device.md) | <br/>fun [setDefaultAudioDevice](set-default-audio-device.md)(defaultDevice: [InCallManagerModule.AudioDevice](-audio-device/index.md)?)<br/>Changes default audio device. TODO(henrika): add usage of this method in the AppRTCMobile client. |
| [setForceSpeakerphoneOn](set-force-speakerphone-on.md) | <br/>fun [setForceSpeakerphoneOn](set-force-speakerphone-on.md)(flag: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br/>flag: Int 0: use default action 1: force speaker on -1: force speaker off |
| [setKeepScreenOn](set-keep-screen-on.md) | <br/>fun [setKeepScreenOn](set-keep-screen-on.md)(enable: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setMicrophoneMute](set-microphone-mute.md) | <br/>fun [setMicrophoneMute](set-microphone-mute.md)(enable: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setSpeakerphoneOn](set-speakerphone-on.md) | <br/>fun [setSpeakerphoneOn](set-speakerphone-on.md)(enable: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [start](start.md) | <br/>fun [start](start.md)(_media: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), auto: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), ringbackUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [startBusytone](start-busytone.md) | <br/>fun [startBusytone](start-busytone.md)(busytoneUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>This is part of start() process. busytoneUriType must not empty. empty means do not play. return false to indicate play tone failed and should be stop() immediately otherwise, it will stop() after a tone completed. |
| [startProximitySensor](start-proximity-sensor.md) | <br/>fun [startProximitySensor](start-proximity-sensor.md)() |
| [startRingback](start-ringback.md) | <br/>fun [startRingback](start-ringback.md)(ringbackUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>This is part of start() process. ringbackUriType must not empty. empty means do not play. |
| [startRingtone](start-ringtone.md) | <br/>fun [startRingtone](start-ringtone.md)(ringtoneUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), seconds: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) |
| [stop](stop.md) | <br/>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br/>fun [stop](stop.md)(busytoneUriType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) = &quot;&quot;) |
| [stopBusytone](stop-busytone.md) | <br/>fun [stopBusytone](stop-busytone.md)() |
| [stopProximitySensor](stop-proximity-sensor.md) | <br/>fun [stopProximitySensor](stop-proximity-sensor.md)() |
| [stopRingback](stop-ringback.md) | <br/>fun [stopRingback](stop-ringback.md)() |
| [stopRingtone](stop-ringtone.md) | <br/>fun [stopRingtone](stop-ringtone.md)() |
| [turnScreenOff](turn-screen-off.md) | <br/>fun [turnScreenOff](turn-screen-off.md)() |
| [turnScreenOn](turn-screen-on.md) | <br/>fun [turnScreenOn](turn-screen-on.md)() |
| [updateAudioDeviceState](update-audio-device-state.md) | <br/>fun [updateAudioDeviceState](update-audio-device-state.md)()<br/>Updates list of possible audio devices and make new device selection. |

## Properties

| Name | Summary |
|---|---|
| [selectedAudioDevice](selected-audio-device.md) | <br/>var [selectedAudioDevice](selected-audio-device.md): [InCallManagerModule.AudioDevice](-audio-device/index.md)? = null<br/>Returns the currently selected audio device. |
