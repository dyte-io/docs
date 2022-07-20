[io.dyte.core.incallmanager.AppRTC](index.md)

# Package com.dyte.mobilecorekmm.incallmanager.AppRTC

## Types

| Name | Summary |
|---|---|
| [AppRTCBluetoothManager](-app-r-t-c-bluetooth-manager/index.md) | <br/>class [AppRTCBluetoothManager](-app-r-t-c-bluetooth-manager/index.md)<br/>AppRTCProximitySensor manages functions related to Bluetoth devices in the AppRTC demo. |
| [AppRTCProximitySensor](-app-r-t-c-proximity-sensor/index.md) | <br/>class [AppRTCProximitySensor](-app-r-t-c-proximity-sensor/index.md) : [SensorEventListener](https://developer.android.com/reference/kotlin/android/hardware/SensorEventListener.html)<br/>AppRTCProximitySensor manages functions related to the proximity sensor in the AppRTC demo. On most device, the proximity sensor is implemented as a boolean-sensor. It returns just two values &quot;NEAR&quot; or &quot;FAR&quot;. Thresholding is done on the LUX value i.e. the LUX value of the light sensor is compared with a threshold. A LUX-value more than the threshold means the proximity sensor returns &quot;FAR&quot;. Anything less than the threshold value and the sensor  returns &quot;NEAR&quot;. |
