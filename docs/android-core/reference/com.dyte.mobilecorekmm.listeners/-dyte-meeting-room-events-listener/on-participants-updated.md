[io.dyte.core.listeners](../index.md)/[DyteMeetingRoomEventsListener](index.md)/[onParticipantsUpdated](on-participants-updated.md)

# onParticipantsUpdated


open fun [onParticipantsUpdated](on-participants-updated.md)(participants: [DyteRoomParticipants](../../com.dyte.mobilecorekmm.models/-dyte-room-participants/index.md), enabledPaginator: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

On participants updated

Triggered when there are updates in the meeting room participants

1. 
   new user joins
2. 
   new user in waiting room
3. 
   new user is pinned/unpinned
4. 
   User leaves meeting
5. 
   Page updates

## Parameters

common

| | |
|---|---|
| participants | : contains all participants |
| enabledPaginator | : true if there are more than one page in this meeting |
