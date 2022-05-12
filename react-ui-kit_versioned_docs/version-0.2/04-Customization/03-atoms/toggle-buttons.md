# Toggle Buttons

Buttons that toggle

import { loadMeetingMultiple } from '/src/utils/meeting';

List of toggle buttons:

- dyte-mic-toggle
- dyte-camera-toggle
- dyte-chat-toggle
- dyte-participants-toggle
- dyte-plugins-toggle
- dyte-settings-toggle

```jsx
<DyteMicToggle meeting={meeting} />
<DyteCameraToggle meeting={meeting} />
<DyteChatToggle meeting={meeting} />
```

<div ref={() => loadMeetingMultiple('ui-kit-el')}></div>

<div class="ui-preview">
  <dyte-mic-toggle class="ui-kit-el" />
  <dyte-camera-toggle class="ui-kit-el" />
  <dyte-chat-toggle class="ui-kit-el" />
</div>

You can also pass a `size` prop to these buttons:

```jsx
<DyteParticipantsToggle size="sm" />
<DytePluginsToggle size="sm" />
<DyteSettingsToggle size="sm" />
```

<div class="ui-preview">
  <dyte-participants-toggle class="ui-kit-el" size="sm" />
  <dyte-plugins-toggle class="ui-kit-el" size="sm" />
  <dyte-settings-toggle class="ui-kit-el" size="sm" />
</div>
