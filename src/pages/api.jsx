import React from 'react';
import Layout from '@site/src/theme/Layout';

import { API } from '@stoplight/elements';
import Head from '@docusaurus/Head';

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
      <API
        apiDescriptionUrl="/openapi.yaml"
        router="hash"
        basePath="/api"
        layout="sidebar"
      />
    </Layout>
  );
}
