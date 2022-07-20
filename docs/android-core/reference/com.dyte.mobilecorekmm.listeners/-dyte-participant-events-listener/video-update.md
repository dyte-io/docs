[io.dyte.core.listeners](../index.md)/[DyteParticipantEventsListener](index.md)/[videoUpdate](video-update.md)

# videoUpdate


open fun [videoUpdate](video-update.md)(videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))

Video update

when a give participant toggles video from their device. Also triggered when host toggles video for the participant

## Parameters

common

| | |
|---|---|
| videoEnabled | : true if video is enabled, false otherwise |
| participant | : participant for whom there was video change |
