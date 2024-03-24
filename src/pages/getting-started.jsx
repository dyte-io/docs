import Layout from '@theme/Layout';
import React from 'react';
import InteractiveOnboarding from '../components/InteractiveOnboarding';

export default function GettingStarted() {
  return (
    <Layout
      title="Getting Started"
      description="Find answers to frequently asked questions in Dyte's comprehensive FAQ documentation. Explore solutions and get insights into common queries."
      wrapperClassName="faq-page bg-secondary-1000 px-4"
      noFooter
    >
      <InteractiveOnboarding />
    </Layout>
  );
}
