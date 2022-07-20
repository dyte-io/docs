[io.dyte.core.meeting.events.payloadmodel.inbound](../index.md)/[WebSocketPoll](index.md)

# WebSocketPoll


data class [WebSocketPoll](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val options: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[WebSocketPollOption](../-web-socket-poll-option/index.md)&gt;, val question: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val anonymous: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val hideVotes: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val createdBy: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

## Constructors

| | |
|---|---|
| [WebSocketPoll](-web-socket-poll.md) | <br/>fun [WebSocketPoll](-web-socket-poll.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), options: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[WebSocketPollOption](../-web-socket-poll-option/index.md)&gt;, question: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), anonymous: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), hideVotes: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), createdBy: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Properties

| Name | Summary |
|---|---|
| [anonymous](anonymous.md) | <br/>val [anonymous](anonymous.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [createdBy](created-by.md) | <br/>val [createdBy](created-by.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [hideVotes](hide-votes.md) | <br/>val [hideVotes](hide-votes.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [id](id.md) | <br/>val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [options](options.md) | <br/>val [options](options.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[WebSocketPollOption](../-web-socket-poll-option/index.md)&gt; |
| [question](question.md) | <br/>val [question](question.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
