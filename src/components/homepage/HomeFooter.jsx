import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import {
  Linkedin,
  Twitter,
  Youtube,
  Github,
} from '@styled-icons/boxicons-logos';
import { DiscordIcon } from '@site/src/icons';

const products = [
  {
    name: 'Live Video',
    href: '#',
  },
  {
    name: 'Voice Conferencing',
    href: '#',
  },
  {
    name: 'Live Streaming',
    href: '#',
  },
  {
    name: 'Chat SDK',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
];

const developers = [
  {
    name: 'Developer Portal',
    href: 'https://dev.dyte.io',
  },
  {
    name: 'Documentation',
    href: 'https://docs.dyte.io',
  },
  {
    name: 'Showcase',
    href: 'https://dyte.io',
  },
  {
    name: 'API Reference',
    href: '/api',
  },
  {
    name: 'Guides',
    href: '/guides',
  },
];

const usecases = [
  { name: 'Ed-Tech', href: '#' },
  { name: 'Telehealth', href: '#' },
  { name: 'HR Tech', href: '#' },
  { name: 'Fitness', href: '#' },
  { name: 'Social', href: '#' },
];

const company = [
  { name: 'Ed-Tech', href: '#' },
  { name: 'Telehealth', href: '#' },
  { name: 'HR Tech', href: '#' },
  { name: 'Fitness', href: '#' },
  { name: 'Social', href: '#' },
];

const comparisons = [
  { name: 'Ed-Tech', href: '#' },
  { name: 'Telehealth', href: '#' },
  { name: 'HR Tech', href: '#' },
  { name: 'Fitness', href: '#' },
  { name: 'Social', href: '#' },
];

function Safety() {
  return (
    <div className="flex h-24 max-w-[418px] overflow-clip rounded-2xl border-2 border-white">
      <div className="flex max-w-[207px] flex-1 place-items-center justify-center rounded-2xl bg-white px-4 py-6 font-jakarta font-bold text-gray-500">
        Your Safety is utmost important to us
      </div>
      <div className="flex items-center justify-center px-6">
        <img src="/img/soc-compliant-1.png" />
        <img src="/img/vector.png" />
      </div>
    </div>
  );
}

function Status() {
  return (
    <Link
      href="https://status.dyte.io"
      className="flex items-center gap-2 rounded-lg border border-transparent p-1 px-2 font-jakarta font-semibold text-gray-500 transition-colors hover:border-gray-400 hover:bg-white hover:no-underline"
      target="_blank"
    >
      <div className="h-4 w-4 rounded-full bg-[#2DB002]"></div>
      <div>All systems operational</div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex items-center justify-between">
          <img src="/logo/light.svg" alt="Dyte" className="h-12" />

          <Safety />
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <div>
            <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
              Product
            </h3>
            <div className="flex flex-col gap-3">
              {products.map(({ name, href }) => (
                <Link href={href} className="text-base text-gray-700">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
              Developers
            </h3>
            <div className="flex flex-col gap-3">
              {developers.map(({ name, href }) => (
                <Link href={href} className="text-base text-gray-700">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
              Usecases
            </h3>
            <div className="flex flex-col gap-3">
              {usecases.map(({ name, href }) => (
                <Link href={href} className="text-base text-gray-700">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {company.map(({ name, href }) => (
                <Link href={href} className="text-base text-gray-700">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400">
              Compare
            </h3>
            <div className="flex flex-col gap-3">
              {comparisons.map(({ name, href }) => (
                <Link href={href} className="text-base text-gray-700">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-12 !bg-gray-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <Status />

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/dyte-io"
              aria-label="Dyte's GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://linkedin.com/company/dyteio"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
              <Twitter className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://youtube.com/company/dyteio"
              aria-label="Dyte YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link className="text-inherit hover:text-black hover:underline">
              Privacy Policy
            </Link>
            &bull;
            <Link className="text-inherit hover:text-black hover:underline">
              Terms of Service
            </Link>
            &bull;
            <Link className="text-inherit hover:text-black hover:underline">
              Website Terms of Use
            </Link>
            &bull;
            <span className="text-inherit">
              &copy; {new Date().getFullYear()} Dyte Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <ThemedImage
            sources={{ light: '/logo/light.svg', dark: '/logo/dark.svg' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://community.dyte.io" aria-label="Discord community">
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/dyte_io" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link
            href="https://linkedin.com/company/dyteio"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Dyte since 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
