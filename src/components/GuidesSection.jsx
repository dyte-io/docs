import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Dyte Embed"
        description="Embed a dyte meeting easily"
        to="/guides/embed"
      />
      <Card
        title="Integrating with Webhooks"
        description="Use webhooks to keep track of meeting events"
        to="/guides/integrating-with-webhooks"
      />
      <Card
        title="Recording your meetings"
        description="Record meetings easily and store in the cloud"
        to="/guides/recording-your-meetings"
      />

      <Card
        title="Livestreaming to other platforms"
        description="Livestream to platforms like YouTube, Twitch etc."
        to="/guides/livestreaming-other-platforms"
      />
      <Card
        title="Livestreaming API Integration Guide"
        description="Livestream to HLS using REST APIs"
        to="/guides/livestreaming-api-integration"
      />
      <Card
        title="Livestreaming any RTMP input"
        description="Dyte allows livestreaming, via RTMP as well as HLS, for all Dyte meetings."
        to="/guides/integrating-with-webhooks"
      />
      <Card
        title="Controlling an Active Session"
        description="Control an active meeting with REST APIs"
        to="/guides/controlling-an-active-session"
      />
      <Card
        title="Exporting Chat Dump"
        description="Programmatically retrieve all chat messages of a session using Chat Replay API."
        to="/guides/exporting-chat-dump"
      />
    </Section>
  );
}
