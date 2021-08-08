---
sidebar_position: 1
---

## Create a meeting

Call the ["create meeting"](ref:createmeeting) endpoint from your server. This API does not have any mandatory parameters, although we recommend creating a meeting with a `preset`. You will receive a response that looks like this:

```json
{
    "success": true,
    "message": "",
    "data": {
        "meeting": {
            "id": "cddfd4a8-d6fb-4d15-be6b-269c6dedfa70",
            "title": "New meeting",
            "roomName": "hexagonal-trip",
            "status": "LIVE",
            "createdAt": "2020-12-21T17:30:00.000Z",
            "participants": []
        }
    }
}
```

Save `data.meeting.id` and `data.meeting.roomName` for later use.

## Add a participant

Call the ["add particpant"](ref:addparticipant-1) endpoint from your server. This API needs meeting ID from the previous response, as well as needs a `clientSpecificId` in the body to use as a unique identifier for the participant. We recommend creating a participant with a `role`. You will receive a response that looks like this:

```json
{
    "success": true,
    "message": "",
    "data": {
        "authResponse": {
            "userAdded": true,
            "authToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJp..."
        }
    }
}
```

Save `data.authResponse.authToken` for later use.

## Initialize the meeting on frontend

Get the `roomName` from the "create meeting" API call and participant `authToken` from the "add participant" API call from your backend, and initialize the meeting on frontend.

### Initializing client - React

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

### Initializing client - VanillaJS

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