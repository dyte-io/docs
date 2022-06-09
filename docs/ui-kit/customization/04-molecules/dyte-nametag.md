# Name Tag

Participant name along with their audio status

```html
<dyte-clock />
```

import { loadSelf } from '/src/utils/meeting';

<div class="ui-preview space-x-6" ref={() => loadSelf('#dyte-name-tag')}>
    <dyte-name-tag size="sm" id='dyte-name-tag' />
</div>
