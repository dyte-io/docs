import React from 'react';
import { Redirect } from '@docusaurus/router';
import Head from '@docusaurus/Head';

export default function Homepage(props) {
  return (
    <>
      <Head>
        <meta title="Dyte Docs" />
        <meta property="og:title" content="Dyte Docs" />
        <meta
          property="og:description"
          content="Real-time audio & video SDKs, ready to launch 🚀"
        />
        <meta
          property="description"
          content="Real-time audio & video SDKs, ready to launch 🚀"
        />
        <link rel="canonical" href="https://docs.dyte.io" />
      </Head>
      <Redirect to="/docs/home/introduction" />;
    </>
  );
}
