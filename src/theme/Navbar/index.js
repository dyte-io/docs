import React from 'react';
import Link from '@docusaurus/Link';
import useIsBrowser from '@docusaurus/useIsBrowser';
import bowser from 'bowser';
import clsx from 'clsx';

import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import { Discord, Github } from '@styled-icons/boxicons-logos';

import Logo from '@site/src/components/Logo';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';

const getOS = (userAgent) => {
  return bowser.parse(userAgent).os.name ?? '';
};

const SearchButton = () => {
  const isBrowser = useIsBrowser();
  const os = isBrowser ? getOS(window.navigator.userAgent) : 'Windows';

  return (
    <button
      className="flex items-center justify-between md:w-full md:max-w-[12rem] h-10 px-2 lg:px-4 py-2 text-text bg-background-200 rounded-md cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex items-center space-x-2">
        <SearchIcon className="w-6 h-6 text-text-100" />
        <span className="hidden md:block text-sm">Search</span>
      </div>
      <div className="hidden lg:flex items-center space-x-1">
        <kbd className="w-6 font-sans bg-transparent border border-gray-600 outline-none text-sm shadow-none">
          {os === 'macOS' ? (
            <abbr title="Command" className="no-underline">
              ⌘
            </abbr>
          ) : (
            <abbr title="Control" className="no-underline">
              Ctrl
            </abbr>
          )}
        </kbd>

        <kbd className="w-6 font-sans bg-transparent border border-gray-600 outline-none text-sm shadow-none">
          K
        </kbd>
      </div>
    </button>
  );
};

const getPage = () => {
  const [, doc] = window.location.pathname.split('/');

  switch (doc) {
    case 'api':
      return 'api';
    case 'docs':
      return 'guides';
    case 'react':
    case 'flutter':
      return 'sdk';
    default:
      return null;
  }
};

/**
 * Contains the Navbar and the ThemeSwitcher
 */
export default function Navbar() {
  const isBrowser = useIsBrowser();
  const page = isBrowser ? getPage() : null;

  return (
    <header className="relative flex items-center justify-between px-4 py-2 z-10 bg-background border-b !border-border">
      <div className="flex items-center space-x-10 font-medium">
        <div className="flex items-center space-x-2">
          <button onClick={() => {}} className="lg:hidden bg-transparent">
            <MenuIcon className="h-6 text-text-100" />
          </button>

          <Link to="/" className="flex">
            <Logo />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-4 text-text-100">
          <Link
            to="/docs/guides/introduction"
            className={clsx(
              'text-sm text-text hover:no-underline',
              page === 'guides' && 'text-primary'
            )}
          >
            Guides
          </Link>
          <Link
            to="/react/quickstart"
            className={clsx(
              'text-sm text-text hover:no-underline',
              page === 'sdk' && 'text-primary'
            )}
          >
            Client SDK
          </Link>
          <Link
            to="/api"
            className={clsx(
              'text-sm text-text hover:no-underline',
              page === 'api' && 'text-primary'
            )}
          >
            API Reference
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-end space-x-4">
        <SearchButton />

        <div className="hidden lg:flex items-center">
          <a
            href="https://discord.com/invite/pxRcdNufvk"
            target="_blank"
            className="w-12 h-12 p-2"
          >
            <Discord className="w-full h-full text-text-100 hover:text-primary" />
          </a>

          <a
            href="https://github.com/dyte-in"
            target="_blank"
            className="w-12 h-12 p-2"
          >
            <Github className="w-full h-full text-text-100 hover:text-primary" />
          </a>

          <a
            href="https://dev.dyte.in"
            target="_blank"
            className="ml-4 bg-primary text-white px-4 py-2 text-xs font-bold rounded-md hover:no-underline hover:text-white"
          >
            Login/Sign Up
          </a>
        </div>
      </div>
      <ThemeSwitcher />
    </header>
  );
}
