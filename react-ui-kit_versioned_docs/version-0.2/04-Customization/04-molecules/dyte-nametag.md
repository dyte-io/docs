# Name Tag

Participant name along with their audio status

You can pass a `meeting.self` DyteSelf object

```jsx
<DyteNameTag peer={meeting.self} />
```

or `DyteParticipant` object

```jsx
<DyteNameTag peer={meeting.participants.joined[0]} />
```

import { loadSelf } from '/src/utils/meeting';

<div class="ui-preview space-x-6" ref={() => loadSelf('#dyte-name-tag')}>
    <dyte-name-tag size="sm" id='dyte-name-tag' />
</div>
