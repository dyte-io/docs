---
sidebar_position: 4
---

You can set listeners for the following events on the client side, to enable you to take certain client actions based on the meeting events and state changes.

```ts
// When you have connected to the meeting but haven't started producing or consuming content streams
meeting.on(meeting.Events.connect, () => {

});

// When you have disconnected from the meeting and cannot produce or consume streams without connecting again
meeting.on(meeting.Events.disconnect, () => {

});

// When you have joined the meeting to start producing and consuming content streams
meeting.on(meeting.Events.meetingJoined, () => {

});

// When the meeting is ended
meeting.on(meeting.Events.meetingEnded, () => {

});

// When a new participant joins the meeting
meeting.on(meeting.Events.participantJoin, (participant: Participant) => {

});

// When a participant leaves the meeting
meeting.on(meeting.Events.participantLeave, (participant: Participant) => {

});

// When a custom event is received by current participant
meeting.on(meeting.Events.message, (message) => {

});

// When a custom event is broadcast to the meeting room and received by current participant
meeting.on(meeting.Events.roomMessage, (message) => {

});

// When a chat message is received
meeting.on(meeting.Events.chatMessage, (chatMessage: ChatMessage) => {

});

// When the active speaker changes
meeting.on(meeting.Events.activeSpeaker (participant: Participant) => {

});

// When the meeting starts being recorded (SDK ver >= 0.3.11)
meeting.on(meeting.Events.recordingStarted, () => {

});

// When the meeting stops being recorded (SDK ver >= 0.3.11)
meeting.on(meeting.Events.recordingStopped, () => {

});
```