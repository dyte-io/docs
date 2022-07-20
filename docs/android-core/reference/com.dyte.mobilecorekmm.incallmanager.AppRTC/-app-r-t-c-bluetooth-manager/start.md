[io.dyte.core.incallmanager.AppRTC](../index.md)/[AppRTCBluetoothManager](index.md)/[start](start.md)

# start


fun [start](start.md)()

Activates components required to detect Bluetooth devices and to enable BT SCO (audio is routed via BT SCO) for the headset profile. The end state will be HEADSET_UNAVAILABLE but a state machine has started which will start a state change sequence where the final outcome depends on if/when the BT headset is enabled. Example of state change sequence when start() is called while BT device is connected and enabled: UNINITIALIZED --> HEADSET_UNAVAILABLE --> HEADSET_AVAILABLE --> SCO_CONNECTING --> SCO_CONNECTED <==> audio is now routed via BT SCO. Note that the AppRTCAudioManager is also involved in driving this state change.
