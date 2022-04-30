import DyteClient from '@dyte-in/client-core';

export const loadMeeting = (id) => {
  DyteClient.init({
    authToken: '',
    roomName: '',
    defaults: {
      audio: false,
      video: false,
    },
  }).then((meeting) => {
    document.getElementById(id).meeting = meeting;
  });
};
