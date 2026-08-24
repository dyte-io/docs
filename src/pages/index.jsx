import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { CheckCircle, Lock, Zap } from 'react-feather';
import {
  IdentityIllustration,
  SharingIllustration,
  ResolverIllustration,
} from '@site/src/components/HomeIllustrations';

const sections = [
  {
    title: 'Guides',
    description:
      'Start here: authentication, core concepts, errors, idempotency, rate limits and webhooks.',
    to: '/guides',
    cta: 'Read the guides',
  },
  {
    title: 'API Reference',
    description:
      'Every resource in the OSPI platform API, plus a live, per-endpoint reference with a "Try It" console.',
    to: '/api-reference',
    cta: 'Browse the API',
  },
  {
    title: 'Architecture',
    description:
      'The 34 Architecture Decision Records behind the platform, and the domain model they implement.',
    to: '/architecture',
    cta: 'See the decisions',
  },
];

// Every caption below is real: the OSPI code is computed by the actual
// checksum algorithm (src/identity/ospi-code.util.ts, ADR-004/ADR-008), and
// the request/route shapes use the real field names, enums and paths the
// API validates against (src/sharing/dto.ts, src/search/*).
const capabilities = [
  {
    Illustration: IdentityIllustration,
    badge: { icon: CheckCircle, text: 'Checksum verified' },
    title: 'Product Identity',
    body: 'Every product and variant gets a single, checksum-verified global identifier — mintable in the same call that creates the product.',
    caption: 'OSPI-ACME-123456-00012345-0001-00000001-1-47J',
  },
  {
    Illustration: SharingIllustration,
    badge: { icon: Lock, text: 'Scoped by Sharing Grant' },
    title: 'Cross-Organization Sharing',
    body: 'A Connection between two organizations plus a scoped Sharing Grant control exactly which products, categories and data a partner can see.',
    caption: 'dataCategories: ["PRODUCT_DATA", "INVENTORY"]',
  },
  {
    Illustration: ResolverIllustration,
    badge: { icon: Zap, text: 'No auth required' },
    title: 'Public Code Resolver',
    body: 'Scan a code, no login: resolve an OSPI code to its product, manufacturer, variants and public documents without authentication.',
    caption: 'GET /api/v1/search/resolve/:code',
  },
];

const pillars = [
  {
    title: 'Identity & OSPI Codes',
    body: 'Producer Codes and OSPI Codes give every product and variant a single, checksum-verified global identifier — mintable in the same call that creates a product.',
  },
  {
    title: 'Product master data',
    body: 'Products, variants, categories and a schema-driven attribute engine, with completeness scoring that gates publication.',
  },
  {
    title: 'Cross-organization sharing',
    body: 'Connections between organizations plus scoped Sharing Grants control exactly which products, categories and data are visible to a partner.',
  },
  {
    title: 'Search, resolve & order',
    body: 'Full-text product search, a public OSPI code resolver, and a complete offer → order → order group → fulfilment flow.',
  },
];

function CapabilityCard({ Illustration, badge, title, body, caption }) {
  const BadgeIcon = badge.icon;
  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--docs-color-border)] bg-[var(--docs-color-background-100)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden">
        <Illustration />
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-[var(--docs-color-border)] bg-[var(--docs-color-background-100)]/90 px-2.5 py-1 text-[11px] font-medium text-[var(--docs-color-text)] shadow-sm backdrop-blur">
          <BadgeIcon size={12} className="text-primary" />
          {badge.text}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-[var(--docs-color-text)]">
          {title}
        </h3>
        <p className="text-sm text-text-400">{body}</p>
        <p className="mt-4 truncate rounded-md bg-[var(--docs-color-secondary-800)] px-3 py-2 font-mono text-[11px] text-text-400">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <Layout
      title="OSPI Documentation"
      description="Documentation for OSPI (Open Standard Product Identification) — the open standard and API platform for product identity, master data and cross-organization product data exchange."
    >
      <Head>
        <meta property="og:image" content="/img/ospi-docs-card.png" />
      </Head>

      <header className="relative overflow-hidden border-b border-[var(--docs-color-border)] bg-[var(--docs-color-background-100)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--docs-color-border) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            maskImage:
              'radial-gradient(ellipse 70% 100% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 100% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            OSPI — Open Standard Product Identification
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Build with OSPI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-400">
            OSPI issues globally unique, checksum-verified product identifiers
            and gives organizations a shared, documented REST API for product
            master data, inventory, cross-organization sharing, search and
            ordering.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/guides"
              className="rounded-md bg-primary px-5 py-2.5 font-medium text-white no-underline hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              to="/api-reference"
              className="rounded-md border border-[var(--docs-color-border)] bg-[var(--docs-color-background-100)] px-5 py-2.5 font-medium no-underline"
            >
              API Reference
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid items-start gap-6 sm:grid-cols-2">
          {capabilities.slice(0, 2).map((c) => (
            <CapabilityCard key={c.title} {...c} />
          ))}
        </div>
        <div className="mx-auto mt-6 sm:max-w-[calc(50%-0.75rem)]">
          <CapabilityCard {...capabilities[2]} />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="block rounded-lg border border-[var(--docs-color-border)] p-6 no-underline transition hover:border-primary"
            >
              <h3 className="mb-2 text-lg font-semibold text-[var(--docs-color-text)]">
                {s.title}
              </h3>
              <p className="mb-3 text-sm text-text-400">{s.description}</p>
              <span className="text-sm font-medium text-primary">
                {s.cta} →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold">What the platform covers</h2>
          <p className="mt-2 max-w-2xl text-text-400">
            The MVP scope defined in the Project Constitution, plus every
            domain chapter implemented on top of it: Identity &amp;
            Organizations, Producer &amp; OSPI Codes, Products &amp;
            Variants, Categories &amp; Attributes, Documents, Inventory,
            Connections &amp; Sharing, Search &amp; Discovery, Ordering &amp;
            Commerce, and a Digital Product Passport scaffold.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-[var(--docs-color-border)] p-6"
              >
                <h3 className="mb-2 font-semibold">{p.title}</h3>
                <p className="text-sm text-text-400">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-lg border border-[var(--docs-color-border)] bg-[var(--docs-color-background-100)] p-8 text-center">
          <h2 className="text-xl font-bold">Every route is versioned</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-text-400">
            Every resource lives under <code>/api/v1/…</code>, uses a single{' '}
            <code>Authorization: Bearer</code> header for both user JWTs and{' '}
            <code>ospi_&lt;clientId&gt;.&lt;secret&gt;</code> API keys, and
            returns errors as <code>{'{ error: { code, message, requestId } }'}</code>.
          </p>
          <Link
            to="/guides/authentication"
            className="mt-5 inline-block rounded-md bg-primary px-5 py-2.5 font-medium text-white no-underline hover:opacity-90"
          >
            Read the authentication guide
          </Link>
        </section>
      </main>
    </Layout>
  );
}
