import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@site/src/theme/Layout';

export default function APIPage(props) {
  return (
    <Layout>
      <Head>
        {/* Loading the styles like this instead as it resets styles of many HTML tags
        required for docs */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stoplight/elements/styles.min.css"
        />
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
