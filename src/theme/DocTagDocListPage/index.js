import React from 'react';
import DocTagDocListPage from '@theme-original/DocTagDocListPage';
import Head from '@docusaurus/Head';

export default function DocTagDocListPageWrapper(props) {
  return (
    <>
      {/* Just added the meta tag for SEO */}
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <DocTagDocListPage {...props} />
    </>
  );
}
