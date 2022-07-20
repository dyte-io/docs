[io.dyte.core.platform](../index.md)/[MediaSoupClientCallback](index.md)

# MediaSoupClientCallback


interface [MediaSoupClientCallback](index.md)

## Functions

| Name | Summary |
|---|---|
| [onProduce](on-produce.md) | <br/>abstract fun [onProduce](on-produce.md)(transport: Transport, kind: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), rtpParameters: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), appData: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [onReceiveTransportConnected](on-receive-transport-connected.md) | <br/>abstract fun [onReceiveTransportConnected](on-receive-transport-connected.md)(transportId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), dtlsParameters: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [onSendTransportConnected](on-send-transport-connected.md) | <br/>abstract fun [onSendTransportConnected](on-send-transport-connected.md)(transportId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), dtlsParameters: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
