[io.dyte.core.listeners](../index.md)/[DyteMeetingRoomEventsListener](index.md)

# DyteMeetingRoomEventsListener


interface [DyteMeetingRoomEventsListener](index.md)

Dyte meeting room events listener

You can subscribe to all room events by implementing this interface. To subscribe pass implementation to [com.dyte.mobilecorekmm.DyteMobileClient.addMeetingRoomEventsListener](../../com.dyte.mobilecorekmm/-dyte-mobile-client/add-meeting-room-events-listener.md)

## Functions

| Name | Summary |
|---|---|
| [onChatUpdates](on-chat-updates.md) | <br/>open fun [onChatUpdates](on-chat-updates.md)(newMessage: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), message: [DyteChatMessage](../../com.dyte.mobilecorekmm.models/-dyte-chat-message/index.md)?, messages: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DyteChatMessage](../../com.dyte.mobilecorekmm.models/-dyte-chat-message/index.md)&gt;)<br/>On chat updates |
| [onMeetingRecordingEnded](on-meeting-recording-ended.md) | <br/>open fun [onMeetingRecordingEnded](on-meeting-recording-ended.md)()<br/>On meeting recording ended |
| [onMeetingRecordingStarted](on-meeting-recording-started.md) | <br/>open fun [onMeetingRecordingStarted](on-meeting-recording-started.md)()<br/>On meeting recording started |
| [onMeetingRoomJoined](on-meeting-room-joined.md) | <br/>open fun [onMeetingRoomJoined](on-meeting-room-joined.md)(meetingStartedAt: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>On meeting room joined |
| [onMeetingRoomJoinFailed](on-meeting-room-join-failed.md) | <br/>open fun [onMeetingRoomJoinFailed](on-meeting-room-join-failed.md)(exception: [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html))<br/>On meeting room join failed |
| [onMeetingRoomJoinStarted](on-meeting-room-join-started.md) | <br/>open fun [onMeetingRoomJoinStarted](on-meeting-room-join-started.md)()<br/>On meeting room join started Triggered once the sdk starts making connection to the roomname you passed. Ideally one should show loader on UI once this event is triggered. |
| [onMeetingRoomLeft](on-meeting-room-left.md) | <br/>open fun [onMeetingRoomLeft](on-meeting-room-left.md)()<br/>On meeting room left |
| [onParticipantJoin](on-participant-join.md) | <br/>open fun [onParticipantJoin](on-participant-join.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>On participant join |
| [onParticipantLeave](on-participant-leave.md) | <br/>open fun [onParticipantLeave](on-participant-leave.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>On participant leave |
| [onParticipantsUpdated](on-participants-updated.md) | <br/>open fun [onParticipantsUpdated](on-participants-updated.md)(participants: [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md), enabledPaginator: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br/>On participants updated |
| [onParticipantUpdated](on-participant-updated.md) | <br/>open fun [onParticipantUpdated](on-participant-updated.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>On participant updated |
| [onPermissionDenied](on-permission-denied.md) | <br/>open fun [onPermissionDenied](on-permission-denied.md)()<br/>On permission denied |
| [onPermissionDeniedAlways](on-permission-denied-always.md) | <br/>open fun [onPermissionDeniedAlways](on-permission-denied-always.md)()<br/>On permission denied always |
| [onPollUpdates](on-poll-updates.md) | <br/>open fun [onPollUpdates](on-poll-updates.md)(newPoll: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), pollMessages: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[DytePollMessage](../../com.dyte.mobilecorekmm.models/-dyte-poll-message/index.md)&gt;, updatedPollMessage: [DytePollMessage](../../com.dyte.mobilecorekmm.models/-dyte-poll-message/index.md)?)<br/>On poll updates |
| [onScreenShareEnded](on-screen-share-ended.md) | <br/>open fun [onScreenShareEnded](on-screen-share-ended.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>On screen share ended |
| [onScreenShareStarted](on-screen-share-started.md) | <br/>open fun [onScreenShareStarted](on-screen-share-started.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>On screen share started |
