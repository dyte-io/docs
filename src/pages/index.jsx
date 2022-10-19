import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import {
  AngularIcon,
  APIReferenceIcon,
  FlutterIcon,
  HTMLIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
  TerminalIcon,
  DisconnectedPlugIcon,
  UIKitIcon,
} from '../icons';
import GuidesSection from '../components/GuidesSection';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div id="hero">
            <h2>Dyte Docs</h2>
            <p>
              Explore our guides and examples to integrate Dyte easily into your
              apps.
            </p>
            <DyteButton onClick={() => router.push('/react-ui-kit/')}>
              Get Started &rarr;
            </DyteButton>
          </div>

          <Section title="Get to know Dyte">
            <Card
              title="How Dyte works"
              description="Essential reading for a better understanding of how to best use Dyte SDKs"
              to="/how-dyte-works"
            />
            <Card
              title="Guides"
              description="Take a look at all the available guides"
              to="/guides/"
            />
          </Section>

          <Section title="🌐 Web SDKs" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Core SDKs"
              id="core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Realtime communication SDKs to add high quality audio/video
                  calls to your web applications. <br />
                  These are generally used with our UI Kit but you can create
                  your own UI as well, it&apos;s pretty easy.
                </>
              }
            >
              <Card
                title="Core SDK"
                description="Realtime communication SDKs to add high quality audio/video calls to your web applications."
                to="/web-core/"
                icon={<UIKitIcon />}
              />
              <Card
                title="Plugin SDK"
                description="Create your own plugins for use in meetings"
                to="/plugin-sdk/"
                icon={<DisconnectedPlugIcon />}
              />
            </Section>
            <Section title="🎨 UI Kit" id="ui-kit" HeadingTag="h4">
              <Card
                title="React UI Kit"
                description="Add UI Kit to your React App"
                to="/react-ui-kit/"
                icon={<ReactIcon />}
              />
              <Card
                title="UI Kit"
                description="HTML Web Components"
                to="/ui-kit/"
                icon={<HTMLIcon />}
              />
              <Card
                title="Angular UI Kit"
                description="Add UI Kit to your Angular App"
                to="/angular-ui-kit/"
                icon={<AngularIcon />}
              />
            </Section>
          </Section>

          <Section title="📱 Mobile SDKs" id="mobile-sdks">
            <Card
              title="React Native"
              description="Integrate Dyte in your React Native App"
              to="/react-native/"
              icon={<ReactIcon />}
            />
            <Card
              title="Android"
              description="Integrate Dyte in your Android App (Kotlin)"
              to="/android/"
              icon={<KotlinIcon />}
            />
            <Card
              title="iOS"
              description="Integrate Dyte in your iOS App (Swift)"
              to="/ios/"
              icon={<SwiftIcon />}
            />
            <Card
              title="Flutter"
              description="Integrate Dyte in your Flutter App"
              to="/flutter/"
              icon={<FlutterIcon />}
            />
          </Section>

          <Section title="🛠 Tools">
            <Card
              title="Dyte CLI"
              description="A command line tool to get things done quick!"
              to="/cli/"
              icon={<TerminalIcon />}
            />
          </Section>

          <Section title="📜 API Reference">
            <Card
              title="API Reference"
              description="Dyte REST API Reference"
              to="/api/"
              icon={<APIReferenceIcon />}
            />
          </Section>

          <GuidesSection title="📖 Advanced Guides" />
        </div>
      </div>
    </Layout>
  );
}
