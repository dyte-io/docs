import React, { useState } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import Link from '@docusaurus/Link';
import { parse as parseBrowser } from 'bowser';
import clsx from 'clsx';
import { MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/outline';
import { Discord, Github } from '@styled-icons/boxicons-logos';

import Logo from '@site/src/components/Logo';

const ThemeSwitcher = () => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  return (
    <button
      className="fixed bottom-20 right-4 lg:bottom-4 w-12 h-12 p-2 cursor-pointer text-gray-100 hover:text-white transition bg-primary rounded-full shadow-md hover:shadow-xl"
      onClick={() => {
        isDarkTheme ? setLightTheme() : setDarkTheme();
      }}
    >
      {isDarkTheme && <SunIcon className="w-full h-full text-current" />}
      {!isDarkTheme && <MoonIcon className="w-full h-full text-current" />}
    </button>
  );
};

const SearchButton = () => {
  const {
    os: { name: os },
  } = parseBrowser(window.navigator.userAgent);

  return (
    <button
      className="flex items-center justify-between lg:w-full lg:max-w-[16rem] h-10 px-4 py-2 text-text bg-background-200 rounded-md cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex items-center space-x-2">
        <SearchIcon className="w-6 h-6" />
        <span className="hidden md:block text-sm">Search</span>
      </div>
      <div className="hidden lg:flex items-center space-x-1 ">
        <kbd>
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
        <kbd>K</kbd>
      </div>
    </button>
  );
};

const getPage = () => {
  const { pathname } = window.location;

  if (pathname === '/api') {
    return 'api';
  } else if (pathname.startsWith('/docs/guides')) {
    return 'guides';
  }

  const [, doc] = pathname.split('/');

  if (['react', 'flutter'].includes(doc)) {
    return 'sdk';
  } else return null;
};

/**
 * Contains the Navbar and the ThemeSwitcher
 */
export default function Navbar() {
  const page = getPage();

  console.log(page);

  return (
    <div>
      <header className="relative flex items-center justify-between px-4 py-2 z-10 bg-background border-b !border-border">
        <div className="flex items-center space-x-10 font-medium">
          <Link to="/" className="flex">
            <Logo />
          </Link>

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
      </header>
      <ThemeSwitcher />
    </div>
  );
}
