[io.dyte.core.listeners](../index.md)/[DyteParticipantEventsListener](index.md)

# DyteParticipantEventsListener


interface [DyteParticipantEventsListener](index.md)

Dyte participant events listener

You can subscribe to all participant events by implementing this interface. To subscribe pass implementation to [com.dyte.mobilecorekmm.DyteMobileClient.addParticipantEventsListener](../../com.dyte.mobilecorekmm/-dyte-mobile-client/add-participant-events-listener.md)

## Functions

| Name | Summary |
|---|---|
| [audioUpdate](audio-update.md) | <br/>open fun [audioUpdate](audio-update.md)(audioEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>Audio update |
| [videoUpdate](video-update.md) | <br/>open fun [videoUpdate](video-update.md)(videoEnabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), participant: [DyteMeetingParticipant](../../com.dyte.mobilecorekmm.models/-dyte-meeting-participant/index.md))<br/>Video update |
