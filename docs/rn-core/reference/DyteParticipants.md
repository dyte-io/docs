---
sidebar_position: 3
web_core_version: 1.32.1
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipants"></a>

This module represents all the participants in the meeting (except the local user).
It consists of 4 maps:

- `joined`: A map of all participants that have joined the meeting.
- `waitlisted`: A map of all participants that have been added to the waitlist.
- `active`: A map of active participants who should be displayed in the meeting grid.
- `pinned`: A map of pinned participants.

* [DyteParticipants](#module_DyteParticipants)
  - [.waitlisted](#module_DyteParticipants--module.exports+waitlisted)
  - [.joined](#module_DyteParticipants--module.exports+joined)
  - [.active](#module_DyteParticipants--module.exports+active)
  - [.pinned](#module_DyteParticipants--module.exports+pinned)
  - [.all](#module_DyteParticipants--module.exports+all)
  - [.pip](#module_DyteParticipants--module.exports+pip)
  - [.roomJoined](#module_DyteParticipants--module.exports+roomJoined)
  - [.viewMode](#module_DyteParticipants--module.exports+viewMode)
  - [.currentPage](#module_DyteParticipants--module.exports+currentPage)
  - [.lastActiveSpeaker](#module_DyteParticipants--module.exports+lastActiveSpeaker)
  - [.selectedPeers](#module_DyteParticipants--module.exports+selectedPeers)
  - [.count](#module_DyteParticipants--module.exports+count)
  - [.maxActiveParticipantsCount](#module_DyteParticipants--module.exports+maxActiveParticipantsCount)
  - [.pageCount](#module_DyteParticipants--module.exports+pageCount)
  - [.setMaxActiveParticipantsCount(limit:)](#module_DyteParticipants--module.exports+setMaxActiveParticipantsCount)
  - [.acceptWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+acceptWaitingRoomRequest)
  - [.acceptAllWaitingRoomRequest()](#module_DyteParticipants--module.exports+acceptAllWaitingRoomRequest)
  - [.rejectWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+rejectWaitingRoomRequest)
  - [.setViewMode(viewMode)](#module_DyteParticipants--module.exports+setViewMode)
  - [.setPage(page)](#module_DyteParticipants--module.exports+setPage)
  - [.disableAllAudio(allowUnmute)](#module_DyteParticipants--module.exports+disableAllAudio)
  - [.disableAllVideo()](#module_DyteParticipants--module.exports+disableAllVideo)
  - [.kickAll()](#module_DyteParticipants--module.exports+kickAll)
  - [.broadcastMessage(target)](#module_DyteParticipants--module.exports+broadcastMessage)
  - [.getAllJoinedPeers()](#module_DyteParticipants--module.exports+getAllJoinedPeers)
  - [.getParticipantsInMeetingPreJoin()](#module_DyteParticipants--module.exports+getParticipantsInMeetingPreJoin)

<a name="module_DyteParticipants--module.exports+waitlisted"></a>

### participants.waitlisted

Returns a list of participants waiting to join the meeting.

<a name="module_DyteParticipants--module.exports+joined"></a>

### participants.joined

Returns a list of all participants in the meeting.

<a name="module_DyteParticipants--module.exports+active"></a>

### participants.active

Returns a list of participants whose streams are currently consumed.

<a name="module_DyteParticipants--module.exports+pinned"></a>

### participants.pinned

Returns a list of participants who have been pinned.

<a name="module_DyteParticipants--module.exports+all"></a>

### participants.all

Returns all added participants irrespective of whether they are currently
in the meeting or not

<a name="module_DyteParticipants--module.exports+pip"></a>

### participants.pip

Return the controls for Picture-in-Picture

<a name="module_DyteParticipants--module.exports+roomJoined"></a>

### participants.roomJoined

Returns true if the local participant has joined the meeting.

<a name="module_DyteParticipants--module.exports+viewMode"></a>

### participants.viewMode

Indicates whether the meeting is in 'ACTIVE_GRID' mode or 'PAGINATED' mode.

In 'ACTIVE_GRID' mode, participants are populated in the participants.active map
dynamically. The participants present in the map will keep changing when other
participants unmute their audio or turn on their videos.

In 'PAGINATED' mode, participants are populated in the participants.active map
just once, and the participants in the map will only change if the page number is
changed by the user using setPage(page).

<a name="module_DyteParticipants--module.exports+currentPage"></a>

### participants.currentPage

This indicates the current page that has been set by the user in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

<a name="module_DyteParticipants--module.exports+lastActiveSpeaker"></a>

### participants.lastActiveSpeaker

This stores the `participantId` of the last participant who spoke in the meeting.

<a name="module_DyteParticipants--module.exports+selectedPeers"></a>

### participants.selectedPeers

Keeps a list of all participants who have been present in the selected peers list.

<a name="module_DyteParticipants--module.exports+count"></a>

### participants.count

Returns the number of participants who are joined in the meeting.

<a name="module_DyteParticipants--module.exports+maxActiveParticipantsCount"></a>

### participants.maxActiveParticipantsCount

Returns the maximum number of participants that can be present in
the active map.

<a name="module_DyteParticipants--module.exports+pageCount"></a>

### participants.pageCount

Returns the number of pages that are available in the meeting in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

<a name="module_DyteParticipants--module.exports+setMaxActiveParticipantsCount"></a>

### participants.setMaxActiveParticipantsCount(limit:)

Updates the maximum number of participants that are populated in
the active map.

| Param  | Description       |
| ------ | ----------------- |
| limit: | Updated max limit |

<a name="module_DyteParticipants--module.exports+acceptWaitingRoomRequest"></a>

### participants.acceptWaitingRoomRequest(id)

Accepts requests from waitlisted participants if user
has appropriate permissions.

| Param | Description                                     |
| ----- | ----------------------------------------------- |
| id    | peerId or userId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+acceptAllWaitingRoomRequest"></a>

### participants.acceptAllWaitingRoomRequest()

We need a new event for socket service events
since if we send them all together, sequence of events
can be unreliable

<a name="module_DyteParticipants--module.exports+rejectWaitingRoomRequest"></a>

### participants.rejectWaitingRoomRequest(id)

Rejects requests from waitlisted participants if user
has appropriate permissions.

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+setViewMode"></a>

### participants.setViewMode(viewMode)

Sets the view mode of the meeting to either ACTIVE_GRID or PAGINATED.

| Param    | Description                                          |
| -------- | ---------------------------------------------------- |
| viewMode | The mode in which the active map should be populated |

<a name="module_DyteParticipants--module.exports+setPage"></a>

### participants.setPage(page)

Populates the active map with participants present in the page number
indicated by the parameter `page` in PAGINATED mode.
Does not do anything in ACTIVE_GRID mode.

| Param | Description                |
| ----- | -------------------------- |
| page  | The page number to be set. |

<a name="module_DyteParticipants--module.exports+disableAllAudio"></a>

### participants.disableAllAudio(allowUnmute)

Disables audio for all participants in the meeting.

| Param       | Description                                        |
| ----------- | -------------------------------------------------- |
| allowUnmute | Allow participants to unmute after they are muted. |

<a name="module_DyteParticipants--module.exports+disableAllVideo"></a>

### participants.disableAllVideo()

Disables video for all participants in the meeting.

<a name="module_DyteParticipants--module.exports+disableAudio"></a>

### participants.~~disableAudio(participantId)~~

**_Deprecated_**

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+disableVideo"></a>

### participants.~~disableVideo(participantId)~~

**_Deprecated_**

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+kick"></a>

### participants.~~kick(participantId)~~

**_Deprecated_**

| Param         | Description                     |
| ------------- | ------------------------------- |
| participantId | ID of participant to be kicked. |

<a name="module_DyteParticipants--module.exports+kickAll"></a>

### participants.kickAll()

Kicks all participants from the meeting.

<a name="module_DyteParticipants--module.exports+broadcastMessage"></a>

### participants.broadcastMessage(target)

Broadcasts the message to participants

If no `target` is specified it is sent to all participants including `self`.

| Param  | Description                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| target | object containing a list of `participantIds` or object containing `presetName` - every user with that preset will be sent the message |

<a name="module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests"></a>

### participants.~~acceptAllRequestToJoinStageRequests()~~

**_Deprecated_**

<a name="module_DyteParticipants--module.exports+getAllJoinedPeers"></a>

### participants.getAllJoinedPeers()

Returns all peers currently present in the room
If you are in a group call, use `meeting.participants.joined`
instead

<a name="module_DyteParticipants--module.exports+getParticipantsInMeetingPreJoin"></a>

### participants.getParticipantsInMeetingPreJoin()

Returns all peers currently in the room, is a non paginated call
and should only be used if you are in a non room joined state,
if in a joined group call, use `meeting.participants.joined`
