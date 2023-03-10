---
sidebar_position: 15
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DyteRecording"></a>

The DyteRecording module represents the state of the current recording, and
allows to start/stop recordings and check if there's a recording in progress.

- [DyteRecording](#module_DyteRecording)
  - [.recordingId](#module_DyteRecording+recordingId)
  - [.start()](#module_DyteRecording+start)
  - [.stop()](#module_DyteRecording+stop)
  - [.getRecordingId()](#module_DyteRecording+getRecordingId)

<a name="module_DyteRecording+recordingId"></a>

### meeting.recording.recordingId

NOTE(CallMeTarush): Not setting recording state here, waiting for recording peer
to join to set state automatically

**Kind**: instance property of
[<code>DyteRecording</code>](#module_DyteRecording)  
<a name="module_DyteRecording+start"></a>

### meeting.recording.start()

Starts recording the meeting.

**Kind**: instance method of
[<code>DyteRecording</code>](#module_DyteRecording)  
<a name="module_DyteRecording+stop"></a>

### meeting.recording.stop()

Stops recording the meeting assuming there is a recording in progress.

**Kind**: instance method of
[<code>DyteRecording</code>](#module_DyteRecording)  
<a name="module_DyteRecording+getRecordingId"></a>

### meeting.recording.getRecordingId()

Refreshes current recording state.

**Kind**: instance method of [<code>DyteRecording</code>](#module_DyteRecording)
