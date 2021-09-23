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
                GitHub
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
      className="flex items-center justify-between md:w-full md:max-w-[12rem] h-9 px-2 py-2 text-text bg-background-200 rounded-[4px] cursor-pointer"
      onClick={() => {}}
    >
      <div className="flex items-center space-x-2">
        <SearchIcon className="w-5 h-5 text-text-100" />
        <span className="hidden md:block text-sm">Search</span>
      </div>
      <div className="hidden lg:flex items-center space-x-1">
        <kbd className="text-text font-sans border-none bg-background-300 outline-none text-sm shadow-none">
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

        <kbd className="w-6 text-text font-sans border-none bg-background-300 outline-none text-sm shadow-none">
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
      <header className="relative flex h-14 items-center justify-between px-6 lg:px-4 py-2 z-10 bg-background border-b !border-border">
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

          <div className="hidden lg:flex space-x-6 text-text-100">
            <Link
              to="/docs/guides/introduction"
              className={clsx(
                'text-sm hover:no-underline font-medium',
                page === 'guides' ? '!text-primary' : 'text-text-100'
              )}
            >
              Guides
            </Link>
            <Link
              to="/react/quickstart"
              className={clsx(
                'text-sm hover:no-underline font-medium',
                page === 'sdk' ? 'text-primary' : 'text-text-100'
              )}
            >
              Client SDK
            </Link>
            <Link
              to="/api"
              className={clsx(
                'text-sm hover:no-underline font-medium',
                page === 'api' ? 'text-primary' : 'text-text-100'
              )}
            >
              API Reference
            </Link>

            <Link
              className="flex items-center text-sm text-text-100 hover:no-underline font-medium"
              href="https://github.com/dyte-in"
            >
              <Github className="h-5 mr-1" aria-hidden={true} />
              GitHub
            </Link>

            <Link
              className="flex items-center text-sm text-text-100 hover:no-underline font-medium"
              href="https://discord.com/invite/pxRcdNufvk"
            >
              <svg
                viewBox="0 0 28 22"
                className="h-4 mr-1 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden={true}
              >
                <path d="M17.967 0c-.278.497-.525 1.01-.741 1.537a20.488 20.488 0 0 0-6.401 0A14.164 14.164 0 0 0 10.085 0c-1.998.341-3.94.953-5.773 1.817A24.22 24.22 0 0 0 .12 18.015a23.2 23.2 0 0 0 7.085 3.62 18.01 18.01 0 0 0 1.552-2.432 13.48 13.48 0 0 1-2.39-1.16c.207-.138.404-.293.587-.462a16.296 16.296 0 0 0 14.143 0c.196.168.392.322.587.462-.76.46-1.56.853-2.39 1.174.433.87.938 1.702 1.51 2.487a22.977 22.977 0 0 0 7.072-3.62 24.066 24.066 0 0 0-4.193-16.197A22.487 22.487 0 0 0 17.967 0ZM9.386 14.745a2.712 2.712 0 0 1-2.516-2.796 2.697 2.697 0 0 1 2.516-2.795A2.697 2.697 0 0 1 11.9 11.95a2.697 2.697 0 0 1-2.515 2.796Zm9.28 0a2.712 2.712 0 0 1-2.516-2.796 2.698 2.698 0 0 1 2.515-2.795 2.684 2.684 0 0 1 2.516 2.795 2.684 2.684 0 0 1-2.516 2.796Z" />
              </svg>
              Community
            </Link>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <SearchButton />

          <div className="hidden lg:flex items-center">
            <Link
              href="https://dev.dyte.in"
              target="_blank"
              className="flex items-center h-9 ml-4 bg-primary text-white px-4 text-sm font-bold rounded-[4px] hover:no-underline hover:text-white"
            >
              Login/Sign Up
            </Link>
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
