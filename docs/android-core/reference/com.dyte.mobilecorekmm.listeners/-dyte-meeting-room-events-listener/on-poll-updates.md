[io.dyte.core.listeners](../index.md)/[DyteMeetingRoomEventsListener](index.md)/[onPollUpdates](on-poll-updates.md)

# onPollUpdates


open fun [onPollUpdates](on-poll-updates.md)(newPoll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), pollMessages: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DytePollMessage](../../com.dyte.mobilecorekmm.models/-dyte-poll-message/index.md)&gt;, updatedPollMessage: [DytePollMessage](../../com.dyte.mobilecorekmm.models/-dyte-poll-message/index.md)?)

On poll updates

Triggered when there is a new poll available in this room or if there is any update on existing poll. Update on poll can happen once user votes on any given poll.

## Parameters

common

| | |
|---|---|
| newPoll | true, if a new poll is received else false |
| pollMessages | list of all polls in this room. This also contains polls exchanged before this peer joined in this room |
| updatedPollMessage | poll which got updated. |
