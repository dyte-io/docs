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
        title="Livestreaming to HLS"
        description="Livestream to HLS using REST APIs"
        to="/guides/livestreaming-rtmp-hls"
      />
      <Card
        title="Livestreaming any RTMP input"
        description="Livestream to any service that accepts an RTMP input"
        to="/guides/integrating-with-webhooks"
      />

      <Card
        title="Controlling an Active Session"
        description="Control an active meeting with REST APIs"
        to="/guides/controlling-an-active-session"
      />
    </Section>
  );
}
