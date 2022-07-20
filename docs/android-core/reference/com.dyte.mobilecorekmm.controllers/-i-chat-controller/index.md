[io.dyte.core.controllers](../index.md)/[IChatController](index.md)

# IChatController


interface [IChatController](index.md)

## Functions

| Name | Summary |
|---|---|
| [handleChatMessages](handle-chat-messages.md) | <br/>abstract fun [handleChatMessages](handle-chat-messages.md)(dyteChatMessages: [WebSocketChatMessagesModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-chat-messages-model/index.md)) |
| [handleNewChatMessage](handle-new-chat-message.md) | <br/>abstract fun [handleNewChatMessage](handle-new-chat-message.md)(dyteChatMessage: [WebSocketChatMessage](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-chat-message/index.md)) |
| [loadChatMessages](load-chat-messages.md) | <br/>abstract suspend fun [loadChatMessages](load-chat-messages.md)() |
| [sendFileMessage](send-file-message.md) | <br/>abstract fun [sendFileMessage](send-file-message.md)(fileName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), filePath: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |
| [sendMessage](send-message.md) | <br/>abstract fun [sendMessage](send-message.md)(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Properties

| Name | Summary |
|---|---|
| [dyteChat](dyte-chat.md) | <br/>abstract val [dyteChat](dyte-chat.md): [DyteChat](../../com.dyte.mobilecorekmm.models/-dyte-chat/index.md) |
