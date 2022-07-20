[io.dyte.core.incallmanager.AppRTC](../index.md)/[AppRTCBluetoothManager](index.md)

# AppRTCBluetoothManager


class [AppRTCBluetoothManager](index.md)

AppRTCProximitySensor manages functions related to Bluetoth devices in the AppRTC demo.

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | <br/>object [Companion](-companion/index.md) |
| [State](-state/index.md) | <br/>enum [State](-state/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[AppRTCBluetoothManager.State](-state/index.md)&gt; |

## Functions

| Name | Summary |
|---|---|
| [start](start.md) | <br/>fun [start](start.md)()<br/>Activates components required to detect Bluetooth devices and to enable BT SCO (audio is routed via BT SCO) for the headset profile. The end state will be HEADSET_UNAVAILABLE but a state machine has started which will start a state change sequence where the final outcome depends on if/when the BT headset is enabled. Example of state change sequence when start() is called while BT device is connected and enabled: UNINITIALIZED --> HEADSET_UNAVAILABLE --> HEADSET_AVAILABLE --> SCO_CONNECTING --> SCO_CONNECTED <==> audio is now routed via BT SCO. Note that the AppRTCAudioManager is also involved in driving this state change. |
| [startScoAudio](start-sco-audio.md) | <br/>fun [startScoAudio](start-sco-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>Starts Bluetooth SCO connection with remote device. Note that the phone application always has the priority on the usage of the SCO connection for telephony. If this method is called while the phone is in call it will be ignored. Similarly, if a call is received or sent while an application is using the SCO connection, the connection will be lost for the application and NOT returned automatically when the call ends. Also note that: up to and including API version JELLY_BEAN_MR1, this method initiates a virtual voice call to the Bluetooth headset. After API version JELLY_BEAN_MR2 only a raw SCO audio connection is established. TODO(henrika): should we add support for virtual voice call to BT headset also for JBMR2 and higher. It might be required to initiates a virtual voice call since many devices do not accept SCO audio without a &quot;call&quot;. |
| [stop](stop.md) | <br/>fun [stop](stop.md)()<br/>Stops and closes all components related to Bluetooth audio. |
| [stopScoAudio](stop-sco-audio.md) | <br/>fun [stopScoAudio](stop-sco-audio.md)()<br/>Stops Bluetooth SCO connection with remote device. |
| [updateDevice](update-device.md) | <br/>fun [updateDevice](update-device.md)()<br/>Use the BluetoothHeadset proxy object (controls the Bluetooth Headset Service via IPC) to update the list of connected devices for the HEADSET profile. The internal state will change to HEADSET_UNAVAILABLE or to HEADSET_AVAILABLE and `bluetoothDevice` will be mapped to the connected device if available. |

## Properties

| Name | Summary |
|---|---|
| [scoConnectionAttempts](sco-connection-attempts.md) | <br/>var [scoConnectionAttempts](sco-connection-attempts.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 0 |
| [state](state.md) | <br/>val [state](state.md): [AppRTCBluetoothManager.State](-state/index.md)<br/>Returns the internal state. |
