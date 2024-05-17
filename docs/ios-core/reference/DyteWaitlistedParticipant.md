---
sidebar_position: 4
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteParticipant"></a>
**Subclass** of [DyteMeetingParticipant](/ios-core-new/reference/DyteMeetingParticipant)  
This class represents a single participant in the meeting.
The participant object can be accessed from one of the participant lists
present in the `meeting.participants` object. For example,

```swift
let participant1 = meeting.participants.active[0];
let participant2 = meeting.participants.joined[0];
```

- [DyteWaitlistedParticipant](#module_DyteParticipant)
  - [.acceptWaitListedRequest()](#module_DyteParticipant--this.+acceptWaitListedRequest)
  - [.rejectWaitListedRequest()](#module_DyteParticipant--this.+rejectWaitListedRequest)

<a name="module_DyteParticipant--this.+acceptWaitListedRequest"></a>

#### Accept Waiting room request

```swift
fun acceptWaitListedRequest()
```

Return a view which is used to render participant camera streams.

<a name="module_DyteParticipant--this.+rejectWaitListedRequest"></a>

#### Reject Waiting room request

```swift
fun rejectWaitListedRequest()
```

Return a view which is used to render participant screen streams.
