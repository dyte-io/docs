---
title: Quickstart
description: Quickstart guide for react-native-core.
slug: quickstart
tags: [react-native-core, quickstart, setup]
---

# Quickstart

```js
import { useDyteClient } from '@dytesdk/react-web-core';

function App() {
  const [ client, initClient ] = useDyteClient();

  useEffect(() => {
    initClient({
      roomName: '<room-name>',
      authToken: '<auth-token>',
    });
  }, []);

  return (
    <DyteProvider value={client}>
      <YourMeetingComponent />
    </DyteProvider>
  );
}
```

You can get the roomName and authToken using our backend APIs and then pass it to the init method of DyteClient.

Now at this point you have joined the meeting, the next steps would be configuring local media publishing and participant's media playback