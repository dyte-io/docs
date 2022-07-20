[io.dyte.core.incallmanager.AppRTC](../index.md)/[AppRTCBluetoothManager](index.md)/[updateDevice](update-device.md)

# updateDevice


fun [updateDevice](update-device.md)()

Use the BluetoothHeadset proxy object (controls the Bluetooth Headset Service via IPC) to update the list of connected devices for the HEADSET profile. The internal state will change to HEADSET_UNAVAILABLE or to HEADSET_AVAILABLE and `bluetoothDevice` will be mapped to the connected device if available.
