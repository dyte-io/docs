import React from 'react';
import Layout from '@site/src/theme/Layout';

import { API } from '@stoplight/elements';

export default function APIPage(props) {
  return (
    <Layout>
      <div className="w-full text-center my-24">
        API Page this is. Will be back.
      </div>
      <API
        apiDescriptionUrl="/openapi.yaml"
        router="history"
        basePath="/api"
        layout="sidebar"
      />
    </Layout>
  );
}
