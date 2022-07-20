[io.dyte.core.meeting.events.payloadmodel.outbound](../index.md)/[WebRtcCreateTransportModel](index.md)

# WebRtcCreateTransportModel


data class [WebRtcCreateTransportModel](index.md)(var id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, var iceParameters: [IceParameters](../-ice-parameters/index.md)? = null, var iceCandidates: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[IceCandidate](../-ice-candidate/index.md)&gt;? = null, var dtlsParameters: [DtlsParameters](../-dtls-parameters/index.md)? = null, var producing: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) : [BasePayloadModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel/-base-payload-model/index.md)

response for [OutboundMeetingEventType.CREATE_WEB_RTC_TRANSPORT](../../com.dyte.mobilecorekmm.meeting.events/-outbound-meeting-event-type/-c-r-e-a-t-e_-w-e-b_-r-t-c_-t-r-a-n-s-p-o-r-t/index.md)

## Constructors

| | |
|---|---|
| [WebRtcCreateTransportModel](-web-rtc-create-transport-model.md) | <br/>fun [WebRtcCreateTransportModel](-web-rtc-create-transport-model.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, iceParameters: [IceParameters](../-ice-parameters/index.md)? = null, iceCandidates: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[IceCandidate](../-ice-candidate/index.md)&gt;? = null, dtlsParameters: [DtlsParameters](../-dtls-parameters/index.md)? = null, producing: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null) |

## Properties

| Name | Summary |
|---|---|
| [dtlsParameters](dtls-parameters.md) | <br/>var [dtlsParameters](dtls-parameters.md): [DtlsParameters](../-dtls-parameters/index.md)? = null |
| [iceCandidates](ice-candidates.md) | <br/>var [iceCandidates](ice-candidates.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[IceCandidate](../-ice-candidate/index.md)&gt;? = null |
| [iceParameters](ice-parameters.md) | <br/>var [iceParameters](ice-parameters.md): [IceParameters](../-ice-parameters/index.md)? = null |
| [id](id.md) | <br/>var [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [producing](producing.md) | <br/>var [producing](producing.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)? = null |
