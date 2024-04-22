# web-core SDK

Dyte provides a web-core SDK that gives you low-level access to all the functionality, but allows you to build a custom UI over it. With the help of the web-core SDK, you can get access to media streams, chat, polls, etc. using various methods and member variables of the `DyteClient` class.

The `DyteClient` is the root class of the SDK. It is the main entry point of the SDK. It is the only class that you need to instantiate in order to use the SDK. To instantiate `DyteClient`, you can run the following command:

```ts
const meeting = await DyteClient.init({
    roomName,
    authToken,
    defaults: {
        audio: false, // Disable user's audio by default
        video: true, // Enable user's video by default
    }
});
```

You can get the `roomName` and `authToken` using our backend APIs (read more about our server APIs [here](https://docs.dyte.io/api/#/)) and then pass it to the `init` method of `DyteClient`.


## Guides

In this section, the terms `current user` and `meeting participants` are used often. We see the video conference from the perspective of a certain user (who is currently on the video-conferencing site built using the SDK). This user is referred to as the `current user` or the `self user`. The term `meeting participants` refers to all the users that are currently in the meeting excluding the `current user`.

### Setting up the current user's video streams

The current user's data is provided in the `meeting.self` object. For example, you can use `media.self.videoTrack` to get the current user's video track.

```ts
async function setupSelf() {
    const video = document.createElement('video');
    video.id = 'self-video';
    const selfVideoContainer = document.getElementById('self-video-container');

    if (meeting.self.videoTrack) {
        selfVideoContainer.innerHTML = '';

        const stream = new MediaStream();
        stream.addTrack(meeting.self.videoTrack);

        video.width = 500; // Width of the video element
        video.height = 300; // Height of the video element
        video.srcObject = stream;
    }

    selfVideoContainer.appendChild(video);
    await video.play(); // Note: `play()` might not return a promise on all browsers.

    meeting.self.on('videoUpdate', async ({ videoEnabled, videoTrack }) => {
        if (videoEnabled) {
            const video = document.getElementById('self-video');
            const stream = new MediaStream();
            stream.addTrack(videoTrack);

            video.srcObject = stream;
            await video.play(); // Note: `play()` might not return a promise on all browsers.
        } else {
            const video = document.getElementById('self-video');
            if (!video) return;
            video.srcObject = undefined;
        }
    })
}
```

### Setting up media streams of the meeting participants

The details of the participants of the meeting is stored in the `meeting.participants` object. This object inherits from a `Map` object, so you can use the `.get(participantId)` method to get a participant's data. Furthermore, you can use `meeting.participants.toArray()` to get an array of all the participants. Each `participant` object has it's own `videoTrack` and `audioTrack` properties, which you can use as shown in the example below.

```ts
function onParticipantJoined(participant) {
    const participants = document.getElementById("participants-video-container");
    const div = document.createElement('div');
    div.id = participant.id;

    const nameElem = document.createElement('h3');
    nameElem.innerHTML = `Name - ${participant.name}`;

    div.appendChild(nameElem);

    const video = document.createElement('video');
    video.id = `video-${participant.id}`;
    video.width = 500;
    video.height = 300;

    const audio = document.createElement('audio');
    audio.id = `audio-${participant.id}`;
    audio.width = 500;
    audio.height = 300;

    div.appendChild(video);
    div.appendChild(audio);

    participants.appendChild(div);
}

function setupParticipants() {
    meeting.participants.active.toArray().forEach(onParticipantJoined);

    meeting.participants.active.on('participantJoined', onParticipantJoined);

    meeting.participants.active.on('participantLeft', (participant) => {
        const participantDiv = document.getElementById(participant.id);
        if (participantDiv) participantDiv.remove();
    });

    meeting.participants.active.on('videoUpdate', async (participant) => {
        if (participant.videoEnabled) {
            const video = document.getElementById(`video-${participant.id}`);

            const stream = new MediaStream();
            stream.addTrack(participant.videoTrack);

            video.srcObject = stream;
            await video.play()
        } else {
            const video = document.getElementById(`video-${participant.id}`);
            if (!video) return;
            video.srcObject = null;
        }
    });

    meeting.participants.active.on('audioUpdate', async (participant) => {
        if (participant.audioEnabled) {
            const audio = document.getElementById(`audio-${participant.id}`);

            const stream = new MediaStream();
            stream.addTrack(participant.audioTrack);

            audio.srcObject = stream;
            await audio.play()
        } else {
            const audio = document.getElementById(`audio-${participant.id}`);
            if (audio) return;
            audio.srcObject = null;
        }
    });
}
```

## Learn More

Check out the sample application [here](https://github.com/dyte-in/web-core-javascript-sample-app/blob/main/index.html) to see how the SDK is used in a website.
