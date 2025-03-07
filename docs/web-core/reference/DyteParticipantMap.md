---
sidebar_position: 4
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipantMap"></a>

The following objects are `DyteParticipantMap` objects
It consists of 4 maps:

- `joined`: A map of all participants that have joined the meeting.
- `waitlisted`: A map of all participants that have been added to the waitlist.
- `active`: A map of active participants who should be displayed in the meeting grid.
- `pinned`: A map of pinned participants.

These are all the map of participants, indexed by `participant.id` (a participant's peer ID).

This map emits events

- `participantJoined` when a participant is added to the map
- `participantLeft` when a participant is deleted to the map

This map also re-emits events emitted to a participant. For eg. if User A is in `joined` map, and User A's object emits an event `videoUpdate`, the map re-emits that event.
