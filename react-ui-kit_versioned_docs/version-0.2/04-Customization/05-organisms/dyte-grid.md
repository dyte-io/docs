---
sidebar_position: 1
---

# Participant Grid

Renders a grid of all participants in a meeting in the current page.

import { loadMeeting } from '/src/utils/meeting';

```jsx
<DyteGrid aspect-ratio="16:9" gap="8" meeting={meeting} />
```

<div className="grid-preview" ref={() => loadMeeting('dyte-grid').then((m) => m.participants.mockAddParticipants(2,2))}>
    <dyte-grid id="dyte-grid" className="w-full h-full" aspect-ratio="16:9" gap="8" />
</div>
