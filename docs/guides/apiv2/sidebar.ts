import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "apiv2/dyte-rest-apis",
    },
    {
      type: "category",
      label: "Meetings",
      items: [
        {
          type: "doc",
          id: "apiv2/get-all-meetings",
          label: "Fetch all meetings for an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/create-meeting",
          label: "Create a meeting",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-meeting",
          label: "Fetch a meeting for an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/update-meeting",
          label: "Update a meeting",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apiv2/replace-meeting",
          label: "Replace a meeting",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apiv2/get-meeting-participants",
          label: "Fetch all participants of a meeting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/add-participant",
          label: "Add a participant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-meeting-participant",
          label: "Fetch a participant's detail",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/edit-participant",
          label: "Edit a participant's detail",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apiv2/delete-meeting-participant",
          label: "Delete a participant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apiv2/regenerate-token",
          label: "Refresh participant's authentication token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Presets",
      items: [
        {
          type: "doc",
          id: "apiv2/get-presets",
          label: "Fetch all presets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/post-presets",
          label: "Create a preset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-presets-preset-id",
          label: "Fetch details of a preset",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/delete-presets-preset-id",
          label: "Delete a preset",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "apiv2/patch-presets-preset-id",
          label: "Update a preset",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Sessions",
      items: [
        {
          type: "doc",
          id: "apiv2/get-sessions",
          label: "Fetch all sessions of an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-session-details",
          label: "Fetch details of a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-session-participants",
          label: "Fetch participants list of a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-participant-details",
          label: "Fetch details of a participant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-session-chat",
          label: "Fetch all chat messages of a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-session-transcript",
          label: "Fetch the complete transcript for a session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-participant-data-from-peer-id",
          label: "Fetch details of peer",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Recordings",
      items: [
        {
          type: "doc",
          id: "apiv2/get-all-recordings",
          label: "Fetch all recordings for an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/start-recording",
          label: "Start recording a meeting",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-active-recording",
          label: "Fetch active recording",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-one-recording",
          label: "Fetch details of a recording",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/pause-resume-stop-recording",
          label: "Pause/Resume/Stop recording",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apiv2/start-track-recording-for-a-meeting",
          label: "",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "apiv2/get-all-webhooks",
          label: "Fetch all webhooks details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/add-webhook",
          label: "Add a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-webhook",
          label: "Fetch details of a webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/replace-webhook",
          label: "Replace a webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apiv2/edit-webhook",
          label: "Edit a webhook",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "apiv2/delete-webhook",
          label: "Delete a webhook",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Active session",
      items: [
        {
          type: "doc",
          id: "apiv2/get-active-session",
          label: "Fetch details of an active session",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/kick-partcipants",
          label: "Kick participants from an active session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/kick-all-participants",
          label: "Kick all participants",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/mute-participants",
          label: "Mute participants of an active session",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/mute-all-participants",
          label: "Mute all participants",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/create-poll",
          label: "Create a poll",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Live streams",
      items: [
        {
          type: "doc",
          id: "apiv2/create-an-independent-livestream",
          label: "Create an independent livestream",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/fetch-all-livestreams",
          label: "Fetch all livestreams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/stop-livestreaming",
          label: "Stop livestreaming a meeting",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/livestream-session-details",
          label: "Fetch livestream session details for a meeting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/start-livestreaming",
          label: "Start livestreaming a meeting",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/reset-stream-key",
          label: "Reset a livestream's stream key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-livestream-analytics-complete",
          label: "Fetch complete analytics data for your livestreams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-livestream-analytics-daywise",
          label: "Fetch day-wise analytics data for your livestreams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/enable-livestream",
          label: "Enable a livestream",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apiv2/disable-livestream",
          label: "Disable a livestream",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "apiv2/get-v-2-livestreamsession-session-meeting-id-active-livestream",
          label: "Fetch livestream session details using a session ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-v-2-meetings-meeting-id-active-livestream",
          label: "Fetch active livestreams for a meeting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-v-2-livestreams-livestream-session-id",
          label: "Fetch livestream session details using livestream session ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-v-2-active-livestream-session-details",
          label: "Fetch active livestream session details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-v-2-livestream-session-livestream-id",
          label: "Fetch livestream details using livestream ID",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Analytics",
      items: [
        {
          type: "doc",
          id: "apiv2/get-org-analytics",
          label: "Fetch day-wise session and recording analytics data for an organization",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Organizations",
      items: [
        {
          type: "doc",
          id: "apiv2/get-org-analytics",
          label: "Fetch day-wise session and recording analytics data for an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/get-all-orgs",
          label: "Fetch organization details of all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/create-org",
          label: "Create an organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "apiv2/get-org",
          label: "Fetch details of an organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "apiv2/edit-org",
          label: "Edit details of an organization",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
