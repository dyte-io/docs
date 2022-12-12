import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { DyteSpinner, DyteTooltip } from '@dytesdk/react-ui-kit';
import { useHistory } from '@docusaurus/router';
import clsx from 'clsx';

import useBreakpoint from '../lib/useBreakpoint';
import SectionsMenu from '../components/SectionsMenu';
import RunInPostmanButton from '../components/RunInPostmanButton';

const API_TOOLTIP_KEY = 'dyte-api-v2-tooltip-shown';

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
        // eslint-disable-next-line no-undef
        const { API } = require('@stoplight/elements');

        return (
          <div className={clsx('elements-container', layout)}>
            <API
              apiDescriptionUrl={`/api/${currentVersion}.yaml`}
              basePath="/"
              router="hash"
              layout={layout}
              hideSchemas
              className="stacked"
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
  const [showV2Tooltip, setShowV2Tooltip] = useState(false);

  const location = router.location;

  const url = new URL(
    `https://docs.dyte.io${location.pathname}${location.search}`
  );

  const currentVersion = url.searchParams.get('v') || 'v1';

  useEffect(() => {
    // show V2 tooltip only if user hasn't seen it yet
    if (localStorage.getItem(API_TOOLTIP_KEY) !== 'true') {
      setShowV2Tooltip(true);
    }
  }, []);

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
      <div className="header">
        <h1 style={{ fontSize: '1rem', fontWeight: '600' }}>
          Dyte Backend API {currentVersion}
        </h1>
        <div className="aside">
          <RunInPostmanButton />
          <DyteTooltip
            placement="bottom"
            variant="primary"
            label="Hey, we have v2 version for our APIs rolling out slowly, you can check them out here."
            open={showV2Tooltip}
            onDyteOpenChange={(open) => {
              if (!open) {
                localStorage.setItem(API_TOOLTIP_KEY, 'true');
              }
            }}
            disabled={!showV2Tooltip}
          >
            <SectionsMenu
              defaultValue={currentVersion}
              values={[
                { name: 'v1', id: 'v1' },
                { name: 'v2', id: 'v2' },
              ]}
              onValueChange={(version) => {
                if (showV2Tooltip) {
                  setShowV2Tooltip(false);
                  localStorage.setItem(API_TOOLTIP_KEY, 'true');
                }
                router.push(`/api/?v=${version}`);
              }}
              className="compact"
              slot="trigger"
            />
          </DyteTooltip>
        </div>
      </div>
      <APIElement
        layout={size === 'sm' ? 'stacked' : 'sidebar'}
        currentVersion={currentVersion}
      />
    </Layout>
  );
}
