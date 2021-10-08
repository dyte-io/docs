import React from 'react';
import Link from '@docusaurus/Link';

import DyteLogo from './DyteLogo';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { BlogIcon } from '../assets/icons';

export default function Footer(props) {
  return (
    <footer className="lg:px-12 py-6 bg-background-100">
      <div className="flex flex-col items-start w-full max-w-6xl p-4 md:px-12 mx-auto">
        <div className="flex flex-col items-start space-y-4">
          <Link href="https://dyte.io">
            <DyteLogo className="h-10" />
          </Link>
          <p className="text-sm text-text-100 leading-relaxed">
            Dyte aims to be a gamechanger in the space of real-time audio/video
            SDKs. We build ready to use, high quality SDKs which can be adapted
            in any way imaginable to suit a use-case. That means, 1-1 calls,
            recording, webinars, livestreams can all be personalised and
            delivered with a variety of options to enhance user and developer
            experience! The goal is to reimagine what can be achieved with these
            APIs and continue to push the envelope, going above and beyond.
            We're looking for inventive minds to join us on this journey to
            build the new.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-8">
          <div className="flex-1 flex flex-col items-start">
            <div className="w-full flex flex-col items-start space-y-2">
              <p className="m-0 text-sm">
                Signup to get 10,000 minutes free every month!
              </p>
              <form
                method="GET"
                action="https://dev.dyte.in/signup"
                target="_blank"
                className="flex items-center w-full md:max-w-sm"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 h-10 px-3 pr-24 bg-background-100 text-text text-sm border border-border rounded-md focus:outline-none focus:ring-0 focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-20 h-8 ml-[-84px] bg-primary text-white rounded-md cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
            </div>

            <div className="flex items-center mt-8 space-x-3 text-text-100">
              <Link
                href="https://twitter.com/dyte_io"
                className="inline-flex text-current hover:text-primary transition"
              >
                <Twitter className="h-8" />
              </Link>
              <Link
                href="https://blog.dyte.io"
                className="inline-flex text-current hover:text-primary transition"
              >
                <BlogIcon className="h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dyteio"
                className="inline-flex text-current hover:text-primary transition"
              >
                <Linkedin className="h-8" />
              </Link>
              <Link
                href="https://github.com/dyte-in"
                className="inline-flex text-current hover:text-primary transition"
              >
                <Github className="h-8" />
              </Link>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-0">
            <div className="space-y-2">
              <div className="font-normal text-sm text-text-100">Product</div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <Link
                    href="https://app.dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dev.dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Developer Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.io/#pricing"
                    className="text-current hover:no-underline"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-normal text-sm text-text-100">Company</div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <Link
                    href="https://dyte.io"
                    className="text-current hover:no-underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.freshteam.com/jobs"
                    className="text-current hover:no-underline dot-after"
                  >
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.io/privacy-policy.html"
                    className="text-current hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-normal text-sm text-text-100">Resources</div>
              <ul className="space-y-2 text-sm list-none p-0">
                <li>
                  <Link to="/" className="text-current hover:no-underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.dyte.io"
                    className="text-current hover:no-underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://community.dyte.io"
                    className="text-current hover:no-underline dot-after"
                  >
                    Community
                  </Link>
                </li>
                {/* <li>
                  <a href="#" className="text-current hover:no-underline">
                    API Status
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 text-sm text-center text-text-100">
          Copyright © Dyte since 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
