[io.dyte.core.models](../index.md)/[DyteChatMessage](index.md)

# DyteChatMessage


sealed class [DyteChatMessage](index.md)

## Types

| Name | Summary |
|---|---|
| [DyteTextMessage](-dyte-text-message/index.md) | <br/>class [DyteTextMessage](-dyte-text-message/index.md)(val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val read: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val pluginId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val message: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DyteChatMessage](index.md) |
| [FileMessage](-file-message/index.md) | <br/>class [FileMessage](-file-message/index.md)(val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val read: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val pluginId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val fileUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [DyteChatMessage](index.md) |
| [ImageMessage](-image-message/index.md) | <br/>class [ImageMessage](-image-message/index.md)(val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val read: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val pluginId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val link: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val fileUri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val fileName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [DyteChatMessage](index.md) |
| [PollMessage](-poll-message/index.md) | <br/>class [PollMessage](-poll-message/index.md)(val userId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val displayName: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val read: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val pluginId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val pollId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DyteChatMessage](index.md) |

## Properties

| Name | Summary |
|---|---|
| [displayName](display-name.md) | <br/>val [displayName](display-name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [pluginId](plugin-id.md) | <br/>val [pluginId](plugin-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? |
| [read](read.md) | <br/>val [read](read.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [type](type.md) | <br/>val [type](type.md): [DyteMessageType](../-dyte-message-type/index.md) |
| [userId](user-id.md) | <br/>val [userId](user-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

## Inheritors

| Name |
|---|
| [DyteTextMessage](-dyte-text-message/index.md) |
| [ImageMessage](-image-message/index.md) |
| [FileMessage](-file-message/index.md) |
| [PollMessage](-poll-message/index.md) |
