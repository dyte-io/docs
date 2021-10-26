import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import '@stoplight/elements/styles.min.css';

import Layout from '@site/src/theme/Layout';

export default function APIPage() {
  return (
    <Layout>
      <Head>
        <title>API Reference | Dyte Docs</title>
        <meta name="description" content="Dyte REST API Reference" />
        <meta name="og:description" content="Dyte REST API Reference" />
      </Head>
      <BrowserOnly
        fallback={
          <div className="flex items-center justify-center w-full min-h-screen">
            <div
              className="w-10 h-10 rounded-full border-l border-t-2 border-primary animate-spin"
              aria-label="Loading..."
            ></div>
          </div>
        }
      >
        {() => {
          const { API } = require('@stoplight/elements');
          return (
            <API
              apiDescriptionUrl="/openapi.yaml"
              router="hash"
              basePath="/"
              layout="sidebar"
              hideSchemas
            />
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
