import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import Link from '@docusaurus/Link';
import { MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/outline';
import { Discord, Github } from '@styled-icons/boxicons-logos';
import Logo from '../components/Logo';

const ThemeSwitcher = () => {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  return (
    <button
      className="w-10 h-10 p-2 cursor-pointer text-text-100"
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
  return (
    <button
      className="flex items-center justify-between lg:w-full lg:max-w-xs h-12 px-4 py-2 text-text bg-background-200 rounded-md"
      onClick={() => {}}
    >
      <div className="flex items-center space-x-3">
        <SearchIcon className="w-6 h-6" />
        <span className="hidden md:block">Search</span>
      </div>
    </button>
  );
};

export default function Navbar() {
  return (
    <header className="relative flex items-center justify-between px-4 py-2 z-10 bg-background border-b !border-border">
      <div className="flex items-center space-x-8 font-medium">
        <Link to="/" className="flex">
          <Logo />
        </Link>

        <div className="hidden lg:flex space-x-4 text-text-100">
          <Link
            to="/docs/guides/introduction"
            className="text-sm text-current hover:no-underline"
          >
            Guides
          </Link>
          <Link
            to="/react/quickstart"
            className="text-sm text-current hover:no-underline"
          >
            Client SDK
          </Link>
          <Link to="/api" className="text-sm text-current hover:no-underline">
            API Reference
          </Link>
          <a
            href="https://dev.dyte.in"
            target="_blank"
            className="text-sm text-current hover:no-underline"
          >
            Developer Portal
          </a>
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
            <Discord className="w-full h-full text-text-100" />
          </a>

          <a
            href="https://github.com/dyte-in"
            target="_blank"
            className="w-12 h-12 p-2"
          >
            <Github className="w-full h-full text-text-100" />
          </a>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
