import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description mb-8">
          OSPI (Open Standard Product Identification) is an open standard and
          API platform for product identity, master data and
          cross-organization product data exchange — producer codes, OSPI
          codes, product &amp; variant data, categories &amp; attributes,
          inventory, sharing between organizations, search/resolution, and
          ordering, built on a single documented REST API.
        </p>
        <div className="footer__row">
          <div className="footer__data" />
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
