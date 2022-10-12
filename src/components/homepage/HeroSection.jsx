import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="py-16 px-4 lg:py-24 noise-bg">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl lg:text-6xl font-bold">
            Build with Dyte
          </h1>
          <p className="lg:max-w-lg text-text-400 text-sm lg:text-base">
            At Dyte, we&apos;re building the future of real-time communication.
            Integrate high-quality, programmable, and customizable live video
            and voice into your web, mobile, and desktop applications with just
            a few lines of code.
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Start building
            </Link>
            <Link
              href="/how-dyte-works"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              How Dyte Works
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={`/static/landing-page/hero-${colorMode}.png`}
            alt="Preview of using Dyte SDKs"
          />
        </div>
      </div>
    </section>
  );
}
