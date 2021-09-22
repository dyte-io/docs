/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import {
  useThemeConfig,
  useMobileSecondaryMenuRenderer,
  usePrevious,
  useHistoryPopHandler,
} from '@docusaurus/theme-common';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useWindowSize from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import IconCloseThin from '@theme/IconCloseThin';
import styles from './styles.module.css'; // retrocompatible with v1

import Link from '@docusaurus/Link';
import Logo from '@site/src/components/Logo';

import useIsBrowser from '@docusaurus/useIsBrowser';
import bowser from 'bowser';

import { SearchIcon, MenuIcon } from '@heroicons/react/outline';
import { Discord, Github } from '@styled-icons/boxicons-logos';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
} // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function useMobileSidebar() {
  const windowSize = useWindowSize(); // Mobile sidebar not visible on hydration: can avoid SSR rendering

  const shouldRender = windowSize === 'mobile'; // || windowSize === 'ssr';

  const [shown, setShown] = useState(false); // Close mobile sidebar on navigation pop
  // Most likely firing when using the Android back button (but not only)

  useHistoryPopHandler(() => {
    if (shown) {
      setShown(false); // Should we prevent the navigation here?
      // See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
      // return false; // prevent pop navigation
    }

    return undefined;
  });
  const toggle = useCallback(() => {
    setShown((s) => !s);
  }, []);
  useEffect(() => {
    if (windowSize === 'desktop') {
      setShown(false);
    }
  }, [windowSize]);
  return {
    shouldRender,
    toggle,
    shown,
  };
}

function useColorModeToggle() {
  const {
    colorMode: { disableSwitch },
  } = useThemeConfig();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme]
  );
  return {
    isDarkTheme,
    toggle,
    disabled: disableSwitch,
  };
}

function useSecondaryMenu({ sidebarShown, toggleSidebar }) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  });
  const previousContent = usePrevious(content);
  const [shown, setShown] = useState(() => {
    // /!\ content is set with useEffect,
    // so it's not available on mount anyway
    // "return !!content" => always returns false
    return false;
  }); // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!

  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;

    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);
  const hasContent = !!content; // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)

  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }

    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);
  const hide = useCallback(() => {
    setShown(false);
  }, []);
  return {
    shown,
    hide,
    content,
  };
}

function NavbarMobileSidebar({ sidebarShown, toggleSidebar }) {
  useLockBodyScroll(sidebarShown);
  const items = useNavbarItems();
  const colorModeToggle = useColorModeToggle();
  const secondaryMenu = useSecondaryMenu({
    sidebarShown,
    toggleSidebar,
  });
  return (
    <div className="navbar-sidebar">
      <div className="navbar-sidebar__brand">
        <Logo className="h-6" />
        {!colorModeToggle.disabled && (
          <Toggle
            className={styles.navbarSidebarToggle}
            checked={colorModeToggle.isDarkTheme}
            onChange={colorModeToggle.toggle}
          />
        )}
        <button
          type="button"
          className="clean-btn navbar-sidebar__close"
          onClick={toggleSidebar}
        >
          <IconCloseThin
            width={20}
            height={20}
            className={styles.navbarSidebarCloseSvg}
          />
        </button>
      </div>

      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenu.shown,
        })}
      >
        <div className="navbar-sidebar__item menu">
          <ul className="menu__list">
            {items.map((item, i) => (
              <NavbarItem mobile {...item} onClick={toggleSidebar} key={i} />
            ))}
            <li className="menu__list-item">
              <Link
                href="https://discord.com/invite/pxRcdNufvk"
                className="menu__link"
              >
                Community
              </Link>
            </li>
            <li className="menu__list-item">
              <Link href="https://github.com/dyte-in" className="menu__link">
                Examples
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-sidebar__item menu">
          {items.length > 0 && (
            <button
              type="button"
              className="clean-btn navbar-sidebar__back"
              onClick={secondaryMenu.hide}
            >
              <Translate
                id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
                description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"
              >
                ← Back to main menu
              </Translate>
            </button>
          )}
          {secondaryMenu.content}
        </div>
      </div>
    </div>
  );
}

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
        <kbd className="w-6 text-text-100 font-sans bg-transparent border border-gray-600 outline-none text-sm shadow-none">
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

        <kbd className="w-6 text-text-100 font-sans bg-transparent border border-gray-600 outline-none text-sm shadow-none">
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

function Navbar() {
  const mobileSidebar = useMobileSidebar();

  const isBrowser = useIsBrowser();
  const page = isBrowser ? getPage() : null;

  return (
    <nav
      className={clsx(
        'relative',
        mobileSidebar.shown && 'navbar-sidebar--show'
      )}
    >
      <header className="relative flex items-center justify-between px-4 py-2 z-10 bg-background border-b !border-border">
        <div className="flex items-center space-x-10 font-medium">
          <div className="flex items-center space-x-2">
            <button
              onClick={mobileSidebar.toggle}
              className="lg:hidden bg-transparent"
            >
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
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={mobileSidebar.toggle}
      />
      {mobileSidebar.shouldRender && (
        <NavbarMobileSidebar
          sidebarShown={mobileSidebar.shown}
          toggleSidebar={mobileSidebar.toggle}
        />
      )}
    </nav>
  );
}

export default Navbar;
