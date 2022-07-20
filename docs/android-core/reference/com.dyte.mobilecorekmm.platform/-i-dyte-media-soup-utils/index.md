[io.dyte.core.platform](../index.md)/[IDyteMediaSoupUtils](index.md)

# IDyteMediaSoupUtils


interface [IDyteMediaSoupUtils](index.md)

## Functions

| Name | Summary |
|---|---|
| [connectTransport](connect-transport.md) | <br/>abstract fun [connectTransport](connect-transport.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), producing: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), onDone: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [createWebRtcTransportProd](create-web-rtc-transport-prod.md) | <br/>abstract fun [createWebRtcTransportProd](create-web-rtc-transport-prod.md)(model: [WebRtcCreateTransportModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-web-rtc-create-transport-model/index.md), iceServers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[IceServerData](../../com.dyte.mobilecorekmm.network.models/-ice-server-data/index.md)&gt;) |
| [createWebRtcTransportRecv](create-web-rtc-transport-recv.md) | <br/>abstract fun [createWebRtcTransportRecv](create-web-rtc-transport-recv.md)(model: [WebRtcCreateTransportModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-web-rtc-create-transport-model/index.md), iceServers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[IceServerData](../../com.dyte.mobilecorekmm.network.models/-ice-server-data/index.md)&gt;) |
| [getAppDataFromConsumerId](get-app-data-from-consumer-id.md) | <br/>abstract fun [getAppDataFromConsumerId](get-app-data-from-consumer-id.md)(consumerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [ConsumerAppData](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-consumer-app-data/index.md)? |
| [getProduceData](get-produce-data.md) | <br/>abstract fun [getProduceData](get-produce-data.md)(): &lt;Error class: unknown class&gt; |
| [getSelfTrack](get-self-track.md) | <br/>abstract fun [getSelfTrack](get-self-track.md)(): [Pair](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; |
| [getVideoProducerId](get-video-producer-id.md) | <br/>abstract fun [getVideoProducerId](get-video-producer-id.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [handleCloseConsumer](handle-close-consumer.md) | <br/>abstract fun [handleCloseConsumer](handle-close-consumer.md)(webSocketConsumerModel: [WebSocketConsumerClosedModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-consumer-closed-model/index.md)) |
| [handleNewConsumer](handle-new-consumer.md) | <br/>abstract fun [handleNewConsumer](handle-new-consumer.md)(webSocketConsumerModel: [WebSocketConsumerModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-consumer-model/index.md), onDone: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [init](init.md) | <br/>abstract fun [init](init.md)() |
| [leaveCall](leave-call.md) | <br/>abstract fun [leaveCall](leave-call.md)() |
| [loadRouterRtpCapabilities](load-router-rtp-capabilities.md) | <br/>abstract fun [loadRouterRtpCapabilities](load-router-rtp-capabilities.md)(routerRtpCapabilitiesString: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [muteSelfAudio](mute-self-audio.md) | <br/>abstract fun [muteSelfAudio](mute-self-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [muteSelfVideo](mute-self-video.md) | <br/>abstract fun [muteSelfVideo](mute-self-video.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [onBluetoothDeviceConnected](on-bluetooth-device-connected.md) | <br/>abstract fun [onBluetoothDeviceConnected](on-bluetooth-device-connected.md)(deviceName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [resumeConsumer](resume-consumer.md) | <br/>abstract fun [resumeConsumer](resume-consumer.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [setVideoProducerId](set-video-producer-id.md) | <br/>abstract fun [setVideoProducerId](set-video-producer-id.md)(producerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [switchCamera](switch-camera.md) | <br/>abstract fun [switchCamera](switch-camera.md)() |
| [unmuteSelfAudio](unmute-self-audio.md) | <br/>abstract fun [unmuteSelfAudio](unmute-self-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [unmuteSelfVideo](unmute-self-video.md) | <br/>abstract fun [unmuteSelfVideo](unmute-self-video.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

## Inheritors

| Name |
|---|
| [DyteAndroidMediaSoup](../-dyte-android-media-soup/index.md) |
