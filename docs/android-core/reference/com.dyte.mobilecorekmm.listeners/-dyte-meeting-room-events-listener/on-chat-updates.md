[io.dyte.core.listeners](../index.md)/[DyteMeetingRoomEventsListener](index.md)/[onChatUpdates](on-chat-updates.md)

# onChatUpdates


open fun [onChatUpdates](on-chat-updates.md)(newMessage: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), message: [DyteChatMessage](../../com.dyte.mobilecorekmm.models/-dyte-chat-message/index.md)?, messages: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteChatMessage](../../com.dyte.mobilecorekmm.models/-dyte-chat-message/index.md)&gt;)

On chat updates

Triggered when there is a new chat message available in this room.

## Parameters

common

| | |
|---|---|
| newMessage | true, if a new message is received else false |
| message | new message |
| messages | list of all messages in this room. This also contains messages exchanged before this peer joined in this room |
