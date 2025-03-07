---
sidebar_position: 17
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteConnectedMeetings"></a>

This consists of the methods to faciliate connected meetings

- [DyteConnectedMeetings](#module_DyteConnectedMeetings)
  - [.getConnectedMeetings()](#module_DyteConnectedMeetings+getConnectedMeetings)
  - [.createMeetings()](#module_DyteConnectedMeetings+createMeetings)
  - [.updateMeetings()](#module_DyteConnectedMeetings+updateMeetings)
  - [.deleteMeetings()](#module_DyteConnectedMeetings+deleteMeetings)
  - [.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)](#module_DyteConnectedMeetings+moveParticipants)
  - [.moveParticipantsWithCustomPreset()](#module_DyteConnectedMeetings+moveParticipantsWithCustomPreset)

<a name="module_DyteConnectedMeetings+getConnectedMeetings"></a>

### connectedMeetings.getConnectedMeetings()

get connected meeting state

<a name="module_DyteConnectedMeetings+createMeetings"></a>

### connectedMeetings.createMeetings()

create connected meetings

<a name="module_DyteConnectedMeetings+updateMeetings"></a>

### connectedMeetings.updateMeetings()

update meeting title

<a name="module_DyteConnectedMeetings+deleteMeetings"></a>

### connectedMeetings.deleteMeetings()

delete connected meetings

<a name="module_DyteConnectedMeetings+moveParticipants"></a>

### connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)

Trigger event to move participants

| Param                | Type                              | Description                    |
| -------------------- | --------------------------------- | ------------------------------ |
| sourceMeetingId      | <code>string</code>               | id of source meeting           |
| destinationMeetingId | <code>string</code>               | id of destination meeting      |
| participantIds       | <code>Array.&lt;string&gt;</code> | list of id of the participants |

<a name="module_DyteConnectedMeetings+moveParticipantsWithCustomPreset"></a>

### connectedMeetings.moveParticipantsWithCustomPreset()

Trigger event to move participants with custom preset
