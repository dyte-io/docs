[io.dyte.core.platform](../index.md)/[DyteAndroidMediaSoup](index.md)

# DyteAndroidMediaSoup


class [DyteAndroidMediaSoup](index.md)(controllerContainer: IControllerContainer, mediaSoupClientCallback: [MediaSoupClientCallback](../-media-soup-client-callback/index.md)) : IDyteMediaSoupUtils

## Constructors

| | |
|---|---|
| [DyteAndroidMediaSoup](-dyte-android-media-soup.md) | <br/>fun [DyteAndroidMediaSoup](-dyte-android-media-soup.md)(controllerContainer: IControllerContainer, mediaSoupClientCallback: [MediaSoupClientCallback](../-media-soup-client-callback/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [connectTransport](connect-transport.md) | <br/>open override fun [connectTransport](connect-transport.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), producing: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), onDone: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [createWebRtcTransportProd](create-web-rtc-transport-prod.md) | <br/>open override fun [createWebRtcTransportProd](create-web-rtc-transport-prod.md)(model: WebRtcCreateTransportModel, iceServers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;IceServerData&gt;) |
| [createWebRtcTransportRecv](create-web-rtc-transport-recv.md) | <br/>open override fun [createWebRtcTransportRecv](create-web-rtc-transport-recv.md)(model: WebRtcCreateTransportModel, iceServers: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;IceServerData&gt;) |
| [getAppDataFromConsumerId](get-app-data-from-consumer-id.md) | <br/>open override fun [getAppDataFromConsumerId](get-app-data-from-consumer-id.md)(consumerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): ConsumerAppData |
| [getProduceData](get-produce-data.md) | <br/>open override fun [getProduceData](get-produce-data.md)(): [ProduceData](../-produce-data/index.md) |
| [getSelfTrack](get-self-track.md) | <br/>open override fun [getSelfTrack](get-self-track.md)(): [Pair](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; |
| [getVideoProducerId](get-video-producer-id.md) | <br/>open override fun [getVideoProducerId](get-video-producer-id.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [handleCloseConsumer](handle-close-consumer.md) | <br/>open override fun [handleCloseConsumer](handle-close-consumer.md)(webSocketConsumerModel: WebSocketConsumerClosedModel) |
| [handleNewConsumer](handle-new-consumer.md) | <br/>open override fun [handleNewConsumer](handle-new-consumer.md)(webSocketConsumerModel: WebSocketConsumerModel, onDone: () -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)) |
| [init](init.md) | <br/>open override fun [init](init.md)() |
| [leaveCall](leave-call.md) | <br/>open override fun [leaveCall](leave-call.md)() |
| [loadRouterRtpCapabilities](load-router-rtp-capabilities.md) | <br/>open override fun [loadRouterRtpCapabilities](load-router-rtp-capabilities.md)(routerRtpCapabilitiesString: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [muteSelfAudio](mute-self-audio.md) | <br/>open override fun [muteSelfAudio](mute-self-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [muteSelfVideo](mute-self-video.md) | <br/>open override fun [muteSelfVideo](mute-self-video.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [onBluetoothDeviceConnected](on-bluetooth-device-connected.md) | <br/>open override fun [onBluetoothDeviceConnected](on-bluetooth-device-connected.md)(deviceName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [resumeConsumer](resume-consumer.md) | <br/>open override fun [resumeConsumer](resume-consumer.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [setVideoProducerId](set-video-producer-id.md) | <br/>open override fun [setVideoProducerId](set-video-producer-id.md)(producerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [switchCamera](switch-camera.md) | <br/>open override fun [switchCamera](switch-camera.md)() |
| [unmuteSelfAudio](unmute-self-audio.md) | <br/>open override fun [unmuteSelfAudio](unmute-self-audio.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [unmuteSelfVideo](unmute-self-video.md) | <br/>open override fun [unmuteSelfVideo](unmute-self-video.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
