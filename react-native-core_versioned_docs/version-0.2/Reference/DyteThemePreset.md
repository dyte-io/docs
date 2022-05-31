---
sidebar_position: 13
web_core_version: 0.18.1
---

<!-- Auto Generated Below -->

<a name="module_DyteThemePreset"></a>

The DyteThemePreset class represents the meeting theme for the current participant


* [DyteThemePreset](#module_DyteThemePreset)
    * [.setupScreen](#module_DyteThemePreset+setupScreen)
    * [.aloneHere](#module_DyteThemePreset+aloneHere)
    * [.waitingRoom](#module_DyteThemePreset+waitingRoom)
    * [.controlBar](#module_DyteThemePreset+controlBar)
    * [.header](#module_DyteThemePreset+header)
    * [.pipMode](#module_DyteThemePreset+pipMode)
    * [.autoTune](#module_DyteThemePreset+autoTune)
    * [.grid](#module_DyteThemePreset+grid)

<a name="module_DyteThemePreset+setupScreen"></a>

### meeting.self.suggestedTheme.setupScreen
The `setupScreen` represents the setup screen for the meeting.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+aloneHere"></a>

### meeting.self.suggestedTheme.aloneHere
The `aloneHere` contains the properties to show a layout when
the participant is alone in the meeting.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+waitingRoom"></a>

### meeting.self.suggestedTheme.waitingRoom
The `waitingRoom` contains the properties to show a layout when
the participant is in waiting to join the meeting.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+controlBar"></a>

### meeting.self.suggestedTheme.controlBar
The `controlBar` contains the properties to show the meeting control bar with
various action buttons for the meeting.
The `elements` key contains the various action buttons.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+header"></a>

### meeting.self.suggestedTheme.header
The `header` contains the properties to show the meeting header with various elements.
The `elements` key contains the following properties
`logo` - string value representing the public URL for the logo
`timer` - boolean value suggesting if the timer should be shown
`title` - boolean value suggesting if the meeting title should be shown
`participantCount` - boolean value suggesting if the participant count shuld be shown
`changeLayout` - boolean value suggesting if the participant can change layout

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+pipMode"></a>

### meeting.self.suggestedTheme.pipMode
The `pipMode` property returns a boolean value
If true, picture-in-picture mode is enabled for the participant.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+autoTune"></a>

### meeting.self.suggestedTheme.autoTune
The `autoTune` property returns a boolean value
If true, force the participant's video to be in compatibility mode.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
<a name="module_DyteThemePreset+grid"></a>

### meeting.self.suggestedTheme.grid
The `grid` contains the properties to show participant grid for the meeting.
`defaultView` key points to the view type, possible values are `MULTI`, `SINGLE`
`multi` and `single` keys contain the following preferences to show grid layout.
`maxVideoCount` - number of participants to show in the grid.
`videoFit` - string value suggesting how to align the video content.

**Kind**: instance property of [<code>DyteThemePreset</code>](#module_DyteThemePreset)  
