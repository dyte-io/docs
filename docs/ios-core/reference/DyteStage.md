---
sidebar_position: 10
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteStage"></a>

The DyteStage class represents functionality to manage the Stage of the meeting
Stage refers to a virtual area, where participants stream are visible to other participants.
When a participant is off-stage, they are not producing media
but only consuming media from participants who are on Stage

- [DyteStage](#module_DyteStage)
  - [.stageStatus](#module_DyteStage+StageSatus)
  - [.accessRequests](#module_DyteStage+getAccessRequests)
  - [.requestAccess()](#module_DyteStage+requestAccess)
  - [.cancelRequestAccess()](#module_DyteStage+cancelRequestAccess)
  - [.grantAccess()](#module_DyteStage+grantAccess)
  - [.denyAccess()](#module_DyteStage+denyAccess)
  - [.join()](#module_DyteStage+join)
  - [.leave()](#module_DyteStage+leave)
  - [.kick()](#module_DyteStage+kick)

<a name="module_DyteStage+StageSatus"></a>

### get stage status

```swift
let  stageStatus: StageStatus
```

Tell the current status of stage for the local user (`meeting.localUser`). To know about possible values check [StageStatus](/ios-core-new/reference/StageStatus)

<a name="module_DyteStage+getAccessRequests"></a>

### get Access Request

```swift
let  accessRequests: [DyteJoinedMeetingParticipant]
```

Property to fetch all the participants who raised request to join stage.

<a name="module_DyteStage+requestAccess"></a>

### meeting.stage.requestAccess()

```swift
func requestAccess()
```

Method to send a request to privileged users to join the stage. This request is always raised by you(`meeting.localUser`)
for eg.

```swift
meeting.stage.requestAccess()
```

<a name="module_DyteStage+cancelRequestAccess"></a>

### Cancel request to join stage

```swift
func cancelRequestAccess()
```

Method to cancel a previous Stage join request raised by you(`meeting.localUser`)
for eg.

```swift
meeting.stage.cancelRequestAccess()
```

<a name="module_DyteStage+grantAccess"></a>

### Grant access request

```swift
func grantAccess(id: String)
```

Method to grant access to Stage for the participant id passed.
This can be in response to a Stage Join request, but it can be called on other users as well
for eg.

```swift
meeting.stage.grantAccess(id: participant.id)
```

<a name="module_DyteStage+denyAccess"></a>

### Deny access request

```swift
func denyAccess(id: String)
```

Method to deny access to Stage for the participant id passed.
This should be called in response to a Stage Join request.
for eg.

```swift
meeting.stage.denyAccess(id: participant.id)
```

<a name="module_DyteStage+join"></a>

### Join stage

```swift
func join()
```

Method to join the stage
Users either need to have the permission in the preset or must be accepted by a privileged
user to call this method
for eg.

```swift
meeting.stage.join()
```

<a name="module_DyteStage+leave"></a>

### Leave stage

```swift
func leave()
```

Method to leave the stage
Users must either be on the stage already or be accepted to join the stage
to call this method
for eg.

```swift
meeting.stage.leave()
```

<a name="module_DyteStage+kick"></a>

### Kick participant

```swift
func kick(id: String)
```

Method to kick a participant off the stage for the participant id passed.

for eg.

```swift
meeting.stage.kick(id: participant.id)
```
