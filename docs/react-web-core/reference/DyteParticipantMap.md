---
sidebar_position: 4
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipantMap"></a>

This is a map of participants, indexed by `participant.id` (a participant's peer ID).
This map emits an event whenever a participant present in the map emits an event.
For example, when a participant is added to this map, a `participantJoined` event is
emitted from the map. When a participant object emits an event `videoUpdate`, the map
re-emits that event (provided the participant is present in the map).
