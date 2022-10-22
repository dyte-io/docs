import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage"
      noFooter
    >
      <HeroSection />
      <SDKsSection />
      <APIReferenceSection />

      <section className="mb-16 px-4">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-4 text-black dark:bg-black dark:text-white lg:p-10">
          <h2 className="mb-12 text-center lg:text-3xl">How can we help you today?</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <img src="/static/landing-page/calendar.svg" alt="Book a demo" />
              <h4 className="my-3">Book a Demo</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Contact us for a demo. We are looking forward to connecting with
                you.
              </p>
              <Link href="#" className="text-primary dark:text-primary-100">
                Schedule a Call &rarr;
              </Link>
            </div>

            <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <img src="/static/landing-page/calendar.svg" alt="Book a demo" />
              <h4 className="my-3">Support</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Dyte&apos;s expert support team is excited to help. Connect for
                dedicated 1:1 support!
              </p>
              <Link href="#" className="darktext-primary-100 :text-primary">
                Contact Us &rarr;
              </Link>
            </div>

            <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
              <img src="/static/landing-page/calendar.svg" alt="Book a demo" />
              <h4 className="my-3">FAQs</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Browse through our FAQs to find answers to commonly asked
                questions.
              </p>
              <Link href="#" className="text-primary dark:text-primary-100">
                View FAQs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
