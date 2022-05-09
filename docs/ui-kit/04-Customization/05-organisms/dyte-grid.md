---
sidebar_position: 1
---

# Peers Grid

Renders a grid of all participants in a meeting in the current page.

import { loadMeeting } from '/src/utils/meeting';

```html
<dyte-grid aspect-ratio="16:9" gap="8" />
```

<div className="grid-preview" ref={() => loadMeeting('dyte-grid')}>
    <dyte-grid id="dyte-grid" className="w-full h-full" aspect-ratio="16:9" gap="8" />
</div>
