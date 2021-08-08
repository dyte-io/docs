---
sidebar_position: 3
---

### React

```js Javascript
import { DyteMeeting } from "dyte-client";

function App() {

    return (
        <div className="App">
            <DyteMeeting
                onInit={(meeting) => { }}
                clientId={`orgId || clientId`}
                meetingConfig={{
                    roomName: `roomName`,
                    authToken: `authToken`,
                }}
            />
        </div>
    );
}

export default App;

```
```ts Typescript
import { DyteMeeting, Meeting } from "dyte-client";

function App() {

    return (
        <div className="App">
            <DyteMeeting
                onInit={(meeting: Meeting) => { }}
                clientId={`orgId || clientId`}
                meetingConfig={{
                    roomName: `roomName`,
                    authToken: `authToken`,
                }}
            />
        </div>
    );
}

export default App;

```

You can check out an example of this integration by cloning our [React example repo](https://github.com/dyte-in/react-integration-example).

### VanillaJS

```html
<div id="root"></div>
<script>
    const client = new DyteClient({ clientId: "orgId|clientId" });

    const meeting = client.Meeting({
        roomName: "<roomName>",
        authToken: "<authToken>"
    });

    meeting.init("root");

    /* Optionally pass uiConfig
  const meeting = client.Meeting({
          roomName: "<roomName>",
          authToken:"<authToken>"},{header:false})
    */

</script>
```

You can check out an example of this integration by cloning our [web example repo](https://github.com/dyte-in/web-integration-example).