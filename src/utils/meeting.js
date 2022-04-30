import DyteClient from '@dyte-in/client-core';

async function initMeeting() {
  if (!window.meeting) {
    const meeting = await DyteClient.init({
      authToken: '',
      roomName: '',
      defaults: {
        audio: false,
        video: false,
      },
    });
    window.meeting = meeting;
  }
  return window.meeting;
}

export const loadMeeting = async (id) => {
  const meeting = await initMeeting();
  document.getElementById(id).meeting = meeting;
};

export const loadSelf = async (id) => {
  const meeting = await initMeeting();
  document.querySelectorAll(id).forEach((node) => {
    node.peer = meeting.self;
    node.meeting = meeting;
  });
};
