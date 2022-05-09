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

```html
<dyte-mic-toggle />
<dyte-camera-toggle />
<dyte-chat-toggle />
```

<div ref={() => loadMeetingMultiple('ui-kit-el')}></div>

<div class="ui-preview">
  <dyte-mic-toggle class="ui-kit-el" />
  <dyte-camera-toggle class="ui-kit-el" />
  <dyte-chat-toggle class="ui-kit-el" />
</div>

You can also pass a `size` prop to these buttons:

```html
<dyte-participants-toggle size="sm" />
<dyte-plugins-toggle size="sm" />
<dyte-settings-toggle size="sm" />
```

<div class="ui-preview">
  <dyte-participants-toggle class="ui-kit-el" size="sm" />
  <dyte-plugins-toggle class="ui-kit-el" size="sm" />
  <dyte-settings-toggle class="ui-kit-el" size="sm" />
</div>
