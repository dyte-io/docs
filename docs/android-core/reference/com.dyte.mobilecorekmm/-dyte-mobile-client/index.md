[io.dyte.core](../index.md)/[DyteMobileClient](index.md)

# DyteMobileClient


open class [DyteMobileClient](index.md)(dytePlatformUtilsProvider: [IDytePlatformUtilsProvider](../../com.dyte.mobilecorekmm.platform/-i-dyte-platform-utils-provider/index.md)) : [IDyteClient](../-i-dyte-client/index.md)

Dyte mobile client

## Constructors

| | |
|---|---|
| [DyteMobileClient](-dyte-mobile-client.md) | <br/>fun [DyteMobileClient](-dyte-mobile-client.md)(dytePlatformUtilsProvider: [IDytePlatformUtilsProvider](../../com.dyte.mobilecorekmm.platform/-i-dyte-platform-utils-provider/index.md))<br/>Create empty Dyte mobile client |

## Functions

| Name | Summary |
|---|---|
| [addMeetingRoomEventsListener](add-meeting-room-events-listener.md) | <br/>open override fun [addMeetingRoomEventsListener](add-meeting-room-events-listener.md)(meetingRoomEventsListener: [DyteMeetingRoomEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-meeting-room-events-listener/index.md)) |
| [addParticipantEventsListener](add-participant-events-listener.md) | <br/>open override fun [addParticipantEventsListener](add-participant-events-listener.md)(participantEventsListener: [DyteParticipantEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-participant-events-listener/index.md)) |
| [addSelfEventsListener](add-self-events-listener.md) | <br/>open override fun [addSelfEventsListener](add-self-events-listener.md)(selfEventsListener: [DyteSelfEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-self-events-listener/index.md)) |
| [getChat](get-chat.md) | <br/>open override fun [getChat](get-chat.md)(): [DyteChat](../../com.dyte.mobilecorekmm.models/-dyte-chat/index.md)<br/>The chat object stores the chat messages that were sent in the meeting. This includes text messages, images, and files. |
| [getMeetingParticipants](get-meeting-participants.md) | <br/>open override fun [getMeetingParticipants](get-meeting-participants.md)(): [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md)<br/>The participants object consists of 4 lists of participants. waitlisted, joined, active, pinned. |
| [getPolls](get-polls.md) | <br/>open override fun [getPolls](get-polls.md)(): [DytePoll](../../com.dyte.mobilecorekmm.models/-dyte-poll/index.md)<br/>The polls object stores the polls that were initiated in the meeting. It exposes methods to create and vote on polls. |
| [getRecording](get-recording.md) | <br/>open override fun [getRecording](get-recording.md)(): [DyteRecording](../../com.dyte.mobilecorekmm.models/-dyte-recording/index.md) |
| [getSelf](get-self.md) | <br/>open override fun [getSelf](get-self.md)(): [DyteSelfParticipant](../../com.dyte.mobilecorekmm.models/-dyte-self-participant/index.md)<br/>The self object can be used to manipulate audio and video settings, and other configurations for the local participant. This exposes methods to enable and disable media tracks, share the user's screen, etc. |
| [init](init.md) | <br/>open suspend override fun [init](init.md)(dyteMeetingInfo: [DyteMeetingInfo](../../com.dyte.mobilecorekmm.models/-dyte-meeting-info/index.md))<br/>This method makes the DyteClient ready to join in a given meeting. Should be called from a background thread. |
| [joinRoom](join-room.md) | <br/>open suspend override fun [joinRoom](join-room.md)()<br/>Used to join in the room |
| [leaveRoom](leave-room.md) | <br/>open override fun [leaveRoom](leave-room.md)()<br/>The leaveRoom() method can be used to leave a meeting. |
