[io.dyte.core.meeting.events.payloadmodel.outbound](../index.md)/[Codec](index.md)

# Codec


data class [Codec](index.md)(var kind: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var mimeType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var payloadType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, var clockRate: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, var channels: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, var rtcpFeedback: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[CodecRtcpFeedback](../-codec-rtcp-feedback/index.md)&gt;? = null, var parameters: [CodecParameters](../-codec-parameters/index.md)? = null, var preferredPayloadType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null)

## Constructors

| | |
|---|---|
| [Codec](-codec.md) | <br/>fun [Codec](-codec.md)(kind: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, mimeType: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, payloadType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, clockRate: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, channels: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null, rtcpFeedback: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[CodecRtcpFeedback](../-codec-rtcp-feedback/index.md)&gt;? = null, parameters: [CodecParameters](../-codec-parameters/index.md)? = null, preferredPayloadType: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [channels](channels.md) | <br/>var [channels](channels.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null |
| [clockRate](clock-rate.md) | <br/>var [clockRate](clock-rate.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null |
| [kind](kind.md) | <br/>var [kind](kind.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [mimeType](mime-type.md) | <br/>var [mimeType](mime-type.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [parameters](parameters.md) | <br/>var [parameters](parameters.md): [CodecParameters](../-codec-parameters/index.md)? = null |
| [payloadType](payload-type.md) | <br/>var [payloadType](payload-type.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null |
| [preferredPayloadType](preferred-payload-type.md) | <br/>var [preferredPayloadType](preferred-payload-type.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null |
| [rtcpFeedback](rtcp-feedback.md) | <br/>var [rtcpFeedback](rtcp-feedback.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[CodecRtcpFeedback](../-codec-rtcp-feedback/index.md)&gt;? = null |
