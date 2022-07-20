[io.dyte.core](../index.md)/[IDyteClient](index.md)

# IDyteClient


interface [IDyteClient](index.md)

Dyte client

## Functions

| Name | Summary |
|---|---|
| [addMeetingRoomEventsListener](add-meeting-room-events-listener.md) | <br/>abstract fun [addMeetingRoomEventsListener](add-meeting-room-events-listener.md)(meetingRoomEventsListener: [DyteMeetingRoomEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-meeting-room-events-listener/index.md)) |
| [addParticipantEventsListener](add-participant-events-listener.md) | <br/>abstract fun [addParticipantEventsListener](add-participant-events-listener.md)(participantEventsListener: [DyteParticipantEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-participant-events-listener/index.md)) |
| [addSelfEventsListener](add-self-events-listener.md) | <br/>abstract fun [addSelfEventsListener](add-self-events-listener.md)(selfEventsListener: [DyteSelfEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-self-events-listener/index.md)) |
| [getChat](get-chat.md) | <br/>abstract fun [getChat](get-chat.md)(): [DyteChat](../../com.dyte.mobilecorekmm.models/-dyte-chat/index.md)<br/>The chat object stores the chat messages that were sent in the meeting. This includes text messages, images, and files. |
| [getMeetingParticipants](get-meeting-participants.md) | <br/>abstract fun [getMeetingParticipants](get-meeting-participants.md)(): [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md)<br/>The participants object consists of 4 lists of participants. waitlisted, joined, active, pinned. |
| [getPolls](get-polls.md) | <br/>abstract fun [getPolls](get-polls.md)(): [DytePoll](../../com.dyte.mobilecorekmm.models/-dyte-poll/index.md)<br/>The polls object stores the polls that were initiated in the meeting. It exposes methods to create and vote on polls. |
| [getRecording](get-recording.md) | <br/>abstract fun [getRecording](get-recording.md)(): [DyteRecording](../../com.dyte.mobilecorekmm.models/-dyte-recording/index.md) |
| [getSelf](get-self.md) | <br/>abstract fun [getSelf](get-self.md)(): [DyteSelfParticipant](../../com.dyte.mobilecorekmm.models/-dyte-self-participant/index.md)<br/>The self object can be used to manipulate audio and video settings, and other configurations for the local participant. This exposes methods to enable and disable media tracks, share the user's screen, etc. |
| [init](init.md) | <br/>abstract suspend fun [init](init.md)(dyteMeetingInfo: [DyteMeetingInfo](../../com.dyte.mobilecorekmm.models/-dyte-meeting-info/index.md))<br/>This method makes the DyteClient ready to join in a given meeting. Should be called from a background thread. |
| [joinRoom](join-room.md) | <br/>abstract suspend fun [joinRoom](join-room.md)()<br/>Used to join in the room |
| [leaveRoom](leave-room.md) | <br/>abstract fun [leaveRoom](leave-room.md)()<br/>The leaveRoom() method can be used to leave a meeting. |

## Inheritors

| Name |
|---|
| [DyteMobileClient](../-dyte-mobile-client/index.md) |
