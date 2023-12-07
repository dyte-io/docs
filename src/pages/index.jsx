import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
import GuidesAndSamples from '../components/homepage/GuidesAndSamples';
import SDKs from '../components/homepage/SDKs';
import Link from '@docusaurus/Link';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <div>
        <div className="w-full bg-gradient-to-r from-blue-500 to-red-500 p-4 text-center font-medium text-white">
          Affected by Twilio Video sunsetting? Switch to Dyte with our{' '}
          <Link
            to="/guides/migration/twilio/concepts-twilio-vs-dyte"
            className="text-white underline"
          >
            migration guide.
          </Link>
        </div>
      </div>

      <HeroSection />

      <GuidesAndSamples />

      <SDKs />

      <APIReferenceSection />

      <div className="z-0">
        <ResourcesSection />
        <HelpSection className="-mb-48" />
      </div>

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
