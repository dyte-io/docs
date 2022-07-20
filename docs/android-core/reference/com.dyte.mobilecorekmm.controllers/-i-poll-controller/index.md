[io.dyte.core.controllers](../index.md)/[IPollController](index.md)

# IPollController


interface [IPollController](index.md)

## Functions

| Name | Summary |
|---|---|
| [createPoll](create-poll.md) | <br/>abstract fun [createPoll](create-poll.md)(question: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), options: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;, anonymous: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), hideVotes: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [loadPolls](load-polls.md) | <br/>abstract suspend fun [loadPolls](load-polls.md)() |
| [onNewPoll](on-new-poll.md) | <br/>abstract fun [onNewPoll](on-new-poll.md)(websocketPoll: [WebSocketPoll](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-poll/index.md)) |
| [voteOnPoll](vote-on-poll.md) | <br/>abstract fun [voteOnPoll](vote-on-poll.md)(dytePollMessage: [DytePollMessage](../../com.dyte.mobilecorekmm.models/-dyte-poll-message/index.md), dytePollOption: [DytePollOption](../../com.dyte.mobilecorekmm.models/-dyte-poll-option/index.md)) |

## Properties

| Name | Summary |
|---|---|
| [dytePoll](dyte-poll.md) | <br/>abstract val [dytePoll](dyte-poll.md): [DytePoll](../../com.dyte.mobilecorekmm.models/-dyte-poll/index.md) |
