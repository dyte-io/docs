[io.dyte.core.incallmanager.AppRTC](../index.md)/[AppRTCProximitySensor](index.md)

# AppRTCProximitySensor


class [AppRTCProximitySensor](index.md) : [SensorEventListener](https://developer.android.com/reference/kotlin/android/hardware/SensorEventListener.html)

AppRTCProximitySensor manages functions related to the proximity sensor in the AppRTC demo. On most device, the proximity sensor is implemented as a boolean-sensor. It returns just two values &quot;NEAR&quot; or &quot;FAR&quot;. Thresholding is done on the LUX value i.e. the LUX value of the light sensor is compared with a threshold. A LUX-value more than the threshold means the proximity sensor returns &quot;FAR&quot;. Anything less than the threshold value and the sensor  returns &quot;NEAR&quot;.

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | <br/>object [Companion](-companion/index.md) |

## Functions

| Name | Summary |
|---|---|
| [onAccuracyChanged](on-accuracy-changed.md) | <br/>open override fun [onAccuracyChanged](on-accuracy-changed.md)(sensor: [Sensor](https://developer.android.com/reference/kotlin/android/hardware/Sensor.html), accuracy: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) |
| [onSensorChanged](on-sensor-changed.md) | <br/>open override fun [onSensorChanged](on-sensor-changed.md)(event: [SensorEvent](https://developer.android.com/reference/kotlin/android/hardware/SensorEvent.html)) |
| [sensorReportsNearState](sensor-reports-near-state.md) | <br/>fun [sensorReportsNearState](sensor-reports-near-state.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>Getter for last reported state. Set to true if &quot;near&quot; is reported. |
| [start](start.md) | <br/>fun [start](start.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br/>Activate the proximity sensor. Also do initialization if called for the first time. |
| [stop](stop.md) | <br/>fun [stop](stop.md)()<br/>Deactivate the proximity sensor. |
