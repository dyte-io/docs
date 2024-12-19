---
sidebar_position: 10
web_core_version: 1.20.0
---

<!-- Auto Generated Below -->

<a name="module_DyteStage"></a>

```swift
enum StageStatus {
    case OFF_STAGE
    case REQUESTED_TO_JOIN_STAGE
    case ACCEPTED_TO_JOIN_STAGE
    case REJECTED_TO_JOIN_STAGE
    case ON_STAGE
}
```

The DyteStageStatus represent an enum to manage the Stage of the meeting
Stage refers to a virtual area, where participants stream are visible to other participants.
When a participant is off-stage, they are not producing media
but only consuming media from participants who are on Stage. Below are the specificed status of the stage.

### case OFF_STAGE

when the participant is not on the Stage ie He/She is a viewer and can't produce media

### case REQUESTED_TO_JOIN_STAGE

When participant has permission `Need to Request` from the preset `Media` menu and participant requested to join stage from the Host by calling this method `meeting.stage.requestAccess()`

### case ACCEPTED_TO_JOIN_STAGE

When host invited a viewer to join stage by calling `meeting.stage.grantAccess(id: participant.id)` Or
When request to join stage raised by the viewer is accepted by the host.

### case REJECTED_TO_JOIN_STAGE

When host rejected a viewer request to join stage by calling `meeting.stage.denyAccess(id: participant.id)`

### case ON_STAGE

when the participant is on the Stage and can produce media. Participant can move to this stage by calling the `meeting.stage.join()`
