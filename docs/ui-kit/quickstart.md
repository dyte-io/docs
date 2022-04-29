---
sidebar_position: 2
---

# Quickstart

Here is how you can integrate Dyte's UI Kit into your project seamlessly.


```html
<body>
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
</body>
```
