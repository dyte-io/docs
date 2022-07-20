[io.dyte.core.controllers](../index.md)/[IController](index.md)

# IController


interface [IController](index.md)

## Functions

| Name | Summary |
|---|---|
| [addMeetingRoomEventsListener](add-meeting-room-events-listener.md) | <br/>abstract fun [addMeetingRoomEventsListener](add-meeting-room-events-listener.md)(meetingRoomEventsListener: [DyteMeetingRoomEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-meeting-room-events-listener/index.md))<br/>Add meeting room events listener |
| [addParticipantEventsListener](add-participant-events-listener.md) | <br/>abstract fun [addParticipantEventsListener](add-participant-events-listener.md)(participantEventsListener: [DyteParticipantEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-participant-events-listener/index.md))<br/>Add participant events listener |
| [addSelfEventsListener](add-self-events-listener.md) | <br/>abstract fun [addSelfEventsListener](add-self-events-listener.md)(selfEventsListener: [DyteSelfEventsListener](../../com.dyte.mobilecorekmm.listeners/-dyte-self-events-listener/index.md))<br/>Add self events listener |
| [getChat](get-chat.md) | <br/>abstract fun [getChat](get-chat.md)(): [DyteChat](../../com.dyte.mobilecorekmm.models/-dyte-chat/index.md) |
| [getMeetingParticipant](get-meeting-participant.md) | <br/>abstract fun [getMeetingParticipant](get-meeting-participant.md)(): [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md) |
| [getPolls](get-polls.md) | <br/>abstract fun [getPolls](get-polls.md)(): [DytePoll](../../com.dyte.mobilecorekmm.models/-dyte-poll/index.md) |
| [getRecording](get-recording.md) | <br/>abstract fun [getRecording](get-recording.md)(): [DyteRecording](../../com.dyte.mobilecorekmm.models/-dyte-recording/index.md) |
| [getSelf](get-self.md) | <br/>abstract fun [getSelf](get-self.md)(): [DyteSelfParticipant](../../com.dyte.mobilecorekmm.models/-dyte-self-participant/index.md) |
| [init](init.md) | <br/>abstract suspend fun [init](init.md)(controllerOptions: [ControllerOptions](../-controller-options/index.md)) |
| [joinRoom](join-room.md) | <br/>abstract suspend fun [joinRoom](join-room.md)() |
| [kick](kick.md) | <br/>abstract suspend fun [kick](kick.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
| [kickAll](kick-all.md) | <br/>abstract suspend fun [kickAll](kick-all.md)() |
| [leaveRoom](leave-room.md) | <br/>abstract fun [leaveRoom](leave-room.md)() |
| [muteAllAudio](mute-all-audio.md) | <br/>abstract suspend fun [muteAllAudio](mute-all-audio.md)(allowUnmute: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [muteAllVideo](mute-all-video.md) | <br/>abstract suspend fun [muteAllVideo](mute-all-video.md)() |
| [muteAudio](mute-audio.md) | <br/>abstract suspend fun [muteAudio](mute-audio.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
| [muteVideo](mute-video.md) | <br/>abstract suspend fun [muteVideo](mute-video.md)(dyteMeetingParticipant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
