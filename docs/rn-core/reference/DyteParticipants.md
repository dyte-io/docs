---
sidebar_position: 3
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipants"></a>

This module represents all the participants in the meeting (except the local
user). It consists of 4 maps:

- `joined`: A map of all participants that have joined the meeting.
- `waitlisted`: A map of all participants that have been added to the waitlist.
- `active`: A map of active participants who should be displayed in the meeting
  grid.
- `pinned`: A map of pinned participants.

* [DyteParticipants](#module_DyteParticipants)
  - [module.exports](#exp_module_DyteParticipants--module.exports) ⏏
    - [new module.exports(roomNodeClient, self)](#new_module_DyteParticipants--module.exports_new)
    - [.waitlisted](#module_DyteParticipants--module.exports+waitlisted)
    - [.joined](#module_DyteParticipants--module.exports+joined)
    - [.active](#module_DyteParticipants--module.exports+active)
    - [.pinned](#module_DyteParticipants--module.exports+pinned)
    - [.viewMode](#module_DyteParticipants--module.exports+viewMode)
    - [.currentPage](#module_DyteParticipants--module.exports+currentPage)
    - [.lastActiveSpeaker](#module_DyteParticipants--module.exports+lastActiveSpeaker)
    - [.selectedPeers](#module_DyteParticipants--module.exports+selectedPeers)
    - [.count](#module_DyteParticipants--module.exports+count)
    - [.maxActiveParticipantsCount](#module_DyteParticipants--module.exports+maxActiveParticipantsCount)
    - [.pageCount](#module_DyteParticipants--module.exports+pageCount)
    - [.acceptWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+acceptWaitingRoomRequest)
    - [.rejectWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+rejectWaitingRoomRequest)
    - [.setViewMode(viewMode)](#module_DyteParticipants--module.exports+setViewMode)
    - [.setPage(page)](#module_DyteParticipants--module.exports+setPage)
    - [.disableAllAudio(allowUnMute)](#module_DyteParticipants--module.exports+disableAllAudio)
    - [.disableAllVideo()](#module_DyteParticipants--module.exports+disableAllVideo)
    - ~~[.disableAudio(participantId)](#module_DyteParticipants--module.exports+disableAudio)~~
    - ~~[.disableVideo(participantId)](#module_DyteParticipants--module.exports+disableVideo)~~
    - ~~[.kick(participantId)](#module_DyteParticipants--module.exports+kick)~~
    - [.kickAll()](#module_DyteParticipants--module.exports+kickAll)
    - [.broadcastMessage()](#module_DyteParticipants--module.exports+broadcastMessage)
    - [.acceptAllRequestToJoinStageRequests()](#module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests)

<a name="exp_module_DyteParticipants--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_DyteParticipants--module.exports_new"></a>

#### new module.exports(roomNodeClient, self)

This constructs a new DyteParticipant object and maintains the maps of
active/joined/waitlisted/pinned/selectedPeers maps.

| Param          | Description      |
| -------------- | ---------------- |
| roomNodeClient | : RoomNodeClient |
| self           | : DyteSelf       |

<a name="module_DyteParticipants--module.exports+waitlisted"></a>

#### module.exports.waitlisted

Returns a list of participants waiting to join the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+joined"></a>

#### module.exports.joined

Returns a list of all participants in the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+active"></a>

#### module.exports.active

Returns a list of participants whose streams are currently consumed.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+pinned"></a>

#### module.exports.pinned

Returns a list of participants who have been pinned.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+viewMode"></a>

#### module.exports.viewMode

Indicates whether the meeting is in 'ACTIVE_GRID' mode or 'PAGINATED' mode.

In 'ACTIVE_GRID' mode, participants are populated in the participants.active map
dynamically. The participants present in the map will keep changing when other
participants unmute their audio or turn on their videos.

In 'PAGINATED' mode, participants are populated in the participants.active map
just once, and the participants in the map will only change if the page number
is changed by the user using setPage(page).

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+currentPage"></a>

#### module.exports.currentPage

This indicates the current page that has been set by the user in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+lastActiveSpeaker"></a>

#### module.exports.lastActiveSpeaker

This stores the `participantId` of the last participant who spoke in the
meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+selectedPeers"></a>

#### module.exports.selectedPeers

Keeps a list of all participants who have been present in the selected peers
list.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+count"></a>

#### module.exports.count

Returns the number of participants who are joined in the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+maxActiveParticipantsCount"></a>

#### module.exports.maxActiveParticipantsCount

Returns the maximum number of participants that can be present in the active
map.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+pageCount"></a>

#### module.exports.pageCount

Returns the number of pages that are available in the meeting in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+acceptWaitingRoomRequest"></a>

#### module.exports.acceptWaitingRoomRequest(id)

Accepts requests from waitlisted participants if user has appropriate
permissions.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+rejectWaitingRoomRequest"></a>

#### module.exports.rejectWaitingRoomRequest(id)

Rejects requests from waitlisted participants if user has appropriate
permissions.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+setViewMode"></a>

#### module.exports.setViewMode(viewMode)

Sets the view mode of the meeting to either ACTIVE_GRID or PAGINATED.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param    | Description                                          |
| -------- | ---------------------------------------------------- |
| viewMode | The mode in which the active map should be populated |

<a name="module_DyteParticipants--module.exports+setPage"></a>

#### module.exports.setPage(page)

Populates the active map with participants present in the page number indicated
by the parameter `page` in PAGINATED mode. Does not do anything in ACTIVE_GRID
mode.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                |
| ----- | -------------------------- |
| page  | The page number to be set. |

<a name="module_DyteParticipants--module.exports+disableAllAudio"></a>

#### module.exports.disableAllAudio(allowUnMute)

Disables audio for all participants in the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param       | Description                                        |
| ----------- | -------------------------------------------------- |
| allowUnMute | Allow participants to unmute after they are muted. |

<a name="module_DyteParticipants--module.exports+disableAllVideo"></a>

#### module.exports.disableAllVideo()

Disables video for all participants in the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+disableAudio"></a>

#### ~~module.exports.disableAudio(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+disableVideo"></a>

#### ~~module.exports.disableVideo(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+kick"></a>

#### ~~module.exports.kick(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                     |
| ------------- | ------------------------------- |
| participantId | ID of participant to be kicked. |

<a name="module_DyteParticipants--module.exports+kickAll"></a>

#### module.exports.kickAll()

Kicks all participants from the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+broadcastMessage"></a>

#### module.exports.broadcastMessage()

Broadcasts the message to all participants including `self`.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests"></a>

#### module.exports.acceptAllRequestToJoinStageRequests()

Accepts all join stage requests

## **Kind**: instance method of [<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

sidebar_position: ((sidebar_position)) web_core_version: ((web_core_version))

---

<!-- Auto Generated Below -->

<a name="module_DyteParticipants"></a>

This module represents all the participants in the meeting (except the local
user). It consists of 4 maps:

- `joined`: A map of all participants that have joined the meeting.
- `waitlisted`: A map of all participants that have been added to the waitlist.
- `active`: A map of active participants who should be displayed in the meeting
  grid.
- `pinned`: A map of pinned participants.

* [DyteParticipants](#module_DyteParticipants)
  - [module.exports](#exp_module_DyteParticipants--module.exports) ⏏
    - [new module.exports(roomNodeClient, self)](#new_module_DyteParticipants--module.exports_new)
    - [.waitlisted](#module_DyteParticipants--module.exports+waitlisted)
    - [.joined](#module_DyteParticipants--module.exports+joined)
    - [.active](#module_DyteParticipants--module.exports+active)
    - [.pinned](#module_DyteParticipants--module.exports+pinned)
    - [.viewMode](#module_DyteParticipants--module.exports+viewMode)
    - [.currentPage](#module_DyteParticipants--module.exports+currentPage)
    - [.lastActiveSpeaker](#module_DyteParticipants--module.exports+lastActiveSpeaker)
    - [.selectedPeers](#module_DyteParticipants--module.exports+selectedPeers)
    - [.count](#module_DyteParticipants--module.exports+count)
    - [.maxActiveParticipantsCount](#module_DyteParticipants--module.exports+maxActiveParticipantsCount)
    - [.pageCount](#module_DyteParticipants--module.exports+pageCount)
    - [.acceptWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+acceptWaitingRoomRequest)
    - [.rejectWaitingRoomRequest(id)](#module_DyteParticipants--module.exports+rejectWaitingRoomRequest)
    - [.setViewMode(viewMode)](#module_DyteParticipants--module.exports+setViewMode)
    - [.setPage(page)](#module_DyteParticipants--module.exports+setPage)
    - [.disableAllAudio(allowUnMute)](#module_DyteParticipants--module.exports+disableAllAudio)
    - [.disableAllVideo()](#module_DyteParticipants--module.exports+disableAllVideo)
    - ~~[.disableAudio(participantId)](#module_DyteParticipants--module.exports+disableAudio)~~
    - ~~[.disableVideo(participantId)](#module_DyteParticipants--module.exports+disableVideo)~~
    - ~~[.kick(participantId)](#module_DyteParticipants--module.exports+kick)~~
    - [.kickAll()](#module_DyteParticipants--module.exports+kickAll)
    - [.broadcastMessage()](#module_DyteParticipants--module.exports+broadcastMessage)
    - [.acceptAllRequestToJoinStageRequests()](#module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests)

<a name="exp_module_DyteParticipants--module.exports"></a>

### module.exports ⏏

**Kind**: Exported class  
<a name="new_module_DyteParticipants--module.exports_new"></a>

#### new module.exports(roomNodeClient, self)

This constructs a new DyteParticipant object and maintains the maps of
active/joined/waitlisted/pinned/selectedPeers maps.

| Param          | Description      |
| -------------- | ---------------- |
| roomNodeClient | : RoomNodeClient |
| self           | : DyteSelf       |

<a name="module_DyteParticipants--module.exports+waitlisted"></a>

#### module.exports.waitlisted

Returns a list of participants waiting to join the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+joined"></a>

#### module.exports.joined

Returns a list of all participants in the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+active"></a>

#### module.exports.active

Returns a list of participants whose streams are currently consumed.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+pinned"></a>

#### module.exports.pinned

Returns a list of participants who have been pinned.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+viewMode"></a>

#### module.exports.viewMode

Indicates whether the meeting is in 'ACTIVE_GRID' mode or 'PAGINATED' mode.

In 'ACTIVE_GRID' mode, participants are populated in the participants.active map
dynamically. The participants present in the map will keep changing when other
participants unmute their audio or turn on their videos.

In 'PAGINATED' mode, participants are populated in the participants.active map
just once, and the participants in the map will only change if the page number
is changed by the user using setPage(page).

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+currentPage"></a>

#### module.exports.currentPage

This indicates the current page that has been set by the user in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+lastActiveSpeaker"></a>

#### module.exports.lastActiveSpeaker

This stores the `participantId` of the last participant who spoke in the
meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+selectedPeers"></a>

#### module.exports.selectedPeers

Keeps a list of all participants who have been present in the selected peers
list.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+count"></a>

#### module.exports.count

Returns the number of participants who are joined in the meeting.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+maxActiveParticipantsCount"></a>

#### module.exports.maxActiveParticipantsCount

Returns the maximum number of participants that can be present in the active
map.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+pageCount"></a>

#### module.exports.pageCount

Returns the number of pages that are available in the meeting in PAGINATED mode.
If the meeting is in ACTIVE_GRID mode, this value will be 0.

**Kind**: instance property of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+acceptWaitingRoomRequest"></a>

#### module.exports.acceptWaitingRoomRequest(id)

Accepts requests from waitlisted participants if user has appropriate
permissions.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+rejectWaitingRoomRequest"></a>

#### module.exports.rejectWaitingRoomRequest(id)

Rejects requests from waitlisted participants if user has appropriate
permissions.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                                  |
| ----- | -------------------------------------------- |
| id    | participantId of the waitlisted participant. |

<a name="module_DyteParticipants--module.exports+setViewMode"></a>

#### module.exports.setViewMode(viewMode)

Sets the view mode of the meeting to either ACTIVE_GRID or PAGINATED.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param    | Description                                          |
| -------- | ---------------------------------------------------- |
| viewMode | The mode in which the active map should be populated |

<a name="module_DyteParticipants--module.exports+setPage"></a>

#### module.exports.setPage(page)

Populates the active map with participants present in the page number indicated
by the parameter `page` in PAGINATED mode. Does not do anything in ACTIVE_GRID
mode.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param | Description                |
| ----- | -------------------------- |
| page  | The page number to be set. |

<a name="module_DyteParticipants--module.exports+disableAllAudio"></a>

#### module.exports.disableAllAudio(allowUnMute)

Disables audio for all participants in the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param       | Description                                        |
| ----------- | -------------------------------------------------- |
| allowUnMute | Allow participants to unmute after they are muted. |

<a name="module_DyteParticipants--module.exports+disableAllVideo"></a>

#### module.exports.disableAllVideo()

Disables video for all participants in the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+disableAudio"></a>

#### ~~module.exports.disableAudio(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+disableVideo"></a>

#### ~~module.exports.disableVideo(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                    |
| ------------- | ------------------------------ |
| participantId | ID of participant to be muted. |

<a name="module_DyteParticipants--module.exports+kick"></a>

#### ~~module.exports.kick(participantId)~~

**_Deprecated_**

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)

| Param         | Description                     |
| ------------- | ------------------------------- |
| participantId | ID of participant to be kicked. |

<a name="module_DyteParticipants--module.exports+kickAll"></a>

#### module.exports.kickAll()

Kicks all participants from the meeting.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+broadcastMessage"></a>

#### module.exports.broadcastMessage()

Broadcasts the message to all participants including `self`.

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)  
<a name="module_DyteParticipants--module.exports+acceptAllRequestToJoinStageRequests"></a>

#### module.exports.acceptAllRequestToJoinStageRequests()

Accepts all join stage requests

**Kind**: instance method of
[<code>module.exports</code>](#exp_module_DyteParticipants--module.exports)
