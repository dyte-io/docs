# Plugin View - Main

Add plugins to your meetings.

import { loadMeeting } from '/src/utils/meeting';

```jsx
<DytePluginMain />
```

<div className="plugin-preview" ref={() => loadMeeting('dyte-plugin')}>
    <dyte-plugin-main id="dyte-plugin" className="w-full h-full" />
</div>
