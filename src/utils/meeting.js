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
  const el = document.getElementById(id);
  if (el) el.meeting = meeting;
  return meeting;
};

export const loadMeetingMultiple = async (className) => {
  const meeting = await initMeeting();
  const els = document.getElementsByClassName(className);
  for (const el of els) {
    el.meeting = meeting;
  }
  return meeting;
};

export const loadSelf = async (id) => {
  const meeting = await initMeeting();
  document.querySelectorAll(id).forEach((node) => {
    node.peer = meeting.self;
    node.meeting = meeting;
  });
  return meeting;
};

export const loadNotification = async (id) => {
  const el = document.getElementById(id);
  if (el)
    el.notification = {
      id: 'notif-1',
      message: 'A notification message.',
    };
};
