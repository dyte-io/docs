[io.dyte.core.controllers](../index.md)/[IParticipantController](index.md)

# IParticipantController


interface [IParticipantController](index.md)

## Functions

| Name | Summary |
|---|---|
| [getGridMode](get-grid-mode.md) | <br/>abstract fun [getGridMode](get-grid-mode.md)(): [PageViewMode](../-page-view-mode/index.md) |
| [getMaxVideoCountPerPage](get-max-video-count-per-page.md) | <br/>abstract fun [getMaxVideoCountPerPage](get-max-video-count-per-page.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [getPageNumber](get-page-number.md) | <br/>abstract fun [getPageNumber](get-page-number.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [handleRoomState](handle-room-state.md) | <br/>abstract fun [handleRoomState](handle-room-state.md)(webSocketRoomStateModel: [WebSocketRoomStateModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-web-socket-room-state-model/index.md)) |
| [muteAll](mute-all.md) | <br/>abstract fun [muteAll](mute-all.md)() |
| [nextPage](next-page.md) | <br/>abstract fun [nextPage](next-page.md)() |
| [onMeetingRoomJoined](on-meeting-room-joined.md) | <br/>abstract fun [onMeetingRoomJoined](on-meeting-room-joined.md)(webSocketJoinRoomModel: [WebSocketJoinRoomModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.outbound/-web-socket-join-room-model/index.md), userData: [UserData](../../com.dyte.mobilecorekmm.network.models/-user-data/index.md)) |
| [onNextPageLoaded](on-next-page-loaded.md) | <br/>abstract fun [onNextPageLoaded](on-next-page-loaded.md)(webSocketGetPageModel: [WebSocketGetPageModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-get-page-model/index.md)) |
| [onParticipantStreamConnected](on-participant-stream-connected.md) | <br/>abstract fun [onParticipantStreamConnected](on-participant-stream-connected.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
| [onParticipantVideoMuted](on-participant-video-muted.md) | <br/>abstract fun [onParticipantVideoMuted](on-participant-video-muted.md)(webSocketConsumerClosedModel: [WebSocketConsumerClosedModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-consumer-closed-model/index.md)) |
| [onParticipantVideoUnmuted](on-participant-video-unmuted.md) | <br/>abstract fun [onParticipantVideoUnmuted](on-participant-video-unmuted.md)(webSocketConsumerClosedModel: [WebSocketConsumerResumedModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-consumer-resumed-model/index.md)) |
| [onPeerAudioMuted](on-peer-audio-muted.md) | <br/>abstract fun [onPeerAudioMuted](on-peer-audio-muted.md)(webSocketPeerMuteModel: [WebSocketPeerMuteModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-peer-mute-model/index.md)) |
| [onPeerAudioUnmuted](on-peer-audio-unmuted.md) | <br/>abstract fun [onPeerAudioUnmuted](on-peer-audio-unmuted.md)(webSocketPeerMuteModel: [WebSocketPeerMuteModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-peer-mute-model/index.md)) |
| [onPeerJoined](on-peer-joined.md) | <br/>abstract fun [onPeerJoined](on-peer-joined.md)(meetingPeerUser: [MeetingPeerUser](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-meeting-peer-user/index.md)) |
| [onPeerLeft](on-peer-left.md) | <br/>abstract fun [onPeerLeft](on-peer-left.md)(webSocketPeerLeftModel: [WebSocketPeerLeftModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-peer-left-model/index.md)) |
| [onPeerScreenSharedEnded](on-peer-screen-shared-ended.md) | <br/>abstract fun [onPeerScreenSharedEnded](on-peer-screen-shared-ended.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
| [onPeerScreenShareStarted](on-peer-screen-share-started.md) | <br/>abstract fun [onPeerScreenShareStarted](on-peer-screen-share-started.md)(participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md)) |
| [onPeerVideoMuted](on-peer-video-muted.md) | <br/>abstract fun [onPeerVideoMuted](on-peer-video-muted.md)(webSocketProducerClosedModel: [WebSocketProducerClosedModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-producer-closed-model/index.md)) |
| [onPeerVideoUnMuted](on-peer-video-un-muted.md) | <br/>abstract fun [onPeerVideoUnMuted](on-peer-video-un-muted.md)(webSocketProducerConnectModel: [WebSocketProducerConnectModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-producer-connect-model/index.md)) |
| [onPrevPageLoaded](on-prev-page-loaded.md) | <br/>abstract fun [onPrevPageLoaded](on-prev-page-loaded.md)(webSocketGetPageModel: [WebSocketGetPageModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-get-page-model/index.md)) |
| [onSelectedPeers](on-selected-peers.md) | <br/>abstract fun [onSelectedPeers](on-selected-peers.md)(webSocketSelectedPeersModel: [WebSocketSelectedPeersModel](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-selected-peers-model/index.md)) |
| [onWaitlistPeerAccepted](on-waitlist-peer-accepted.md) | <br/>abstract fun [onWaitlistPeerAccepted](on-waitlist-peer-accepted.md)(webSocketWaitlistPeerAccepted: [WebSocketWaitlistPeerAccepted](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-waitlist-peer-accepted/index.md)) |
| [onWaitlistPeerAdded](on-waitlist-peer-added.md) | <br/>abstract fun [onWaitlistPeerAdded](on-waitlist-peer-added.md)(webSocketWaitlistPeerAdded: [WebSocketWaitlistPeerAdded](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-waitlist-peer-added/index.md)) |
| [onWaitlistPeerClosed](on-waitlist-peer-closed.md) | <br/>abstract fun [onWaitlistPeerClosed](on-waitlist-peer-closed.md)(webSocketWaitlistPeerClosed: [WebSocketWaitlistPeerClosed](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-waitlist-peer-closed/index.md)) |
| [onWaitlistPeerRejected](on-waitlist-peer-rejected.md) | <br/>abstract fun [onWaitlistPeerRejected](on-waitlist-peer-rejected.md)(webSocketWaitlistPeerRejected: [WebSocketWaitlistPeerRejected](../../com.dyte.mobilecorekmm.meeting.events.payloadmodel.inbound/-web-socket-waitlist-peer-rejected/index.md)) |
| [previousPage](previous-page.md) | <br/>abstract fun [previousPage](previous-page.md)() |
| [shouldShowPaginator](should-show-paginator.md) | <br/>abstract fun [shouldShowPaginator](should-show-paginator.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

## Properties

| Name | Summary |
|---|---|
| [meetingRoomParticipants](meeting-room-participants.md) | <br/>abstract val [meetingRoomParticipants](meeting-room-participants.md): [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md) |
