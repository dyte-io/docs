[io.dyte.core.listeners](../index.md)/[DyteMeetingRoomEventsListener](index.md)/[onMeetingRoomJoinFailed](on-meeting-room-join-failed.md)

# onMeetingRoomJoinFailed


open fun [onMeetingRoomJoinFailed](on-meeting-room-join-failed.md)(exception: [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html))

On meeting room join failed

Triggered when some error happended while executing [com.dyte.mobilecorekmm.DyteMobileClient.joinRoom](../../com.dyte.mobilecorekmm/-dyte-mobile-client/join-room.md) or [com.dyte.mobilecorekmm.DyteMobileClient.init](../../com.dyte.mobilecorekmm/-dyte-mobile-client/init.md)

## Parameters

common

| | |
|---|---|
| exception | -     actual exception. This can be either http exception or any android exception |
