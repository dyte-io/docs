[io.dyte.core.meeting.events.payloadmodel.inbound](../index.md)/[ConsumerRtpParameters](index.md)

# ConsumerRtpParameters


data class [ConsumerRtpParameters](index.md)(val codecs: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Codec](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-codec/index.md)&gt;? = null, val headerExtensions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[HeaderExtension](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-header-extension/index.md)&gt;? = null, val encodings: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Encodings](../-encodings/index.md)&gt;? = null, val rtcp: [Rtcp](../-rtcp/index.md)? = null, val mid: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null)

## Constructors

| | |
|---|---|
| [ConsumerRtpParameters](-consumer-rtp-parameters.md) | <br/>fun [ConsumerRtpParameters](-consumer-rtp-parameters.md)(codecs: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Codec](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-codec/index.md)&gt;? = null, headerExtensions: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[HeaderExtension](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-header-extension/index.md)&gt;? = null, encodings: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Encodings](../-encodings/index.md)&gt;? = null, rtcp: [Rtcp](../-rtcp/index.md)? = null, mid: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [codecs](codecs.md) | <br/>val [codecs](codecs.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Codec](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-codec/index.md)&gt;? = null |
| [encodings](encodings.md) | <br/>val [encodings](encodings.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[Encodings](../-encodings/index.md)&gt;? = null |
| [headerExtensions](header-extensions.md) | <br/>val [headerExtensions](header-extensions.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[HeaderExtension](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-header-extension/index.md)&gt;? = null |
| [mid](mid.md) | <br/>val [mid](mid.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [rtcp](rtcp.md) | <br/>val [rtcp](rtcp.md): [Rtcp](../-rtcp/index.md)? = null |
