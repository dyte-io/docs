import React from 'react';
import { Redirect, useHistory } from '@docusaurus/router';

/**
 * Route to make sure older /api/v2 links work
 */
export default function V2API() {
  const router = useHistory();

  return (
    <Redirect
      to={{
        pathname: '/api',
        search: 'v=v2',
        hash: router.location.hash,
      }}
    />
  );
}
