import React from 'react';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Layout from '@site/src/theme/Layout';
import APIVersionSwitcher from '../components/APIVersionSwitcher';

export default function APIPage() {
  return (
    <Layout>
      <Head>
        <title>API Reference | Dyte Docs</title>
        <meta name="description" content="Dyte REST API Reference" />
        <meta name="og:description" content="Dyte REST API Reference" />
        {/* Loading styles for elements this way so it doesn't interfere with other styles */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@stoplight/elements@7.3.7/styles.min.css"
        />
      </Head>
      <BrowserOnly
        fallback={
          <div className="flex min-h-screen w-full items-center justify-center">
            <div
              className="h-10 w-10 animate-spin rounded-full border-l border-t-2 border-primary"
              aria-label="Loading..."
            ></div>
          </div>
        }
      >
        {() => {
          // eslint-disable-next-line no-undef
          const { API } = require('@stoplight/elements');
          return (
            <>
              <a
                href="https://www.getpostman.com/collections/b655d5cbdd8a718ec15f"
                target="_blank"
                rel="noreferrer"
                className="absolute right-20 top-24 inline-flex cursor-pointer items-center justify-center rounded-md bg-orange-600 px-4 py-1 text-sm text-white hover:text-white hover:no-underline"
              >
                Postman Collection
              </a>
              <APIVersionSwitcher current="v1" />
              <API
                apiDescriptionUrl="/api/v1.yaml"
                router="hash"
                basePath="/"
                layout="sidebar"
                hideSchemas
              />
            </>
          );
        }}
      </BrowserOnly>
    </Layout>
  );
}
