[io.dyte.core.listeners](../index.md)/[DyteParticipantEventsListener](index.md)/[audioUpdate](audio-update.md)

# audioUpdate


open fun [audioUpdate](audio-update.md)(audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))

Audio update

when a give participant toggles audio from their device. Also triggered when host toggles audio for the participant

## Parameters

common

| | |
|---|---|
| audioEnabled | : true if audio is enabled, false otherwise |
| participant | : participant for whom there was audio change |
