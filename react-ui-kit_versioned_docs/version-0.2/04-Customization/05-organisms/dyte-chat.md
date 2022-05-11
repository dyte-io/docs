---
sidebar_position: 1
---

# Chat

An elegant chat UI for meetings.

import { loadMeeting } from '/src/utils/meeting';

```jsx
<DyteChat />
```

Try by sending a few messages.

<div class="chat-preview" ref={() => loadMeeting('dyte-chat')}>
    <dyte-chat id='dyte-chat' className="flex-1" />
</div>
