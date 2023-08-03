import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DyteSpinner } from '@dytesdk/react-ui-kit';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';

import useBreakpoint from '../lib/useBreakpoint';
import SectionsMenu from '../components/SectionsMenu';
import RunInPostmanButton from '../components/RunInPostmanButton';
import { Monitor } from 'react-feather';
import Link from '@docusaurus/Link';
import { APIIcon } from '../icons';

function APIElement({ layout = 'sidebar', currentVersion = 'v1' }) {
  return (
    <BrowserOnly
      fallback={
        <div className="loading-container">
          <DyteSpinner />
        </div>
      }
    >
      {() => {
        // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
        const { API } = require('@stoplight/elements');

        return (
          <div className={clsx('elements-container', layout)}>
            <API
              className="stacked"
              apiDescriptionUrl={`/api/${currentVersion}.yaml`}
              basePath="/"
              router="hash"
              layout={layout}
              hideSchemas
              hideInternal
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
}

export default function Home() {
  const router = useHistory();
  const size = useBreakpoint();

  const location = router.location;

  const url = new URL(
    `https://docs.dyte.io${location.pathname}${location.search}`
  );

  const currentVersion = url.searchParams.get('v') || 'v2';

  return (
    <Layout
      title="API Reference"
      description="Dyte REST API Reference"
      noFooter
      wrapperClassName="api-reference"
    >
      <Head>
        {/* Load styles for Stoplight Elements */}
        <link rel="preload" href="/assets/css/elements.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/elements.min.css" />
      </Head>

      <div className="flex flex-col items-center justify-center gap-4 border-b py-12 text-sm lg:hidden">
        <Monitor className="h-12 w-12" />
        This page is best viewed in a desktop browser.
      </div>

      <div className="header">
        <h1 className="mb-0 flex items-center gap-2 text-sm font-semibold lg:text-lg">
          <APIIcon className="hidden h-8 lg:block" />
          REST API
        </h1>
        <div className="aside">
          {currentVersion === 'v2' && (
            <Link
              href="/release-notes/rest-api"
              className="no-underline-links text-xs"
            >
              Release Notes
            </Link>
          )}
          {size === 'lg' && <RunInPostmanButton />}
          <SectionsMenu
            defaultValue={currentVersion}
            values={[
              { name: 'v1', docId: 'v1' },
              { name: 'v2', docId: 'v2' },
            ]}
            onValueChange={(version) => {
              router.push(`/api/?v=${version}`);
            }}
            className="compact"
          />
        </div>
      </div>
      <APIElement
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        currentVersion={currentVersion}
      />
    </Layout>
  );
}
