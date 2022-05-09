---
sidebar_position: 6
---

# Pagination

Participant controls

```html
<dyte-pagination />
```

import { loadMeeting } from '/src/utils/meeting';

<div class="flex flex-row space-x-6 items-center" ref={() => loadMeeting('dyte-pagination')}>
    <dyte-grid-pagination id='dyte-pagination' />
</div>