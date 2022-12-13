import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <HeroSection />
      <SDKsSection />

      <div className="relative">
        <APIReferenceSection />
        <div className="absolute top-1/2 bottom-0 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute top-0 bottom-1/2 -z-10 w-full bg-secondary-1000"></div>
      </div>

      <div className="z-0 bg-secondary-800 dark:bg-secondary-900">
        <ResourcesSection />

        <section className="px-4 pt-16">
          <div className="mx-auto -mb-48 max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20">
            <h2 className="mb-12 text-center lg:text-3xl">
              How can we help you today?
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img
                  src="/static/landing-page/calendar.svg"
                  alt="Book a demo"
                />
                <h4 className="my-3">Book a Demo</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Contact us for a demo. We are looking forward to connecting
                  with you.
                </p>
                <Link
                  href="https://dyte.io/contact"
                  className="text-primary dark:text-primary-100"
                >
                  Schedule a Call &rarr;
                </Link>
              </div>

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img
                  src="/static/landing-page/calendar.svg"
                  alt="Book a demo"
                />
                <h4 className="my-3">Support</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Dyte&apos;s expert support team is excited to help. Connect
                  for dedicated 1:1 support!
                </p>
                <Link
                  href="https://dyte.io/contact"
                  className="darktext-primary-100 :text-primary"
                >
                  Contact Us &rarr;
                </Link>
              </div>

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img
                  src="/static/landing-page/calendar.svg"
                  alt="Book a demo"
                />
                <h4 className="my-3">FAQs</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Browse through our FAQs to find answers to commonly asked
                  questions.
                </p>
                <Link
                  href="/faq"
                  className="text-primary dark:text-primary-100"
                >
                  View FAQs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
