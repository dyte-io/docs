---
sidebar_position: 11
web_core_version: 1.6.0
---

<!-- Auto Generated Below -->

<a name="module_DyteStage"></a>

The DyteStage module represents a class to mange the Stage of the meeting
Stage refers to a virtual area, where participants stream are visible to other participants.
When a participant is off stage, they are not producing media but only consuming media from participants who are on Stage


* [DyteStage](#module_DyteStage)
    * [.getAccessRequests()](#module_DyteStage+getAccessRequests)
    * [.requestAccess()](#module_DyteStage+requestAccess)
    * [.cancelRequestAccess()](#module_DyteStage+cancelRequestAccess)
    * [.grantAccess()](#module_DyteStage+grantAccess)
    * [.denyAccess()](#module_DyteStage+denyAccess)
    * [.join()](#module_DyteStage+join)
    * [.leave()](#module_DyteStage+leave)
    * [.kick()](#module_DyteStage+kick)

<a name="module_DyteStage+getAccessRequests"></a>

### meeting.stage.getAccessRequests()
Method to fetch all Stage access requests from viewers

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+requestAccess"></a>

### meeting.stage.requestAccess()
Method to send a request to privileged users to join the stage

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+cancelRequestAccess"></a>

### meeting.stage.cancelRequestAccess()
Method to cancel a previous Stage join request

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+grantAccess"></a>

### meeting.stage.grantAccess()
Method to grant access to Stage.
 This can be in response to a Stage Join request but it can be called on other users as well

`permissions.acceptPresentRequests` privilege required

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+denyAccess"></a>

### meeting.stage.denyAccess()
Method to deny access to Stage.
This should be called in response to a Stage Join request

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+join"></a>

### meeting.stage.join()
Method to join the stage
Users either need to have the permission in the preset or must be accepted by a priveleged
user to call this method

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+leave"></a>

### meeting.stage.leave()
Method to leave the stage
Users must either be on the stage already or be accepted to join the stage
to call this method

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
<a name="module_DyteStage+kick"></a>

### meeting.stage.kick()
Method to kick a user off the stage

`permissions.kickParticipant` privilege required

**Kind**: instance method of [<code>DyteStage</code>](#module_DyteStage)  
