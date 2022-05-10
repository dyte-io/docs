---
sidebar_position: 2
---

# Audio Visualizer

Audio Visualizer component is used inside peer view and participant views which displays user's audio level.

You can pass a `participant` object to it to render it properly with a participants data.

```html
<dyte-audio-visualizer />
```

import { loadSelf } from '/src/utils/meeting';

Sizes `'sm' | 'md' | 'lg'`

<div className="ui-preview space-x-4" ref={() => loadSelf('.peerview')}>
    <dyte-audio-visualizer class="peerview" size="sm" />
    <dyte-audio-visualizer class="peerview" size="md" />
    <dyte-audio-visualizer class="peerview" size="lg" />
</div>
