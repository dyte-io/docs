[io.dyte.core.models](../index.md)/[DytePoll](index.md)

# DytePoll


class [DytePoll](index.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md))

Dyte poll

## Constructors

| | |
|---|---|
| [DytePoll](-dyte-poll.md) | <br/>fun [DytePoll](-dyte-poll.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md))<br/>Create empty Dyte poll |

## Functions

| Name | Summary |
|---|---|
| [createPoll](create-poll.md) | <br/>fun [createPoll](create-poll.md)(question: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), options: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;, anonymous: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), hideVotes: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br/>Create poll |
| [voteOnPoll](vote-on-poll.md) | <br/>fun [voteOnPoll](vote-on-poll.md)(pollMessage: [DytePollMessage](../-dyte-poll-message/index.md), pollOption: [DytePollOption](../-dyte-poll-option/index.md))<br/>Vote on poll |

## Properties

| Name | Summary |
|---|---|
| [polls](polls.md) | <br/>val [polls](polls.md): [ArrayList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html)&lt;[DytePollMessage](../-dyte-poll-message/index.md)&gt; |
