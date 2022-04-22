---
sidebar_position: 2
---

# Quickstart

Here is how you can integrate Dyte's UI Kit into your project seamlessly.

```html
<!-- Load UI Kit -->
<script type="module">
  import { defineCustomElements } from 'https://cdn.dyte.in/ui-kit/loader/index.es2017.js';
  defineCustomElements();
</script>
<!-- Load Web Core (for DyteClient) -->
<script src="https://cdn.dyte.in/core/dyte.js"></script>

<dyte-meeting id="my-meeting" show-setup-screen="false"></dyte-meeting>

<script>
  const init = async () => {
    const meeting = await DyteClient.init({
      authToken: '',
      roomName: '',
      defaults: {
        audio: true,
        video: true,
      },
    });

    document.getElementById('my-meeting').meeting = meeting;
  };
  init();
</script>
```
