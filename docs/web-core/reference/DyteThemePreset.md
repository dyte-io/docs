---
sidebar_position: 13
web_core_version: 0.42.0
---

<!-- Auto Generated Below -->

<a name="module_DyteThemePreset"></a>

The DyteThemePreset class represents the meeting theme for the current
participant

- [DyteThemePreset](#module_DyteThemePreset)
  - ~~[.setupScreen](#module_DyteThemePreset+setupScreen)~~
  - [.aloneHere](#module_DyteThemePreset+aloneHere)
  - [.waitingRoom](#module_DyteThemePreset+waitingRoom)
  - ~~[.controlBar](#module_DyteThemePreset+controlBar)~~
  - [.header](#module_DyteThemePreset+header)
  - [.pipMode](#module_DyteThemePreset+pipMode)
  - [.viewType](#module_DyteThemePreset+viewType)
  - [.maxVideoStreams](#module_DyteThemePreset+maxVideoStreams)
  - [.maxScreenShareCount](#module_DyteThemePreset+maxScreenShareCount)

<a name="module_DyteThemePreset+setupScreen"></a>

### ~~dyteThemePreset.setupScreen~~

**_Deprecated_**

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+aloneHere"></a>

### dyteThemePreset.aloneHere

The `aloneHere` contains the properties to show a layout when the participant is
alone in the meeting.

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+waitingRoom"></a>

### dyteThemePreset.waitingRoom

The `waitingRoom` contains the properties to show a layout when the participant
is in waiting to join the meeting.

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+controlBar"></a>

### ~~dyteThemePreset.controlBar~~

**_Deprecated_**

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+header"></a>

### dyteThemePreset.header

The `header` contains the properties to show the meeting header with various
elements. The `elements` key contains the following properties `logo` - string
value representing the public URL for the logo `timer` - boolean value
suggesting if the timer should be shown `title` - boolean value suggesting if
the meeting title should be shown `participantCount` - boolean value suggesting
if the participant count shuld be shown `changeLayout` - boolean value
suggesting if the participant can change layout

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+pipMode"></a>

### dyteThemePreset.pipMode

The `pipMode` property returns a boolean value If true, picture-in-picture mode
is enabled for the participant.

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+viewType"></a>

### dyteThemePreset.viewType

The `viewType` tells the type of the meeting possible values are WEBINAR,
GROUPCALL

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+maxVideoStreams"></a>

### dyteThemePreset.maxVideoStreams

The `maxVideoStreams` contains the maximum video streams for mobile and desktop

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+maxScreenShareCount"></a>

### dyteThemePreset.maxScreenShareCount

The `maxScreenShareCount` contains the maximum possible concurrent screen shares

**Kind**: instance property of
[<code>DyteThemePreset</code>](#module_DyteThemePreset)
