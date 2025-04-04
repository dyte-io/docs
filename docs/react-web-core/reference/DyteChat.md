---
sidebar_position: 8
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteChat"></a>

This is the chat module, which can be used to send and receive messages from the meeting.

- [DyteChat](#module_DyteChat)
  - [.messages](#module_DyteChat+messages)
  - [.channels](#module_DyteChat+channels)
  - [.roomJoined](#module_DyteChat+roomJoined)
  - [.pinned](#module_DyteChat+pinned)
  - [.sendTextMessage(message)](#module_DyteChat+sendTextMessage)
  - [.sendImageMessage(image)](#module_DyteChat+sendImageMessage)
  - [.sendFileMessage(file)](#module_DyteChat+sendFileMessage)
  - [.sendMessage(message, participantIds)](#module_DyteChat+sendMessage)
  - [.getMessagesByUser(userId)](#module_DyteChat+getMessagesByUser)
  - [.getMessagesByType(type)](#module_DyteChat+getMessagesByType)
  - [.pin(id)](#module_DyteChat+pin)
  - [.unpin(id)](#module_DyteChat+unpin)
  - [.getMessages()](#module_DyteChat+getMessages)
  - [.createChannel()](#module_DyteChat+createChannel)
  - [.updateChannel()](#module_DyteChat+updateChannel)
  - [.sendMessageToChannel(message, channelId)](#module_DyteChat+sendMessageToChannel)
  - [.getChannelMembers()](#module_DyteChat+getChannelMembers)
  - [.searchMessages()](#module_DyteChat+searchMessages)
  - [.markLastReadMessage()](#module_DyteChat+markLastReadMessage)

<a name="module_DyteChat+messages"></a>

### chat.messages

An array of chat messages.

<a name="module_DyteChat+channels"></a>

### chat.channels

An Array of all available channels.

<a name="module_DyteChat+roomJoined"></a>

### chat.roomJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteChat+pinned"></a>

### chat.pinned

Returns an array of pinned messages.

<a name="module_DyteChat+sendTextMessage"></a>

### chat.sendTextMessage(message)

Sends a chat text message to the room.

| Param   | Description                                |
| ------- | ------------------------------------------ |
| message | The message that must be sent to the room. |

<a name="module_DyteChat+sendImageMessage"></a>

### chat.sendImageMessage(image)

Sends an image message to the meeting.

| Param | Description                   |
| ----- | ----------------------------- |
| image | The image that is to be sent. |

<a name="module_DyteChat+sendFileMessage"></a>

### chat.sendFileMessage(file)

Sends a file to the meeting.

| Param | Description    |
| ----- | -------------- |
| file  | A File object. |

<a name="module_DyteChat+sendMessage"></a>

### chat.sendMessage(message, participantIds)

Sends a message to the meeting. This method can be used to send text, image,
or file messages. The message type is determined by the key 'type' in `message`
object.

| Param          | Description                                              |
| -------------- | -------------------------------------------------------- |
| message        | An object including the type and content of the message. |
| participantIds | An array including the userIds of the participants.      |

<a name="module_DyteChat+getMessagesByUser"></a>

### chat.getMessagesByUser(userId)

Returns an array of messages sent by a specific userId.

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| userId | The user id of the user that sent the message. |

<a name="module_DyteChat+getMessagesByType"></a>

### chat.getMessagesByType(type)

Returns an array of 'text', 'image' or 'file' messages.

| Param | Description                 |
| ----- | --------------------------- |
| type  | 'text', 'image', or 'file'. |

<a name="module_DyteChat+pin"></a>

### chat.pin(id)

Pins a chat message

| Param | Description                    |
| ----- | ------------------------------ |
| id    | ID of the message to be pinned |

<a name="module_DyteChat+unpin"></a>

### chat.unpin(id)

Unpins a chat message

| Param | Description                      |
| ----- | -------------------------------- |
| id    | ID of the message to be unpinned |

<a name="module_DyteChat+getMessages"></a>

### chat.getMessages()

Gets chat messages in a paginated manner

<a name="module_DyteChat+createChannel"></a>

### chat.createChannel()

Creates a channel with specified name and userIds as members

<a name="module_DyteChat+updateChannel"></a>

### chat.updateChannel()

Updates the channel

<a name="module_DyteChat+sendMessageToChannel"></a>

### chat.sendMessageToChannel(message, channelId)

Sends a message to a channel. This method can be used to send text, image,
or file messages. The message type is determined by the key 'type' in `message`
object.

| Param     | Description                                              |
| --------- | -------------------------------------------------------- |
| message   | An object including the type and content of the message. |
| channelId | Id of the channel where you want to send the message.    |

<a name="module_DyteChat+getChannelMembers"></a>

### chat.getChannelMembers()

returns a list of members added to the channel

<a name="module_DyteChat+searchMessages"></a>

### chat.searchMessages()

search messages

<a name="module_DyteChat+markLastReadMessage"></a>

### chat.markLastReadMessage()

marks last read message in a channel
