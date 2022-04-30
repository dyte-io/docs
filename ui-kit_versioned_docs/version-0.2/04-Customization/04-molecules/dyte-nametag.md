---
sidebar_position: 6
---

# Name Tag

Participant name along with their audio status

```html
<dyte-clock />
```

import { loadSelf } from '/src/utils/meeting';

<div class="flex flex-row space-x-6 items-center" ref={() => loadSelf('#dyte-name-tag')}>
    <dyte-name-tag size="sm" id='dyte-name-tag' />
</div>