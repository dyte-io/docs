[io.dyte.core.models](../index.md)/[DyteChat](index.md)

# DyteChat


class [DyteChat](index.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md))

## Constructors

| | |
|---|---|
| [DyteChat](-dyte-chat.md) | <br/>fun [DyteChat](-dyte-chat.md)(controllerContainer: [IControllerContainer](../../com.dyte.mobilecorekmm.controllers/-i-controller-container/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [sendChatImageMessage](send-chat-image-message.md) | <br/>fun [sendChatImageMessage](send-chat-image-message.md)(filePath: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), fileName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>Send chat image message |
| [sendChatMessage](send-chat-message.md) | <br/>fun [sendChatMessage](send-chat-message.md)(message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>Sends a string type chat message in the given room |
| [sendFileMessage](send-file-message.md) | <br/>fun [sendFileMessage](send-file-message.md)(filePath: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), fileName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>Send file message |

## Properties

| Name | Summary |
|---|---|
| [messages](messages.md) | <br/>val [messages](messages.md): [ArrayList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-array-list/index.html)&lt;[DyteChatMessage](../-dyte-chat-message/index.md)&gt; |
