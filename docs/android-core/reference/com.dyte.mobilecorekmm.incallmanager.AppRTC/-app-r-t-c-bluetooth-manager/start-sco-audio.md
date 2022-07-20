[io.dyte.core.incallmanager.AppRTC](../index.md)/[AppRTCBluetoothManager](index.md)/[startScoAudio](start-sco-audio.md)

# startScoAudio


fun [startScoAudio](start-sco-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Starts Bluetooth SCO connection with remote device. Note that the phone application always has the priority on the usage of the SCO connection for telephony. If this method is called while the phone is in call it will be ignored. Similarly, if a call is received or sent while an application is using the SCO connection, the connection will be lost for the application and NOT returned automatically when the call ends. Also note that: up to and including API version JELLY_BEAN_MR1, this method initiates a virtual voice call to the Bluetooth headset. After API version JELLY_BEAN_MR2 only a raw SCO audio connection is established. TODO(henrika): should we add support for virtual voice call to BT headset also for JBMR2 and higher. It might be required to initiates a virtual voice call since many devices do not accept SCO audio without a &quot;call&quot;.
