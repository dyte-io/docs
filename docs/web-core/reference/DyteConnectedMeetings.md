---
sidebar_position: 18
web_core_version: 2.4.1
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

### meeting.connectedMeetings.getConnectedMeetings()

get connected meeting state

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)  
<a name="module_DyteConnectedMeetings+createMeetings"></a>

### meeting.connectedMeetings.createMeetings()

create connected meetings

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)  
<a name="module_DyteConnectedMeetings+updateMeetings"></a>

### meeting.connectedMeetings.updateMeetings()

update meeting title

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)  
<a name="module_DyteConnectedMeetings+deleteMeetings"></a>

### meeting.connectedMeetings.deleteMeetings()

delete connected meetings

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)  
<a name="module_DyteConnectedMeetings+moveParticipants"></a>

### meeting.connectedMeetings.moveParticipants(sourceMeetingId, destinationMeetingId, participantIds)

Trigger event to move participants

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)

| Param                | Type                              | Description                    |
| -------------------- | --------------------------------- | ------------------------------ |
| sourceMeetingId      | <code>string</code>               | id of source meeting           |
| destinationMeetingId | <code>string</code>               | id of destination meeting      |
| participantIds       | <code>Array.&lt;string&gt;</code> | list of id of the participants |

<a name="module_DyteConnectedMeetings+moveParticipantsWithCustomPreset"></a>

### meeting.connectedMeetings.moveParticipantsWithCustomPreset()

Trigger event to move participants with custom preset

**Kind**: instance method of [<code>DyteConnectedMeetings</code>](#module_DyteConnectedMeetings)
