---
sidebar_position: 3
web_core_version: 2.4.1
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
  - [.waitlisted](#module_DyteParticipants+waitlisted)
  - [.joined](#module_DyteParticipants+joined)
  - ~~[.active](#module_DyteParticipants+active)~~
  - [.videoSubscribed](#module_DyteParticipants+videoSubscribed)
  - [.audioSubscribed](#module_DyteParticipants+audioSubscribed)
  - [.pinned](#module_DyteParticipants+pinned)
  - [.all](#module_DyteParticipants+all)
  - [.pip](#module_DyteParticipants+pip)
  - [.socketJoined](#module_DyteParticipants+socketJoined)
  - [.mediaJoined](#module_DyteParticipants+mediaJoined)
  - [.viewMode](#module_DyteParticipants+viewMode)
  - [.currentPage](#module_DyteParticipants+currentPage)
  - [.lastActiveSpeaker](#module_DyteParticipants+lastActiveSpeaker)
  - [.selectedPeers](#module_DyteParticipants+selectedPeers)
  - [.count](#module_DyteParticipants+count)
  - [.maxActiveParticipantsCount](#module_DyteParticipants+maxActiveParticipantsCount)
  - [.pageCount](#module_DyteParticipants+pageCount)
  - [.setMaxActiveParticipantsCount(limit:)](#module_DyteParticipants+setMaxActiveParticipantsCount)
  - [.acceptWaitingRoomRequest(id)](#module_DyteParticipants+acceptWaitingRoomRequest)
  - [.acceptAllWaitingRoomRequest()](#module_DyteParticipants+acceptAllWaitingRoomRequest)
  - [.rejectWaitingRoomRequest(id)](#module_DyteParticipants+rejectWaitingRoomRequest)
  - [.setViewMode(viewMode)](#module_DyteParticipants+setViewMode)
  - [.setPage(page)](#module_DyteParticipants+setPage)
  - [.disableAllAudio(allowUnmute)](#module_DyteParticipants+disableAllAudio)
  - [.disableAllVideo()](#module_DyteParticipants+disableAllVideo)
  - ~~[.disableAudio(participantId)](#module_DyteParticipants+disableAudio)~~
  - ~~[.disableVideo(participantId)](#module_DyteParticipants+disableVideo)~~
  - ~~[.kick(participantId)](#module_DyteParticipants+kick)~~
  - [.kickAll()](#module_DyteParticipants+kickAll)
  - [.broadcastMessage(target)](#module_DyteParticipants+broadcastMessage)
  - [.getAllJoinedPeers()](#module_DyteParticipants+getAllJoinedPeers)
  - [.getParticipantsInMeetingPreJoin()](#module_DyteParticipants+getParticipantsInMeetingPreJoin)

<a name="module_DyteParticipants+waitlisted"></a>

### meeting.participants.waitlisted

Returns a list of participants waiting to join the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+joined"></a>

### meeting.participants.joined

Returns a list of all participants in the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+active"></a>

### ~~meeting.participants.active~~

**_Deprecated_**

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+videoSubscribed"></a>

### meeting.participants.videoSubscribed

Returns a list of participants whose video streams are currently consumed.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+audioSubscribed"></a>

### meeting.participants.audioSubscribed

Returns a list of participants whose audio streams are currently consumed.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+pinned"></a>

### meeting.participants.pinned

Returns a list of participants who have been pinned.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+all"></a>

### meeting.participants.all

Returns all added participants irrespective of whether they are currently
in the meeting or not

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+pip"></a>

### meeting.participants.pip

Return the controls for Picture-in-Picture

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+socketJoined"></a>

### meeting.participants.socketJoined

Returns true if the local participant has joined the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+mediaJoined"></a>

### meeting.participants.mediaJoined

Returns true if the local participant has joined the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+viewMode"></a>

### meeting.participants.viewMode

Indicates whether the meeting is in 'ACTIVE_GRID' mode or 'PAGINATED' mode.

In 'ACTIVE_GRID' mode, participants are populated in the participants.active map
dynamically. The participants present in the map will keep changing when other
participants unmute their audio or turn on their videos.

In 'PAGINATED' mode, participants are populated in the participants.active map
just once, and the participants in the map will only change if the page number is
changed by the user using setPage(page).

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+currentPage"></a>

### meeting.participants.currentPage

This indicates the current page that has been set by the user in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+lastActiveSpeaker"></a>

### meeting.participants.lastActiveSpeaker

This stores the `participantId` of the last participant who spoke in the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+selectedPeers"></a>

### meeting.participants.selectedPeers

Keeps a list of all participants who have been present in the selected peers list.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+count"></a>

### meeting.participants.count

Returns the number of participants who are joined in the meeting.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+maxActiveParticipantsCount"></a>

### meeting.participants.maxActiveParticipantsCount

Returns the maximum number of participants that can be present in
the active map.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+pageCount"></a>

### meeting.participants.pageCount

Returns the number of pages that are available in the meeting in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+setMaxActiveParticipantsCount"></a>

### meeting.participants.setMaxActiveParticipantsCount(limit:)

Updates the maximum number of participants that are populated in
the active map.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param  | Description       |
| ------ | ----------------- |
| limit: | Updated max limit |

<a name="module_DyteParticipants+acceptWaitingRoomRequest"></a>

### meeting.participants.acceptWaitingRoomRequest(id)

Accepts requests from waitlisted participants if user
has appropriate permissions.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param | Description                                     |
| ----- | ----------------------------------------------- |
| id    | peerId or userId of the waitlisted participant. |

<a name="module_DyteParticipants+acceptAllWaitingRoomRequest"></a>

### meeting.participants.acceptAllWaitingRoomRequest()

We need a new event for socket service events
since if we send them all together, sequence of events
can be unreliable

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+rejectWaitingRoomRequest"></a>

### meeting.participants.rejectWaitingRoomRequest(id)

Rejects requests from waitlisted participants if user
has appropriate permissions.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants+setViewMode"></a>

### meeting.participants.setViewMode(viewMode)

Sets the view mode of the meeting to either ACTIVE_GRID or PAGINATED.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param    | Description                                          |
| -------- | ---------------------------------------------------- |
| viewMode | The mode in which the active map should be populated |

<a name="module_DyteParticipants+setPage"></a>

### meeting.participants.setPage(page)

Populates the active map with participants present in the page number
indicated by the parameter `page` in PAGINATED mode.
Does not do anything in ACTIVE_GRID mode.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param | Description                |
| ----- | -------------------------- |
| page  | The page number to be set. |

<a name="module_DyteParticipants+disableAllAudio"></a>

### meeting.participants.disableAllAudio(allowUnmute)

Disables audio for all participants in the meeting.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param       | Description                                        |
| ----------- | -------------------------------------------------- |
| allowUnmute | Allow participants to unmute after they are muted. |

<a name="module_DyteParticipants+disableAllVideo"></a>

### meeting.participants.disableAllVideo()

Disables video for all participants in the meeting.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+disableAudio"></a>

### ~~meeting.participants.disableAudio(participantId)~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants+disableVideo"></a>

### ~~meeting.participants.disableVideo(participantId)~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants+kick"></a>

### ~~meeting.participants.kick(participantId)~~

**_Deprecated_**

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param         | Description                     |
| ------------- | ------------------------------- |
| participantId | ID of participant to be kicked. |

<a name="module_DyteParticipants+kickAll"></a>

### meeting.participants.kickAll()

Kicks all participants from the meeting.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+broadcastMessage"></a>

### meeting.participants.broadcastMessage(target)

Broadcasts the message to participants

If no `target` is specified it is sent to all participants including `self`.

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)

| Param  | Description                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| target | object containing a list of `participantIds` or object containing `presetName` - every user with that preset will be sent the message |

<a name="module_DyteParticipants+getAllJoinedPeers"></a>

### meeting.participants.getAllJoinedPeers()

Returns all peers currently present in the room
If you are in a group call, use `meeting.participants.joined`
instead

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)  
<a name="module_DyteParticipants+getParticipantsInMeetingPreJoin"></a>

### meeting.participants.getParticipantsInMeetingPreJoin()

Returns all peers currently in the room, is a non paginated call
and should only be used if you are in a non room joined state,
if in a joined group call, use `meeting.participants.joined`

**Kind**: instance method of [<code>DyteParticipants</code>](#module_DyteParticipants)
